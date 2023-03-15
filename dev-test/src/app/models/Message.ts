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