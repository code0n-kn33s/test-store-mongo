async function populateDB() {
    for (let i = 0; i < 10; i++) {
        let product = new Product({
            _id: 'product' + i,
            title: 'Product ' + i,
            price: i * 10,
            quantity: i * 5
        });
        await product.save();
    }

    for (let i = 0; i < 3; i++) {
        let profile = new Profile({
            _id: 'profile' + i,
            first_name: 'First' + i,
            last_name: 'Last' + i,
            email: 'user' + i + '@example.com'
        });
        await profile.save();
    }
}

export default populateDB;

