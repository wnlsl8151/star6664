function gravity1(){
    
    document.getElementById('imghi').style.display = "block";
    document.getElementById('imgg7').style.display = "none";
}

function gravity2(){
    document.getElementById('imghi').style.display = "none";
    document.getElementById('imgg7').style.display = "block";
}

function seatType1(){
    
    document.getElementById('lux9').style.display = "block";
    document.getElementById('prim7').style.display = "none";
}

function seatType2(){
    document.getElementById('lux9').style.display = "none";
    document.getElementById('prim7').style.display = "block";
}

// function uncheckOthers(checkbox) {
//     if (checkbox.checked) {
//       var checkboxes = document.getElementsByClassName("cb0");
//       for (var i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i] !== checkbox) {
//           checkboxes[i].checked = false;
//         }
//       }
//     }
//   }