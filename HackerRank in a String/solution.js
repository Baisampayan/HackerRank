// Write your code here
let i = 0;
let j = 0;
let s = "hhaacckkekraraannk";
let inputStr = "hackerrank";
while(i != s.length) {
    if(s[i]==inputStr[j]) {
        j += 1;
    }
    i += 1;
}
if(inputStr.length=j) {
    console.log("YES");
} else {
    console.log("NO");
}