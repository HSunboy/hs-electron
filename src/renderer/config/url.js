let url;

if (URLENV === "pro") {
    url = {
        member: "http://zkm.zktzbj.com"
    };
} else if (URLENV === "uat") {
    url = {
        member: "http://10.253.108.124:18807"
    };
} else {
    url = {
        member: "http://10.253.20.140:18807"
    };
}


module.exports = url;