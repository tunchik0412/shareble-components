"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultContextValue = {
  isOpen: false,
  openDialog: function openDialog() {},
  closeDialog: undefined
};

var _default = _react.default.createContext(defaultContextValue);

exports.default = _default;

//# sourceMappingURL=DialogContext.js.map