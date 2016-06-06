import faker from 'faker/locale/en_US';

let products = []
  , categories = new Set()
  , variations = new Set()
  , prices = new Set();

for (let i of Array(20).keys()) {
    let p = {
        name: faker.commerce.productName(),
        image: faker.image.food(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
        variation: faker.commerce.color()
    };

    categories.add(p.category);
    variations.add(p.variation);
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
