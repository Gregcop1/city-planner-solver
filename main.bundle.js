webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <app-controls></app-controls>\n  <app-board></app-board>\n  <app-rules></app-rules>\n  <app-piece-list></app-piece-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-container {\n  display: inline-block;\n  position: relative;\n  margin: 40px auto 0;\n  width: 900px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_board_board_component__ = __webpack_require__("../../../../../src/components/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_controls_controls_component__ = __webpack_require__("../../../../../src/components/controls/controls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_frame_frame_component__ = __webpack_require__("../../../../../src/components/frame/frame.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_piece_list_piece_list_component__ = __webpack_require__("../../../../../src/components/piece-list/piece-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_row_row_component__ = __webpack_require__("../../../../../src/components/row/row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_rules_rules_component__ = __webpack_require__("../../../../../src/components/rules/rules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_board_service__ = __webpack_require__("../../../../../src/services/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_pieces_service__ = __webpack_require__("../../../../../src/services/pieces.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_board_board_component__["a" /* BoardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_frame_frame_component__["a" /* FrameComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_row_row_component__["a" /* RowComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_piece_list_piece_list_component__["a" /* PieceListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_controls_controls_component__["a" /* ControlsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_rules_rules_component__["a" /* RulesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_board_service__["a" /* BoardService */],
            __WEBPACK_IMPORTED_MODULE_10__services_pieces_service__["a" /* PiecesService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/assets/img/lamp.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEDFSsUzsre+AAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAEl0lEQVR42u2dzW7UVhSAr++P7WEFvAKLqvxEZdNhIgLLqsAImkWlIbu8Acs8QZe8QXaoUhbOjGYAdTk/miHdUHkmVJXKK6QsUMb2/esiUQUoqhJ8PP473wN47PP53Huu7TmXEARBEARBEARBEARBEARBEARBkGrjlOVEw9H+DqW07Tj0mkPpZYdS4TjUcZzPL8FaS6w11hojrTEfrDV/G2MGa/d++gWFpBEwDJqUseeU8e8Y4w2H0lTHs8YQrdXSaPWH0frZ2v3NAxRyDubj7h7j4hEXbiPL31EyWWolB7c2nvyMQs5gMelNmXDvMMZXek5aK6tl8ubm3cfrKOQkIwbc9R6sWsRZYlQSv7q18eRRLYWEo6DDhbfLhesXachQMomUjLfX7m3+Whshi0lvKrxG68sKqShYa4mMl7M8hrGVR+Rw2j8Srn+lDCWoTKJ/bqy3r1ZSSDgMmtz1xly4okwLNSUTqZJ4Y1VlMl2JjFHQEX5jVjYZhBDChSuE35iFo6BTiQwJR0HH9S69oIw5pMQYrW0SH29lPdlnGqRwGDSF35jlXdJClsYyWrayHL4yHbK4642rIoMQQhjjDne9cSnnkMNp/6iMc8Z55pTDaf+oVEIWk960LKXt1yBc/8pi0puWQkg4CjrCa7RIxRFeo5VF5UXhU9rbLeoKHLQachzChbdbaCHzcXdQtGdTGc8n/nzcHRRWCHe9B6RmQF8zmJDFpDetUol7kVIYcoIHE8KEe4fUFMhrBxEyH3f36pgdn2bJfNzdK4wQxkWb1ByoGKQWEg6DZp0qq/+ruMJh0MxdCGXsOUHAYgEghN9GFXCxSC2EMe6jCrhYpBISjvZ30n5RWCUcSkk42t/JTQiltI0aYGOSSojj0GuoADYmNGWKXkYFsDFJK0SgAtiYpB2yHFQAG5OUQtAHdEywZi1alYYhQCFIVkKstRhB4JikFGLQCHBM0gkxRqIC2JikFfIBFcDGJO2Q9R4VwMYklRBjTB8VwMYk9VL7r99/s/hO5L/hinzz/Q/5PTohhBCtVYQq4GKRWojR6i2qgIsFgBD9DFXAxQLkce272ctl3b/NUjKJrrceNnLPEEII0UrWvtqCigHYC40/D16bun7fq7Wy3zZ/BLm5wepVLZM3tc0OwGsHvaPrmCWQ2QGaIYQQopL4Ve0mc+BrBr+b61RxQVVWmWXIyUnG23V4cWWtJUrG29DHzWS8X0x6U9e/VOn/qifRcSYNzjKbgMvUqOyiZNnYLNOK6N3sZVK1fidKJvJ666Gb1fEzfW6uknhDa1WZCeW0c+lGlr+RqZC1+5sHMl5uGa1LL8VobWW83Mq61d9KFnGnDWlelHXRqLU6kbGC1rHYBPMcc8Yqm2Bim9icqqlc5pCzuLHevppEx7MiLx6ttSSJjmerlpGLEEIIuXn38Xq8/PhUyaRw7+OVTKJ4+fFpXs35sRn/5yVtfZvxfwluV1EwIZ9kzB7jop31E2Mlk0gr2ccNXS5QJp9ueXSbMe4DbXkUGa3e4pZHIIvLr94U7L0xpl+WTcEQBEEQBEEQBEEQBEEQBEGQKvAv7dAqBlRpOcMAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/components/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"frames\">\n  <app-row *ngFor=\"let row of frames; let y = index\"\n           [frames]=\"row\"\n           [rowNumber]=\"y\"\n  >\n  </app-row>\n</div>\n"

/***/ }),

/***/ "../../../../../src/components/board/board.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  display: inline-block;\n  width: 425px;\n  height: 425px;\n  border: 10px solid #4c3c2a;\n  transition: 500ms border-color ease-in;\n  text-align: left; }\n\n:host.solved {\n  border-color: transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_board_service__ = __webpack_require__("../../../../../src/services/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pieces_service__ = __webpack_require__("../../../../../src/services/pieces.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_combineLatest__ = __webpack_require__("../../../../rxjs/add/operator/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BoardComponent = (function () {
    function BoardComponent(boardService, piecesService) {
        this.boardService = boardService;
        this.piecesService = piecesService;
        this.solved = false;
        this.UNUSABLE_FRAME = -2;
        this.frames = [];
        this.originalFrames = [];
        this.usedPieces = [];
        this.forbiddenLocations = [
            { x: 6, y: 6 },
            { x: 1, y: 6 },
            { x: 4, y: 5 },
            { x: 3, y: 4 },
            { x: 0, y: 3 },
            { x: 3, y: 3 },
            { x: 5, y: 3 },
            { x: 1, y: 2 },
            { x: 4, y: 2 },
            { x: 6, y: 2 },
            { x: 1, y: 1 },
            { x: 6, y: 1 },
            { x: 4, y: 0 },
        ];
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // calculate forbidden place
        this.forbidden = this.forbiddenLocations[Math.floor(Math.random() * this.forbiddenLocations.length)];
        // listen for puzzle success
        this.piecesService.solved
            .subscribe(function (solved) { return _this.solved = solved; });
        // save original boar
        var boardSubscription = this.boardService.frames
            .subscribe(function (frames) {
            _this.originalFrames = frames;
            boardSubscription.unsubscribe();
        });
        // listen for board and current pieces changes
        this.piecesService.currentPiece
            .combineLatest(this.piecesService.usedPieces)
            .combineLatest(this.boardService.frames)
            .debounceTime(10)
            .subscribe(this.mergeWithCurrentPiece.bind(this));
        // listen for used pieces changes
        this.piecesService.usedPieces
            .subscribe(function (pieces) { return _this.usedPieces = pieces; });
        // listen for current piece changes
        this.piecesService.currentPiece
            .subscribe(function (piece) {
            _this.currentPiece = piece;
            _this.currentPiece.changes.subscribe(function () {
                _this.mergeWithCurrentPiece([[_this.currentPiece, _this.usedPieces], _this.originalFrames]);
            });
        });
        // init all frames
        this.boardService.initFrames(this.forbidden);
        // listen for keyboard event
        document.body.addEventListener('keydown', this.bindKeyboard.bind(this));
    };
    /**
     * Binds keyboard events
     * @param {KeyboardEvent} e
     */
    BoardComponent.prototype.bindKeyboard = function (e) {
        if (!this.solved && this.currentPiece) {
            switch (e.keyCode) {
                case 37:
                    if (!this.isCurrentPieceUsed(this.currentPiece)) {
                        this.currentPiece.moveToLeft();
                    }
                    break;
                case 38:
                    if (!this.isCurrentPieceUsed(this.currentPiece)) {
                        this.currentPiece.moveToTop();
                    }
                    break;
                case 39:
                    if (!this.isCurrentPieceUsed(this.currentPiece)) {
                        this.currentPiece.moveToRight();
                    }
                    break;
                case 40:
                    if (!this.isCurrentPieceUsed(this.currentPiece)) {
                        this.currentPiece.moveToBottom();
                    }
                    break;
                case 78:
                    if (this.isSavable() || !this.isCurrentPieceUsed(this.currentPiece)) {
                        this.piecesService.selectNextPiece();
                    }
                    break;
                case 80:
                    if (this.isSavable() || !this.isCurrentPieceUsed(this.currentPiece)) {
                        this.piecesService.selectPreviousPiece();
                    }
                    break;
                case 82:
                    if (!this.isCurrentPieceUsed(this.currentPiece)) {
                        this.currentPiece.rotate();
                    }
                    break;
                case 32:
                    if (this.isSavable()) {
                        this.piecesService.save();
                    }
                    break;
            }
        }
    };
    /**
     * Merge frames with current pieces
     * @param {any} frames
     * @param {any} current
     */
    BoardComponent.prototype.mergeWithCurrentPiece = function (_a) {
        var _this = this;
        var allPieces = _a[0], frames = _a[1];
        var current = allPieces[0], used = allPieces[1];
        if (frames && current) {
            // combine used and current piece in a deduped array
            var allUsedPieces_1 = Array.from(new Set(used.concat([current])));
            this.frames = frames.map(function (row) {
                return row.map(function (frame) {
                    var value = _this.getValueAtCoord(allUsedPieces_1, { x: frame.x, y: frame.y });
                    return __assign({}, frame, { value: (0 !== value && frame.forbidden) ? _this.UNUSABLE_FRAME : value });
                });
            });
        }
    };
    /**
     * Gets value at specific coordinates
     * @param {Piece[]} pieces
     * @param {ICoord} coord
     * @returns {number}
     */
    BoardComponent.prototype.getValueAtCoord = function (pieces, coord) {
        var _this = this;
        var value = 0;
        pieces.forEach(function (piece) {
            var pieceValue = piece.getValue(coord);
            if (null !== pieceValue && 0 !== pieceValue) {
                if (0 !== value && 0 !== pieceValue) {
                    value = _this.UNUSABLE_FRAME;
                }
                else {
                    value = pieceValue + (_this.isCurrentPieceUsed(piece) ? 10 : 0);
                }
            }
        });
        return value;
    };
    /**
     * Checks if a frame contains conflicts
     * @returns {boolean}
     */
    BoardComponent.prototype.isSavable = function () {
        var _this = this;
        return !this.frames.reduce(function (prev, current) { return prev.concat(current); }, [])
            .map(function (item) { return item.value; })
            .filter(function (value) { return _this.UNUSABLE_FRAME === value; })
            .length;
    };
    /**
     * Checks if the piece has already been saved
     * @returns {boolean}
     */
    BoardComponent.prototype.isCurrentPieceUsed = function (piece) {
        return this.usedPieces.includes(piece);
    };
    return BoardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.solved'),
    __metadata("design:type", Boolean)
], BoardComponent.prototype, "solved", void 0);
BoardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-board',
        template: __webpack_require__("../../../../../src/components/board/board.component.html"),
        styles: [__webpack_require__("../../../../../src/components/board/board.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_board_service__["a" /* BoardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_board_service__["a" /* BoardService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_pieces_service__["a" /* PiecesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pieces_service__["a" /* PiecesService */]) === "function" && _b || Object])
], BoardComponent);

var _a, _b;
//# sourceMappingURL=board.component.js.map

/***/ }),

/***/ "../../../../../src/components/controls/controls.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <img src=\"assets/img/key-p.png\" width=\"40\" alt=\"\" /> <strong>P</strong>revious piece\n</p><p>\n  <img src=\"assets/img/key-n.png\" width=\"40\" alt=\"\" /> <strong>N</strong>ext piece\n</p>\n<p>\n  <img src=\"assets/img/key-r.png\" width=\"40\" alt=\"\" /> <strong>R</strong>otate\n</p>\n<p>\n  <img src=\"assets/img/arrows.png\" width=\"150\" alt=\"\" /> Move\n</p>\n<p>\n  <img src=\"assets/img/key-space.png\" width=\"150\" alt=\"\" /> Save/Remove position\n</p>\n"

/***/ }),

/***/ "../../../../../src/components/controls/controls.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 150px;\n  transition: 500ms opacity ease-in;\n  text-align: left; }\n\n:host.solved {\n  opacity: 0; }\n\np {\n  text-align: center;\n  color: #a7a7a7; }\n\nimg {\n  display: block;\n  margin: 0 auto 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/controls/controls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pieces_service__ = __webpack_require__("../../../../../src/services/pieces.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlsComponent = (function () {
    function ControlsComponent(piecesService) {
        this.piecesService = piecesService;
        this.solved = false;
    }
    ControlsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.piecesService.solved
            .subscribe(function (solved) { return _this.solved = solved; });
    };
    return ControlsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.solved'),
    __metadata("design:type", Boolean)
], ControlsComponent.prototype, "solved", void 0);
ControlsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-controls',
        template: __webpack_require__("../../../../../src/components/controls/controls.component.html"),
        styles: [__webpack_require__("../../../../../src/components/controls/controls.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_pieces_service__["a" /* PiecesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pieces_service__["a" /* PiecesService */]) === "function" && _a || Object])
], ControlsComponent);

