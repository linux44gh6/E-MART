export type TProduct={
    title:string;
    image:string;
    price:number;
    _id:string;
    description:string;
    rating:number;
    category:string;
    brand:string
}

 export interface ProductData {
        _id: string;
        title: string;
        description: string;
        price: number;
        rating: number;
        image: string;
    }