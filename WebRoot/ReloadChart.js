Ext.require('Ext.chart.*');
Ext.require(['Ext.layout.container.Fit', 'Ext.window.MessageBox']);

Ext.onReady(function () {

    var chart = Ext.create('Ext.chart.Chart', {
            animate: true,
            shadow: true,
            store: store1,
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['data1'],
                title: 'Hits',
                grid: true,
                minimum: 0,
                maximum: 100
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Months',
                label: {
                    rotate: {
                        degrees: 270
                    }
                }
            }],
            series: [{
                type: 'column',
                axis: 'left',
                gutter: 80,
                xField: 'name',
                yField: ['data1'],
                tips: {
                    trackMouse: true,
                    width: 74,
                    height: 43,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('name'));
                        this.update(storeItem.get('data1'));
                    }
                },
                style: {
                    fill: '#38B8BF'
                }
            }]
        });


    var panel1 = Ext.create('widget.panel', {
        width: 600,
        height: 260,
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: chart
    });
});