var _a;
//# sourceMappingURL=controls.component.js.map

/***/ }),

/***/ "../../../../../src/components/frame/frame.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/components/frame/frame.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  border: 1px solid #cebca7;\n  width: 60px;\n  height: 60px;\n  background-color: #f3eee8;\n  -webkit-transform: translateX(-1px);\n          transform: translateX(-1px); }\n\n:host.frame-forbidden {\n  background: #f3eee8 url(" + __webpack_require__("../../../../../src/assets/img/lamp.png") + ") 50% 50% no-repeat;\n  background-size: contain; }\n\n.solved :host {\n  border-color: transparent; }\n\n:host.frame--2 {\n  background-color: #730400;\n  border-color: #730400; }\n\n:host.frame-1 {\n  background-color: #48abcc;\n  border-color: #48abcc; }\n\n:host.frame-2 {\n  background-color: #4869cc;\n  border-color: #4869cc; }\n\n:host.frame-3 {\n  background-color: #6948cc;\n  border-color: #6948cc; }\n\n:host.frame-4 {\n  background-color: #ab48cc;\n  border-color: #ab48cc; }\n\n:host.frame-5 {\n  background-color: #cc48ab;\n  border-color: #cc48ab; }\n\n:host.frame-6 {\n  background-color: #cc4869;\n  border-color: #cc4869; }\n\n:host.frame-7 {\n  background-color: #cc6948;\n  border-color: #cc6948; }\n\n:host.frame-8 {\n  background-color: #ccab48;\n  border-color: #ccab48; }\n\n:host.frame-9 {\n  background-color: #abcc48;\n  border-color: #abcc48; }\n\n:host.frame-11 {\n  background-color: #48abcc;\n  border-color: #48abcc;\n  opacity: .8; }\n\n:host.frame-12 {\n  background-color: #4869cc;\n  border-color: #4869cc;\n  opacity: .8; }\n\n:host.frame-13 {\n  background-color: #6948cc;\n  border-color: #6948cc;\n  opacity: .8; }\n\n:host.frame-14 {\n  background-color: #ab48cc;\n  border-color: #ab48cc;\n  opacity: .8; }\n\n:host.frame-15 {\n  background-color: #cc48ab;\n  border-color: #cc48ab;\n  opacity: .8; }\n\n:host.frame-16 {\n  background-color: #cc4869;\n  border-color: #cc4869;\n  opacity: .8; }\n\n:host.frame-17 {\n  background-color: #cc6948;\n  border-color: #cc6948;\n  opacity: .8; }\n\n:host.frame-18 {\n  background-color: #ccab48;\n  border-color: #ccab48;\n  opacity: .8; }\n\n:host.frame-19 {\n  background-color: #abcc48;\n  border-color: #abcc48;\n  opacity: .8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/frame/frame.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Frame__ = __webpack_require__("../../../../../src/models/Frame.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pieces_service__ = __webpack_require__("../../../../../src/services/pieces.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FrameComponent = (function () {
    function FrameComponent(element, piecesService) {
        this.element = element;
        this.piecesService = piecesService;
        this.numberOfPieces = 0;
    }
    FrameComponent.prototype.ngOnInit = function () {
        var el = this.element.nativeElement;
        el.style.left = this.frame.x * (el.offsetWidth - 2) + "px";
        this.numberOfPieces = this.piecesService.pieces.length;
    };
    FrameComponent.prototype.ngOnChanges = function (changes) {
        if (undefined !== changes.frame) {
            this.removeValueClasses();
            this.addValueClass();
        }
    };
    /**
     * Adds a class to host depending on current value
     */
    FrameComponent.prototype.addValueClass = function () {
        this.element.nativeElement.classList.add("frame-" + this.frame.value);
    };
    /**
     * Removes all value classes
     */
    FrameComponent.prototype.removeValueClasses = function () {
        var el = this.element.nativeElement;
        for (var i = 0; i < this.numberOfPieces; i++) {
            el.classList.remove("frame-" + i);
        }
    };
    Object.defineProperty(FrameComponent.prototype, "isForbidden", {
        /**
         * Checks if the frame is the forbidden one
         *
         * @returns {boolean}
         */
        get: function () {
            return this.frame.forbidden;
        },
        enumerable: true,
        configurable: true
    });
    return FrameComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_Frame__["a" /* Frame */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_Frame__["a" /* Frame */]) === "function" && _a || Object)
], FrameComponent.prototype, "frame", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.frame-forbidden'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], FrameComponent.prototype, "isForbidden", null);
FrameComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-frame',
        template: __webpack_require__("../../../../../src/components/frame/frame.component.html"),
        styles: [__webpack_require__("../../../../../src/components/frame/frame.component.scss")],
        host: { 'class': 'frame' },
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_pieces_service__["a" /* PiecesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pieces_service__["a" /* PiecesService */]) === "function" && _c || Object])
], FrameComponent);

