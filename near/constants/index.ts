import { utils } from "near-api-js";

export const FT_CONTRACT = process.env.FT_CONTRACT_ID as string;
export const SHOP_CONTRACT = process.env.SHOP_CONTRACT_ID as string;
export const THREE_HUNDRED_TGAS = utils.format.parseNearAmount(
    "0.0000000003"
) as string;
export const NO_DEPOSIT = "0";
export const ONE_NEAR = utils.format.parseNearAmount("1") as string;
export enum FT_METHOD {
    BUY_FT = "buy_ft",
    FT_BALANCE_OF = "ft_balance_of",
    FT_METADATA = "ft_metadata",
    FT_RATE = "ft_rate",
}

export enum SHOP_METHOD {
    // ADD_PRODUCT = "add_product",
    // UPDATE_PRODUCT = "update_product",
    // REMOVE_PRODUCT = "remove_product",
    GET_PRODUCT = "get_product",
    GET_ALL_PRODUCTS = "get_all_products",
    REGISTER_CALL = "register_call",
    // BUY_TOKEN_CALL = "buy_token_call", //Mua ho token
    CREATE_ORDER_CALL = "create_order_call",
    CANCEL_ORDER_CALL = "cancel_order_call",
    CONFIRM_ORDER = "confirm_order",
    CONFIRM_COMPLETE = "confirm_complete",
    GET_TRANSACTIONS = "get_txs_of",
    CHECK_ACCOUNT = "check_account",
}

export enum TX_STATUS {
    UNPAID = "0",
    PENDING = "1",
    TRANSFERRING = "2",
    SUCCESS = "3",
    CANCELED = "4",
    REFUNDING = "5",
    REFUNDED = "6",
}

export enum GAS {
    // FT_ON_PURCHASE = 100_000_000_000_000,
    FT_ON_REFUND = 100_000_000_000_000,
    FT_ON_TRANSFER = 100_000_000_000_000,
    FT_ON_REGISTER = 100_000_000_000_000,
    // RESOLVE_BUY_TOKEN = 100_000_000_000_000,
    RESOLVE_REGISTER = 100_000_000_000_000,
    RESOLVE_CREATE_ORDER = 100_000_000_000_000,
    RESOLVE_CANCEL_ORDER = 100_000_000_000_000,
}
