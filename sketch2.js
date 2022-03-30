// var margin = { top: 150, right: 40, bottom: 350, left: 50 };
 
// d3.csv("./data/position2.csv").then(function(data) {
 
//       var svg3 = d3.select('#graph')
//           .append('svg')
//           .attr('width', 1440)
//           .attr('height', 2000)//200 is the space for legend
//           .attr("transform", "translate(" + 0 + ",-650)");
          
//           svg3.append('g')
//           .attr("transform", "translate(100,650)")

//           .selectAll('circle')
//           .data(data)
//           .enter()
//           .append('circle')
//           .attr('cx', function(d,i){
//               return d.xPosition*60
//           }) 
//     	  .attr('cy', function(d,i){
//               return d.yPosition*60
//           })
//           .attr('r', 30)
//           .attr('fill', 'tomato')
//           .attr('stroke-width', 2)

// });


    var modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
    
    
    var modal2 = document.getElementById("myModal2");
    
    // Get the button that opens the modal
    var btn2 = document.getElementById("myBtn2");
    
    // Get the <span> element that closes the modal
    var span2 = document.getElementsByClassName("close2")[0];
    
    // When the user clicks the button, open the modal 
    btn2.onclick = function() {
      modal2.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span2.onclick = function() {
      modal2.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    }