'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Sets css variables on the body to use in css for viewport height and width.
 * Sets --app-height and --app-width
 */
var ReactCssSizes = function (_Component) {
    _inherits(ReactCssSizes, _Component);

    function ReactCssSizes() {
        _classCallCheck(this, ReactCssSizes);

        return _possibleConstructorReturn(this, (ReactCssSizes.__proto__ || Object.getPrototypeOf(ReactCssSizes)).apply(this, arguments));
    }

    _createClass(ReactCssSizes, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!window | !document) {
                return false;
            }

            this.init();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.destroy();
        }
    }, {
        key: 'init',
        value: function init() {
            window.addEventListener('resize', this.setSizes);
            this.setSizes();
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            window.removeEventListener('resize', this.setSizes);
        }
    }, {
        key: 'setSizes',
        value: function setSizes() {
            this.timeout = null;
            this.timeout = setTimeout(function () {
                document.body.style.setProperty('--app-height', window.innerHeight + 'px');
                document.body.style.setProperty('--app-width', window.innerWidth + 'px');
            }, 200);
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return ReactCssSizes;
}(_react.Component);

exports.default = ReactCssSizes;