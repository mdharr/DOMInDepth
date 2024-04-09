const coins = [1, 2, 5];
const amount = 5;

function coinChangeCombinations(coins, amount) {
    const waysToMakeAmount = new Array(amount + 1).fill(0);
    waysToMakeAmount[0] = 1;

    for (const coin of coins) {
        console.log("Coin:", coin);
        console.log("Arr Before Outer Loop:", waysToMakeAmount);
        for (let i = coin; i <= amount; i++) {
            console.log("Arr Before Inner Loop:", waysToMakeAmount);
            waysToMakeAmount[i] += waysToMakeAmount[i - coin];
            console.log("Arr After Inner Loop:", waysToMakeAmount);
        }
        console.log("Arr After Outer Loop:", waysToMakeAmount);
    }

    return waysToMakeAmount[amount];
}
  
const combinations = coinChangeCombinations(coins, amount);
console.log(combinations);