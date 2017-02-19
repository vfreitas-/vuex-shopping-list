import faker from 'faker/locale/en_US';

let products = []
  , categories = {}
  , variations = {}
  , prices = new Set();

for (let i of Array(20).keys()) {
    let p = {
        id: i + 1,
        name: faker.commerce.productName(),
        image: faker.image.sports() + '/?v=' + i,
        // image: faker.image.image(),
        price: parseFloat(faker.commerce.price()),
        category: faker.commerce.department(),
        variation: faker.commerce.color(),
        show: true
    };

    categories[p.category] = false;
    variations[p.variation] = false;
    prices.add(p.price);

    products.push(p);
}

let max_price = Math.max.apply(Math, Array.from(prices))
  , min_price = Math.min.apply(Math, Array.from(prices));

prices = [min_price, max_price];

export default {
    filters: {
        categories,
        variations,
        prices
    },
    products
};
