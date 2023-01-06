function palindrome(str) {

    str = str.toLowerCase();
    //Convert string to Array
    const arr = [];
    for(let i=0; i<str.length; i++){
        arr[i] = str[i];
    }
    //remove extra characters
    for(let i=0; i<arr.length; i++){
        if(arr[i]== "_" || arr[i]== "-" || arr[i]== "*" ||arr[i]== " " || arr[i]== "." || arr[i]== "," || arr[i]== "/" || arr[i]=="(" || arr[i]== ")")
        {
            delete arr[i];
        }
    }
    //copy and reverse the array
    const arr2 = [...arr];
    arr2.reverse();
    
    const temp1 = arr.join("");
    const temp2 = arr2.join("");
    //Checker
    let count = 0;
    for(let i=0; i<temp1.length; i++){
        if(temp1[i]==temp2[i]){
            count++;
        }
    }
    console.log(temp1);
    console.log(temp2);
    console.log(count == temp1.length);
    return count == temp1.length;
  }