// ToString
console.log("" + 0);
console.log("" - 0);
console.log("" + (-0));
console.log("" - (-0));
console.log("" + []);
console.log("" - []);
console.log("" + {});
console.log("" - {});

console.log("" + [1,2,3]);
console.log("" + [null , undefined]);

// ToNumber

console.log(0-"010");
console.log(0-"o10");
console.log(0 - '010');

console.log(0-"0xF");
console.log(0-"0xa");
console.log(0-"0xb");
console.log(0-"0xc");
console.log(0-"0xd");
console.log(0-[]);
console.log(0-0xd);