const Page = require('./page');
class RegisterPage extends Page {
    get inputFullName () {
        return $('[name="name"]');
    }
    get inputEmail() {
        return $('[name="email"]');
    }
    get inputMobile(){
        return $('[name="mobile"]');
    }
    get inputPassword () {
        return $('[name="password"]');
    }
    get btnRegister () {
        return $('button[type="submit"]');
    }
    async register (fullname,email,mobile, password) {
        await browser.pause(5000)
        await this.inputFullName.setValue(fullname);
        await this.inputEmail.setValue(email);
        await this.inputMobile.setValue(mobile);
        await this.inputPassword.setValue(password);
        await this.btnRegister.click();
    }
    open () {
        return super.open('register');
    }
}
module.exports = new RegisterPage();
