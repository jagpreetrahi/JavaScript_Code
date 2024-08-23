
import {readFile} from 'fs/promises';
const filepath = new URL('./new.txt' , import.meta.url);
let content = await readFile(filepath , {encoding : 'utf-8'});


setTimeout(() => {
    console.log(content);
} , 5000);
