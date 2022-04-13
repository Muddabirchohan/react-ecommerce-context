
import History from "history";

export interface IproductsData  {
    id:number,
    title: string,
    price:string,
    category:string,
    description:string,
    image:string
}

export interface IproductsDataAndHistory extends IproductsData {
history?:History;
}
