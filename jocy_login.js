// Quantumult X Script
/**
[rewrite_local]
# 添加 URL 重写规则，用于匹配需要修改的接口
http://110.40.42.172:8848/apptov5/v1/user/login?__platform=ios&sign=* script-response-body https://raw.githubusercontent.com/chenchenfang/img/main/jocy_login.js

[mitm]
# 确保你已经启用了 MitM 并且信任了 Quantumult X 的证书
hostname = 110.40.42.172
*/
const body = $response.body;
let obj = JSON.parse(body);

if (obj.data && obj.data.user_info && obj.data.user_info.group) {
    obj.data.user_info.group.group_id = 3;
    obj.data.user_info.group.group_name = "VIP";
}

$done({body: JSON.stringify(obj)});
