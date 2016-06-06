import mock from './mock/products';

export default new class ProductService
{
    constructor () {
        this.timeout = 800;
    }

    all () {
        return this._run(mock.products);
    }

    search (term) {
        return this._run(mock.products.filter(obj => {
            return obj.name == term || obj.category == term;
        }));
    }

    filter (field, value) {
        return this._run(mock.products.filter(obj => {
            if (obj.hasOwnProperty(field)) {
                return obj[field] === value;
            }
        }));
    }

    getFilters () {
        return mock.filters;
    }

    _run (data) {
        return new Promise(
            (resolve, reject) => {
                setTimeout( () => {
                    resolve(data);
                }, this.timeout);
            }
        );
    }
}
