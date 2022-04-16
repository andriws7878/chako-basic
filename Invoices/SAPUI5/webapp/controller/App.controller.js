// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";
        return Controller.extend("chakoapp.SAPUI5.controller.App", {
            
            onInit: function () {
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
            },

            onOpenDialogHeader: function(){
                this.getOwnerComponent().openHelloDialog();
            }
        });
    });