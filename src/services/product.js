import mock from './mock/products';

export default new class ProductService
{
    constructor () {
        this.timeout = 800
    }

    all () {
        return this._run(mock.products)
    }

    search (term, list) {
        let result = list.filter(p => {
            return p.name.toLowerCase().includes(term.toLowerCase())
        })

        return this._run(result)
    }

    filter (field, value) {
        return this._run(mock.products.filter(obj => {
            if (obj.hasOwnProperty(field)) {
                return obj[field] === value
            }
        }))
    }

    getFilters () {
        return mock.filters
    }

    _run (data) {
        return new Promise(
            (resolve, reject) => {
                setTimeout( () => {
                    resolve(data)
                }, this.timeout)
            }
        );
    }
}
