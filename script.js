function calculate(){
  //add value for num pages
  var total = 0;
  var userNumPages = document.getElementById("num-pages").value;
  if(userNumPages == ""){
    total += 0
  } else {
    total += Number(userNumPages);
  }

  //add value for each check box
  var checkboxes = document.getElementsByClassName("feature-checkbox");
  for(var i = 0; i < checkboxes.length; i++){
    if(checkboxes[i].checked){
      total += Number(checkboxes[i].value);
    }
  }

  document.getElementById("price").innerHTML = "$" + total;
}

function clear(){
  document.getElementById("name").innerHTML = "";
  document.getElementById("pro-des").innerHTML = "";
  document.getElementById("email").innerHTML = "";
}


/* click events */
// add event listerns to checkboxes
// When the box is clicked add value to running total
//calculate and update p tag inner html
var checkboxes = document.getElementsByClassName("feature-checkbox");
for(var i = 0; i < checkboxes.length; i++){
  checkboxes[i].addEventListener("change", calculate);
}

document.getElementById("num-pages").addEventListener("keyup", calculate);


