// alias with variable
// const linearsearch = require('./basicModule');

// alias with properties
// const {linearSearch : ls} = require('./basicModule');

//  if i have only one module to export then i can do like that

// const linearSearch = require('./basicModule');

import * as searching from './basicModule.mjs';


console.log("hii");
console.log(searching.search((([1,2,4,5]) , 6)));
