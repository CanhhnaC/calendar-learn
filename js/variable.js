const Category = {
  marketing: {
    hover: "linear-gradient(0deg, #6523dc 0%, #a56df6 100%)",
    border: "3px solid #b76df8",
    left: "#b76df8",
    background: "#f6eafe",
    text: "#793ba8",
    name: "Marketing",
  },
  design: {
    hover: "linear-gradient(0deg, #5b52bc 0%, #7a75b1 100%)",
    border: "3px solid #716fee",
    left: "#716fee",
    background: "#efeefe",
    text: "#3d3bc3",
    name: "Design",
  },
  development: {
    hover: "linear-gradient(0deg, #f1c992 0%, #f9e7ce 100%)",
    border: "3px solid #fdc360",
    left: "#fdc360",
    background: "#fff5e9",
    text: "#d99832",
    name: "Development",
  },
  finance: {
    hover: "linear-gradient(0deg, #d7617f 0%, #db97a8 100%)",
    border: "3px solid #ff637a",
    left: "#ff637a",
    background: "#ffe9ec",
    text: "#e2445b",
    name: "Finance",
  },
  default: {
    hover: "",
    border: "1px solid #c6c7dc",
    left: "",
    background: "",
    text: "",
    name: "",
  },
};

const styleDrag = {
  backgroundColor: "teal",
  borderRadius: "5px",
};

const styleRemove = {
  backgroundColor: "red",
  borderRadius: 0,
  content: "Remove",
};

const defaultStyle = {
  backgroundColor: "",
  borderRadius: "",
};

const setStylesOnElement = (styles, element) => {
  Object.assign(element.style, styles);
};

class Task {
  constructor(category, task, dayOff, done, id) {
    this.category = category || {};
    this.task = task || [];
    this.dayOff = dayOff || false;
    this.done = done || false;
    this.id = id || 0;
  }

  // Setter
  set reset(id) {
    this.category = {};
    this.task = [];
    this.done = false;
    this.id = id;
  }

  // Getter
}

const Calendar = {};
for (let i = 6; i < 36; i++) {
  let generator;
  if (i % 7 == 0 || i % 7 == 6) {
    generator = new Task(Category.development, [], true, false, "cell" + i);
  } else {
    generator = new Task(Category.default, [], false, false, "cell" + i);
  }
  Calendar["cell" + i] = generator;
}

const removeTask = (cell, item) => {
  index = $(cell).attr("data-id");
  i = _.indexOf(Calendar[index].task, item);
  Calendar[index].task.splice(i, 1);
  // _.pull(Calendar[index].task, item);
  // _.remove(Calendar[index], {
  //   task: item,
  // });
  // console.log(`Remove ${index}: ${Calendar[index].task}`);
};

const addTask = (cell, item) => {
  index = $(cell).attr("data-id");
  Calendar[index].task.push(item);
  // console.log(`Add ${index}: ${Calendar[index].task}`);
};
