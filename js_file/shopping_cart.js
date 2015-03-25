
var cartList = JSON.parse(localStorage.getItem('cart_list'));
function getShoppingList(){
    var html = '';
    html = html +'<tr><td id="h1">分类</td><td id="h2">名称</td><td id="h3">单价(元)</td><td id="h4">单位</td><td id="h5">数量</td><td id="h6">小计</td>';
    for(var i in cartList){
        html = html +'<tr>';
        var items = cartList[i];
        html = html + '<td>'+items.classify+'</td><td>'+items.name+'</td><td>'+items.price+'</td><td>'+items.unit+'</td><td>'+items.count+'</td><td></td>';
        html = html + '</tr>';

    }
    $('#add_table').html(html);
}