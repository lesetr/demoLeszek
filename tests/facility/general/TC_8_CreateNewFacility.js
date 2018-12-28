module.exports = {
    '@tags': ['TC8', 'facility', 'all'],
    'TC_8_CreateNewFacility': function (client) {
        var loginPage = client.page.login.loginPage();
        var generalModule = client.page.generalModule();
        var organizationPage = client.page.organizationPage();
        var facilityPage = client.page.facilities.facilitiesPage();

        var organizationName = "AMLI";
        loginPage.navigate().signInAsAdmin();
        generalModule.orgsNavigate();
        organizationPage.organizationNaviagate(organizationName);
        facilityPage.createNewFacility();
        client.end();
    }
}