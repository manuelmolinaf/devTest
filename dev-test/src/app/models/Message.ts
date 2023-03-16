
export interface Message{
    table:string,
    action:Action,
    data: any[]
    
}

export enum Action{
    Update = 'update',
    Insert = 'insert',
    Delete = 'delete',
    Partial = 'partial'
}

export enum Table{
    Instrument = 'instrument',
    OrderBook = 'orderBookL2_25'
}