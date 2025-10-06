export interface ItemsInterface {
    id?: number;
    name?: string;
    size?: string;
    gender?: string;
    color?: string;
    quantity?: number;
    price?: number;
    has_descount?: boolean;
    descount_price?: number;
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