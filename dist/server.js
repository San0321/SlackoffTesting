module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(3);

	var _app = __webpack_require__(4);

	var _app2 = _interopRequireDefault(_app);

	var _template = __webpack_require__(8);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var server = (0, _express2.default)();

	server.use('/assets', _express2.default.static('assets'));

	server.get('/', function (req, res) {
	  var isMobile = true;
	  var initialState = { isMobile: isMobile };
	  var appString = (0, _server.renderToString)(_react2.default.createElement(_app2.default, initialState));

	  res.send((0, _template2.default)({
	    body: appString,
	    title: 'Hello World from the server',
	    initialState: JSON.stringify(initialState)
	  }));
	});

	server.listen(8080);
	console.log('listening');

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("react-dom/server");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _inputField = __webpack_require__(5);

	var _inputField2 = _interopRequireDefault(_inputField);

	var _category = __webpack_require__(6);

	var _category2 = _interopRequireDefault(_category);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import Login from './login';

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'final' },
	        _react2.default.createElement(
	          'div',
	          { className: 'sk-title' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'How Much Can I Slack Off?'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'sk-range' },
	          _react2.default.createElement(_inputField2.default, null)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'category' },
	          _react2.default.createElement(_category2.default, null)
	        ),
	        _react2.default.createElement('div', null),
	        _react2.default.createElement('div', { className: 'result' })
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;


	App.propTypes = {
	  isMobile: _react.PropTypes.bool.isRequired
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Inputthis = function (_Component) {
	  _inherits(Inputthis, _Component);

	  function Inputthis() {
	    _classCallCheck(this, Inputthis);

	    var _this = _possibleConstructorReturn(this, (Inputthis.__proto__ || Object.getPrototypeOf(Inputthis)).call(this));

	    _this.state = {
	      value: {},
	      setValue: {}
	    };
	    return _this;
	  }
	  /*
	  handleClick(e) {
	    let inputValue = this.state.value;
	    this.setState({ setValue: inputValue });
	    console.log(this.state.setValue);
	  }
	  */


	  _createClass(Inputthis, [{
	    key: 'handleChange',
	    value: function handleChange(e) {
	      /*
	      need to check whether the value is NUMBER
	      if the value is not number clear the input
	      and make an alert saying that u should put in a number
	      
	      if(e.target.value) {
	        }
	      */
	      var range = Integer.parseInt(e.target.value);

	      if (typeof range != 'number') {
	        alert('The Range Should be in Number');
	      } else {
	        var id = e.target.name;
	        this.setState({ id: range });
	      }
	      this.setState({ value: e.target.value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', null)
	      /*
	      <div>
	        <div className="A+">
	          <label>A+</label>
	          <input type="text" name="A+" onChange={this.handleChange.bind(this)} />
	        </div>
	        <div>
	          <label>A</label>
	          <input type="text" name="A" onChange={this.handleChange.bind(this)} />
	        </div>
	        <div />
	          <label>A-</label>
	        <input type="text" name="A-" onChange={this.handleChange.bind(this)} />
	          <label>B+</label>
	        <input type="text" name="B+" onChange={this.handleChange.bind(this)} />
	          <label>B</label>
	        <input type="text" name="title" onChange={this.handleChange.bind(this)} />
	          <label>B-</label>
	        <input type="text" name="title" onChange={this.handleChange.bind(this)} />
	          <label>C+</label>
	        <input type="text" name="title" onChange={this.handleChange.bind(this)} />
	          <label>C</label>
	        <input type="text" name="title" onChange={this.handleChange.bind(this)} />
	          <label>C-</label>
	        <input type="text" name="title" onChange={this.handleChange.bind(this)} />
	      </div>
	      */
	      ;
	    }
	  }]);

	  return Inputthis;
	}(_react.Component);

	exports.default = Inputthis;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _addCategory = __webpack_require__(7);

	var _addCategory2 = _interopRequireDefault(_addCategory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Category = function (_Component) {
	  _inherits(Category, _Component);

	  // get initalState
	  function Category() {
	    _classCallCheck(this, Category);

	    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this));

	    _this.state = {
	      id: ['Participation', 'Homework', 'Midterm', 'Final'],
	      portion: [0, 0, 0, 0],
	      grade: [0, 0, 0, 0],
	      result: ""
	    };
	    return _this;
	  }

	  _createClass(Category, [{
	    key: 'handleClick',
	    value: function handleClick(e) {
	      var inputValue = this.state.value;
	      this.setState({ setValue: inputValue });
	      console.log(this.state.setValue);
	    }
	  }, {
	    key: 'deleteCategory',
	    value: function deleteCategory(name) {
	      // it goes here but idk
	      //debugger;
	      this.state.id.splice(this.state.id.indexOf(name), 1);
	      //console.log(JSON.stringify(name));
	      //this.state.id.splice(this.state.id.indexOf(name), 1);
	      this.setState(this.state);
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      /*
	      need to check whether the value is NUMBER
	      if the value is not number clear the input
	      and make an alert saying that u should put in a number
	      
	      if(e.target.value) {
	        }
	      */
	      this.setState({ value: e.target.value });
	    }
	  }, {
	    key: 'addCateoryChange',
	    value: function addCateoryChange(e) {
	      this.setState({ category: e.target.value });
	    }
	  }, {
	    key: 'addCategoryClick',
	    value: function addCategoryClick(e) {
	      var categoryName = this.state.category;
	      if (categoryName === undefined) {
	        alert('Need to Type Something');
	      } else {
	        categoryName = categoryName.trim();
	        if (categoryName === '') {
	          alert('Need to Type Something');
	        } else {
	          this.state.id.push(categoryName);
	          this.state.portion.push(0);
	          this.state.grade.push(0);
	          this.setState(this.state);
	        }
	      }
	    }
	  }, {
	    key: 'percentageChange',
	    value: function percentageChange(e) {
	      // debugger;
	      //console.log(e.target.id);
	      // e.props.name is the name
	      // e.refs.value is the value
	      //this.setState(:e.refs.value);
	      // console.log(e.props);
	      // console.log(this);

	      var percentage_name = e.refs['percentage_' + e.props.name];
	      //debugger;
	      if (isNaN(percentage_name.value)) {
	        percentage_name.value = percentage_name.value.substring(0, percentage_name.value.length - 1);
	      } else {
	        this.state.portion[this.state.id.indexOf(e.props.name)] = percentage_name.value;
	      }
	      this.setState(this.state);
	    }
	  }, {
	    key: 'gradeChange',
	    value: function gradeChange(e) {
	      var grade_name = e.refs['grade_' + e.props.name];
	      if (isNaN(grade_name.value)) {
	        grade_name.value = grade_name.value.substring(0, grade_name.value.length - 1);
	      } else {
	        this.state.grade[this.state.id.indexOf(e.props.name)] = grade_name.value;
	      }
	      this.setState(this.state);
	    }
	  }, {
	    key: 'submitCalc',
	    value: function submitCalc() {
	      this.state.result = "";
	      var temp = 0.0;
	      for (var i = 0; i < this.state.id.length; i++) {
	        var perGrade = this.state.portion[i] * 0.01 * this.state.grade[i];
	        this.state.result += this.state.id[i];
	        this.state.result += ' : ';
	        this.state.result += perGrade;
	        this.state.result += '% ';
	        temp += perGrade;
	      }
	      this.state.result += "Your Overall grade is Currently " + temp + "%";
	      debugger;

	      /*
	        Participation : %
	        HomeWork : %
	        Midterm : %
	        Overall : %
	       */
	      this.setState(this.state);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return (
	        // initial state
	        _react2.default.createElement(
	          'div',
	          null,
	          this.state.id.map(function (item) {
	            return _react2.default.createElement(_addCategory2.default, {
	              key: item,
	              name: item,
	              deleteButton: _this2.deleteCategory.bind(_this2),
	              percentage: _this2.percentageChange.bind(_this2),
	              grade: _this2.gradeChange.bind(_this2),
	              categories: _this2.state.id
	            });
	          }),
	          _react2.default.createElement('input', { type: 'text', ref: 'category', onChange: this.addCateoryChange.bind(this), placeholder: 'Category' }),
	          _react2.default.createElement(
	            'button',
	            { id: 'addCategoryButton', name: 'add', onClick: this.addCategoryClick.bind(this) },
	            '+'
	          ),
	          _react2.default.createElement(
	            'button',
	            { id: 'submitButton', name: 'submit', onClick: this.submitCalc.bind(this) },
	            'Calculate'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            this.state.result
	          )
	        )
	      );
	    }
	  }]);

	  return Category;
	}(_react.Component);

	/*


	 <p>Homework</p>
	        <button name="erase" onClick={this.handleClick.bind(this)}>
	          -
	        </button>
	        <input type="text" onChange={this.handleChange.bind(this)} placeholder="32 (without percentage symbol)" />
	        <p>Midterm</p>
	        <button name="erase" onClick={this.handleClick.bind(this)}>
	          -
	        </button>
	        <input type="text" onChange={this.handleChange.bind(this)} placeholder="32 (without percentage symbol)" />
	        <p>Final</p>
	        <button name="erase" onClick={this.handleClick.bind(this)}>
	          -
	        </button>
	        <input type="text" onChange={this.handleChange.bind(this)} placeholder="32 (without percentage symbol)" />
	        */


	exports.default = Category;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Category = function (_React$Component) {
	  _inherits(Category, _React$Component);

	  function Category(props) {
	    _classCallCheck(this, Category);

	    return _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this, props));
	  }
	  /*
	  deleteCategory() {
	    this.props.deleteCategory('12');
	  }
	  */

	  _createClass(Category, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var idForDelete = 'erase_' + this.props.name;
	      var refForPercentage = 'percentage_' + this.props.name;
	      var refForGrade = 'grade_' + this.props.name;
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'button',
	          { id: idForDelete, onClick: function onClick() {
	              return _this2.props.deleteButton(_this2.props.name);
	            } },
	          '-'
	        ),
	        _react2.default.createElement(
	          'label',
	          null,
	          this.props.name
	        ),
	        _react2.default.createElement('input', {
	          type: 'text',
	          id: 'portion',
	          ref: refForPercentage,
	          onChange: function onChange() {
	            return _this2.props.percentage(_this2);
	          },
	          placeholder: 'Percentage (without the symbol)'
	        }),
	        _react2.default.createElement('input', {
	          type: 'text',
	          id: 'grade',
	          ref: refForGrade,
	          onChange: function onChange() {
	            return _this2.props.grade(_this2);
	          },
	          placeholder: 'My Grade'
	        })
	      );
	    }
	  }]);

	  return Category;
	}(_react2.default.Component);

	exports.default = Category;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var body = _ref.body,
	      title = _ref.title,
	      initialState = _ref.initialState;

	  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <script src=\"https://www.gstatic.com/firebasejs/4.8.1/firebase.js\"></script>\n        <script>\n          // Initialize Firebase\n          var config = {\n            apiKey: \"AIzaSyDBeT6tORtwV6FE-6tN9S4t13j4m8eTQ-k\",\n            authDomain: \"slackoff-37e72.firebaseapp.com\",\n            databaseURL: \"https://slackoff-37e72.firebaseio.com\",\n            projectId: \"slackoff-37e72\",\n            storageBucket: \"slackoff-37e72.appspot.com\",\n            messagingSenderId: \"678929575073\"\n          };\n          firebase.initializeApp(config);\n        </script>\n        <script>window.__APP_INITIAL_STATE__ = " + initialState + "</script>\n        <title>" + title + "</title>\n        <link rel=\"stylesheet\" href=\"/assets/index.css\" />\n      </head>\n      \n      <body>\n        <div id=\"root\">" + body + "</div>\n      </body>\n      \n      <script src=\"/assets/bundle.js\"></script>\n    </html>\n  ";
	};

/***/ })
/******/ ]);