var demoCommands = {
    createNewFacility: function (facilityName, sqFeet, facilityType, buildingNum, saveFacility = true, isTenantActive= false) {
        this.api.pause(500);
        this.newFacilityButton();
        this.setFacilityName(facilityName);
        this.setSqureFeetValue(sqFeet);
        this.facilityType(facilityType);
        this.buildingNumber(buildingNum)
        this.tenantCompliance(isTenantActive);
        if(saveFacility==true){
        this.facilitySaveButton()
        }
    },
    facilitiesModule: function () {
        this.api.pause(500);
        return this
            .waitForElementVisible('@facilitiesModule', 2000, 'Facilities module - visible')
            .click('@facilitiesModule');
    },
    facilitiesRecord: function () {
        this.api.pause(500);
        return this
            .waitForElementVisible('@facilitiesRecord', 2000, 'Facilities - visible')
            .click('@facilitiesRecord');
    },
    newFacilityButton: function () {
        this.api.pause(500);
        return this
            .waitForElementVisible('@newFacilityButton', 2000, "click  new facility button")
            .click('@newFacilityButton');
    },
    setFacilityName: function (facilityName) {
        this.api.pause(500);
        var today = new Date();
        valueDate = today.getMilliseconds();
        if (facilityName != undefined) {
            return this
                .waitForElementVisible('@facilityNameElement', 1000, 'Facility name - active')
                .setValue('@facilityNameElement', facilityName);
        }
        else {
            return this
                .waitForElementVisible('@facilityNameElement', 1000, 'Facility name - active')
                .setValue('@facilityNameElement', "Facility Name - auto " + valueDate);
        }
    },
    setSqureFeetValue: function (sqFeet) {
        this.api.pause(500);
        if (sqFeet != undefined) {
            return this
                .waitForElementVisible('@facilitySquareElement', 1000, 'Facility name - active')
                .setValue('@facilitySquareElement', sqFeet);
        }
        else {
            return this
                .waitForElementVisible('@facilitySquareElement', 1000, 'Facility square - active')
                .setValue('@facilitySquareElement', "999");
        }
    },
    facilityType: function (facilityTypeValue) {
        this.api.pause(500);
        if (facilityTypeValue == "industrial") {
            return this
                .waitForElementVisible('@industrialElement', 1000, 'Industrial element - active')
                .click('@industrialElement');
        }
        else if (facilityTypeValue == "mix") {
            return this
                .waitForElementVisible('@mixedUseElement', 1000, 'Mixed use - active')
                .click('@mixedUseElement');
        }
        else if (facilityTypeValue == "office") {
            return this
                .waitForElementVisible('@officeUseElement', 1000, 'Office - active')
                .click('@officeUseElement');
        }
        else if (facilityTypeValue == "retail") {
            return this
                .waitForElementVisible('@retailUseElement', 1000, 'Retail - active')
                .click('@retailUseElement');
        } else {
            return this
                .waitForElementVisible('@retailUseElement', 1000, 'Retail - auto - active')
                .click('@retailUseElement');
        }
    },
    buildingNumber: function(buildingNo){
        this.api.pause(500);
        if(buildingNo != undefined)
        return this
        .waitForElementVisible("@buildingNumber",3000, "building number")
        .setValue("@buildingNumber", buildingNo)
        else{
            return this
            .waitForElementVisible("@buildingNumber",3000, "building number")
            .setValue("@buildingNumber", "1")
        }
    },
    tenantCompliance: function (isTenantActive) {
        this.api.pause(500);
        if (isTenantActive == false) {
        }
        else {
            return this
            .waitForElementVisible('@checkboxTenant', 1000, 'tenant compliance - active')
            .click('@checkboxTenant');
        }
    },
    tenantValueComplianceIsUnchecked: function(browser){
        this.api.pause(500);
       // return this
        browser.expect.element("input[name='tc_enabled']").to.have.attribute('value')
        .which.equals("false");
    },
    facilitySaveButton: function () {
        this.api.pause(500);
        return this
            .click('@facilitySaveButton');
    },
    sendFile: function(){
        this.api.pause(500);
        return this
        .setValue('@dropZone', __dirname + '/resources/'+'logo.jpg')
    },
    openFacility: function (facilityName) {
        this.api.pause(500);
        if (facilityName != undefined) {
            var as = "a[href='/owner/facilities/" + facilityName + "/proposals']";
            return this
                .waitForElementVisible(as, 10000, as)
                .click(as);
        }
        else {
            return this
                .waitForElementVisible('@faciliteisRecord5350', 5000, "Click on first record in organization")
                .click('@faciliteisRecord5350');
        }
    }
}

module.exports = {
    commands: [demoCommands],
    elements: {
        facilitiesModule: "li.header__list-facilities.is-active",
        newFacilityButton: "button.btn.btn-add.btn-large.fill-parent",
        facilityNameElement: "input[placeholder='Facility Name']",
        facilitySquareElement: "input[name='sq_ft']",
        selectTypeDropDown: "select[name='type']",
        buildingNumber: "input[name='building_unit']",
        industrialElement: "option[value='INDUSTRIAL']",
        mixedUseElement: "option[value='MIXED_USE']",
        officeUseElement: "option[value='OFFICE']",
        retailUseElement: "option[value='RETAIL']",
        checkboxTenant: "label.db.checkbox>span",
        facilitySaveButton: "button[type='submit']",
        facilityRecordFirst: "div.dashboard__grid.col-sm-3.col-md-2:first",
        dropZone: "input[type='file']",
        facilitiesRecord: "a[href='/owner/facilities/140']",
        faciliteisRecord5350: "a[href='/owner/facilities/1421']",
    }
}