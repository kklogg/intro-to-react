// DOM helper
var el = React.createElement;

var MyTitle = function(props) {
  return el(
    "div",
    null,
    el("h1", { style: { color: props.color } }, props.title)
  );
};

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
