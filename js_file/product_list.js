/*** Created by candy on 15-3-18.*/
function loadAllItems() {
    return [
        {
            classify:'饮料',
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            classify:'饮料',
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            classify:'水果',
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            classify:'水果',
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            classify:'生活用品',
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            classify:'食品',
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];
}
localStorage.setItem('allItems', JSON.stringify(loadAllItems()));
var store_list = JSON.parse(localStorage.getItem('allItems'));
function show_store_list() {
    for(var i in store_list)
        $("#add_table").dataTable().fnAddData(
            [store_list[i].classify,store_list[i].name,store_list[i].price,store_list[i].unit,
                "<button id='add_commodity ' style='background-color: lightblue;font-size: 20px'>My button</button>"]);
}
$("add_commodity").click(function(){
    $("p").slideToggle();
});