/*
 * File: app/store/MenuStore.js
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

Ext.define('MyApp.store.MenuStore', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyTreeStore',
            root: {
                expanded: true,
                text: '管理目录 ',
                children: [
                    {
                        text: '用户管理',
                        expanded: true,
                        children: [
                            {
                                text: '用户信息',
                                leaf: true,
                            },
                        ]
                    },
                    {
                        text: '店铺管理',
                        expanded: true,
                        children: [
                            {
                                text: '店铺信息',
                                leaf: true,
                               
                            },
                        ]
                    },
                    {
                        text: '评论管理',
                        expanded: true,
                        children: [
                            {
                                text: '评论信息',
                                leaf: true,
                                
                            },
                        ]
                    }
                ]
            },
            fields: [
                {
                    name: 'text'
                }
            ]
        }, cfg)]);
    }
});