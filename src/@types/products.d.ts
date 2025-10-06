export interface ItemsInterface {
    id: number;
    name: string;
    size: string;
    color: string;
    quantity: number;
    price: number;
    has_descount: boolean;
    descount_price: number;
}

export interface CarouselInterface{
    img_URL: string;
    category: string;
    type: string;
}