let i = 0;
let s = "www.abc.xy";
let k = 10;
let newStr = "";

if(k>26) {
    k = k%26;
    console.log(k);
}

for(i=0; i<s.length; i++) {
    let asciiVal = s.charCodeAt(i) + k;
    if(s.charCodeAt(i)>=97 && s.charCodeAt(i)<=122) {
        // Getting Lower Case
        if(asciiVal>122) {
            asciiVal = 96 + (asciiVal - 122);
            newStr += String.fromCharCode(asciiVal);
        } else {
            newStr += String.fromCharCode(asciiVal);
        }
    } else if (s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90) {
        // Getting Upper Case
        if(asciiVal>90) {
            asciiVal = 64 + (asciiVal - 90);
            newStr += String.fromCharCode(asciiVal);
            console.log(`ASCII Index: ${asciiVal} | ASCII Value: ${String.fromCharCode(asciiVal)}`);
        } else {
            newStr += String.fromCharCode(asciiVal);
        }
    } else {
        // Getting non-alphabets
        newStr += s[i];
    }
}

console.log(newStr);