// Quantumult X Script
/**
[rewrite_local]
 url script-response-body https://raw.githubusercontent.com/chenchenfang/img/main/jouy_get.js

[mitm]
hostname = 110.40.42.172
*/
const body = $response.body;
let obj = JSON.parse(body);

if (obj.data && obj.data.user_info && obj.data.user_info.group) {
  obj.data.user_info.group_id = 3;
    obj.data.user_info.group.group_id = 3;
    obj.data.user_info.group.group_name = "VIP";
}
if(obj.data && obj.data.get_function_switch){
    obj.data.get_function_switch.group_id = 3;
}
  


$done({body: JSON.stringify(obj)});
