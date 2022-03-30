var table
let angle=30;
var speed;
var button;

var width=1
//this will contain which random results we will show
var rollArray=[];
//this will contain which random results we will show
var rolls=10-1;


function preload() {
    //table = loadTable('data/position2.csv', 'csv', 'header')
    console.log (table)

     table = loadTable('data/position2.csv', 'csv', 'header') 
    doug_table = loadTable('data/results.csv', 'csv', 'header')
    tot_table = loadTable('data/totals.csv', 'csv', 'header') 
    
    
    
}

function setup(){
            // translate (600, 120);
    createCanvas(800, 1000)
    //DOUG
    resultNum = round(random(1,1000))

    //generate 10 rolls
    for (let i=0; i<rolls; i++)
       {
       rollArray.push(round(random(1,1000)))
       }

    //add the most recent result to the rolls     
    rollArray.push(resultNum); 
}

function draw(){
  
    //translate (100, -20);
    background(255, 250, 240);

    var color= 'blue'

    for (let r=0; r< table.getRowCount(); r++) {
        const state = table.getString (r, "State")
        const stateAbbr = table.getString (r, "Abbr")
        const x = table.getNum (r, "xPosition")
        const y = table.getNum (r, "yPosition")
        const b = table.getString (r, "win")
        const x1 = x*60
        const y1 = y*60
        const acce = table.getNum (r, "Margin")
        speed = map (acce, 1.8, 5.5, 0.1, 30)
        
        if (b>0){
            color= 'blue'
        } else if (b<1){
            color='tomato'
        }
        
        
                
        push()
        rectMode(CENTER);
        angleMode(DEGREES)
        translate(x1, y1)
        rotate(angle)
        stroke(color)
        fill(color);    
        rect(0, 0, 55, 1);
        angle=angle+speed
        pop()


        push()
        rectMode(CENTER);
        angleMode(DEGREES)
        translate(x1, y1)
        rotate(30)
        rotate(angle)
        stroke(color)
        fill(color);   
        rect(0, 0, 55, 1);
        angle=angle+speed
        pop()


        push()
        rectMode(CENTER);
        angleMode(DEGREES)
        translate(x1, y1)
        rotate(60)
        rotate(angle)
        stroke(color)
        fill(color);     
        rect(0, 0, 55, 1);
        angle=angle+speed
        pop()

        
        push()
        rectMode(CENTER);
        angleMode(DEGREES)
        translate(x1, y1)
        rotate(90)
        rotate(angle)
        stroke(color)
        fill(color);    
        rect(0, 0, 55, 1);
        angle=angle+speed
        pop()

        
        push()
        rectMode(CENTER);
        angleMode(DEGREES)
        translate(x1, y1)
        rotate(120)
        rotate(angle)
        stroke(color)
        fill(color);     
        rect(0, 0, 55, 1);
        angle=angle+speed
        pop()        

        
        push()
        rectMode(CENTER);
        angleMode(DEGREES)
        translate(x1, y1)
        rotate(150)
        rotate(angle)
        stroke(color)
        fill(color);    
        rect(0, 0, 55, 1);
        angle=angle+speed
        pop()       

//States Abbr
        /*
        push()
        textSize(12);
        fill(0);
        textStyle(NORMAL);
        textAlign(BOLD);
        text(stateAbbr, x1-8, y1+20);
        pop()
        */

        //console.log (b)
    }
    //end XINGWEI code
    // start DOUG
    var tot_Trump_Wins=0;
    var tot_Clinton_Wins=0;

    translate (100, -20);
    background(255, 250, 240);

    //state result
    let rows = doug_table.findRows(str(resultNum), 'election_num');


    //states result
     var total_Trump_EVotes = rows[51].getString("Trump_EVotes");
     var total_Clinton_EVotes = rows[51].getString("Clinton_EVotes");
     var statex = rows[51].getString("state")
     //var moe = rows[51].getString("MOE_original")

     textSize(14);
     fill(0,0,0);

     //header
     fill(0,0,0);
     stroke(1);
     text("Clinton",250,40);
     text("Trump",350,40);

     noStroke();
     //Clinton
     fill(27,36,241); 
     circle(235,35,15,15);//top
     circle(40,595,15,15);//bottom left current
     circle(440,660,15,15);//bottom right 

     //Trump
     fill(248,101,32);
     circle(335,35,15,15);
     circle(130,595,15,15);
     circle(130+400,660,15,15);

     fill(0,0,0);
     stroke(1);
     //text("Trump",350,40);

     text("Election Simulation #" + rollArray.length +  " Result", 30,580);
     text("Total Wins", 430,644); /*was 580*/
     text("All simulation results: " , 30,644);

     //Current SImulation Evotes
     textSize(14);
     text(total_Trump_EVotes, 140,600);
     text(total_Clinton_EVotes, 50,600);
/*
     textSize(14);
     text(tot_Trump_Wins, 140+400,600);
     text(tot_Clinton_Wins, 50+400,600);
*/

          
     textSize(24);
         if (total_Trump_EVotes > total_Clinton_EVotes)
            {
            fill(161,198,96);
            //checkmark
            text("✔", 170,600);
            }
            else
            {
            fill(161,198,96);
            text("✔", 75,600);
            }

//static circles
     for (let r=0; r<rows.length-1; r++) {
         const state = rows[r].getString("state")
         const x = rows[r].getNum("Xpos")
         const y = rows[r].getNum("Ypos")
         // rect(x*100, y*100, 100, 10);

         //get the original poll
         const Trump = rows[r].getNum("Trump")
         const Clinton = rows[r].getNum("Clinton")

         const Trump_EVotes = rows[r].getNum("Trump_EVotes")
         const Clinton_EVotes = rows[r].getNum("Clinton_EVotes")
         const Surprise_Ind = rows[r].getNum("Surprise_Ind")
         const moe = rows[r].getString("MOE_original")

        // const b = table.getString (r, "win")
         const x1 = x*60
         const y1 = y*60
         const acce = table.getNum (r, "Margin")
         speed = map (acce, 1.8, 5.5, 0.1, 30)
        
         var EVotes=0;
         const TrumpWin=0;

         //set spinner

         if (Trump > Clinton)
            {
            color='tomato'
            }
            else
            {
            color= 'blue'
            }



         //set results
         if (Trump_EVotes > Clinton_EVotes)
            {
            fill(248,101,32) 
            EVotes=Trump_EVotes
            }
            else
            {
            fill(27,36,241) 
            EVotes=Clinton_EVotes
            }

        push()
        rectMode(CENTER);
        angleMode(DEGREES)
        translate(x1, y1)
        rotate(angle)
        stroke(color)
        fill(color);    
        rect(0, 0, 55, 1);
        angle=angle+speed
        pop()


        push()
        rectMode(CENTER);
        angleMode(DEGREES)
        translate(x1, y1)
        rotate(30)
        rotate(angle)
        stroke(color)
        fill(color);   
        rect(0, 0, 55, 1);
        angle=angle+speed
        pop()


        push()
        rectMode(CENTER);
        angleMode(DEGREES)
        translate(x1, y1)
        rotate(60)
        rotate(angle)
        stroke(color)
        fill(color);     
        rect(0, 0, 55, 1);
        angle=angle+speed
        pop()

        
        push()
        rectMode(CENTER);
        angleMode(DEGREES)
        translate(x1, y1)
        rotate(90)
        rotate(angle)
        stroke(color)
        fill(color);    
        rect(0, 0, 55, 1);
        angle=angle+speed
        pop()

        
        push()
        rectMode(CENTER);
        angleMode(DEGREES)
        translate(x1, y1)
        rotate(120)
        rotate(angle)
        stroke(color)
        fill(color);     
        rect(0, 0, 55, 1);
        angle=angle+speed
        pop()        

        
        push()
        rectMode(CENTER);
        angleMode(DEGREES)
        translate(x1, y1)
        rotate(150)
        rotate(angle)
        stroke(color)
        fill(color);    
        rect(0, 0, 55, 1);
        angle=angle+speed
        pop()       

//States Abbr
        /*
        push()
        textSize(12);
        fill(0);
        textStyle(NORMAL);
        textAlign(BOLD);
        text(stateAbbr, x1-8, y1+20);
        pop()
         */



        //DOUG Stuff

         noStroke();

         if (Surprise_Ind==0)
            ellipse (x*60,y*60,60,60);
         else 
            ellipse (x*60,y*60,40,40);
         
         fill(255,255,255); 
         stroke(1);
         textSize(20);
         let bumptxt =0;

         if (str(EVotes).length<2)
            bumptxt = 5;
  
         //text(EVotes, x*60-12+bumptxt,y*60+8);
         text(EVotes, x*60-12+bumptxt,y*60+8);
     }

     //loop through 10 results and draw square
     fill(0,0,0); 
     for (let n=0; n<rolls+1; n++) {
         let tot_row = tot_table.findRow(str(rollArray[n]), 'election_num');

         //get the winner
         const tot_Trump_New = tot_row.getString("Trump_New")
         const tot_Surprise_Ind = tot_row.getString("Surprise_Ind")


         if (tot_Trump_New=="1")
            {
           //red
            fill(248,101,32) 
            tot_Trump_Wins++;
            }
            else
            {
            //blue
            fill(27,36,241) 
            tot_Clinton_Wins++;
            }
            noStroke();

            //rotate(c);
            rect(30*n+30,650,20,20);
            //c=0;
            //rotate(0);
            //strokeWeight(1);
            stroke(1);
            fill(255,255,255);
            textSize(14);
            text(tot_Surprise_Ind,30*n+35,650+15);

   
        }
        fill(0,0,0);
        stroke(1);
        textSize(14);
        text(tot_Trump_Wins, 140+400,664);
        text(tot_Clinton_Wins, 50+400,664);

        tot_Trump_Wins=0;
        tot_Clinton_Wins=0;




}//end complete code


