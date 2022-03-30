var table
let angle=30;
var speed;
var button;

var width=1


function preload() {
    table = loadTable('data/position2.csv', 'csv', 'header')
    console.log (table)
    
    
    
    
}

function setup(){
            // translate (600, 120);

    createCanvas(800, 1000)

    // button = createButton("go")
    // button.mousePressed(changeColor)


}

function draw(){
  
    translate (100, -20);
    background(255, 250, 240);

    var color= 'blue'
//static circles
    // for (let r=0; r<table.getRowCount(); r++) {
    //     const state = table.getString (r, "State")
    //     const stateAbbr = table.getString (r, "Abbr")
    //     const x = table.getNum (r, "xPosition")
    //     const y = table.getNum (r, "yPosition")
    //     // rect(x*100, y*100, 100, 10);
    //     ellipse (x*60,y*60,60,60)
    // }

//static squares
    // for (let r=0; r<table.getRowCount(); r++) {
    //     const state = table.getString (r, "State")
    //     const stateAbbr = table.getString (r, "Abbr")
    //     const x = table.getNum (r, "xPosition")
    //     const y = table.getNum (r, "yPosition")
    //     rect(x*60, y*60, 60, 60);
    //     // ellipse (x*60,y*60,60,60)
    // }


//color legend
     textSize(14);
     fill(0,0,0);
     stroke(1);
     text("Clinton",250,40);
     text("Trump",350,40);
     
     noStroke()
     fill(27,36,241); 
     circle(235,35,15,15);//top
     
     fill(248,101,32);
     circle(335,35,15,15);

//rotating bars
    for (let r=0; r<table.getRowCount(); r++) {
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


//color legend
        // push()
        // stroke('blue')
        // fill('blue')
        // circle(300, 60, 20)
        // pop()


//States Abbr
        push()
        textSize(12);
        fill(0);
        textStyle(NORMAL);
        textAlign(BOLD);
        text(stateAbbr, x1-8, y1+20);
        pop()


 
 //static circles
    // for (let r=0; r<table.getRowCount(); r++) {
    //     const state = table.getString (r, "State")
    //     const stateAbbr = table.getString (r, "Abbr")
    //     const x = table.getNum (r, "xPosition")
    //     const y = table.getNum (r, "yPosition")
    //     // rect(x*100, y*100, 100, 10);
    //     ellipse (x*60,y*60,60,60)
        
    // }
        
        // console.log (speed)
        // console.log (stateAbbr)
        console.log (b)




    }

        // button = createButton("reveal")
        // button.mousePressed(changeColor)

}

// function changeColor(){
//     color = 255;
// }