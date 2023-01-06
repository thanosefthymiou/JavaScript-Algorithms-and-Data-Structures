function checkCashRegister(price, cash, cid) {


    let change = cash-price;
    let rem = change;
    const changebill = [];
    const cid2 = [];
    const toFixed = (n, fixed) => `${n}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`))[0];

    for (let i = 0; i < cid.length; i++) {
        cid2[i] = cid[i].slice();
    }

    let sumb=0;
          for(let i=0; i<9; i++){
              sumb += cid[i][1];
          }
          if(sumb<rem){
            return {status: "INSUFFICIENT_FUNDS", change: []}
          }
    
  
    
    const temp = [[20,0], [10,0], [5,0], [1,0], [0.25,0], [0.1,0], [0.05,0], [0.01,0]];
     
      for(let i=0; i<8; i++){
          if(rem>temp[i][0] && cid[7-i][1]>=temp[i][0]){
              while(cid[7-i][1] >= temp[i][0] && rem>=temp[i][0]){
                  rem -= temp[i][0];
                  temp[i][1]++;
                  cid[7-i][1] -= temp[i][0];
              }
          }
      }
  
  
      switch(cash){
          case 100:
              cid[8][1] += 100;
          break;
          case 20:
              cid[7][1] += 20;
          break;
          case 10:
              cid[6][1] += 10;
          break;
          case 5:
              cid[5][1] += 5;
          break;
          case 1:
              cid[4][1] += 1;
          break;
          case 0.25:
              cid[3][1] += 0.25;
          break;
          case 0.1:
              cid[2][1] += 0.1;
          break;
          case 0.05:
              cid[1][1] += 0.05;
          break;
          case 0.01:
              cid[0][1] += 0.01;
          break;
  
      }
  
      
    
      let sum=0;
          for(let i=0; i<9; i++){
              sum += cid[i][1];
          }
          if(toFixed(sum,2)==cash){
            return {status: "CLOSED", change: cid2};
          }


    if(toFixed(rem,2)==0){
        for(let i=0; i<8; i++){
            if(temp[i][1]>0){
                switch(temp[i][0]){
                    case 20:
                        changebill.push(["TWENTY", 20*temp[i][1]]);
                    break;
                    case 10:
                        changebill.push(["TEN", 10*temp[i][1]]);
                    break;
                    case 5:
                        changebill.push(["FIVE", 5*temp[i][1]]);
                    break;
                    case 1:
                        changebill.push(["ONE", temp[i][1]]);
                    break;
                    case 0.25:
                        changebill.push(["QUARTER", 0.25*temp[i][1]]);
                    break;
                    case 0.1:
                        changebill.push(["DIME", 0.1*temp[i][1]]);
                    break;
                    case 0.05:
                        changebill.push(["NICKEL", 0.05*temp[i][1]]);
                    break;
                    case 0.01:
                        changebill.push(["PENNY", 0.01*(1+temp[i][1])]);
                    break;
                }
            }
        }
        console.log(changebill);
        return {status: "OPEN", change: changebill};
    }
  


      if(toFixed(rem,2)>0){
          
              console.log("INSUFFICIENT FUNDS");
              return {status: "INSUFFICIENT_FUNDS", change: []}
          
      }
  }


  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);