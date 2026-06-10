sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "demofiori/project1/formatter/formatter",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"


], (Controller, formatter, MessageToast, Fragment) => {
    "use strict";

    return Controller.extend("demofiori.project1.controller.View1", {

        formatter: formatter,

        onInit() {



            // Model defination in a controler
            // let oData = {
            // name: "Rudra",
            // status: "Active",
            // state: true,
            // output: "",
            // Employee: [
            //     {
            //         name: "Employee 1",
            //         role: "Developer",
            //         type: "Active",
            //         joindate: "2022-01-15"
            //     },

            //     {
            //         name: "Employee 2",
            //         role: "Designer",
            //         type: "Inactive",
            //         joindate: "2022-05-15"
            //     },

            //      {
            //         name: "Employee 3",
            //         role: "Manager",
            //         type: "Active",
            //         joindate: "2022-07-15"
            //     }

            // ]


            // }

            // let oModel = new sap.ui.model.json.JSONModel(oData);

            // this.getView().setModel(oModel, "employeeModel");

            let oData = {
                firstName: "Rudranil",
                lastName: "Guchhait",
                amount: 2001,
            }

            let oModel = new sap.ui.model.json.JSONModel(oData);

            this.getView().setModel(oModel, "uiModel");

            // console.log("1. onInit called");



            // console.log(this.getView().getModel("employeeModel").getData());

            // //Global Model- component.js
            // const oCompanyModel = this.getOwnerComponent().getModel("companyModel");
            // this.getView().setModel(oCompanyModel, "companyModel");



            // External JSON Model

            //             let oModel = new sap.ui.model.json.JSONModel();

            //             oModel.loadData("../model/employees.json");

            //             oModel.attachRequestCompleted(function () {
            //             console.log(oModel.getData());
            // });

            //             this.getView().setModel(oModel, "employeeModel");


            //Dynamic fragment loading

            // Fragment.load({
            //     name: "demofiori.project1.fragment.form",
            //     controller: this
            // }).then(function (oFragment) {

            //     this.byId("formContainer").addItem(oFragment);

            // }.bind(this));
        },

        // onSubmit: function () {
        //     alert("Submit button clicked!");
        // }

        onTextChange: function (oEvent) {

            let oInput = oEvent.getSource();
            let sValue = oInput.getValue();

            let oBtn = this.getView().byId("idCleBtn");

            if (sValue) {
                oBtn.setEnabled(true);
            } else {
                oBtn.setEnabled(false);
            }
        },

        onPressClear: function () {
            const oInput = this.getView().byId("inputName");
            oInput.setValue("");
            MessageToast.show("Input cleared!");
        },

        onItemPress: function (oEvent) {
            let oItem = oEvent.getSource();
            let sEmployeeTitle = oItem.getTitle();
            console.log("Employee Title: " + sEmployeeTitle);
        },

        // onPressSave: function () {
        //     const oList = this.getView().byId("employeeList");
        //     const oSelectedItem = oList.getSelectedItem();

        //     let sSelectedEmployee = oSelectedItem ? oSelectedItem.getTitle() : "No employee selected";

        //     sSelectedEmployee.foreach(function (oItem) {
        //         sSelectedEmployee += oItem.getTitle() + " ";
        //     });

        //     sSelectedEmployee = sSelectedEmployee.slice(0, -1);

        //     MessageToast.show("Selected Employee: " + sSelectedEmployee);
        // },

        onPressSave: function () {
            let model = this.getView().getModel("employeeModel2");
            let name = model.getProperty("/name");
            let oBundle = this.getView().getModel("i18n").getResourceBundle();
            let sMessage = oBundle.getText("saveMessage");
            MessageToast.show(sMessage + " " + name);


        },


        // Lifecycle hooks:

        // 1. onInit: Called when the controller is instantiated and its View controls (if available) are already created. Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.

        // 2. onBeforeRendering: Called before the controller's View is re-rendered (NOT before the first rendering! onInit() is used for that one!). Can be used to unbind event handlers and do other clean-up before the View is re-rendered.

        // 3. onAfterRendering: Called when the View has been rendered (so its HTML is part of the document). Can be used to manipulate the HTML after it has been rendered.

        // 4. onExit: Called when the Controller is 
        // destroyed. Use this one to free resources 
        // and finalize activities.


        // onBeforerending: function () {
        //     console.log("2. onBeforeRendering called");

        //     // this.byId("textName").$().css("color", "red"); //Not working because the control is not rendered yet
        // },

        // onAfterRendering: function () {
        //     console.log("3. onAfterRendering called");

        //     this.byId("textName").$().css("color", "red");
        // },


        onSubmit: function () {

            // let sFirstName = this.byId("idFirstName").getValue();
            // let sLastName = this.byId("idLastName").getValue();
            // let sAmount = this.byId("idAmount").getValue();

            // sap.m.MessageToast.show(
            //     sFirstName + " " +
            //     sLastName + " : " +
            //     sAmount
            // );

            MessageToast.show("Form submitted successfully!");

        },

        // openDialog: async function () {

        //     if (!this._oDialog) {

        //         this._oDialog = await Fragment.load({
        //             name: "demofiori.project1.fragment.form",
        //             controller: this
        //         });

        //         this.getView().addDependent(this._oDialog);
        //     }

        //     this._oDialog.open();
        // },

        onCancel: function () {
            this._oDialog.close();
        },

        openDialog: async function (oEvent) {

            if (!this._oPopover) {

                this._oPopover = await Fragment.load({
                    name: "demofiori.project1.fragment.popover",
                    controller: this
                });

                this.getView().addDependent(this._oPopover);
            }

            this._oPopover.openBy(oEvent.getSource());
        },
    });
});