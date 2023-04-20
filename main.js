const fs = require('fs');

class ProductManager {

    constructor() {
        this.path = './Courses.json';
    }

    async addProduct(title, description, price, thumbnail, stock){

        try {
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

            const productsFile = await this.getProducts();
            productsFile.push(product);
            await fs.promises.writeFile(this.path, JSON.stringify(productsFile));
        } catch (error) {
            console.log(error);
        }
    }

    async getProducts(){
        try {
            if(fs.existsSync(this.path)){
                const products = await fs.promises.readFile(this.path, 'utf-8');
                const productsJS = JSON.parse(products);
                return productsJS;
            }else{
                return [];
            }
        } catch (error) {
            console.log(error);
        }
        // console.log(this.products);
    }

    async #NewId(){

        try {
            if(fs.existsSync(this.path)){

                const products = await fs.promises.readFile(this.path, 'utf-8');
                const productsJS = JSON.parse(products);
                let Id = 0;
                productsJS.map((e) => {
                    if(e.id > Id) Id = e.id;
                });
                return Id;

            }else{
                return [];
            }
        } catch (error) {
            console.log(error);
        }


    }

    async getProductById(lookId){

        try {
            if(fs.existsSync(this.path)){
                const products = await fs.promises.readFile(this.path, 'utf-8');
                const productsJS = JSON.parse(products);

                const productById = productsJS.find((product)=> product.id == lookId );
                if(productById){
                    console.log(productById);
                }else{
                    console.log('Product not found');
                }
                
            }else{
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }
}


const newProducts = new ProductManager();



const test = async() => {

    const get = await newProducts.getProducts();
    console.log('primera consulta', get);


    await newProducts.addProduct('python', 'programming course', 15000, "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/800px-Python.svg.png", 10);
    const get2 = await newProducts.getProducts();
    console.log('consulta del primer curso agregado', get2);

    await newProducts.addProduct('javaScript', 'programming course', 16000, "https://www.dongee.com/tutoriales/content/images/2022/10/image-83.png", 5);
    const get3 = await newProducts.getProducts();
    console.log('consulta del segundo curso agregado', get3);

    await newProducts.addProduct('nodeJs', 'programming course', 18000, "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png", 12);
    const get4 = await newProducts.getProducts();
    console.log('consulta de tercer curso agregado', get4);
}
test()
