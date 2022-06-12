function myPowerSum(X, N, c) {
    let tempPow = Math.pow(c,N);
    if(tempPow < X) {
        myPowerSum(X, N, c+1) + myPowerSum((X - tempPow), N, c+1);
    } else if(tempPow == X) {
        totalProcess += 1;
        return 1;
    } else {
        totalProcess += 0;
        return 0;
    }
    return totalProcess;
}
let c=1;
let totalProcess = 0;
totalProcess = myPowerSum(100, 2, 1);
console.log(totalProcess);