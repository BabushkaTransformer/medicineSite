import constants from './constants';
import { get, objectToQuery } from '../../utils';


export const getProducts = async (dispatch, params = {}) => {
  dispatch({ type: constants.GET_PRODUCTS, loading: true });

  try {
    const data = await get(`/api/medicine?${objectToQuery(params)}`);

    dispatch({ type: constants.GET_PRODUCTS, data, loading: false });
    return { success: true, data };
  } catch (error) {

    dispatch({ type: constants.GET_PRODUCTS, error, loading: false });
    return { success: false, error };
  }
};

export const getCatalogProducts = async (dispatch, params = {}) => {
  dispatch({ type: constants.GET_CATALOG_PRODUCTS, loading: true });

  try {
    const data = await get(`/api/medicine?${objectToQuery(params)}`);

    dispatch({ type: constants.GET_CATALOG_PRODUCTS, data, loading: false });
    return { success: true, data };
  } catch (error) {

    dispatch({ type: constants.GET_CATALOG_PRODUCTS, error, loading: false });
    return { success: false, error };
  }
};

export const getProductsById = async id => {
  try {
    const data = await get(`/api/medicine/${id}`);

    return { success: true, data };
  } catch (error) {

    return { success: false, error };
  }
};

export const getSalesProducts = async (dispatch, params = {}) => {
  dispatch({ type: constants.GET_SALES_PRODUCTS, loading: true });

  try {
    const data = await get(`/api/medicine/onSales?${objectToQuery(params)}`);

    dispatch({ type: constants.GET_SALES_PRODUCTS, data, loading: false });
    return { success: true, data };
  } catch (error) {

    dispatch({ type: constants.GET_SALES_PRODUCTS, error, loading: false });
    return { success: false, error };
  }
};

export const getTopProducts = async (dispatch, params = {}) => {
  dispatch({ type: constants.GET_TOP_PRODUCTS, loading: true });

  try {
    const data = await get(`/api/medicine/topSelling?${objectToQuery(params)}`);

    dispatch({ type: constants.GET_TOP_PRODUCTS, data, loading: false });
    return { success: true, data };
  } catch (error) {

    dispatch({ type: constants.GET_TOP_PRODUCTS, error, loading: false });
    return { success: false, error };
  }
};
