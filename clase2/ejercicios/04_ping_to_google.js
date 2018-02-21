const http = require('http');


setInterval(() =>
{
    http.get('http://www.google.com', (response) => {
        //console.log('termino el ping.....');
        const statusCode = response.statusCode;
        if(statusCode===200) {
            console.log("ok");
        } else {
            console.log("error");
        }
    });
}, 1000);
    
