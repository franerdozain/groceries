const createGrocery = (() => {
    let lastId = 0;

    return (imgURL, groceryName, stock, price) => {
        lastId++;

        const groceries = {
            groceryId: lastId,
            imgURL,
            groceryName,
            stock,
            price,
        }

        return groceries;
    }

})();

const groceriesData = [
    createGrocery("https://cdn.shopify.com/s/files/1/0468/6852/9304/products/milk1_tara_180x.png?v=1637091771", "Milk", 5, 8.59),
    createGrocery("https://cdn.shopify.com/s/files/1/0468/6852/9304/products/BabybelCheese_180x.png?v=1637601999", "Cheese", 15, 26.90),
    createGrocery("https://cdn.shopify.com/s/files/1/0468/6852/9304/products/cafeelitenames_180x.png?v=1644349668", "Coffee", 8, 25.90),
    createGrocery("https://cdn.shopify.com/s/files/1/0468/6852/9304/products/pumpoernickelbread750g_180x.png?v=1638994258", "Bread", 4, 17.90),
    createGrocery("https://cdn.shopify.com/s/files/1/0468/6852/9304/products/Tomato_180x.png?v=1602867130", "Tomatto", 24, 8.90),
    createGrocery("https://cdn.shopify.com/s/files/1/0468/6852/9304/products/valiobutter200g_180x.png?v=1639003090", "Butter", 9, 14.90),
    createGrocery("https://cdn.shopify.com/s/files/1/0468/6852/9304/products/dafincholentmeat_180x.png?v=1639278095", "Meat", 2, 110.90)
]

export default groceriesData;