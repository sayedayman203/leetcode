function maxProfit(prices: number[]): number {
    let min_price = prices.shift();
    let max_profit = 0;
    prices.map(price => {
        if (price - min_price > max_profit) {
            max_profit = price - min_price;
        } else if (price < min_price) {
            min_price = price;
        }
    })
    return max_profit;
};