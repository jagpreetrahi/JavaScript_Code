const Product = {

    // properties
    name : "jaggi",
    price : 100000,
    description : "cool bag",
    display : () => {
        console.log(this)
    }
}

const newObject = new Product();