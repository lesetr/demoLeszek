var demoCommands = {
    navigateRequestModule: function () {
        this.api.pause(500);
        return this
            .waitForElementVisible('@requestWorkModule', 1000, "Request Work - visible")
            .click('@requestWorkModule');
    },
    orgsNavigate: function () {
        this.api.pause(500);
        return this
            .waitForElementVisible('@orgs', 1000, "Click Orgs")
            .click('@orgs');
    },
    inventoryNavigate: function () {
        this.api.pause(500);
        return this
            .waitForElementVisible('@inventory', 1000, "Inventory")
            .click('@inventory');
    },
}

module.exports = {
    commands: [demoCommands],
    elements: {
        requestWorkModule: "li.header__list-work_request",
        orgs: "a[href='/admin/organizations']",
        inventory: "a[href='/admin/inventory']",
    }
};