var _a, _b, _c;
//# sourceMappingURL=frame.component.js.map

/***/ }),

/***/ "../../../../../src/components/piece-list/piece-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"piece\"\n     [ngClass]=\"{\n      'piece-active': isActive(piece),\n      'piece-used': isUsed(piece)\n     }\"\n     *ngFor=\"let piece of pieces\">\n  <div class=\"row\"\n       *ngFor=\"let row of piece.matrix\">\n    <div class=\"column\"\n         [ngClass]=\"{'column-active': column}\"\n         *ngFor=\"let column of row\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/components/piece-list/piece-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 40px auto 0;\n  max-width: 800px;\n  transition: 500ms opacity ease-in;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host.solved {\n  opacity: 0; }\n\n.piece {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 10px;\n  width: 100px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.piece-used .column-active {\n  background-color: #a7a7a7; }\n\n.piece-active .column-active {\n  background-color: #cebca7; }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.column {\n  border: 1px solid #f2f2f2;\n  width: 20px;\n  height: 20px; }\n\n.column-active {\n  background-color: #4c3c2a; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/piece-list/piece-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieceListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pieces_service__ = __webpack_require__("../../../../../src/services/pieces.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_combineLatest__ = __webpack_require__("../../../../rxjs/add/operator/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PieceListComponent = (function () {
    function PieceListComponent(piecesService) {
        this.piecesService = piecesService;
        this.solved = false;
        this.pieces = [];
        this.usedPieces = [];
    }
    PieceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.piecesService.solved
            .subscribe(function (solved) { return _this.solved = solved; });
        this.pieces = this.piecesService.pieces;
        this.piecesService.usedPieces
            .subscribe(function (list) { return _this.usedPieces = list; });
        this.piecesService.currentPiece.subscribe(function (piece) { return _this.currentPiece = piece; });
    };
    /**
     * Checks if a piece is the active piece
     *
     * @param {Piece} piece
     * @returns {boolean}
     */
    PieceListComponent.prototype.isActive = function (piece) {
        return this.currentPiece === piece;
    };
    /**
     * Checks if a piece is already used
     *
     * @param {Piece} piece
     * @returns {any}
     */
    PieceListComponent.prototype.isUsed = function (piece) {
        return this.usedPieces.includes(piece);
    };
    return PieceListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.solved'),
    __metadata("design:type", Boolean)
], PieceListComponent.prototype, "solved", void 0);
PieceListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-piece-list',
        template: __webpack_require__("../../../../../src/components/piece-list/piece-list.component.html"),
        styles: [__webpack_require__("../../../../../src/components/piece-list/piece-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_pieces_service__["a" /* PiecesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pieces_service__["a" /* PiecesService */]) === "function" && _a || Object])
], PieceListComponent);

