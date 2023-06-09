const RegisterPage = require('../pageObject/register.page')

describe('Register Page', () => {
    it('should user register account with valid information', async () => {
        await RegisterPage.open()
        await RegisterPage.register('Sayma Nushin1','sayma1st1@gmail.com','1796763463','Sayma@1230')
        let title = await browser.getTitle()
        expect(title).toHaveTextContaining('product');
    })
})


