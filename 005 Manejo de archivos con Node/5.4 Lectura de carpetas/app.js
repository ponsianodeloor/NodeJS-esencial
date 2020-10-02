var fs = require('fs');

fs.readdir('./archivos/', (e, items) => {
    console.log(items);
});

fs.readdir('./archivos/', {withFileTypes:true}, (e, items) => {
    console.log(items);
});