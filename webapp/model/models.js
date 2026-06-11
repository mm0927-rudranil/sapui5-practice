sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
    function (JSONModel, Device) {
        "use strict";

        return {
            /**
             * Provides runtime information for the device the UI5 app is running on as a JSONModel.
             * @returns {sap.ui.model.json.JSONModel} The device model.
             */
            // createDeviceModel: function () {
            //     var oModel = new JSONModel(Device);
            //     oModel.setDefaultBindingMode("OneWay");
            //     return oModel;
            // },
            // createEmployeeModel: function () {

            //     let oData = {

            //         // name: "Rudra",

            //         // Employee: [

            //         //     {
            //         //         name: "Rudranil Guchhait",
            //         //         role: "Developer",
            //         //         type: "Active"
            //         //     },

            //         //     {
            //         //         name: "Employee 2",
            //         //         role: "Designer",
            //         //         type: "Inactive"
            //         //     },

            //         //     {
            //         //         name: "Employee 3",
            //         //         role: "Manager",
            //         //         type: "Active"
            //         //     }

            //         // ]


            //         tableVisible: true,
            //         listVisible: false,

            //         Employee: [

            //             {
            //                 name: "Rudranil Guchhait",
            //                 role: "Developer",
            //                 status: "Active",
            //                 joiningDate: "2022-01-15",
            //                 department: "IT",
            //                 salary: "50000"
            //             },

            //             {
            //                 name: "Munmun Guchhait",
            //                 role: "Designer",
            //                 status: "Inactive",
            //                 joiningDate: "2022-05-15",
            //                 department: "HR",
            //                 salary: "45000"
            //             },

            //             {
            //                 name: "Ritwik Guchhait",
            //                 role: "Manager",
            //                 status: "Active",
            //                 joiningDate: "2022-07-15",
            //                 department: "Finance",
            //                 salary: "70000"
            //             }

            //         ]
            //     };

            //     let oModel = new JSONModel(oData);

            //     return oModel;
            // }


            createDeviceModel: function () {

                var oModel = new JSONModel(Device);

                oModel.setDefaultBindingMode("OneWay");

                return oModel;

            },

            createEmployeeModel: function () {

                let oData = {

                    tableVisible: true,

                    listVisible: false,

                    formData: {

                        name: "",
                        role: "",
                        status: "",
                        joiningDate: "",
                        department: "",
                        salary: ""

                    },

                    Employee: [

                        {
                            name: "Rudranil",
                            role: "Developer",
                            status: "Active",
                            joiningDate: "2024-01-15",
                            department: "IT",
                            salary: "50000"
                        },

                        {
                            name: "Employee 2",
                            role: "Designer",
                            status: "Inactive",
                            joiningDate: "2024-02-20",
                            department: "HR",
                            salary: "40000"
                        }

                    ]

                };

                return new JSONModel(oData);

            }


        };

    });