sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("demofiori.project1.controller.View2", {

        onInit: function () {

            let oData = {
                employees: []
            };

            // let oModel = new sap.ui.model.json.JSONModel(oData); //alerady defined in sap.ui.define --- IGNORE ---
            let oModel = new JSONModel(oData);

            this.getView().setModel(oModel, "employeeModel");

        },

        onSubmit: function () {

            //  alert("Submit Clicked"); //for testing 

            let sName = this.byId("idName").getValue();
            let sEmail = this.byId("idEmail").getValue();
            let sDept = this.byId("idDept").getValue();
            let sSalary = this.byId("idSalary").getValue();

            let oModel = this.getView().getModel("employeeModel");

            let aEmployees = oModel.getProperty("/employees");

            aEmployees.push({
                name: sName,
                email: sEmail,
                department: sDept,
                salary: sSalary
            });

            oModel.setProperty("/employees", aEmployees);
            // oModel.refresh();
            

            this.byId("idName").setValue("");
            this.byId("idEmail").setValue("");
            this.byId("idDept").setValue("");
            this.byId("idSalary").setValue("");

        }

    });
});