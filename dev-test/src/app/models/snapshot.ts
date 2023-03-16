import { Instrument } from "./instrument";
import { OrderBook } from "./orderBook";

export interface Snapshot{
    date:Date,
    orderBook:OrderBook,
    instrument:Instrument
}