// Suppose we could access yesterday's stock prices as an array, where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

// Write an efficient function that takes stockPricesYesterday and returns the best profit
//I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// var stockPricesYesterday = [100, 70, 50, 8, 1]
var stockPricesYesterday = [10, 7, 5, 8, 11, 9, 1];


//0(n*2) run time
function getMaxProfit(arr){
	//index that will hold the current 
	var current
	//index that will hold the comparison
	var comparison
	var difference = -99999999999

	for(var i =0; i<arr.length; i++){
		current = i
		for(var m = i+1; m<arr.length; m++){
			comparison = m
			if((arr[m]-arr[i]) > difference){
				difference = arr[m]-arr[i]
			}
		}
	}
	if(difference < 0){
		return "you are losing money... $" + difference
	}
	return difference

}

// console.log(getMaxProfit(stockPricesYesterday))

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------

//O(n) Run Time
function getMaxProfit2(arr){
	var currentPrice
	var minPrice
	var maxProfit
	var potentialProfit

	maxProfit = arr[1] - arr[0]
	minPrice = arr[0]

	for(var i =1; i<arr.length; i++){
		currentPrice = arr[i]

		potentialProfit = currentPrice - minPrice

		if(potentialProfit > maxProfit){
			maxProfit = potentialProfit
		}

		if(currentPrice < minPrice){
			minPrice = currentPrice
		}
	}
	return maxProfit
}

console.log(getMaxProfit2(stockPricesYesterday))

