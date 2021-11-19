import React from 'react';
import styles from "../../styles/sales/salesItem.module.scss";
import SaleImage from "../../public/saleImage.png";
import {useRouter} from "next/router";


const SalesItem = ({_id}) => {
  const router = useRouter();

  const goToPromotion = id => {
    router.push(`/product/${id}`);
  };

  return (
    <div className={styles.salesItem} onClick={() => goToPromotion(_id)}>
      <img src={SaleImage.src} alt='sale'/>
    </div>
  );
};

export default SalesItem;
