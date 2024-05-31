// add_ua.js

// Quantumult X rewrite script to add a User-Agent header to requests
const ua = "pan.baidu.com";

// Modify the request headers
let headers = $request.headers;
headers['User-Agent'] = ua;

$done({ headers });
