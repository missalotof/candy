
var cartList = JSON.parse(localStorage.getItem('new_cart_lists'));
var freeCartList = JSON.parse(localStorage.getItem('free_cart_lists'));
function showPayShoppingList(){
    var html = '';
    html = html +'<tr><td id="h1">分类</td><td id="h2">名称</td><td id="h3">单价(元)</td><td id="h4">单位</td><td id="h5">数量</td><td id="h6">小计</td>';
    var allSum = 0;
    var saveAllSum = 0;
    for(var i in cartList){
        html = html +'<tr>';
        var items = cartList[i];
        if(items.freecount !== -1){
            html = html + '<td>'+items.classify+'</td><td>'+items.name+'</td><td>'+items.price+'</td><td>'+items.unit+'</td><td>'+items.count+'</td><td>'+(items.count-items.freecount)*items.price+'元(原价：'+items.count*items.price+'元)</td>';
            html = html + '</tr>';

        }
        else if(items.freecount == -1){
            html = html + '<td>'+items.classify+'</td><td>'+items.name+'</td><td>'+items.price+'</td><td>'+items.unit+'</td><td>'+items.count+'</td><td>'+items.count*items.price+'元</td>';
            html = html + '</tr>';
        }
        allSum += items.count*items.price;

    }
    var free_html = '';
    free_html = free_html +'<tr><td id="h11">分类</td><td id="h22">名称</td><td id="h55">数量</td>';
    for(var i in freeCartList){
        free_html = free_html +'<tr>';
        var item = freeCartList[i];
        free_html = free_html + '<td>'+item.classify+'</td><td>'+item.name+'</td><td>'+item.freecount+'</td><td>';
        free_html = free_html + '</tr>';
        saveAllSum += item.freecount*item.price;

    }
    $('.all_sum').text('总计：' + allSum + '元');
    $('.save_sum').text('节省：' + saveAllSum + '元');
    $('#add_table').html(html);
    $('.free_product_list').html(free_html);

}
function all_remove(){
localStorage.clear();
    console.log('adshfsajkdfhkdsjfhalj');
    location.reload();
}
