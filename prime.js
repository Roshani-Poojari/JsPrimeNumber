function checkPrime(){
    var p = document.getElementById("result");
    var num = parseInt(f1.n1.value);
    var flag = 0, i;
    if (num <=1){
        flag=1;
    }
    for( i = 2; i <Math.sqrt(num);i++){
        if(num%i==0){
            flag = 1;
            break;
        }
    }
    if(flag == 0){
        p.innerHTML = num+" is a prime number.";
    }
    else{
        p.innerHTML = num+" is not a prime number.";
    }
}
