function rot13(str) {
    let str1 = "";
    
    for(let i=0; i<str.length; i++){
        switch(str[i]){
            case "A":
                str1 += "N";
            break;
            case "B":
                str1 += "O";
            break;
            case "C":
                str1 += "P";
            break;
            case "D":
                str1 += "Q";
            break;
            case "E":
                str1 += "R";
            break;
            case "F":
                str1 += "S";
            break;
            case "G":
                str1 += "T";
            break;
            case "H":
                str1 += "U";
            break;
            case "I":
                str1 += "V";
            break;
            case "J":
                str1 += "W";
            break;
            case "K":
                str1 += "X";
            break;
            case "L":
                str1 += "Y";
            break;
            case "M":
                str1 += "Z";
            break;
            case "N":
                str1 += "A";
            break;
            case "O":
                str1 += "B";
            break;
            case "P":
                str1 += "C";
            break;
            case "Q":
                str1 += "D";
            break;
            case "R":
                str1 += "E";
            break;
            case "S":
                str1 += "F";
            break;
            case "T":
                str1 += "G";
            break;
            case "U":
                str1 += "H";
            break;
            case "V":
                str1 += "I";
            break;
            case "W":
                str1 += "J";
            break;
            case "X":
                str1 += "K";
            break;
            case "Y":
                str1 += "L";
            break;
            case "Z":
                str1 += "M";
            break;
            default:
                str1 += str[i];
            break;
        }
    }

  console.log(str1);
  return str1;
}

rot13("SERR PBQR PNZC");