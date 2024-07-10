const fs = require('fs');

fs.readFile('../easy/3-read-from-file.md', 'utf8', function(err, data) {
    console.log(data);
})

let cnt =0;
for(let i = 0;i<=1000000000;i++)
{
    cnt+=1;
}
console.log("Hi");
