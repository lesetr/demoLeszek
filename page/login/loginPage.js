var demoCommands = {
  signInAsAdmin: function () {
    this.api.pause(500);
    return this
      .waitForElementVisible('@emailField', 10000, 'Login field visible')
      .setValue('@emailField', '')
      .setValue('@passwordField', '')
      .click('@submitButton')
      .waitForElementVisible('@logoutButton', 5000, "User Logged in");
  },
  signInAsPMuser: function () {
    this.api.pause(500);
    return this
      .waitForElementVisible('@emailField', 10000, 'Login field visible')
      .setValue('@emailField', '')
      .setValue('@passwordField', '')
      .click('@submitButton')
      .waitForElementVisible('@moreModule', 5000, "User Logged in");
  },
  typeWrongPassword: function () {
    this.api.pause(500);
    return this
      .waitForElementVisible('@emailField', 1000, 'Login field visible')
      .setValue('@emailField', '')
      .setValue('@passwordField', 'wrongPassword')
      .click('@submitButton')
      .waitForElementVisible('@wrongPasswordAlert', 5000, 'Alert');
  },
  logOutAdminUser: function () {

    this.api.pause(500);
    return this
      .waitForElementVisible('@logoutButton', 1000, 'Logout button is visible', )
      .click('@logoutButton')
      .waitForElementVisible('@submitButton', 1000, 'Login menu is visible')
      .assert.visible('@submitButton', 'Assert Login menu');

  }
}

module.exports = {
  url: '',
  commands: [demoCommands],
  elements: {
    emailField: {
      selector: 'input[type=email]',
    },
    passwordField: {
      selector: 'input[type=password]',
    },
    submitButton: {
      selector: "input[type=submit]"
    },
    logoutButton: {
      selector: "a[href='/logout']"
    },
    wrongPasswordAlert: {
      selector: "//span[.='There was as a problem processing your request. Please try again']",
      locateStrategy: 'xpath'
    },
    moreModule: {
      selector: "li.header__list-settings.false",
    },
  }
};