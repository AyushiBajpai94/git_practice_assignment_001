let number=47;
let factor=0;
for(let i=1;i<=number;i++){
  if(number%i==0){
    factor++;
  }
}
if(factor==2){
  console.log("It is prime");
}
else{
  console.log("Not a Prime");
}