var _a;
//# sourceMappingURL=piece-list.component.js.map

/***/ }),

/***/ "../../../../../src/components/row/row.component.html":
/***/ (function(module, exports) {

module.exports = "<app-frame *ngFor=\"let frame of frames\"\n           [frame]=\"frame\"\n>\n</app-frame>\n"

/***/ }),

/***/ "../../../../../src/components/row/row.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  display: inline-block;\n  height: 60px;\n  -webkit-transform: translateY(-1px);\n          transform: translateY(-1px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/row/row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RowComponent = (function () {
    function RowComponent(element) {
        this.element = element;
        this.frames = [];
        this.rowNumber = 0;
    }
    RowComponent.prototype.ngOnInit = function () {
        var el = this.element.nativeElement;
        el.style.top = this.rowNumber * (el.offsetHeight - 2) + "px";
    };
    return RowComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], RowComponent.prototype, "frames", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], RowComponent.prototype, "rowNumber", void 0);
RowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-row',
        template: __webpack_require__("../../../../../src/components/row/row.component.html"),
        styles: [__webpack_require__("../../../../../src/components/row/row.component.scss")],
        host: { 'class': 'row' },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], RowComponent);

var _a;
//# sourceMappingURL=row.component.js.map

/***/ }),

/***/ "../../../../../src/components/rules/rules.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Rules:</h3>\n<p>\n  The goal of \"The city\" brain teaser is to place 9 pieces around a frozen one (the floor lamp).\n</p>\n<p>Rules are quite simple:</p>\n<p>\n  <strong>-</strong> The floor lamp is placed randomly between 13 possible locations.<br />\n  <strong>-</strong> A piece can't be placed above the floor lamp or another piece.\n</p>\n<p>\n  That's it! <strong>Have fun</strong>.\n</p>\n"

