export interface Product {
    productName: string;
    productPrice: number;
    productWeight: number;
    getProductDetail(): string;
}