require("./product_data.js");

var num_products = 5;

var item_num = 1;

while(item_num <= (.5 * num_products) ){
        console.log(`${item_num}.   ${eval('name' + item_num)}`);
        item_num++;
}
console.log("that's enough!");

/*if(item_num <= (.5 * num_products)) {
console.log();
}
*/
