webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/square */ "./components/square.tsx");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");

var _jsxFileName = "C:\\Users\\Devansh Kumar Sharma\\Desktop\\megatropuz\\cal\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2)
      }
    },
    row: {
      display: "inline",
      "float": "left"
    }
  });
});

function Game() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Array(9).fill(null)),
      squares = _useState[0],
      setsquares = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isXNext = _useState2[0],
      setXNext = _useState2[1];

  function renderSquare(i) {
    return __jsx(_components_square__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: function onClick() {
        if (squares[i] != null) {
          return;
        }

        var nextSquares = squares.slice();
        nextSquares[i] = isXNext ? "X" : "O";
        setXNext(!isXNext);
        setsquares(nextSquares);
      },
      value: squares[i],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    });
  }

  function winner(squares) {
    var winninglines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (var j = 0; j < winninglines.length; j++) {
      var _winninglines$j = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(winninglines[j], 3),
          a = _winninglines$j[0],
          b = _winninglines$j[1],
          c = _winninglines$j[2];

      if (squares[a] && squares[a] == squares[b] && squares[c] == squares[a]) {
        return _components_square__WEBPACK_IMPORTED_MODULE_3__["default"][a];
      } else return null;
    }
  }

  function isBoardFull() {
    for (var k = 0; k < squares.length; k++) {
      if (squares[k] == null) return false;
    }

    return true;
  }

  var Winner = winner(squares);

  function getstatus() {
    console.log(isBoardFull());

    if (Winner) {
      return "winner is " + Winner;
    } else {
      if (isBoardFull()) {
        return "game is Draw";
      } else return "Next Player is :- " + (isXNext ? "X" : "O");
    }
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, renderSquare(0), renderSquare(1), renderSquare(2)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, renderSquare(3), renderSquare(4), renderSquare(5)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, renderSquare(6), renderSquare(7), renderSquare(8)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "filled",
    severity: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, getstatus())));
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ })

})
//# sourceMappingURL=index.js.03dd86572c91986ac10e.hot-update.js.map