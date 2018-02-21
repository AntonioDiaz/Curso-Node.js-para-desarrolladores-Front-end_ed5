const fs = require("fs");
function readFile(name) {
    return new Promise((resolve, reject)=> {
        fs.readFile(name, 'utf-8', (error, data) => {
        if (error) {
           reject(error); 
        } else {
            resolve(data);
        }
        })
    })
}

readFile("../README.md").then((data) =>{
    console.log(data);
}).catch((error) => {
    console.error(error);
});
