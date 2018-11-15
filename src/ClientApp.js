// DOM helper
var el = React.createElement;

var MyTitle = function() {
    return (
        el('div', null,
            el('h1', null, "Check out this component!")
        )
    );
};

var MyFirstComponent = function() {
    return (
        el('div', null,
        el(MyTitle, null),
        el(MyTitle, null),
        el(MyTitle, null)
        )
    );
};

ReactDOM.render(
    React.createElement(MyFirstComponent),
    document.getElementById("app")
);
