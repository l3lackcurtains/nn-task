'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _single = require('./single');

var _single2 = _interopRequireDefault(_single);

var _multiple = require('./multiple');

var _multiple2 = _interopRequireDefault(_multiple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  task: _single2.default,
  tasks: _multiple2.default
};
//# sourceMappingURL=index.js.map