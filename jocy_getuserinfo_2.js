/**
[rewrite_local]
# 拦截特定URL并执行本地脚本进行处理
^http:\/\/110\.40\.42\.172:8848\/apptov5\/v1\/user\/getUserInfo\?__platform=ios&sign=.*$ url script-response-body https://raw.githubusercontent.com/chenchenfang/img/main/jocy_getuserinfo_2.js

[mitm]
# 确保你已经启用了 MitM 并且信任了 Quantumult X 的证书
hostname = 110.40.42.172
*/

// 解析响应体
let body = $response.body;
let obj = JSON.parse(body);

// 修改需要的字段
obj.data.user_end_time = 2719286425;
obj.data.group_id = 3;
obj.data.group.group_id = 3;
obj.data.group.group_name = "VIP";


// 将修改后的对象转回字符串
body = JSON.stringify(obj);

// 返回修改后的响应体
$done({body});