/***/ }),

/***/ "../../../../../src/components/rules/rules.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  top: 30px;\n  right: 0;\n  width: 200px;\n  text-align: justify; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/rules/rules.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RulesComponent = (function () {
    function RulesComponent() {
    }
    RulesComponent.prototype.ngOnInit = function () {
    };
    return RulesComponent;
}());
RulesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-rules',
        template: __webpack_require__("../../../../../src/components/rules/rules.component.html"),
        styles: [__webpack_require__("../../../../../src/components/rules/rules.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], RulesComponent);

//# sourceMappingURL=rules.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/models/Frame.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Frame; });
var Frame = (function () {
    function Frame(x, y, forbidden) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (forbidden === void 0) { forbidden = false; }
        this.x = x;
        this.y = y;
        this.forbidden = forbidden;
        this.value = 0;
    }
    return Frame;
}());

//# sourceMappingURL=Frame.js.map

/***/ }),

/***/ "../../../../../src/models/Piece.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Piece; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_board_service__ = __webpack_require__("../../../../../src/services/board.service.ts");


var Piece = (function () {
    function Piece(matrix) {
        this.matrix = matrix;
        this.coordinates = { x: 0, y: 0 };
        this.changes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    /**
     * Gets value for a specific coordinate
     * @param {ICoord} coord
     * @returns {number}
     */
    Piece.prototype.getValue = function (coord) {
        if (undefined === this.matrix || !this.matrix.length || !this.isInMatrix(coord)) {
            return null;
        }
        var posX = coord.x - this.coordinates.x;
        var posY = coord.y - this.coordinates.y;
        return this.matrix[posY] ? this.matrix[posY][posX] : null;
    };
    /**
     * Checks if a coordinate is in matrix for current position
     * @param {ICoord} coord
     * @returns {boolean}
     */
    Piece.prototype.isInMatrix = function (coord) {
        var first = this.matrix[0];
        var minX = this.coordinates.x;
        var maxX = minX + first.length;
        var minY = this.coordinates.y;
        var maxY = minY + this.matrix.length;
        return coord.x >= minX && coord.x < maxX && coord.y >= minY && coord.y < maxY;
    };
    /**
     * Checks if new coordinates and matrix are in board boundaries
     * @param {ICoord} coord
     * @param {number[][]} matrix
     * @returns {boolean}
     */
    Piece.prototype.isInBoundaries = function (coord, matrix) {
        return matrix.length &&
            matrix[0].length &&
            coord.x >= 0 &&
            coord.x + matrix[0].length <= __WEBPACK_IMPORTED_MODULE_1__services_board_service__["a" /* BoardService */].maxX &&
            coord.y >= 0 &&
            coord.y + matrix.length <= __WEBPACK_IMPORTED_MODULE_1__services_board_service__["a" /* BoardService */].maxY;
    };
    /**
     * Moves the piece to right position
     */
    Piece.prototype.moveToRight = function () {
        this.moveTo({
            x: this.coordinates.x + 1,
            y: this.coordinates.y,
        });
    };
    /**
     * Moves the piece to left position
     */
    Piece.prototype.moveToLeft = function () {
        this.moveTo({
            x: this.coordinates.x - 1,
            y: this.coordinates.y,
        });
    };
    /**
     * Moves the piece to top position
     */
    Piece.prototype.moveToTop = function () {
        this.moveTo({
            x: this.coordinates.x,
            y: this.coordinates.y - 1,
        });
    };
    /**
     * Moves the piece to bottom position
     */
    Piece.prototype.moveToBottom = function () {
        this.moveTo({
            x: this.coordinates.x,
            y: this.coordinates.y + 1,
        });
    };
    /**
     * Moves to specific coordinates if they respect boundaries
     * @param {ICoord} coord
     */
    Piece.prototype.moveTo = function (coord) {
        if (this.isInBoundaries(coord, this.matrix)) {
            this.coordinates = coord;
            this.changes.emit();
        }
    };
    /**
     * Rotates the matrix from 90 deg clockwise
     */
    Piece.prototype.rotate = function () {
        var grid = this.rotateMatrix(this.matrix);
        if (this.isInBoundaries(this.coordinates, grid)) {
            this.matrix = grid;
            this.changes.emit();
        }
    };
    /**
     * Rotates a matrix
     * @param {number[][]} matrix
     * @returns {number[][]}
     */
    Piece.prototype.rotateMatrix = function (matrix) {
        if (undefined === matrix || undefined === matrix[0]) {
            return [];
        }
        var newMatrix = [];
        var maxY = matrix.length - 1;
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                var newX = maxY - y;
                if (undefined === newMatrix[x]) {
                    newMatrix[x] = [];
                }
                newMatrix[x][newX] = matrix[y][x];
            }
        }
        return newMatrix;
    };
    return Piece;
}());

