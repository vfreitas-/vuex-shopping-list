import ProductService from '_services/product';

import mutations from './../../mutation-types';
console.log(mutations);
export const getAllProducts = ({ dispatch }) => {
    ProductService.all().then(products => {
        dispatch(mutations.RECEIVE_PRODUCTS, products);
    });
};

export const getFilteredProducts = ({ dispatch }, field, value) => {
    ProductService.filter(field, value).then(products => {
        dispatch(mutations.RECEIVE_PRODUCTS, products);
    });
};

export const searchByTerm = ({ dispatch }, term) => {
    ProductService.search(term).then(products => {
        dispatch(mutations.RECEIVE_PRODUCTS, products);
    });
};
