sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "demofiori/project1/formatter/formatter"
], function (
    Controller,
    Fragment,
    formatter
) {

    "use strict";

    return Controller.extend(
        "demofiori.project1.controller.View4",
        {

            formatter: formatter,

            
            // Lifecycle Hooks
            

            onInit: async function () {

                console.log(
                    "View4 Initialized"
                );


                this._oTable =
                    await Fragment.load({

                        name:
                        "demofiori.project1.fragment.EmployeeTable",

                        controller: this

                    });

                this.byId(
                    "tableContainer"
                ).addItem(
                    this._oTable
                );

                // Load List Fragment

                this._oList =
                    await Fragment.load({

                        name:
                        "demofiori.project1.fragment.EmployeeList",

                        controller: this

                    });

                this.byId(
                    "listContainer"
                ).addItem(
                    this._oList
                );

            },

            onBeforeRendering: function () {

                console.log(
                    "Before Rendering"
                );

            },

            onAfterRendering: function () {

                console.log(
                    "After Rendering"
                );

            },

            
            // Radio Button Visibility
            

            onViewChange: function (
                oEvent
            ) {

                let iIndex =
                    oEvent.getParameter(
                        "selectedIndex"
                    );

                let oModel =
                    this.getOwnerComponent()
                        .getModel(
                            "employeeModel2"
                        );

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

            
            // Add Employee
            

            onAdd: function () {

                let oModel =
                    this.getOwnerComponent()
                        .getModel(
                            "employeeModel2"
                        );

                let aEmployee =
                    oModel.getProperty(
                        "/Employee"
                    );

                let oFormData =
                    oModel.getProperty(
                        "/formData"
                    );

                aEmployee.push({

                    name:
                        oFormData.name,

                    role:
                        oFormData.role,

                    status:
                        oFormData.status,

                    joiningDate:
                        oFormData.joiningDate,

                    department:
                        oFormData.department,

                    salary:
                        oFormData.salary

                });

                oModel.setProperty(
                    "/Employee",
                    aEmployee
                );

                // Clear Form

                oModel.setProperty(
                    "/formData",
                    {

                        name: "",
                        role: "",
                        status: "",
                        joiningDate: "",
                        department: "",
                        salary: ""

                    }
                );

            },

           
            // Delete Employee
            

            onDelete: function (
                oEvent
            ) {

                let oModel =
                    this.getOwnerComponent()
                        .getModel(
                            "employeeModel2"
                        );

                let aEmployee =
                    oModel.getProperty(
                        "/Employee"
                    );

                let sPath =
                    oEvent.getSource()
                        .getBindingContext(
                            "employeeModel2"
                        )
                        .getPath();

                let iIndex =
                    parseInt(
                        sPath.split(
                            "/"
                        )[2]
                    );

                aEmployee.splice(
                    iIndex,
                    1
                );

                oModel.setProperty(
                    "/Employee",
                    aEmployee
                );

            },

            
            // Update Employee
            

            onUpdate: async function ( //Loading a fragment takes some time. So we make the function async to use await.
                oEvent
            ) {

                let oModel =
                    this.getOwnerComponent()
                        .getModel(
                            "employeeModel2"
                        );

                let oContext =
                    oEvent.getSource()
                        .getBindingContext(
                            "employeeModel2"
                        );

                let oEmployee =
                    oContext.getObject();

                this._sUpdatePath =
                    oContext.getPath();

                // Load selected row
                // into formData

                oModel.setProperty(
                    "/formData",
                    Object.assign(
                        {},
                        oEmployee
                    )
                );

                if (
                    !this._oDialog
                ) {

                    this._oDialog =
                        await Fragment.load({

                            name:
                            "demofiori.project1.fragment.EmployeeDialog",

                            controller:
                            this

                        });

                    this.getView() //connect dailog with current view
                        .addDependent(
                            this._oDialog
                        );

                }

                this._oDialog.open(); //show deail 

            },

            
            // Save Update
            

            onSaveUpdate:
                function () {

                let oModel =
                    this.getOwnerComponent()
                        .getModel(
                            "employeeModel2"
                        );

                let oUpdatedData =
                    oModel.getProperty(
                        "/formData"
                    );

                oModel.setProperty(

                    this._sUpdatePath,

                    Object.assign(
                        {},
                        oUpdatedData
                    )

                );

                this._oDialog.close();

            },

            
            // Close Dialog
            

            onCloseDialog:
                function () {

                this._oDialog.close();

            },

            
            // Popover
            

            openPopover:
                async function (
                    oEvent
                ) {

                if (
                    !this._oPopover
                ) {

                    this._oPopover =
                        await Fragment.load({

                            name:
                            "demofiori.project1.fragment.EmployeePopover",

                            controller:
                            this

                        });

                    this.getView()
                        .addDependent(
                            this._oPopover
                        );

                }

                this._oPopover.openBy(
                    oEvent.getSource()
                );

            }

        }

    );

});