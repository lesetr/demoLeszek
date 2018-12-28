var today = new Date();
valueDate = today.getTime();
orgName = "Leszek - auto - " + valueDate;

var demoCommands = {
    createOrganization: function(organizationName){
       
        this.api.pause(500);
        this.createNewOrganizationButton();
        this.setOrganizationName(organizationName);
        this.sendFile();
        this.submitOrganization();
//        this.organizationNaviagate(orgName||organizationName);
    },
    organizationNaviagate: function (organizationName) {
       // this.api.pause(500);
        if (organizationName != undefined) {
            return this
                .waitForElementVisible("@organizationSearchField", 10000, 'Search filed - click')
                .setValue('@organizationSearchField', organizationName)
                .waitForElementVisible("ul.list-ul.mt1>li>a>h5", 10000, 'Organization - click')
                .click("ul.list-ul.mt1>li>a>h5")
        }
        else 
        {
            return this
                .waitForElementVisible("@organizationSearchField", 10000, 'Search filed - click')
                .setValue('@organizationSearchField', orgName)
                .useXpath()
                .waitForElementVisible("//h3[contains(.,'"+orgName+"')]", 10000, "//h3[contains(.,'"+orgName+"')]")
                .click("//h3[contains(.,'"+orgName+"')]")
        }
    },
    createNewOrganizationButton: function () {
        this.api.pause(500);
        return this
            .waitForElementVisible('@createOrganizationButton', 10000, 'Create organization button')
            .click('@createOrganizationButton')
    },
    setOrganizationName: function (organizationName) {
        this.api.pause(500);
      
        if (organizationName != undefined) {
            return this
                .waitForElementVisible('@organizationName', 1000, 'Organization name')
                .setValue('@organizationName', organizationName);
        }
        else {
            return this
                .waitForElementVisible('@organizationName', 10000, 'Organization name')
                .setValue('@organizationName', orgName);
        }
    },
    submitOrganization: function(){
        this.api.pause(500);
        return this
        .waitForElementVisible('@submitOrganization', 10000, 'Submit organization')
        .click('@submitOrganization')
        .waitForElementVisible("@organizationSearchField", 4000)
    },
    sendFile: function(){
        this.api.pause(500);
        
        return this
        .setValue('@dropZone', __dirname + '/resources/'+'logo.jpg')
    }
}
module.exports = {
    commands: [demoCommands],
    elements: {
        defaultOrganization: "ul.list-ul.mt1>*:first-child",
        organizationSearchField: "input.input.input-large.input-stroked.fill-parent",
        organizationRecord: "h3.type-body.type-heavy",
        createOrganizationButton: "button.btn.btn-add.btn-large",
        organizationName: "input[placeholder='Organization Name']",
        submitOrganization: "button[type='submit']",
        dropZone: "input[type='file']",

    }
}