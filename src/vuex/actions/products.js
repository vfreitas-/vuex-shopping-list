import ProductService from '_services/product';

import * as mutations from './../mutation-types';

export const getAllProducts = ({ dispatch }) => {
    dispatch(mutations.TOGGLE_LOADER, true);
    ProductService.all().then(products => {
        dispatch(mutations.RECEIVE_PRODUCTS, products);
        dispatch(mutations.TOGGLE_LOADER, false);
    });
};

export const getFilteredProducts = ({ dispatch }, field, value) => {
    dispatch(mutations.TOGGLE_LOADER, true);
    ProductService.filter(field, value).then(products => {
        dispatch(mutations.RECEIVE_PRODUCTS, products);
        dispatch(mutations.TOGGLE_LOADER, false);
    });
};

export const searchByTerm = ({ dispatch, state }, term) => {
    dispatch(mutations.TOGGLE_LOADER, true);
    ProductService.search(term, state.products.list).then(products => {
        dispatch(mutations.RECEIVE_PRODUCTS, products);
        dispatch(mutations.TOGGLE_LOADER, false);
    });
};
