import { TX_STATUS } from "../constants";
export interface ContractResponse {
    success: boolean;
    msg: string;
}

export interface ProductDto {
    product_id: string;
    quantity?: number;
    unit_price?: string;
}

export interface OrderedItemsDto {
    items: Item[];
    shipping_price: string;
    total_price: string;
}

export interface Item {
    product_id: string;
    quantity: number;
    unit_price: string;
}

export interface TxId {
    tx_id: string;
}

export interface Product {
    id: string;
    data: ProductData;
}

export interface ProductData {
    quantity: string;
    unitPrice: string;
}

export interface Transaction {
    status: TX_STATUS;
    buyer: string;
    items: Array<Product>;
    shippingPrice: string;
    totalPrice: string;
    createdAt: string;
    updatedAt: string;
}

export interface FTMetadata {
    spec: string;
    name: string;
    symbol: string;
    icon?: string;
    reference?: string;
    reference_hash?: string;
    decimals: number;
}