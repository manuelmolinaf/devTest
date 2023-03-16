import { OrderBook } from "./OrderBook";

export interface Message{
    table:string,
    action:Action,
    data: any[]
    
}

export enum Action{
    Update = 'update',
    Insert = 'insert',
    Delete = 'delete'
}

export enum Table{
    Instrument = 'instrument',
    Orderbook = 'orderBookL2_25'
}