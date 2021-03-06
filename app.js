var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todo = function (_React$Component) {
    _inherits(Todo, _React$Component);

    function Todo() {
        _classCallCheck(this, Todo);

        return _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).apply(this, arguments));
    }

    _createClass(Todo, [{
        key: "render",
        value: function render() {
            var checked = this.props.done == "true";
            return React.createElement(
                "div",
                { className: "todo" },
                React.createElement(
                    "span",
                    null,
                    React.createElement("input", { type: "checkbox", checked: checked }),
                    React.createElement("input", { type: "text", value: this.props.next })
                )
            );
        }
    }]);

    return Todo;
}(React.Component);

ReactDOM.render(React.createElement(Todo, { name: "Todo 1", done: "false" }), document.getElementById('root'));