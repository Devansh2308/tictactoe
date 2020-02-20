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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

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
      display: "flex",
      flexDirection: "row"
    }
  });
});

function Game() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Array(9).fill("-")),
      squares = _useState[0],
      setsquares = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isXNext = _useState2[0],
      setXNext = _useState2[1];

  function renderSquare(i) {
    return __jsx(_components_square__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: function onClick() {
        if (squares[i] != "-") {
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
        lineNumber: 29
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

      console.log(j);

      if (squares[a] =  false && false) {
        return squares[a];
      }
    }

    return null;
  }

  function reset() {
    var resetSquares = squares.slice();

    for (var m = 0; m < resetSquares.length; m++) {
      resetSquares[m] = "-";
    }

    setsquares(resetSquares);
  }

  function isBoardFull() {
    for (var k = 0; k < squares.length; k++) {
      if (squares[k] == "-") return false;
    }

    return true;
  }

  var Winner = winner(squares);

  function getstatus() {
    console.log(Winner);

    if (false) {} else {
      if (isBoardFull()) {
        return "game is Draw";
      } else return "Next Player is - " + (isXNext ? "X" : "O");
    }
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, renderSquare(0), renderSquare(1), renderSquare(2)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, renderSquare(3), renderSquare(4), renderSquare(5)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, renderSquare(6), renderSquare(7), renderSquare(8)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "filled",
    severity: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Game Info :- ", getstatus())), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "contained",
    color: "primary",
    onClick: reset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Reset")));
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ })

})
//# sourceMappingURL=index.js.530930ce88fe1f06102c.hot-update.js.map