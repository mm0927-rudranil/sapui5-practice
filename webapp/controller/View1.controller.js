sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "demofiori/project1/formatter/formatter",
    "sap/m/MessageToast"
    

], (Controller, formatter) => {
    "use strict";

    return Controller.extend("demofiori.project1.controller.View1", {

        formatter: formatter,

        onInit() {

            

            // Model defination in a controler
            let oData = {
                name: "Rudra",
                status: "Active",
                state: true,
                output: "",
                Employee: [
                    {
                        name: "Employee 1",
                        role: "Developer",
                        type: "Active",
                        joindate: "2022-01-15"
                    },

                    {
                        name: "Employee 2",
                        role: "Designer",
                        type: "Inactive",
                        joindate: "2022-05-15"
                    },

                     {
                        name: "Employee 3",
                        role: "Manager",
                        type: "Active",
                        joindate: "2022-07-15"
                    }

                ]
            }

            let oModel = new sap.ui.model.json.JSONModel(oData);

            this.getView().setModel(oModel, "employeeModel");
            console.log(this.getView().getModel("employeeModel").getData());

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

            
        }
    });
});