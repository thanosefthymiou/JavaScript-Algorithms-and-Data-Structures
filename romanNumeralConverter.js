function convertToRoman(num) {
    let str = "";
    
    if(num<4){
        for(let i=0; i<num; i++){
            str += "I";
        }
    }
    else if(num==4){
        str += "IV";
    }
   else if(num==5){
    str += "V"
    }
    else if(num<9){
        str += "V"
        for(let i=0; i<num-5; i++){
            str +="I";
        }
    }
    else if(num==9){
        str += "IX"
        
    }
    else if(num == 10){
        str += "X";
    }
    else if(num<40){
        for(let i=0; i<Math.floor(num/10); i++){
            str += "X"
        }
        str += convertToRoman(num%10);
    }
    else if(num<50){
        str += "XL";
        str += convertToRoman(num-40);
    }
    else if(num<90){
        str += "L";
        str += convertToRoman(num-50);
    }
    else if(num<100){
        str += "XC";
        str += convertToRoman(num-90);
    }
    else if(num<400){
        for(let i=0; i<Math.floor(num/100); i++){
            str += "C";
        }
        str += convertToRoman(num%100);
    }
    else if(num<500){
        str += "CD";
        str += convertToRoman(num-400);
    }
    else if(num<900){
        str += "D";
        str += convertToRoman(num-500);
    }
    else if(num == 900){
        str += "CM";
    }
    else if(num<1000){
        str += "CM";
        str += convertToRoman(num-900);
    }
    else if(num ==1000){
        str += "M";
    }
    else if(num>1000){
        for(let i=0; i<Math.floor(num/1000); i++){
            str += "M";
        }
        str += convertToRoman(num%1000);
    }
  

    console.log(str);
 return str;   
}