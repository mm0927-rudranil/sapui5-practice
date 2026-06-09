sap.ui.define([
    "sap/ui/core/UIComponent",
    "demofiori/project1/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("demofiori.project1.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            var oData = {
                name: "Rudra",
                // Employee: [
                //     {
                //         name: "Employee 1",
                //         role: "Developer",
                //         type: "Active"
                //     },
                // ]    
            };

            var oModel = new sap.ui.model.json.JSONModel(oData);

            this.setModel(oModel, "employeeModel");
            
            // this.setModel(oModel, "companyModel");
            // set the device model
            this.setModel(models.createDeviceModel(), "device");
            this.setModel(models.createEmployeeModel(), "employeeModel2");

            // enable routing
            this.getRouter().initialize();
        }
    });
});