import * as React from "react";
import Image from "next/image";
import cs from "classnames";
import PhoneField from "../phoneInput";
import InfoModal from "./infoModal";
import ButtonLoader from "../loader/buttonLoader";
import ClipIcon from '../../public/icons/clip.svg';
import styles from '../../styles/modals/modal.module.scss';
import { modalsRequest, useValidate } from "../../utils";


const Wholesalers = ({ closeModal, showModal }) => {
  const [inputData, setInputData] = React.useState({});
  const [phoneCountry, setPhoneCountry] = React.useState('');
  const [inputErrors, setInputErrors] = React.useState([]);
  const [resSuccess, setResSuccess] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const {
    displayInputError,
    displayErrorName,
    inputErrorClassname,
    wholesalersSchema,
  } = useValidate(phoneCountry);

  const handleChange = ({ target: { name, value } }) => {
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handlePhoneChange = (phone, country) => {
    setInputData({ ...inputData, phone });
    setPhoneCountry(country.countryCode);
  };

  const handleFileChange = ({ target: { name, files } }) => {
    setInputData({
      ...inputData,
      [name]: files[0],
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validateError = await wholesalersSchema(inputData);
    setInputErrors(validateError);
    if (!validateError.length) {
      setLoading(true);
      const formData = new FormData();

      for (let key in inputData) {
        formData.append(key, inputData[key]);
      }

      const res  = await modalsRequest('/api/utcar', formData, true);

      setResSuccess(res);
      setLoading(false);
    }
  };

  const wrapperClasses = React.useCallback(() => {
    return cs({
      [styles.wrapper]: true,
      [styles.activeWrapper]: showModal === 'wholesalers',
    })
  }, [showModal]);

  React.useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'auto';
    }
  }, []);

  return (
    <div className={wrapperClasses()}>
      <div className={styles.content}>
        {
          !Object.keys(resSuccess).length ? (
            <React.Fragment>
              <h4>??????????????????</h4>
              <p className={styles.text}>
                ???????????????? ???????? ???????????? ?????? ?????????????????????? ?????????????????????? ?????????????? ?????? ???? ??????????.
                ?? ???????? &quot;???????????????????? ????????&quot; ????????????????????
                ?????????????????????????? ?????? ???????????????? ?????????? ??????????????????????.
              </p>
              <form action="#" onSubmit={handleSubmit}>
                <div className={styles.formItem}>
                  {displayErrorName(inputErrors, 'name', '??????')}
                  <input
                    className={inputErrorClassname(inputErrors, 'name')}
                    type="text"
                    placeholder="??????"
                    name="name"
                    onChange={handleChange}
                  />
                  {displayInputError(inputErrors, 'name')}
                </div>
                <div className={styles.formItem}>
                  {displayErrorName(inputErrors, 'phone', '?????????? ????????????????')}
                  <PhoneField
                    handleChange={handlePhoneChange}
                    isError={inputErrors.some(err => err.path === 'phone')}
                  />
                  {displayInputError(inputErrors, 'phone')}
                </div>
                <div className={styles.formItem}>
                  {displayErrorName(inputErrors, 'license', '????????')}
                  <label htmlFor="file" className={inputErrorClassname(inputErrors, 'license')}>
                    <span>{inputData.license ? inputData.license.name : '???????????????????? ????????'}</span>
                    <Image src={ClipIcon} alt="clip"/>
                  </label>
                  {displayInputError(inputErrors, 'license')}
                </div>
                <input
                  type="file"
                  name="license"
                  id="file"
                  onChange={handleFileChange}
                />
                <button>{ loading ? <ButtonLoader /> : '??????????????????' }</button>
              </form>
              <button
                className={styles.close}
                onClick={closeModal}
              >
                ??????????????
              </button>
            </React.Fragment>
          ) : (
            <InfoModal
              success={resSuccess.success}
              text={resSuccess.success ? '??????????????' : '?????????????????? ????????????'}
              isLink={false}
              closeModal={closeModal}
            />
          )
        }
      </div>
    </div>
  );
};

export default Wholesalers;