var style = {
  backgroundColor: "red",
  borderRadius: "5px"
}

var defaultStyle =  {
  backgroundColor: ""
}

const setStylesOnElement = function(styles, element){
  Object.assign(element.style, styles);
}

// Drag start
document.addEventListener(
  "dragstart",
  function (event) {
    dragged = event.target;
    setStylesOnElement(style, event.target) 
  },
  false
);

// Drag end
document.addEventListener(
  "dragend",
  function (event) {
    dragged = event.target;
    setStylesOnElement(defaultStyle, dragged) 

    // event.target.style.opacity = "";
    $(".days>li>ul").css("border", "")
  },
  false
);

// Drag over
document.addEventListener(
  "dragover",
  function (event) {
    event.preventDefault();
  },
  false
);

// Drag enter
document.addEventListener(
  "dragenter",
  function (event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.parentNode.className == "drop_item") {
      event.target.parentNode.style.border = "1px dashed";
    }
  },
  false
);

// Drag leave
document.addEventListener(
  "dragleave",
  function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.parentNode.className == "drop_item") {
      event.target.parentNode.style.border = "";
    }
    event.target.classList.remove("hover");
    
    // $(event.target.parentNode).css("border", "")
  },
  false
);


// Drop
function handleDrop(index, content) { 


 }

document.addEventListener(
  "drop",
  function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "drop_item") {
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
      event.target.style.border = "";

      // event.target.classList.remove("hover");
    }
    if (event.target.parentNode.className == "drop_item") {
      dragged.parentNode.removeChild(dragged);
      event.target.parentNode.appendChild(dragged);
      event.target.parentNode.style.border = "";

      // event.target.parentNode.classList.remove("hover");
    }
  },
  false
);

// document.addEventListener("drop", function (event) {
//   event.preventDefault();
//   console.log(dragged);
//   if (
//     event.target.tagName == "LI" &&
//     event.target.parentNode.className == "drop_item"
//   ) {
//     dragged.parentNode.removeChild(dragged);
//     event.target.parentNode.appendChild(dragged);
//     console.log(dragged.parentNode);
//     event.target.parentNode.style.border = "none";
//     dragged.parentNode.style.border = "none";
//   }

//   if (event.target.className == "drop_item") {
//     dragged.parentNode.removeChild(dragged);
//     event.target.appendChild(dragged);

//     event.target.style.border = "none";
//     dragged.parentNode.style.border = "none";
//   }
//   // event.target.appendChild(dragged);
// });
