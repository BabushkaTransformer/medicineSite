import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import DatePicker from "react-datepicker";
import moment from "moment";
import 'react-phone-input-2/lib/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import {useRouter} from "next/router";
import { getMonth, getYear } from "date-fns"

import MainLayout from "../../layouts/MainLayout"
import ProfileSidebar from "../../components/sidebar/profileSiderbar"
import PhoneField from "../../components/phoneInput"
import ArrowIcon from "../../public/icons/arrow-white.svg";
import UserAvatar from '../../public/icons/user-avatar.svg';
import InfoModal from "../../components/modals/infoModal";
import styles from '../../styles/profile/profile.module.scss';
import { connectContext } from "../../store";
import {changeUserData, changeUserPhoto, deleteUserPhoto} from "../../store/user/actions";
import { objectToQuery, months } from "../../utils";


const Profile = ({ dispatch, user }) => {
  const [phoneCountry, setPhoneCountry] = React.useState('');
  const [inputData, setInputData] = React.useState({});
  const datePickerRef = React.useRef(null);
  const [requestSuccess, setRequestSuccess] = React.useState(null);
  const router = useRouter();

  const handlePhoneChange = (phone, country) => {
    setInputData({ ...inputData, phone });
    setPhoneCountry(country.countryCode);
  };

  const handleChange = ({ target: { name, value } }) => {
    setInputData({ ...inputData, [name]: value });
  };

  const handleAvatarChange = ({ target: { name, files }}) => {
    setInputData({
      [name]: files[0],
    });
  };

  const years = (start, end) => {
    const yearsArray = [];
    for (let i = end; i > start; i--) {
      yearsArray.push(i);
    }
    return yearsArray;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!inputData.phone) {
      if (inputData.profile_photo) {
        const formData = new FormData();
        for (let key in inputData) {
          formData.append(key, inputData[key]);
        }
        const res = await changeUserPhoto(dispatch, { id: user._id, formData });

        setRequestSuccess(res.success);
      } else {
        const res = await changeUserData(dispatch, { id: user._id, ...inputData });
        setRequestSuccess(res.success);
      }
    } else {
      router.push(`/change-phone?${objectToQuery(inputData)}`);
    }
  };

  const isSubmitDisabled = React.useCallback(() => {
    // [TODO] ???????? ???? ????????????????, ?????? ?????????????? ??????????????
    return (
      user.firstname === inputData.firstname &&
      user.lastname === inputData.lastname &&
      user.date_of_birth === inputData.date_of_birth &&
        !Object.keys(inputData.profile_photo || {}).length &&
      !inputData.phone?.length
    )
  }, [inputData, user]);

  const deletePhoto = () => {
    deleteUserPhoto(dispatch, user._id, user.profile_photo.filename);
  };

  React.useEffect(() => {
    if (user) {
      const { firstname, lastname, date_of_birth } = user;
      setInputData({
        firstname,
        lastname,
        date_of_birth,
      });
    }
  }, [user]);

  React.useEffect(() => {
    if (datePickerRef.current && datePickerRef.current.input) {
      datePickerRef.current.input.readOnly = true;
    }
  }, [datePickerRef]);

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/"><a>??????????????</a></Link> / ??????????????
          </div>
          <div className={styles.content}>

            <ProfileSidebar />

            <div className={styles.profileWrapper}>
              <h3>??????????????</h3>
              <div className={styles.profileData}>
                <form action="#" onSubmit={handleSubmit}>
                  <div className={styles.avatarWrapper}>
                    <div className={styles.avatar}>
                      <Image
                        width={'100%'}
                        height={'100%'}
                        src={
                          user.profile_photo?.filename ?
                            //TODO change baseUrl to server url
                            `http:localhost:8080/api/user/${user._id}/profile/photo${user.profile_photo.filename}`
                            : UserAvatar}
                        alt="avatar"
                      />
                    </div>
                    <input name="profile_photo" type="file" id="avatar-file" onChange={handleAvatarChange} />
                    <div>
                      <label htmlFor="avatar-file">
                        {Object.keys(user.profile_photo || {}).length ? '?????????????? ' : '?????????????????? '}
                        ????????????
                      </label>
                      {
                        Object.keys(user.profile_photo || {}).length ? (
                          <button onClick={deletePhoto} className={styles.deleteBtn}>??????????????</button>
                        ): null
                      }
                    </div>
                  </div>
                  <div className={styles.changeData}>
                    <h4>?????? ?? ?????? ?????????????????????</h4>

                    <div className={styles.formItem}>
                      <input
                        type="text"
                        placeholder="??????"
                        name="firstname"
                        value={inputData.firstname || ''}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.formItem}>
                      <input
                        type="text"
                        placeholder="??????????????"
                        name="lastname"
                        onChange={handleChange}
                        value={inputData.lastname || ''}
                      />
                    </div>

                    <div className={styles.formItem}>
                      <div className={styles.dateInputWrapper}>
                        <DatePicker
                          selected={inputData.date_of_birth}
                          onChange={date_of_birth => setInputData({
                            ...inputData,
                            date_of_birth: moment(date_of_birth).format('YYYY-MM-DD')
                          })}
                          ref={datePickerRef}
                          locale={'ru'}
                          placeholderText="???????? ????????????????"
                          dropdownMode={'select'}
                          renderCustomHeader={({
                            date, changeYear, changeMonth,
                            decreaseMonth, increaseMonth,
                            prevMonthDisabled,
                            nextMonthDisabled
                          }) => (
                            <div>
                              <div className={styles.dateHeader}>
                                <button onClick={decreaseMonth}
                                  disabled={prevMonthDisabled}>
                                  <Image src={ArrowIcon} alt="arrow" />
                                </button>
                                <select
                                  value={getYear(date)}
                                  onChange={({ target: { value } }) => changeYear(value)}
                                >
                                  {years(1940, new Date().getFullYear())
                                    .map((year, i) => (
                                      <option value={year} key={i}>
                                        {year}
                                      </option>
                                    ))}
                                </select>
                                <select
                                  value={months[getMonth(date)]}
                                  onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
                                >
                                  {months.map((month, i) => (
                                    <option value={month} key={i}>{month}</option>
                                  ))}
                                </select>
                                <button
                                  onClick={increaseMonth}
                                  disabled={nextMonthDisabled}
                                >
                                  <Image src={ArrowIcon} alt="arrow" />
                                </button>
                              </div>
                            </div>
                          )}
                        />
                      </div>
                    </div>
                    <div className={styles.formItem}>
                      <PhoneField
                        handleChange={handlePhoneChange}
                        isError={false}
                      />
                    </div>
                    <button disabled={isSubmitDisabled()} className={styles.formBtn}>??????????????????</button>

                  </div>
                </form>
                <div className={styles.qrCodeWrapper}>
                  <div className={styles.qrCode}>

                  </div>
                  <div className={styles.points}>
                    <span>{user.bonus || 0}</span>
                    <span>?????????????????????? ????????????</span>
                  </div>
                  {
                    requestSuccess !== null ? (
                      <div className={styles.successModal}>
                        <InfoModal
                          success={requestSuccess}
                          closeModal={() => setRequestSuccess(null)}
                          text={requestSuccess ? '??????????????!' : '????????????!'}
                        />
                      </div>
                    ) : null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default connectContext(Profile, ({ user: { info } }) => ({
  user: info.data || {},
}));
