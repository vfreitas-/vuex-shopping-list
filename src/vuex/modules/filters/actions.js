import ProductService from '_services/product';

import * as mutations from './../../mutation-types';

export const updateFilters = ({ dispatch }, field, prop, enabled) => {
    dispatch(mutations.FILTER_CHANGED, field, prop, enabled);
};