//# sourceMappingURL=Piece.js.map

/***/ }),

/***/ "../../../../../src/services/board.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Frame__ = __webpack_require__("../../../../../src/models/Frame.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BoardService = BoardService_1 = (function () {
    function BoardService() {
        this.frames = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"]();
    }
    /**
     * Inits frame's list
     * @param {ICoord} forbiddenFrame
     */
    BoardService.prototype.initFrames = function (forbiddenFrame) {
        var list = [];
        for (var y = 0; y < BoardService_1.maxY; y++) {
            var row = [];
            for (var x = 0; x < BoardService_1.maxX; x++) {
                row.push(new __WEBPACK_IMPORTED_MODULE_2__models_Frame__["a" /* Frame */](x, y, (forbiddenFrame.x === x && forbiddenFrame.y === y)));
            }
            list.push(row);
        }
        this.frames.next(list);
    };
    return BoardService;
}());
BoardService.maxX = 7;
BoardService.maxY = 7;
BoardService = BoardService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], BoardService);

var BoardService_1;
//# sourceMappingURL=board.service.js.map

/***/ }),

/***/ "../../../../../src/services/pieces.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiecesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Piece__ = __webpack_require__("../../../../../src/models/Piece.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PiecesService = (function () {
    function PiecesService() {
        this.pieces = [];
        this.used = [];
        this.usedPieces = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.currentPieceIndex = 0;
        this.currentPiece = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"]();
        this.solved = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.initPieces();
        this.selectPiece(this.currentPieceIndex);
    }
    /**
     * Select a specific piece as current piece
     *
     * @param {number} number
     */
    PiecesService.prototype.selectPiece = function (number) {
        this.currentPieceIndex = number;
        this.currentPiece.next(this.pieces[number]);
    };
    /**
     * Selects next piece as current piece
     */
    PiecesService.prototype.selectNextPiece = function () {
        this.selectPiece((this.currentPieceIndex + 1) % this.pieces.length);
    };
    /**
     * Selects previous piece as current piece
     */
    PiecesService.prototype.selectPreviousPiece = function () {
        var newIndex = this.currentPieceIndex - 1;
        this.selectPiece(newIndex >= 0 ? newIndex : this.pieces.length - 1);
    };
    /**
     * Saves current piece as used piece
     */
    PiecesService.prototype.save = function () {
        var currentPiece = this.pieces[this.currentPieceIndex];
        var used;
        if (this.usedPieces.getValue().includes(currentPiece)) {
            used = this.usedPieces.getValue()
                .filter(function (piece) { return currentPiece !== piece; });
        }
        else {
            used = Array.from(new Set(this.usedPieces.getValue().concat([
                this.pieces[this.currentPieceIndex],
            ])));
        }
        this.usedPieces.next(used);
        if (used.length === this.pieces.length) {
            this.solved.next(true);
        }
    };
    /**
     * Inits all pieces of the game
     */
    PiecesService.prototype.initPieces = function () {
        /**
         *  ■■■■■
         */
        this.pieces.push(new __WEBPACK_IMPORTED_MODULE_1__models_Piece__["a" /* Piece */]([[1, 1, 1, 1, 1]]));
        /**
         * ■X
         */
        this.pieces.push(new __WEBPACK_IMPORTED_MODULE_1__models_Piece__["a" /* Piece */]([[2, 2]]));
        /**
         * ■
         * ■■
         *  ■■
         */
        this.pieces.push(new __WEBPACK_IMPORTED_MODULE_1__models_Piece__["a" /* Piece */]([
            [3, 0, 0],
            [3, 3, 0],
            [0, 3, 3],
        ]));
        /**
         * ■■■■
         *   ■
         */
        this.pieces.push(new __WEBPACK_IMPORTED_MODULE_1__models_Piece__["a" /* Piece */]([
            [4, 4, 4, 4],
            [0, 0, 4, 0],
        ]));
        /**
         * ■■■
         * ■■■
         *  ■
         */
        this.pieces.push(new __WEBPACK_IMPORTED_MODULE_1__models_Piece__["a" /* Piece */]([
            [5, 5, 5],
            [5, 5, 5],
            [0, 5, 0],
        ]));
        /**
         * ■■■
         *  ■■■
         *  ■■
         */
        this.pieces.push(new __WEBPACK_IMPORTED_MODULE_1__models_Piece__["a" /* Piece */]([
            [6, 6, 6, 0],
            [0, 6, 6, 6],
            [0, 6, 6, 0],
        ]));
        /**
         * ■■■
         *  ■
         */
        this.pieces.push(new __WEBPACK_IMPORTED_MODULE_1__models_Piece__["a" /* Piece */]([
            [7, 7, 7],
            [0, 7, 0],
        ]));
        /**
         * ■■■■
         *  ■■
         */
        this.pieces.push(new __WEBPACK_IMPORTED_MODULE_1__models_Piece__["a" /* Piece */]([
            [8, 8, 8, 8],
            [0, 8, 8, 0],
        ]));
        /**
         * ■■■■
         * ■■
         * ■
         */
        this.pieces.push(new __WEBPACK_IMPORTED_MODULE_1__models_Piece__["a" /* Piece */]([
            [9, 9, 9],
            [9, 9, 0],
            [9, 0, 0],
        ]));
    };
    return PiecesService;
}());
PiecesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PiecesService);

//# sourceMappingURL=pieces.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map