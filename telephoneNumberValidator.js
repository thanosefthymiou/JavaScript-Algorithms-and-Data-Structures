function telephoneCheck(str) {
    let str1 = "";


    

   for(let i=0; i<str.length; i++){
    if(str[i] =="0" || str[i]=="1" || str[i] == "2" || str[i] =="3" || str[i]=="4" || str[i] == "5" || str[i] =="6" || str[i]=="7" || str[i] == "8" || str[i] =="9" || str[i]==" " || str[i] == ")" || str[i] == "(" ||str[i] == "-"){
        str1 += str[i];
    }
    else{
      return false;
    }
   }
   console.log(str1);
   if(str1.length<10){
     return false;
   }
   if(str1.length == 10 && str1[0]=="5"){
    return true;
   }
   else if(str1.length>10 && str1[0]!="1"){
     if(str1[0]!="(" && str1[0]!="5"){
      return false;
     }
   }
   else if(str1[1]==" " && str1[5]==" "){
    return true;
   }
   else if(str1[1]=="(" &&str1[5]==")"){
    return true;
   }
   else if(str1[0]=="(" && str1[4]==")"){
    return true;
   }
   //Space after the first Character
   else if(str1[1]==" "){
     if(str1[2]=="(" && str1[6]==")"){
       return true;
     }
    else if(str1[5]=="-"){
      return true;
    }
   }
    if(str1.length==12 && str1[3]=="-" && str1[7]=="-"){
     console.log(true);
     return true;
   }
   if(str1[0]=="(" && str1[4]==")" && str1[8]=="-"){
     return true;
   }
   
  
   console.log("false end");
   return false;
}
  
telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");