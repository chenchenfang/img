// Quantumult X Script
/**
[rewrite_local]
http://110.40.42.172:8848/apptov5/v1/user/login?__platform=ios&sign=* url script-response-body https://raw.githubusercontent.com/chenchenfang/img/main/jocy_login_1.js

[mitm]
hostname = 110.40.42.172
*/
const body = $response.body;
let obj = JSON.parse(body);

if (obj.data && obj.data.user_info && obj.data.user_info.group) {
    obj.data.user_info.group.group_id = 3;
    obj.data.user_info.group.group_name = "VIP";
}

$done({body: JSON.stringify(obj)});
