require("./product_data.js");

var num_products = 5;

for(var item_num = 1; eval("typeof name"+item_num) != 'undefined'; item_num++) {  

    if( ( item_num >= (.25 * num_products) ) && ( item_num <=(.75*num_products) ) ) {
        console.log(`${eval('name' +  item_num)} Sold out :(`);
        
        continue;
}
        console.log(`${item_num}.  ${eval('name' + item_num)}`);
       item_num++;
}

console.log("that's all we have");