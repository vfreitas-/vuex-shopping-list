import mock from './mock/products';

export default new class ProductService
{
    constructor () {
        this.timeout = 800;
    }

    all () {
        return this._run(mock.products);
    }

    search (term, list) {
        let result = list.map(p => {
            console.log(p.name.toLowerCase().includes(term.toLowerCase()));
            p.show = p.name.toLowerCase().includes(term.toLowerCase());
            return p;
        });
        return this._run(result);
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
