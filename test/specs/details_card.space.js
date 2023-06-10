const LoginPage = require('../pageObject/login.page')
const Cart = require('../pageObject/cart.page')
describe('Login on my application', () => {
    before('Before Test Start',async()=>{
        await LoginPage.open()
        await LoginPage.login('sayma1st1@gmail.com', 'Sayma@1230')
    })
    it('View Product Details', async () => {
        await (await $('=Products')).click()
        await (await $('=Steam Train')).click()
    })
    it('Add to Cart',async()=>{
        const addCart = await $('#addToCart')
        const cartStatus = await $('#addToCart')
        await addCart.click()
        const status = await cartStatus.getText()
        expect(status).toHaveTextContaining('1');
    })
    it('Go to Cart',async()=>{
        await Cart.open()
        let title = await browser.getTitle()
        expect(title).toHaveTextContaining('Cart');
    })
})
