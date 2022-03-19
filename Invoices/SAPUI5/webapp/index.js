// @ts-nocheck
sap.ui.define([
    "sap/ui/core/ComponentContainer"
],
    /**
     * 
     * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer 
     */
    function (ComponentContainer) {
        "use strict";
        new ComponentContainer({
            name: "chakoapp.SAPUI5",
            settings: {
                id: "SAPUI5"
            },
            async: true
        }).placeAt("content");
    });