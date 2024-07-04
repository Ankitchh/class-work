
import fs from "fs";

 fs.readFile('index.html',function(err,data){
    if(err){
        console.log(err);
    }
     const contant = data.toString();
     fs.writeFile('text.txt',contant,function(err){
        if(err){
            console.log(err);
        }
        console.log("sucsess");
    });
});
