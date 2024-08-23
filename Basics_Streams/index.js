

import {readFile , writeFile} from  'fs/promises';
const filepath = new URL('./index.html' , import.meta.url);

let readContent = await readFile(filepath , {encoding : 'utf-8'});

console.log(readContent);

const data = {
    name : "jagpreet",
    course : "BE",
    age : '23'
}

for(const[key , value] of Object.entries(data)){
    readContent = readContent.replace(`{${key}}` ,value)
}

// await writeFile(filepath  , readContent)
await writeFile(new URL('./newIndex.html' , import.meta.url)  , readContent);

