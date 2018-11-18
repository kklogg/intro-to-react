import MyTitle from "./MyTitle.js";

// DOM helper
var el = React.createElement;

var MyFirstComponent = function() {
  return el(
    "div",
    null,
    el(MyTitle, { color: "rebeccapurple", title: "House of Cards" }),
    el(MyTitle, { color: "peru", title: "Orange is the New Black" }),
    el(MyTitle, { color: "burlywood", title: "Stranger Things" })
  );
};

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById("app")
);
