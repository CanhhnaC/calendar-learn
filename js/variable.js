const Category = {
  marketing: {
    hover: "linear-gradient(0deg, #6523dc 0%, #a56df6 100%)",
    border: "3px solid #b76df8",
    background: "#f6eafe",
    text: "#793ba8",
    name: "Marketing",
  },
  design: {
    hover: "linear-gradient(0deg, #5b52bc 0%, #7a75b1 100%)",
    border: "3px solid #716fee",
    background: "#efeefe",
    text: "#3d3bc3",
    name: "Design",
  },
  development: {
    hover: "linear-gradient(0deg, #f1c992 0%, #f9e7ce 100%)",
    border: "3px solid #fdc360",
    background: "#fff5e9",
    text: "#d99832",
    name: "Development",
  },
  finance: {
    hover: "linear-gradient(0deg, #d7617f 0%, #db97a8 100%)",
    border: "3px solid #ff637a",
    background: "#ffe9ec",
    text: "#e2445b",
    name: "Finance",
  },
  default: {
    hover: "",
    border: "1px solid #c6c7dc",
    background: "",
    text: "",
    name: "",
  },
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
for (let i = 1; i < 36; i++) {
  let generator;
  if (i % 7 == 0 || i % 7 == 6) {
    generator = new Task(Category.development, [], true, false, "cell" + i);
  } else {
    generator = new Task(Category.default, [], false, false, "cell" + i);
  }
  Calendar["cell" + i] = generator;
}