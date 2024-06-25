// Quantumult X Script to modify group_id in the JSON response

/**
[rewrite_local]
^http:\/\/110\.40\.42\.172:8848\/apptov5\/v1\/config\/getFunctionSwitch\?.* url script-response-body https://raw.githubusercontent.com/chenchenfang/img/main/jocy_getFunctionSwitch1.js

[mitm]
hostname = 110.40.42.172
*/

    // Parse the response body
    let body = JSON.parse($response.body);
    body.data.group_id = 3

    // Stringify the modified body back to JSON
    $done({body: JSON.stringify(body)});
