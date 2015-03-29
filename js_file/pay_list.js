
var cartList = JSON.parse(localStorage.getItem('cart_list'));
var freeCartList = JSON.parse(localStorage.getItem('cart_list'));
function showPayShoppingList(){
    var html = '';
    html = html +'<tr><td id="h1">分类</td><td id="h2">名称</td><td id="h3">单价(元)</td><td id="h4">单位</td><td id="h5">数量</td><td id="h6">小计</td>';
    for(var i in cartList){
        html = html +'<tr>';
        var items = cartList[i];
        html = html + '<td>'+items.classify+'</td><td>'+items.name+'</td><td>'+items.price+'</td><td>'+items.unit+'</td><td>'+items.count+'</div></td><td>('+items.count*items.price+'元)</td>';
        html = html + '</tr>';

    }
    var free_html = '';
    free_html = free_html +'<tr>';
    for(var i in freeCartList){
        free_html = free_html +'<tr>';
        var items = freeCartList[i];
        free_html = free_html + '<td>'+items.classify+'</td><td>'+items.name+'</td><td>'+items.freeCount+'</td><td>';
        free_html = free_html + '</tr>';

    }

    $('#add_table').html(html);
    $('.free_product_list').html(free_html);
}
