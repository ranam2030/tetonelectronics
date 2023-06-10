const Page = require('../pageObject/page');
class CartPage extends Page {

    open () {
        return super.open('cart');
    }
}
module.exports = new CartPage();
