sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "demofiori/project1/formatter/formatter"
], (Controller, formatter) => {

    "use strict";

    return Controller.extend("demofiori.project1.controller.View3", {

        formatter: formatter,

        onViewChange: function (oEvent) {

            let iIndex =
                oEvent.getParameter("selectedIndex");

            let oModel =
                this.getOwnerComponent()
                    .getModel("employeeModel2");

            if (iIndex === 0) {

                oModel.setProperty(
                    "/tableVisible",
                    true
                );

                oModel.setProperty(
                    "/listVisible",
                    false
                );

            } else {

                oModel.setProperty(
                    "/tableVisible",
                    false
                );

                oModel.setProperty(
                    "/listVisible",
                    true
                );

            }

        },

        onAdd: function () {

            let oModel =
                this.getOwnerComponent()
                    .getModel("employeeModel2");

            let aEmployee =
                oModel.getProperty("/Employee");

            aEmployee.push({

                name:
                    this.byId("idName")
                        .getValue(),

                role:
                    this.byId("idRole")
                        .getValue(),

                status:
                    this.byId("idStatus")
                        .getSelectedKey(),

                joiningDate:
                    this.byId("idJoinDate")
                        .getValue(),

                department:
                    this.byId("idDepartment")
                        .getSelectedKey(),

                salary:
                    this.byId("idSalary")
                        .getValue()

            });

            oModel.setProperty(
                "/Employee",
                aEmployee
            );

        },

        onDelete: function (oEvent) {

            let oModel =
                this.getOwnerComponent()
                    .getModel("employeeModel2");

            let aEmployee =
                oModel.getProperty("/Employee");

            let sPath =
                oEvent.getSource()
                    .getBindingContext(
                        "employeeModel2"
                    )
                    .getPath();

            let iIndex =
                parseInt(
                    sPath.split("/")[2]
                );

            aEmployee.splice(
                iIndex,
                1
            );

            oModel.setProperty(
                "/Employee",
                aEmployee
            );

        }

    });

});