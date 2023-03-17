import { Instrument } from "./instrument";
import { OrderBook } from "./orderBook";

export interface Snapshot{
    _id?:string,
    date:Date,
    orderBook:OrderBook,
    instrument:Instrument
}