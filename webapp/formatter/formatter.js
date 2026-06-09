sap.ui.define([], function () {

    "use strict";

    return {

        // nameFormatter: function (sName) {

        //     if (sName && sName.length > 0) {
        //         return true;
        //     } else {
        //         return false;
        //     }

        // }

        formatDate: function (sDate) {

            if (!sDate) {
                return "";
            }

            let oDate = new Date(sDate);

            return oDate.toLocaleDateString("en-GB");

        }

    };

});