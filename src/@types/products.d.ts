export interface ItemsInterface {
    id: number;
    name: string;
    size: string;
    gender: string;
    category: string;
    description?: string;
    color: string;
    quantity: number;
    price: number;
    has_descount: boolean;
    descount_price: number;
}

export interface ItemsPriceInterface extends ItemsInterface {
    id: number;
    name: string;
    size: string;
    color: string;
    quantity: number;
    price: number;
    has_descount: boolean;
    descount_price: number;
}

export interface ItemsFilterInterface {
    size: string[];
    gender: string[];
    category: string[];

    min_price: number;
    max_price: number;
}

export interface CarouselInterface {
    img_URL: string;
    category: string;
    type: string;
}

export interface CategoryInterface {
    id: number;
    type: string;
    description: string;
}