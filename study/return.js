"use strict";

let state = {};
let widgets = [];

function render() {
  for (const widgetFn of widgets) {
    console.log(widgetFn());
  }
}

function useState(name, initialValue) {
  state[name] ||= initialValue;
  return [
    state[name],
    (newValue) => {
      state[name] = newValue;
      render();
    },
  ];
}

function Widget() {
  const [x, setX] = useState("x", 5);
  return `x: ${x}`;
}

function OtherWidget() {
  const [label, setLabel] = useState("label", "default value");
  return `${label} ${Widget()}`;
}

widgets.push(OtherWidget);
render();

const [x, setX] = useState("x", null);
const [label, setLabel] = useState("label", null);
console.log(`x value before setX: ${x}`);
setX(42);
console.log(`x value after setX: ${x}`);
