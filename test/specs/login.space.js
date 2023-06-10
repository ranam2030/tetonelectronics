const LoginPage = require('../pageObject/login.page')
describe('Login on my application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('sayma1st1@gmail.com', 'Sayma@1230')
        let title = await browser.getTitle()
        expect(title).toHaveTextContaining('Home');
    })
    it('Scroll to End', async() => {
        await (await $('.footer-social')).scrollIntoView({behavior: "smooth"})
    })
})


