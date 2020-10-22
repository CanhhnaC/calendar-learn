// Drag start
let grandFirst, grandLast;

document.addEventListener(
  "dragstart",
  function (event) {
    dragged = event.target;
    setStylesOnElement(styleDrag, event.target);
    grandFirst = dragged.parentNode.parentNode;
  },
  false
);

// Drag end
document.addEventListener(
  "dragend",
  function (event) {
    // dragged = event.target;
    setStylesOnElement(defaultStyle, dragged);

    // event.target.style.opacity = "";
    $(".days>li>ul").css("border", "");

  },
  false
);

// Drag over
document.addEventListener(
  "dragover",
  function (event) {
    event.preventDefault();
    let container = $(".container");
    // Remove when drag outside the calendar
    // console.log("over");
    if (
      !container.is(event.target) &&
      container.has(event.target).length === 0
    ) {
      // console.log("no-drop");
    }
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
  },
  false
);

// Drop
document.addEventListener(
  "drop",
  function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    grandLast =
    event.target.className === "drop_item"
      ? event.target.parentNode
      : event.target.parentNode.className == "drop_item"
      ? event.target.parentNode.parentNode
      : null;

    if (event.target.className == "drop_item") {
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
      event.target.style.border = "";
      addTask(grandLast, dragged.innerText);
      removeTask(grandFirst, dragged.innerText);

      // event.target.classList.remove("hover");
    }
    if (event.target.parentNode.className == "drop_item") {
      dragged.parentNode.removeChild(dragged);
      event.target.parentNode.appendChild(dragged);
      event.target.parentNode.style.border = "";
      addTask(grandLast, dragged.innerText);
      removeTask(grandFirst, dragged.innerText);
      // event.target.parentNode.classList.remove("hover");
    }

    // Remove when drag outside the calendar
    let container = $(".calendar__body-table");
    if (
      !container.is(event.target) &&
      container.has(event.target).length === 0 &&
      dragged.parentNode
    ) {
      dragged.parentNode.removeChild(dragged);
      removeTask(grandFirst, dragged.innerText);
    }
  },
  false
);
