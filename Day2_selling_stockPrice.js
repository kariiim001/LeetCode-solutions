let profit =function(prices){
    let min_price = prices[0]
    let max_profit =0

    for (let i =0; i< prices.length; i++){

        let profit = prices[i]-min_price

        if (profit > max_profit ){
            max_profit = profit
        }
        if (prices[i] < min_price){
            min_price=prices[i]
        }

    }return max_profit
}