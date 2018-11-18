// DOM helper
var el = React.createElement;

var MyTitle = function(props) {
  return el(
    "div",
    null,
    el("h1", { style: { color: props.color } }, props.title)
  );
};

export default MyTitle;
