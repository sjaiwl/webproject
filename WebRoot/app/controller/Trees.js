/*
 * File: app/controller/Records.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.Trees', {
    extend: 'Ext.app.Controller',
    refs: [
           {
               ref: 'contentPanel',
               selector: '#contentPanel'
           },
           {
               ref: 'contentPanel1',
               selector: '#contentPanel1'
           },
           {
               ref: 'contentPanel2',
               selector: '#contentPanel2'
           },
           {
               ref: 'contentPanel3',
               selector: '#contentPanel3'
           },
           
       ],

    view1: function() {

        var contentPanel = this.getContentPanel(),	// Get detail panel via controller ref
            contentPanel1 = this.getContentPanel1();	// Get detail panel toolbar via controller ref
        // Update the detail panel with the selected row's data
        contentPanel.hide();
        // Show toolbar
        contentPanel1.show();

    },
    view2: function() {

        var contentPanel = this.getContentPanel(),	// Get detail panel via controller ref
            contentPanel2 = this.getContentPanel2();	// Get detail panel toolbar via controller ref
        // Update the detail panel with the selected row's data
        contentPanel.hide();
        // Show toolbar
        contentPanel2.show();

    },
    view3: function() {
          var contentPanel = this.getContentPanel(),	// Get detail panel via controller ref
            contentPanel3 = this.getContentPanel3();	// Get detail panel toolbar via controller ref
        contentPanel.hide();
        contentPanel3.show();

    },
    
    init: function(application) {
        this.control({
            "#menuPanel #node1": {
                click: this.view1
            },
            "#menuPanel #node2": {
                click: this.view2
            },
            "#menuPanel #node3": {
                click: this.view3
            },
        });
    }

});