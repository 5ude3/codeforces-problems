process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});
 
process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
            return string.trim();
        });
 
    watermelon();
});
 
function readline() {
    return inputString[currentLine++];
}
 function watermelon(){
 let wm = +(readline())
     if(wm % 2 === 0 && wm !== 2){
         console.log("YES")
     } else {
         console.log("NO")
     }
}