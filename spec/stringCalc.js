function add(string){

    var string;

    if(string==""){

            return 0;
        
        }

    let regex = /\d{1,5}/gm;

   
    let number = string.match(regex);
   
   
    let sum = 0;
    // console.log(number)

    if(string.includes('-')) throw new Error('negatives not allowed');

    number.map((element,index)=>{
      if(element>=1001){
     

        number.splice(index,1)
      }
    })


    
    

    

     for(let i=0;i<number.length;i++)
     {
     
       
      
    

      sum += parseInt(number[i]);
     
     }
    return sum;
    //  console.log(sum);

    

    
    }     



// add();
module.exports = {add:add}

