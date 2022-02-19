import { Product } from "./product";

export const productList: Product[] = [
 {
     productName: "Tata Naxon EV",
     productWeight: 2000,
     productPrice:1200000,
     getProductDetail():string{
        return `Name : ${this.productName} , Weight : ${this.productWeight}, Price : ${this.productPrice}`;
     }
 },
 {
    productName: "Nilkamal Chair",
    productWeight: 3,
    productPrice:1500,
    getProductDetail():string{
        return `Name : ${this.productName} , Weight : ${this.productWeight}`;
     }
}
];