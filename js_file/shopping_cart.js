/**
 * Created by candy on 15-3-20.
 */
function show_store_list() {





    for(var i in store_list)
        $("#add_table").dataTable().fnAddData(
            [store_list[i].classify,store_list[i].name,store_list[i].price,store_list[i].unit,
                "<button style='background-color: lightblue;font-size: 20px'>My button</button>"]);
}
$("button").click(function(){

});