/**
 * Created by candy on 15-3-29.
 */
    function test(){
var cart_list = JSON.parse(localStorage.getItem('cart_list'));
var cartNum = 0;
for(var i in cart_list){
    cartNum += cart_list[i].count;

}
        $('#span_test').text("购物车"+"("+cartNum+")")


}