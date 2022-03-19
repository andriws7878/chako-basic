// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "chakoapp/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"

    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel 
     */

], function (UIComponent, Models, ResourceModel) {
    'use strict';

    return UIComponent.extend("chakoapp.SAPUI5.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {
            //call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // Set data model on the view
            this.setModel(Models.createRecipient());

            // Set i18n model on the view
            var i18nModel = new ResourceModel({ bundleName: "chakoapp.SAPUI5.i18n.i18n" });
            this.setModel(i18nModel, "i18n");
        }
    });

});