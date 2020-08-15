//when click the check flame buttons call the calculate
//alert("hai");
document.querySelector('#check').addEventListener('click',calculate);
var song=new Audio('love.mp3');

var check=0,allow=0,allow1=0,allow2=0;
//song.loop = true;
//song.play();
//calculate the percentage   
async function calculate() { 
      allow2=1;
    if(allow==0) {
       reset();
       allow2=0;
       check=0;
       var yourName = document.getElementById("yourName").value; //get the your name
       
       var partnerName = document.getElementById("partnerName").value;//get the partner name
      
       //check the enterd value
       if(yourName.length==0) {
          alert("Please Enter Your Name");
          return;
       }
       if(partnerName.length==0) {
          alert("Please Enter Your Partner Name");
          return;
       }
       if(partnerName.localeCompare(yourName)==0) {
          alert("Please Enter Your Correct Partner Name");
          return;
       }
       
       //chang the two names upper case
       yourName=yourName.toUpperCase();
       partnerName=partnerName.toUpperCase();
       
       var index=[];
       for(let i=0;i<yourName.length;i++) {
             index[yourName[i]]=0;
       } 
       for(let i=0;i<yourName.length;i++) {
             index[yourName[i]]++;
       }
       var valueArray=[];
       var count=0,value=0;
       //finding the how many latter same in the two strings
       for(let i=0;i<partnerName.length;i++) {
               
             if(!(index[partnerName[i]]==undefined)) {
                     
                   if(index[partnerName[i]]>0) {
                         index[partnerName[i]]--;
                         valueArray[count++]=2;
                   }
             }      
       }
            
              
       
      
         value=count;
       for(var i=0;i<(yourName.length+partnerName.length)-(value+value);i++) {
           valueArray[count++]=1;
           
       }
       //call the relation function to find the relation
       var option =relation(valueArray,count);
       //console.log(valueArray);
       var flage=0,flage1=0,length=0,flage2=0;
       //finding the percentage
       while(count!=2)  {
            //console.log(valueArray);
          for(let i=0;i<count-1;i++) {
               valueArray[i]=valueArray[i]+valueArray[count-1];
               count--;
               if(valueArray[i]>=10) {
                     flage=1;                             
               }   
          }
          if(flage==1) {    
                flage1=valueArray[0];
                for(let i=0;i<count;i++) {
                             
                      flage2=valueArray[i+1];
                      if(flage1>=10) {   
                                        
                         valueArray[length++]=Math.floor(flage1/10);
                         valueArray[length++]=flage1%10;
                         flage1=flage2;
                      } else {
                         valueArray[length++]=flage1;
                         flage1=flage2;
                      }       
                                    
                }
                count=length;
                length=0;
                flage=0;   
          }          
       }
       if(valueArray[0]==1&&valueArray[1]==0&&valueArray[2]==0) {
             var value1=parseInt(((valueArray[0].toString())+(valueArray[1].toString())+(valueArray[2].toString())));
             
       } else {
                  
             var value1=parseInt(((valueArray[0].toString())+(valueArray[1].toString())));
             
            
      }
       song=new Audio('clock.mp3'); 
       song.play();        
       var count1=0,delay=0;
        
       while(count1<=value1) { 
          if(check==0) {
             allow=1;
             var str=(count1.toString()+"%");     
             document.querySelector('#Percentage').textContent=str;
             await sleep(100);//delay
             count1++;
             str=(count1.toString()+"Msec..?");
             document.querySelector('#RelationShip').textContent=str;
          } else {
           document.querySelector('#Percentage').textContent="0%"; 
           document.querySelector('#RelationShip').textContent="---???";
           document.getElementById("yourName").value="";
           document.getElementById("partnerName").value="";
           break;    
          }
       }
       if(check==0) {    
          relationResult(option);
       
        }//call for update the relation  
     }                
}
 //finding the relation
function relation(valueArray,length) {          
          var length1=0,j=0,flage=0,result=0;
          for(let i=0;i<length;i++) {
                if(valueArray[i]!=2)
                    length1=length1+valueArray[i];
          }
          var value={0:'F',1:'L',2:'A',3:'M',4:'E',5:'S'};
          //finding the relation calculation
          while(true)  {
              for(let i=0;i<6;i++)  {
                    if(value[i]!='0') {
                        j++;
                    }
                    if(value[i]=='0') {
                        continue;
                    }
                    if(length1==j) {
                        result=value[i];
                        value[i]='0';
                        flage++;
                        j=0;
                       
                    }  
              }
              if(flage==6) {
                  break;
              }    
         }
           
         return result;
          
}
//sleep function for delay
function sleep(ms) {
    return new Promise(resolve =>setTimeout(resolve,ms));
} 
//updating the ralation in front end
async function relationResult(option) {
          song.pause();
          song.currentTime = 0;
          song=new Audio('bell.mp3'); 
          song.play();
           allow1=1;
          switch(option) {
              case 'F': document.querySelector('#RelationShip').textContent="FRIENDSHIP!!!";
                        await sleep(1200);
                        document.getElementById("backgroundgif").style.backgroundImage="url('firendb.gif')";
                        document.getElementById("gif").src="firend.gif"; 
                        song=new Audio('firends.mp3');
                        song.loop = true;
                        song.play();
                        break;
              case 'L': document.querySelector('#RelationShip').textContent="LOVE~~~";
                        await sleep(1200);
                        document.getElementById("backgroundgif").style.backgroundImage="url('heart.gif')";
                        document.getElementById("gif").src="mini1.gif"; 
                        song=new Audio('love.mp3');
                        song.loop = true;
                        song.play();
                       
                        break;
              case 'A':document.querySelector('#RelationShip').textContent="AFFECTION@@";
                        await sleep(1200);
                        document.getElementById("backgroundgif").style.backgroundImage="url('affectionb.gif')";
                        document.getElementById("gif").src="affection.gif"; 
                        song=new Audio('affections.mp3');
                        song.loop = true;
                        song.play();
                        break;
              case 'M':document.querySelector('#RelationShip').textContent="MARRIAGE$$$";
                        await sleep(1200);
                        document.getElementById("backgroundgif").style.backgroundImage="url('heart2.gif')";
                        document.getElementById("gif").src="marriage1.gif"; 
                        song=new Audio('marriages.mp3');
                        song.loop = true;
                        song.play();
                        break;
              case 'E':document.querySelector('#RelationShip').textContent="ENEMY##";
                        await sleep(1200);
                        document.getElementById("backgroundgif").style.backgroundImage="url('enemyb.gif')";
                        document.getElementById("gif").src="enemy.gif"; 
                        song=new Audio('enemys.mp3');
                        song.loop = true;
                        song.play();
                        break;
              case 'S':document.querySelector('#RelationShip').textContent="SISTER***";
                        await sleep(1200);
                        document.getElementById("backgroundgif").style.backgroundImage="url('sisterb.gif')";
                        document.getElementById("gif").src="sister.gif"; 
                        song=new Audio('sisters.mp3');
                        song.loop = true;
                        song.play();
                        break;
                   
          }    
          
          allow=0; 
          allow1=0;
}
//reset the updates
function reset() {
    if(allow1==0) {
     check=1; 
    if(allow2==0) {
       document.getElementById("yourName").value="";
       document.getElementById("partnerName").value="";
    } 
     document.querySelector('#Percentage').textContent="0%"; 
     document.querySelector('#RelationShip').textContent="---???";
     document.getElementById("backgroundgif").style.backgroundImage="url('back.gif')";
     document.getElementById("gif").src="mini.gif";
     song.pause();
     song.currentTime = 0;
     allow=0;
   }
     
}

