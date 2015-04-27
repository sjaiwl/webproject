/*
 * File: app/view/MainView.js
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

Ext.define('MyApp.view.RecordView', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.Label',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.form.field.Date',
        'Ext.grid.column.Boolean',
        'Ext.form.field.Checkbox',
        'Ext.grid.plugin.RowEditing',
        'Ext.toolbar.Separator',
        'Ext.XTemplate',
        
    ],

    id: 'recordView',
    layout: 'fit',

    initComponent: function() {
        var me = this;
        var sm=new Ext.selection.CheckboxModel();
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    itemId: 'mainPanel',
                    resizable: false,
                    layout: 'border',
                    collapsed: false,
                    manageHeight: false,
                    title: '用户列表',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            itemId: 'mainToolbar',
                            items: [
                                {
                                    xtype: 'label'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'addButton',
                                    icon: 'resources/images/add.png',
                                    text: '增加记录'
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'gridpanel',
                            flex: 1,
                            region: 'west',
                            split: true,
                            border: '2 2 2 2',
                            id: '',
                            itemId: 'gridPanel',
                            width: 150,
                            resizable: false,
                            bodyBorder: true,
                            forceFit: true,
                            stripeRows:true,
                            store: 'Records',
                            selModel:sm,
                            multiSelect: true,
                            columns: [
                                new Ext.grid.RowNumberer(), 
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'id',
                                    text: '编号',
                                    format: '0'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'name',
                                    text: '用户姓名',
                                    editor: {
                                        xtype: 'textfield'
                                    }
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'sex',
                                    text: '性别',
                                    editor: {
                                        xtype: 'textfield'
                                    }
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'code',
                                    text: '密码',
                                    editor: {
                                        xtype: 'textfield'
                                    }
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'phone',
                                    text: '手机号',
                                    editor: {
                                        xtype: 'textfield'
                                    }
                                },
                                {
                                    xtype: 'datecolumn',
                                    dataIndex: 'date',
                                    format:'Y-m-d',
                                    text: '注册日期',                             
                                    editor: {
                                        xtype: 'datefield'
                                    }
                                },
                               
                            ],
                            viewConfig: {
                            	plugins:{
                            		ptype:'gridviewdragdrop'
                            	}                       	
                            },
                            bbar:new Ext.PagingToolbar({
                            	pageSize:5,
                            	store:'Records',
                            	displayInfo:true,
                            	//displayMsg:'显示第{0}条记录到{1}条记录，一共{2}条',
                            	emptyMsg:'没有记录',
                            	plugins:new Ext.ux.ProgressBarPager(),
                            }),
                           
                            plugins: [
                                Ext.create('Ext.grid.plugin.RowEditing', {

                                })
                            ]
                        },
                        {
                            xtype: 'panel',
                            flex: 1,
                            region: 'center',
                            split: true,
                            border: '2 2 2 2',
                            data: {
                                
                            },
                            itemId: 'detailsPanel',
                            tpl: [
                                '<tpl if="values.id">',
                                '    <h1>{name}</h1>',
                                '       <div style="font-size: 20px"><b>性别</b>: {sex}</div>',
                                '       <div style="font-size: 20px"><b>密码</b>: {code}</div>',
                                '       <div style="font-size: 20px"><b>电话号码</b>: {phone}</div>',
                                '       <div style="font-size: 20px"><b>注册日期</b>: {date}</div>',
                        
                                '</tpl>',
                                '',
                                '<tpl if="!values.id">',
                                '    <h1>请选择一条记录！</h1>',
                                '</tpl>'
                            ],
                            resizable: false,
                            layout: 'fit',
                            bodyBorder: true,
                            bodyPadding: '10 10 10 10',
                            manageHeight: false,
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    hidden: true,
                                    itemId: 'detailsToolbar',
                                    items: [
                                        {
                                            xtype: 'button',
                                            itemId: 'editButton',
                                            icon: 'resources/images/edit.png',
                                            text: '编辑'
                                        },
                                        {
                                            xtype: 'tbseparator'
                                        },
                                        {
                                            xtype: 'button',
                                            itemId: 'removeButton',
                                            icon: 'resources/images/delete.png',
                                            text: '删除',
                        
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });
       me.callParent(arguments);
    }
});