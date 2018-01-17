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

	var _template = __webpack_require__(15);

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

	server.listen(process.env.PORT || 8080, function () {
	  console.log('listening on ' + process.env.PORT);
	});

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

	var _modal = __webpack_require__(10);

	var _modal2 = _interopRequireDefault(_modal);

	var _firebase = __webpack_require__(8);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.state = {
	      user: null,
	      initial: false,
	      reset: false
	    };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'dataTransfer',
	    value: function dataTransfer(loginInfo) {
	      this.setState({ user: loginInfo.user, initial: loginInfo.initial, reset: loginInfo.reset });
	      debugger;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'container', id: 'final' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(_modal2.default, { className: 'text-center col-lg-1', datatransfer: this.dataTransfer.bind(this) }),
	          _react2.default.createElement(
	            'h1',
	            { className: 'page-header text-center' },
	            'How Much Can I Slack Off?'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row container text-justify' },
	          _react2.default.createElement(_category2.default, { datatransfer: this.dataTransfer.bind(this), emailAccount: this.state })
	        ),
	        _react2.default.createElement('div', { className: 'row' })
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

	var _firebase = __webpack_require__(8);

	var _firebase2 = _interopRequireDefault(_firebase);

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
	      result: '',
	      loaded: false
	    };
	    return _this;
	  }

	  _createClass(Category, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var self = this;
	      var loginPromise = new Promise(function (resolve, reject) {
	        _firebase2.default.auth().onAuthStateChanged(function (user) {
	          if (user) {
	            // pass it to then
	            resolve(_firebase2.default.auth().currentUser.email.split('@')[0]);
	          } else {
	            // No user is signed in.
	            reject();
	          }
	        });
	      });
	      var setUser = function setUser() {
	        loginPromise.then(function (userId) {
	          // if the user is logged in, retrieve the existing data
	          _firebase2.default.database().ref('/users/' + userId).once('value').then(function (snapshot) {
	            var data = snapshot.val();
	            data.loaded = true;
	            self.setState(data);
	          });
	        }).catch(function (error) {
	          console.log(error);
	        });
	      };
	      setUser();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.emailAccount.user != null) {
	        var userId = this.props.emailAccount.user.split('@')[0];
	        var checkData = function checkData(work, userId) {
	          _firebase2.default.database().ref('/users/' + userId).once('value').then(function (snapshot) {
	            var data = snapshot.val();
	            data.loaded = true;
	            work.setState(data);
	          });
	        };
	        if (this.props.emailAccount.initial) {
	          checkData(this, userId);
	          this.props.emailAccount.initial = false;
	        }
	      }
	      if (this.props.emailAccount.reset) {
	        this.setState({
	          id: ['Participation', 'Homework', 'Midterm', 'Final'],
	          portion: [0, 0, 0, 0],
	          grade: [0, 0, 0, 0],
	          result: '',
	          loaded: false
	        });
	        this.props.emailAccount.reset = false;
	      }
	    }
	  }, {
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
	      var index = this.state.id.indexOf(name);

	      // delete the information from the state
	      this.state.id.splice(index, 1);
	      this.state.portion.splice(index, 1);
	      this.state.grade.splice(index, 1);
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
	          this.state.portion.push("");
	          this.state.grade.push("");
	          // reset the input field
	          this.refs.category.value = '';
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
	    value: function submitCalc(e) {
	      e.preventDefault();
	      this.state.result = '';
	      var temp = 0.0;
	      for (var i = 0; i < this.state.id.length; i++) {
	        var perGrade = this.state.portion[i] * 0.01 * this.state.grade[i];
	        this.state.result += this.state.id[i];
	        this.state.result += ' : ';
	        this.state.result += perGrade;
	        this.state.result += '% ';
	        temp += perGrade;
	      }
	      this.state.result += ' \n Your Overall grade is Currently ' + temp + '%';

	      /*
	        Participation : %
	        HomeWork : %
	        Midterm : %
	        Overall : %
	       */
	      this.setState(this.state);
	    }
	  }, {
	    key: 'saveGrade',
	    value: function saveGrade() {
	      var toBeSaved = this.state;
	      toBeSaved.result = "";
	      _firebase2.default.auth().onAuthStateChanged(function (user) {
	        if (user) {
	          _firebase2.default.database().ref('users/' + _firebase2.default.auth().currentUser.email.split('@')[0]).set(toBeSaved);
	        } else {
	          // No user is signed in.
	          alert('Need to Sign in to save data');
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return (
	        // initial state
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          this.state.id.map(function (item) {
	            return _react2.default.createElement(_addCategory2.default, {
	              key: item,
	              name: item,
	              deleteButton: _this2.deleteCategory.bind(_this2),
	              percentage: _this2.percentageChange.bind(_this2),
	              grade: _this2.gradeChange.bind(_this2),
	              categories: _this2.state.id,
	              data: _this2.state,
	              reset: _this2.props.emailAccount.reset
	            });
	          }),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement('input', { className: 'col-lg-10', type: 'text', ref: 'category', onChange: this.addCateoryChange.bind(this), placeholder: 'Category' }),
	            _react2.default.createElement(
	              'button',
	              { className: 'btn btn-success btn-sm col-lg-1', id: 'addCategoryButton', name: 'add', onClick: this.addCategoryClick.bind(this) },
	              _react2.default.createElement('span', { className: 'glyphicon glyphicon-plus' })
	            ),
	            _react2.default.createElement(
	              'button',
	              { className: 'btn btn-default col-lg-1', id: 'submitButton', name: 'submit', onClick: this.submitCalc.bind(this) },
	              'Calculate'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'p',
	              { className: 'row' },
	              this.state.result
	            ),
	            _react2.default.createElement(
	              'button',
	              { className: 'btn btn-outline-info text-center btn-block', onClick: this.saveGrade.bind(this) },
	              'Save'
	            )
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
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      console.log('When I am being called?');
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.data.loaded) {
	        // for (let i = 0; i < this.props.categories.length; i++) {
	        // let this.refs
	        console.log(this.props.name);
	        var percentage = this.refs['percentage_' + this.props.name];
	        var grade = this.refs['grade_' + this.props.name];
	        percentage.value = this.props.data.portion[this.props.categories.indexOf(this.props.name)];
	        grade.value = this.props.data.grade[this.props.categories.indexOf(this.props.name)];
	        //    }
	      }
	      if (this.props.reset) {
	        var _percentage = this.refs['percentage_' + this.props.name];
	        var _grade = this.refs['grade_' + this.props.name];
	        _percentage.value = '';
	        _grade.value = '';
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.data.loaded) {
	        // for (let i = 0; i < this.props.categories.length; i++) {
	        // let this.refs
	        console.log(this.props.name);
	        var percentage = this.refs['percentage_' + this.props.name];
	        var grade = this.refs['grade_' + this.props.name];
	        percentage.value = this.props.data.portion[this.props.categories.indexOf(this.props.name)];
	        grade.value = this.props.data.grade[this.props.categories.indexOf(this.props.name)];
	        //    }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var idForDelete = 'erase_' + this.props.name;
	      var refForPercentage = 'percentage_' + this.props.name;
	      var refForGrade = 'grade_' + this.props.name;
	      return _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          'button',
	          { className: 'btn btn-danger btn-sm col-lg-1 col-xs-1', id: idForDelete, onClick: function onClick() {
	              return _this2.props.deleteButton(_this2.props.name);
	            } },
	          _react2.default.createElement('span', { className: 'glyphicon glyphicon-minus' })
	        ),
	        _react2.default.createElement(
	          'label',
	          { className: 'col-lg-5 col-xs-5' },
	          this.props.name
	        ),
	        _react2.default.createElement('input', {
	          type: 'text',
	          id: refForPercentage,
	          ref: refForPercentage,
	          onChange: function onChange() {
	            return _this2.props.percentage(_this2);
	          },
	          placeholder: 'Percentage (without the symbol)',
	          className: 'col-lg-3 col-xs-3'
	        }),
	        _react2.default.createElement('input', {
	          type: 'text',
	          id: refForGrade,
	          ref: refForGrade,
	          onChange: function onChange() {
	            return _this2.props.grade(_this2);
	          },
	          placeholder: 'My Grade',
	          className: 'col-lg-3 col-xs-3'
	        })
	      );
	    }
	  }]);

	  return Category;
	}(_react2.default.Component);

	exports.default = Category;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.auth = exports.provider = undefined;

	var _firebase = __webpack_require__(9);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var config = {
	    apiKey: "AIzaSyDBeT6tORtwV6FE-6tN9S4t13j4m8eTQ-k",
	    authDomain: "slackoff-37e72.firebaseapp.com",
	    databaseURL: "https://slackoff-37e72.firebaseio.com",
	    projectId: "slackoff-37e72",
	    storageBucket: "slackoff-37e72.appspot.com",
	    messagingSenderId: "678929575073"
	}; // Initialize Firebase

	_firebase2.default.initializeApp(config);
	var provider = exports.provider = new _firebase2.default.auth.GoogleAuthProvider();
	var auth = exports.auth = _firebase2.default.auth();
	exports.default = _firebase2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("firebase");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactModal = __webpack_require__(11);

	var _reactModal2 = _interopRequireDefault(_reactModal);

	var _wrapper = __webpack_require__(12);

	var _wrapper2 = _interopRequireDefault(_wrapper);

	var _firebase = __webpack_require__(9);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var customStyles = {
	  content: {
	    top: '50%',
	    left: '50%',
	    right: 'auto',
	    bottom: 'auto',
	    marginRight: '-50%',
	    transform: 'translate(-50%, -50%)'
	  }
	};

	var Popup = function (_Component) {
	  _inherits(Popup, _Component);

	  // get initalState
	  function Popup() {
	    _classCallCheck(this, Popup);

	    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this));

	    _this.state = {
	      modalIsOpen: false,
	      signIn: false,
	      user: null
	    };

	    _this.openModal = _this.openModal.bind(_this);
	    _this.afterOpenModal = _this.afterOpenModal.bind(_this);
	    _this.closeModal = _this.closeModal.bind(_this);
	    _this.logOut = _this.logOut.bind(_this);
	    return _this;
	  }

	  _createClass(Popup, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      //   let loginState = this.state.user;
	      var loginPromise = new Promise(function (resolve, reject) {
	        _firebase2.default.auth().onAuthStateChanged(function (user) {
	          if (user) {
	            resolve(_firebase2.default.auth().currentUser.email);
	          } else {
	            // No user is signed in.
	            reject();
	          }
	        });
	      });
	      var setUser = function setUser(work) {
	        loginPromise.then(function (userEmail) {
	          // assign user email to the state
	          work.setState({ user: userEmail });
	        }).catch(function (error) {});
	      };
	      setUser(this);
	      /*
	      firebase.auth().onAuthStateChanged(this, function(user) {
	        if (user) {
	          debugger;
	          this.setState({ user: firebase.auth().currentUser.email });
	          //this.setState({ user: loginState });
	          //  debugger;
	          // state({ user: loginState });
	        } else {
	          // No user is signed in.
	        }
	      });
	      */
	      //    this.setState({ user: loginState });
	      /*
	      let isLogin = false;
	      let emailAddress = '';
	      isLogin = firebase.auth().onAuthStateChanged(function(user) {
	        if (user) {
	          //  debugger;
	          emailAddress = firebase.auth().currentUser.email;
	          return true;
	          //  this.state = { user: firebase.auth().currentUser.email };
	        } else {
	          // No user is signed in.
	          return false;
	        }
	      });
	      debugger;
	      if (isLogin) {
	        this.setState({ user: emailAddress });
	      }
	      */
	    }
	  }, {
	    key: 'openModal',
	    value: function openModal() {
	      this.setState({ modalIsOpen: true });
	    }
	  }, {
	    key: 'openSignUp',
	    value: function openSignUp() {
	      this.setState({ modalIsOpen: true, signIn: false });
	    }
	  }, {
	    key: 'openSignIn',
	    value: function openSignIn() {
	      this.setState({ modalIsOpen: true, signIn: true });
	    }
	  }, {
	    key: 'afterOpenModal',
	    value: function afterOpenModal() {
	      // references are now sync'd and can be accessed.
	      //this.subtitle.style.color = '#f00';
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      this.setState({ modalIsOpen: false });
	    }
	  }, {
	    key: 'logOut',
	    value: function logOut() {
	      var logOutPromise = new Promise(function (resolve, reject) {
	        _firebase2.default.auth().signOut().then(function () {
	          resolve();
	        }).catch(function (error) {
	          reject(error);
	        });
	      });
	      var setUser = function setUser(work) {
	        logOutPromise.then(function () {
	          // assign empty user to the state
	          work.props.datatransfer({ reset: true });
	          work.setState({ modalIsOpen: false, user: null });
	        }).catch(function (error) {
	          console.log(error);
	        });
	      };
	      setUser(this);
	      /*
	      debugger;
	      let flag = firebase
	        .auth()
	        .signOut()
	        .then(function() {
	          // Sign-out successful.\
	          debugger;
	          return true;
	        })
	        .catch(function(error) {
	          //   debugger;
	          console.log(error);
	          return false;
	        });
	      if (flag) {
	        this.setState({ modalIsOpen: false, user: null });
	      }
	      */
	      /*
	      debugger;
	      if (loginState === null) {
	        this.setState({ user: loginState });
	      }
	      */
	    }
	  }, {
	    key: 'checkLogin',
	    value: function checkLogin() {
	      /*
	      let loginState = this.state.user;
	        loginState = firebase.auth().onAuthStateChanged(function(user) {
	        if (user) {
	          console.log('user has been logged out');
	          return firebase.auth().currentUser.email;
	          //this.setState({ user: loginState });
	          //  debugger;
	          // state({ user: loginState });
	        } else {
	          return null;
	          // No user is signed in.
	        }
	      });
	        this.setState({ user: loginState });
	          */
	      var loginPromise = new Promise(function (resolve, reject) {
	        _firebase2.default.auth().onAuthStateChanged(function (user) {
	          if (user) {
	            // pass it to then
	            resolve(_firebase2.default.auth().currentUser.email);
	          } else {
	            // No user is signed in.
	            reject();
	          }
	        });
	      });
	      var setUser = function setUser(work) {
	        loginPromise.then(function (userEmail) {
	          // assign user email to the state
	          // if it was the first page access, get the data from the database and close the modal
	          work.props.datatransfer({ user: userEmail, initial: true, reset: false });
	          work.setState({ modalIsOpen: false, user: userEmail });
	        }).catch(function (error) {});
	      };
	      setUser(this);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'btn-group btn-group-ln', role: 'group' },
	        this.state.user ? _react2.default.createElement(
	          'button',
	          { className: 'btn btn-default', onClick: this.logOut.bind(this) },
	          'Log Out'
	        ) : _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'button',
	            { className: 'btn btn-default', onClick: this.openSignIn.bind(this) },
	            'Sign In'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'btn btn-default', onClick: this.openSignUp.bind(this) },
	            'Sign Up'
	          ),
	          _react2.default.createElement(
	            _reactModal2.default,
	            {
	              id: 'Login',
	              isOpen: this.state.modalIsOpen,
	              onAfterOpen: this.afterOpenModal,
	              onRequestClose: this.closeModal,
	              style: customStyles,
	              contentLabel: 'Example Modal'
	            },
	            _react2.default.createElement(
	              'div',
	              { className: 'btn-group btn-group-toggle text-center' },
	              _react2.default.createElement(
	                'button',
	                { className: 'btn btn-secondary', type: true, onClick: this.openSignIn.bind(this) },
	                ' Sign-In Tab '
	              ),
	              _react2.default.createElement(
	                'button',
	                { className: 'btn btn-secondary', onClick: this.openSignUp.bind(this) },
	                ' Sign-Up Tab '
	              )
	            ),
	            _react2.default.createElement(_wrapper2.default, { signIn: this.state.signIn, checking: this.checkLogin.bind(this) })
	          )
	        )
	      );
	    }
	  }]);

	  return Popup;
	}(_react.Component);

	/*
	<button onClick={this.closeModal}>close</button>
	 */


	exports.default = Popup;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = require("react-modal");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _login = __webpack_require__(13);

	var _login2 = _interopRequireDefault(_login);

	var _signup = __webpack_require__(14);

	var _signup2 = _interopRequireDefault(_signup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Wrapper = function (_Component) {
	  _inherits(Wrapper, _Component);

	  // get initalState
	  function Wrapper(props) {
	    _classCallCheck(this, Wrapper);

	    var _this = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props));

	    _this.state = {
	      signIn: _this.props.signIn
	    };
	    return _this;
	  }

	  _createClass(Wrapper, [{
	    key: 'checkTab',
	    value: function checkTab() {
	      // if sign in assgin signin
	      // if sign up assgin signup
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.signIn) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Sign-In'
	          ),
	          _react2.default.createElement(_login2.default, { checking: this.props.checking })
	        );
	      } else {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Sign-Up'
	          ),
	          _react2.default.createElement(_signup2.default, { checking: this.props.checking })
	        );
	      }

	      // check what to render between sign in and sign up
	    }
	  }]);

	  return Wrapper;
	}(_react.Component);
	/*

	 */


	exports.default = Wrapper;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(8);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Login = function (_Component) {
	  _inherits(Login, _Component);

	  // get initalState
	  function Login() {
	    _classCallCheck(this, Login);

	    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

	    _this.state = {
	      username: '',
	      password: ''
	    };
	    return _this;
	  }

	  _createClass(Login, [{
	    key: 'handleChangeId',
	    value: function handleChangeId(e) {
	      this.setState({
	        username: e.target.value
	      });
	    }
	  }, {
	    key: 'handleChangePw',
	    value: function handleChangePw(e) {
	      this.setState({
	        password: e.target.value
	      });
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      e.preventDefault();
	      /*
	      firebase
	        .auth()
	        .signInWithEmailAndPassword(this.state.username, this.state.password)
	        .then(function() {
	          this.props.checking();
	        })
	        .catch(function(error) {
	          // Handle Errors here.
	          var errorCode = error.code;
	          var errorMessage = error.message;
	          if (errorCode === 'auth/wrong-password') {
	            alert('Wrong password.');
	          } else {
	            alert(errorMessage);
	          }
	          console.log(error);
	          // ...
	        });
	      */
	      /*
	      let loginPromise = new Promise(function(resolve, reject) {
	        firebase
	          .auth()
	          .signInWithEmailAndPassword(email, password)
	          .then(function() {
	            debugger;
	            resolve();
	          })
	          .catch(function(error) {
	            var errorCode = error.code;
	            var errorMessage = error.message;
	            if (errorCode === 'auth/wrong-password') {
	              alert('Wrong password.');
	            } else {
	              alert(errorMessage);
	            }
	            console.log(error);
	            reject();
	          });
	      });
	      */
	      var setUser = function setUser(work, email, password) {
	        _firebase2.default.auth().signInWithEmailAndPassword(email, password).then(function () {
	          // change the button layout
	          work.props.checking();
	        }).catch(function (error) {
	          var errorCode = error.code;
	          var errorMessage = error.message;
	          if (errorCode === 'auth/wrong-password') {
	            alert('Wrong password.');
	          } else {
	            alert(errorMessage);
	          }
	          console.log(error);
	        });
	      };
	      setUser(this, this.state.username, this.state.password);

	      /*
	      let loginPromise = new Promise(function(resolve, reject) {
	        firebase.auth().onAuthStateChanged(function(user) {
	          if (user) {
	            debugger;
	            resolve(firebase.auth().currentUser.email);
	          } else {
	            debugger;
	            // No user is signed in.
	            reject();
	          }
	        });
	      });
	      let setUser = function(work) {
	        loginPromise
	          .then(function(userEmail) {
	            // assign user email to the state
	            debugger;
	            work.setState({ modalIsOpen: false, user: userEmail });
	          })
	          .catch(function(error) {});
	      };
	      setUser(this);
	      */
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'form',
	          { onSubmit: this.handleSubmit.bind(this) },
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'label',
	              null,
	              'Email address'
	            ),
	            _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'id', onChange: this.handleChangeId.bind(this), value: this.state.username })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'label',
	              null,
	              'Password'
	            ),
	            _react2.default.createElement('input', {
	              type: 'password',
	              id: 'password',
	              onChange: this.handleChangePw.bind(this),
	              value: this.state.password,
	              className: 'form-control'
	            })
	          ),
	          _react2.default.createElement('input', { type: 'submit', className: 'btn btn-default btn-block', value: 'Login' })
	        )
	      );
	    }
	  }]);

	  return Login;
	}(_react.Component);

	exports.default = Login;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(8);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SignUp = function (_Component) {
	  _inherits(SignUp, _Component);

	  // get initalState
	  function SignUp() {
	    _classCallCheck(this, SignUp);

	    var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this));

	    _this.state = {
	      username: '',
	      password: ''
	    };
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }

	  _createClass(SignUp, [{
	    key: 'handleChangeId',
	    value: function handleChangeId(e) {
	      this.setState({
	        username: e.target.value
	      });
	    }
	  }, {
	    key: 'handleChangePw',
	    value: function handleChangePw(e) {
	      this.setState({
	        password: e.target.value
	      });
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      e.preventDefault();
	      var setUser = function setUser(work, email, password) {
	        _firebase2.default.auth().createUserWithEmailAndPassword(email, password).then(function () {
	          // change the button layout
	          work.props.checking();
	        }).catch(function (error) {
	          var errorCode = error.code;
	          var errorMessage = error.message;
	          if (errorCode === 'auth/wrong-password') {
	            alert('Wrong password.');
	          } else {
	            alert(errorMessage);
	          }
	          console.log(error);
	        });
	      };
	      setUser(this, this.state.username, this.state.password);

	      /*
	      const accountRef = firebase.database().ref('account');
	      const item = {
	        title: this.state.username,
	        user: this.state.username
	      };
	      itemsRef.push(item);
	      this.setState({
	        currentItem: '',
	        username: ''
	      });
	      */
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'form',
	          { onSubmit: this.handleSubmit },
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'label',
	              null,
	              'Email address'
	            ),
	            _react2.default.createElement('input', { type: 'text', id: 'id', className: 'form-control', onChange: this.handleChangeId.bind(this), value: this.state.username })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'label',
	              null,
	              'Password'
	            ),
	            _react2.default.createElement('input', {
	              type: 'password',
	              id: 'password',
	              onChange: this.handleChangePw.bind(this),
	              value: this.state.password,
	              className: 'form-control'
	            })
	          ),
	          _react2.default.createElement('input', { type: 'submit', value: 'Sign Up', className: 'btn btn-default btn-block' })
	        )
	      );
	    }
	  }]);

	  return SignUp;
	}(_react.Component);

	exports.default = SignUp;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var body = _ref.body,
	      title = _ref.title,
	      initialState = _ref.initialState;

	  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <script>window.__APP_INITIAL_STATE__ = " + initialState + "</script>\n        <title>" + title + "</title>\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n        <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n      </head>\n      \n      <body>\n        <div class=\"container\" id=\"root\">" + body + "</div>\n      </body>\n      \n      <script src=\"/assets/bundle.js\"></script>\n    </html>\n  ";
	};

/***/ })
/******/ ]);