// Quantumult X Script

const body = $response.body;
let obj = JSON.parse(body);

if (obj.data && obj.data.user_info && obj.data.user_info.group) {
    obj.data.user_info.group.group_id = 3;
    obj.data.user_info.group.group_name = "VIP";
}

$done({body: JSON.stringify(obj)});
