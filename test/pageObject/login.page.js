const Page = require('../pageObject/page');
class LoginPage extends Page {
    get inputEmail () {
        return $('[name="email"]');
    }

    get inputPassword () {
        return $('[name="password"]');
    }

    get btnLogin () {
        return $('button[type="submit"]');
    }
    async login (email, password) {
        await browser.pause(5000)
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
    open () {
        return super.open('login');
    }
}
module.exports = new LoginPage();
