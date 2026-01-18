export type TVariant = {
    type: string;
    value: string;
};

export type TInventory = {
    quantity: number;
    inStoke: boolean;
};

export type Tproduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variations: TVariant[];
    inventory: TInventory;
}