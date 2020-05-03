"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./App.css");

var _Dialog = _interopRequireDefault(require("./components/DialogProvider/Dialog"));

var _OpenDialog = _interopRequireDefault(require("./components/Buttons/OpenDialog/OpenDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/_react.default.createElement(_Dialog.default, null, /*#__PURE__*/_react.default.createElement(_OpenDialog.default, null));
}

var _default = App;
exports.default = _default;

//# sourceMappingURL=App.js.map