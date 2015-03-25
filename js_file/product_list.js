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
    function show_store_list(){
        var html = '';
        html = html +'<tr class="list_header"><td id="h1">分类</td><td id="h2">名称</td><td id="h3">单价(元)</td><td id="h4">单位</td><td id="h5"></td>';
        for(var i in store_list){
            var btn_id = i.toString();
            html = html +'<tr>';
            var items = store_list[i];
            html = html + '<td>'+items.classify+'</td><td>'+items.name+'</td><td>'+items.price+'</td><td>'+items.unit+'</td><td>'+'<button id='+btn_id+' type="button" onclick="addShoppingCart()">加入购物车</button></td>';
            html = html + '</tr>';
        }
       $('#add_table').html(html);
    }

function addShoppingCart(){
    var btn_id = parseInt(event.srcElement.id,0);
    var cart_item = store_list[btn_id];
    cart_item.count = 1;
    //console.log(cart_item.name);
    var arr_cart_list = JSON.parse(localStorage.getItem('cart_list'))||[];
    if(arr_cart_list.length == 0){
        arr_cart_list.push(cart_item);
        console.log("first");
    }
    else{
        for(var i = 0; i < arr_cart_list.length; i ++){
            if(arr_cart_list[i].barcode == cart_item.barcode){
                arr_cart_list[i].count ++;
                console.log("++");
                break;
            }
            else if(arr_cart_list[i].barcode != cart_item.barcode && i == arr_cart_list.length-1){
                arr_cart_list.push(cart_item);
                console.log("push");
            }
        }
    }
    localStorage.setItem('cart_list', JSON.stringify(arr_cart_list));
}


//$("add_commodity").click(function(){
//    $("p").slideToggle();
//});
//function addCartNum()
//{
//    $('#add_table').find('button').on('click',function()
//    {
//        var name=$(this).closest('tr').find('td').eq(1).text();
//        addNum(name);
//        refreshCart();
//    })
//}
//function addNum(item)
//{
//    var lists = JSON.parse(localStorage.lists );
//    lists[item] = parseInt(lists[item])+1;
//    localStorage.lists = JSON.stringify(lists);
//}
//function refreshCart()
//{
//    var lists = JSON.parse(localStorage.lists );
//    var num = 0;
//    _(lists).each(function(list)
//    {
//        num = list+num;
//    });
//    $('#tableHead').find('#cartNumber').text(num);
//}
//localStorage.setItem('a',2);
//localStorage.removeItem('a');
