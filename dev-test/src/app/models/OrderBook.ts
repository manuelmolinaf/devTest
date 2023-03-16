export interface OrderBook{
  bids:OrderBookEntry[],
  asks:OrderBookEntry[]
}

export interface OrderBookEntry {
    symbol: string;
    id: number;
    side: string;
    size: number;
    price: number;
    timestamp: string;
}

export enum Side{
  Buy = 'Buy',
  Sell = 'Sell'
}