class ProductManager {

    constructor() {
        this.products = [];
    }


    addProduct(title, description, price, thumbnail, stock){

        if(!title || !description || !price || !thumbnail || !stock ){

            console.log('All fields are required');
        }

        const product = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            id: this.#NewId() + 1,
            stock: stock
        }

        this.products.push(product);

    }

    #NewId(){
        let Id = 0;
        this.products.map((e) => {
            if(e.id > Id) Id = e.id;
        });
        return Id;
    }

    getProducts(){
        console.log(this.products);
    }

    getProductById(lookId){
        const productById = this.products.find((product)=> product.id == lookId );
        if(productById){
            console.log(productById);
        }else{
            console.log('Product not found');
        }
    }
}


const newProducts = new ProductManager();


newProducts.addProduct('python', 'programming course', 15000, "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/800px-Python.svg.png", 10);
newProducts.addProduct('javaScript', 'programming course', 16000, "https://www.dongee.com/tutoriales/content/images/2022/10/image-83.png", 5);
newProducts.addProduct('nodeJs', 'programming course', 18000, "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png", 12);




newProducts.getProducts();
newProducts.getProductById(2);
newProducts.getProductById(10);
// console.log('Id found', newProducts.getProductById(2));

