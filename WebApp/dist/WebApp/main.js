(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_creator_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-creator/dashboard/dashboard.component */ "./src/app/content-creator/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], pathMatch: 'full' },
    { path: 'app-root', component: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
    { path: 'cc-dash', component: _content_creator_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-login></app-login> -->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'WebApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _content_creator_create_questions_create_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-creator/create-questions/create-questions.component */ "./src/app/content-creator/create-questions/create-questions.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _content_creator_content_creator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content-creator/content-creator.component */ "./src/app/content-creator/content-creator.component.ts");
/* harmony import */ var _content_creator_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content-creator/dashboard/dashboard.component */ "./src/app/content-creator/dashboard/dashboard.component.ts");
/* harmony import */ var _content_creator_retrieve_question_bank_retrieve_question_bank_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content-creator/retrieve-question-bank/retrieve-question-bank.component */ "./src/app/content-creator/retrieve-question-bank/retrieve-question-bank.component.ts");
/* harmony import */ var _content_creator_shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./content-creator/shared/content-creator-service.service */ "./src/app/content-creator/shared/content-creator-service.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _content_creator_tag_createtag_createtag_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./content-creator/tag/createtag/createtag.component */ "./src/app/content-creator/tag/createtag/createtag.component.ts");
/* harmony import */ var _content_creator_tag_retrievetag_tag_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./content-creator/tag/retrievetag/tag.component */ "./src/app/content-creator/tag/retrievetag/tag.component.ts");
/* harmony import */ var _content_creator_retrieve_quiz_retrieve_quiz_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./content-creator/retrieve-quiz/retrieve-quiz.component */ "./src/app/content-creator/retrieve-quiz/retrieve-quiz.component.ts");
/* harmony import */ var _content_creator_retrieve_quiz_create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./content-creator/retrieve-quiz/create-quiz/create-quiz.component */ "./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.ts");
/* harmony import */ var _content_creator_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./content-creator/update-question/update-question.component */ "./src/app/content-creator/update-question/update-question.component.ts");




























var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_14__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_14__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_14__["GoogleLoginProvider"]("819840688710-ljvg9sqe86d08r2hlgv6e9s74i3jmiq0.apps.googleusercontent.com")
    }
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _content_creator_create_questions_create_questions_component__WEBPACK_IMPORTED_MODULE_3__["CreateQuestionsComponent"],
                _content_creator_retrieve_question_bank_retrieve_question_bank_component__WEBPACK_IMPORTED_MODULE_12__["RetrieveQuestionBankComponent"],
                _content_creator_content_creator_component__WEBPACK_IMPORTED_MODULE_10__["ContentCreatorComponent"],
                _content_creator_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _content_creator_tag_createtag_createtag_component__WEBPACK_IMPORTED_MODULE_22__["CreatetagComponent"],
                _content_creator_tag_retrievetag_tag_component__WEBPACK_IMPORTED_MODULE_23__["TagComponent"],
                _content_creator_retrieve_quiz_retrieve_quiz_component__WEBPACK_IMPORTED_MODULE_24__["RetrieveQuizComponent"],
                _content_creator_retrieve_quiz_create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_25__["CreateQuizComponent"],
                _content_creator_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_26__["UpdateQuestionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                angularx_social_login__WEBPACK_IMPORTED_MODULE_14__["SocialLoginModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"]
            ],
            providers: [_content_creator_shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_13__["ContentCreatorServiceService"], {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_14__["AuthServiceConfig"],
                    useFactory: provideConfig,
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            entryComponents: [_content_creator_tag_createtag_createtag_component__WEBPACK_IMPORTED_MODULE_22__["CreatetagComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content-creator/content-creator.component.css":
/*!***************************************************************!*\
  !*** ./src/app/content-creator/content-creator.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29udGVudC1jcmVhdG9yL2NvbnRlbnQtY3JlYXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content-creator/content-creator.component.html":
/*!****************************************************************!*\
  !*** ./src/app/content-creator/content-creator.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>this is working</h1>"

/***/ }),

/***/ "./src/app/content-creator/content-creator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/content-creator/content-creator.component.ts ***!
  \**************************************************************/
/*! exports provided: ContentCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentCreatorComponent", function() { return ContentCreatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentCreatorComponent = /** @class */ (function () {
    function ContentCreatorComponent() {
    }
    ContentCreatorComponent.prototype.ngOnInit = function () {
    };
    ContentCreatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-creator',
            template: __webpack_require__(/*! ./content-creator.component.html */ "./src/app/content-creator/content-creator.component.html"),
            styles: [__webpack_require__(/*! ./content-creator.component.css */ "./src/app/content-creator/content-creator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentCreatorComponent);
    return ContentCreatorComponent;
}());



/***/ }),

/***/ "./src/app/content-creator/create-questions/create-questions.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/content-creator/create-questions/create-questions.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29udGVudC1jcmVhdG9yL2NyZWF0ZS1xdWVzdGlvbnMvY3JlYXRlLXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content-creator/create-questions/create-questions.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/content-creator/create-questions/create-questions.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 80%;\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Add Questions</h5>\n    <form #form=\"ngForm\" (submit)=\"onSubmit(form)\" autocomplete=\"off\">\n      <input type=\"hidden\" name=\"CreatedBy\" #CreatedBy=\"ngModel\" [(ngModel)]=\"CCreatedBy\">\n      <div class=\"form-group\">\n        <label>Question</label>\n        <textarea class=\"form-control\" name=\"QuestionStatement\" #QuestionStatement=\"ngModel\"\n          [(ngModel)]=\"service.formData.QuestionStatement\" rows=\"3\" required></textarea>\n        <div class=\"validation-error\" *ngIf=\"QuestionStatement.invalid && QuestionStatement.touched\">This field is\n          required.\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label>Option 1</label>\n          <input required type=\"text\" name=\"Option1\" #Option1=\"ngModel\" [(ngModel)]=\"service.formData.Option1\"\n            class=\"form-control\">\n          <div class=\"validation-error\" *ngIf=\"Option1.invalid && Option1.touched\">This field is required.</div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>Option 2</label>\n          <input required type=\"text\" name=\"Option2\" #Option2=\"ngModel\" [(ngModel)]=\"service.formData.Option2\"\n            class=\"form-control\">\n          <div class=\"validation-error\" *ngIf=\"Option2.invalid && Option2.touched\">This field is required.</div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label>Option 3</label>\n          <input required type=\"text\" name=\"Option3\" #Option3=\"ngModel\" [(ngModel)]=\"service.formData.Option3\"\n            class=\"form-control\">\n          <div class=\"validation-error\" *ngIf=\"Option3.invalid && Option3.touched\">This field is required.</div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>Option 4</label>\n          <input required type=\"text\" name=\"Option4\" #Option4=\"ngModel\" [(ngModel)]=\"service.formData.Option4\"\n            class=\"form-control\">\n          <div class=\"validation-error\" *ngIf=\"Option4.invalid && Option4.touched\">This field is required.</div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label>Correct Option</label>\n          <input required type=\"text\" name=\"Answer\" #Answer=\"ngModel\" [(ngModel)]=\"service.formData.Answer\"\n            class=\"form-control\">\n          <div class=\"validation-error\" *ngIf=\"Answer.invalid && Answer.touched\">This field is required.\n          </div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>Marks</label>\n          <input required type=\"text\" name=\"Marks\" #Marks=\"ngModel\" [(ngModel)]=\"service.formData.Marks\"\n            class=\"form-control\">\n          <div class=\"validation-error\" *ngIf=\"Marks.invalid && Marks.touched\">This field is required.</div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label>Select Subject</label>\n          <select name=\"SubjectId\" required #SubjectId=\"ngModel\" [(ngModel)]=\"service.formData.SubjectId\"\n            class=\"form-control\">\n            <option value=\"\">Choose</option>\n            <option *ngFor=\"let Subject of Subjects\" value=\"{{Subject.SubjectId}}\">{{Subject.Name}}</option>\n          </select>\n          <div class=\"validation-error\" *ngIf=\"SubjectId.invalid && SubjectId.touched\">This field is required.</div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>Select Difficulty-Level</label>\n          <select name=\"Difficulty\" required #Difficulty=\"ngModel\" [(ngModel)]=\"service.formData.Difficulty\"\n            class=\"form-control\">\n            <option value=\"\">Choose</option>\n            <option value=\"Beginner\">Easy</option>\n            <option value=\"Intermediate\">Medium</option>\n            <option value=\"Advanced\">Hard</option>\n          </select>\n          <div class=\"validation-error\" *ngIf=\"Difficulty.invalid && Difficulty.touched\">This field is required.</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary btn-block\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/content-creator/create-questions/create-questions.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/content-creator/create-questions/create-questions.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreateQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuestionsComponent", function() { return CreateQuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_content_creator_shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/content-creator/shared/content-creator-service.service */ "./src/app/content-creator/shared/content-creator-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var CreateQuestionsComponent = /** @class */ (function () {
    function CreateQuestionsComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.CCreatedBy = "";
    }
    CreateQuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetForm();
        this.CCreatedBy = localStorage.getItem('uid');
        this.service.retrieveSubjects().subscribe(function (res) {
            _this.Subjects = res;
        });
    };
    CreateQuestionsComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.resetForm();
        }
        this.service.formData = {
            QuestionId: null,
            QuestionStatement: "",
            Option1: "",
            Option2: "",
            Option3: "",
            Option4: "",
            Answer: null,
            Marks: null,
            Difficulty: "",
            SubjectId: "",
        };
    };
    CreateQuestionsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.service.postQuestion(form.value).subscribe(function (res) {
            _this.toastr.success('Inserted successfully');
            _this.resetForm(form);
        });
        ;
    };
    CreateQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-questions',
            template: __webpack_require__(/*! ./create-questions.component.html */ "./src/app/content-creator/create-questions/create-questions.component.html"),
            styles: [__webpack_require__(/*! ./create-questions.component.css */ "./src/app/content-creator/create-questions/create-questions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_content_creator_shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__["ContentCreatorServiceService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CreateQuestionsComponent);
    return CreateQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/content-creator/dashboard/dashboard.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/content-creator/dashboard/dashboard.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29udGVudC1jcmVhdG9yL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/content-creator/dashboard/dashboard.component.html":
/*!********************************************************************!*\
  !*** ./src/app/content-creator/dashboard/dashboard.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"\">\n  <!--sidebar-->\n  <div class=\"wrapper\">\n    <div class=\"sidebar\">\n      <div class=\"sidebar-wrapper\">\n        <div class=\"logo\">\n          <a class=\"simple-text logo-mini\">\n            CC\n          </a>\n          <a class=\"simple-text logo-normal\">\n            Content Creator\n          </a>\n        </div>\n        <ul class=\"nav\">\n          <li class=\"\">\n            <a (click)=\"Open(1)\">\n              <i class=\"tim-icons icon-chart-pie-36\"></i>\n              <p>Dashboard</p>\n            </a>\n          </li>\n\n          <li>\n            <a (click)=\"Open(2)\">\n              <i class=\"tim-icons icon-single-02\"></i>\n              <p>Create Question</p>\n            </a>\n          </li>\n          <li>\n            <a (click)=\"Open(3)\">\n              <i class=\"tim-icons icon-puzzle-10\"></i>\n              <p>Create Quiz</p>\n            </a>\n          </li>\n          <li>\n            <a (click)=\"Open(4)\">\n              <i class=\"tim-icons icon-puzzle-10\"></i>\n              <p>Create / Edit Tag</p>\n            </a>\n          </li>\n          <li>\n            <a (click)=\"Open(5)\">\n              <i class=\"tim-icons icon-puzzle-10\"></i>\n              <p>Questions Created</p>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"main-panel\">\n      <!-- Navbar -->\n      <nav class=\"navbar navbar-expand-lg navbar-absolute navbar-transparent\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-wrapper\">\n            <div class=\"navbar-toggle d-inline\">\n              <button type=\"button\" class=\"navbar-toggler\">\n                <span class=\"navbar-toggler-bar bar1\"></span>\n                <span class=\"navbar-toggler-bar bar2\"></span>\n                <span class=\"navbar-toggler-bar bar3\"></span>\n              </button>\n            </div>\n            <a class=\"navbar-brand\" href=\"#\">Dashboard</a>\n          </div>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n            <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n            <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n          </button>\n          <div class=\"collapse navbar-collapse\" id=\"navigation\">\n            <ul class=\"navbar-nav ml-auto\">\n              <li class=\"dropdown nav-item\">\n                <a href=\"#\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\">\n                  <div class=\"photo\">\n                    <img src=\"../assets/img/anime3.png\" alt=\"Profile Photo\">\n                  </div>\n                </a>\n                <ul class=\"dropdown-menu dropdown-navbar\">\n                  <li class=\"nav-link\">\n                    <a href=\"#\" class=\"nav-item dropdown-item\">Profile</a>\n                  </li>\n                  <li class=\"nav-link\">\n                    <a href=\"#\" class=\"nav-item dropdown-item\">Settings</a>\n                  </li>\n                  <li class=\"dropdown-divider\"></li>\n                  <li class=\"nav-link\">\n                    <a (click)=\"logout()\" class=\"nav-item dropdown-item\">Log out</a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"separator d-lg-none\"></li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n      <!-- End Navbar -->\n      <div class=\"content\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <a *ngIf=\"5 == Val\">\n              <app-retrieve-question-bank></app-retrieve-question-bank>\n            </a>\n            <a *ngIf=\"2 == Val\">\n              <app-create-questions></app-create-questions>\n            </a>\n            <a *ngIf=\"4 == Val\">\n              <app-tag></app-tag>\n            </a>\n            <!--     <a *ngIf = \"4 == Val\">\n                    <app-create-questions></app-create-questions>\n                  </a>\n                  <a *ngIf = \"5 == Val\">\n                      <app-create-questions></app-create-questions>\n                    </a>-->\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/content-creator/dashboard/dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/content-creator/dashboard/dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('id') === null) {
            this.router.navigate(['/login']);
        }
        this.authService.authState.subscribe(function (user) {
            if (user != null) {
                //	console.log(user);
            }
            else {
                localStorage.clear();
                _this.router.navigate(['/login']);
            }
        });
    };
    DashboardComponent.prototype.Open = function (link) {
        this.Val = link;
        console.log(this.Val);
    };
    DashboardComponent.prototype.logout = function () {
        this.authService.signOut();
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/content-creator/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/content-creator/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/content-creator/retrieve-question-bank/retrieve-question-bank.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-question-bank/retrieve-question-bank.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th,td{\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250ZW50LWNyZWF0b3IvcmV0cmlldmUtcXVlc3Rpb24tYmFuay9yZXRyaWV2ZS1xdWVzdGlvbi1iYW5rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYXBwL2NvbnRlbnQtY3JlYXRvci9yZXRyaWV2ZS1xdWVzdGlvbi1iYW5rL3JldHJpZXZlLXF1ZXN0aW9uLWJhbmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoLHRke1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/content-creator/retrieve-question-bank/retrieve-question-bank.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-question-bank/retrieve-question-bank.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-striped\">\n  <thead class=\"thead-dark\">\n    <th scope=\"col\">#Question ID</th>\n    <th scope=\"col\">Question</th>\n    <th scope=\"col\">Subject</th>\n    <th scope=\"col\">Difficulty Level</th>\n    <th scope=\"col\">Action</th>\n\n  </thead>\n\n  <tbody>\n    <ng-container *ngFor=\"let ques of questionList;index as i;\">\n      <tr style=\"color:azure\">\n        <th scope=\"row\">{{i+1}}</th>\n        <td scope=\"row\">{{ques.QuestionStatement}}</td>\n        <td scope=\"row\">{{ques.SubjectName}}</td>\n        <td scope=\"row\">{{ques.Difficulty}}</td>\n        <td>\n          <a class=\"btn btn-sm btn-info text-white\" (click)=\"editUserQues(ques.QuestionId,i+1)\"><i\n              class=\"fa fa-pencil\"></i></a>\n          <a class=\"btn btn-sm btn-danger text-white ml-1\" (click)=\"deleteQues(ques.QuestionId)\"><i\n              class=\"fa fa-trash\"></i></a>\n        </td>\n\n      </tr>\n    </ng-container>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/content-creator/retrieve-question-bank/retrieve-question-bank.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-question-bank/retrieve-question-bank.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RetrieveQuestionBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetrieveQuestionBankComponent", function() { return RetrieveQuestionBankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/content-creator-service.service */ "./src/app/content-creator/shared/content-creator-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _update_question_update_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update-question/update-question.component */ "./src/app/content-creator/update-question/update-question.component.ts");






var RetrieveQuestionBankComponent = /** @class */ (function () {
    function RetrieveQuestionBankComponent(service, toastr, dialog) {
        this.service = service;
        this.toastr = toastr;
        this.dialog = dialog;
        this.searchText = '';
        this.difficultyLevel = '';
    }
    RetrieveQuestionBankComponent.prototype.ngOnInit = function () {
        this.getQuesOfUser(localStorage.getItem('uid'));
    };
    RetrieveQuestionBankComponent.prototype.getQuesOfUser = function (uid) {
        var _this = this;
        this.service.getQuesOfUser(uid).subscribe(function (data) {
            _this.questionList = data;
            console.log(_this.questionList);
        });
    };
    RetrieveQuestionBankComponent.prototype.deleteQues = function (qid) {
        var _this = this;
        this.service.deleteQues(qid).subscribe(function (res) {
            _this.toastr.success('Deleted Successfully', 'Assesment System');
            _this.getQuesOfUser(localStorage.getItem('uid'));
        });
    };
    RetrieveQuestionBankComponent.prototype.editUserQues = function (quesid, arrayindex) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        dialogConfig.disableClose = false;
        this.service.formData = this.questionList[arrayindex - 1];
        this.dialog.open(_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_5__["UpdateQuestionComponent"], dialogConfig);
    };
    RetrieveQuestionBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-retrieve-question-bank',
            template: __webpack_require__(/*! ./retrieve-question-bank.component.html */ "./src/app/content-creator/retrieve-question-bank/retrieve-question-bank.component.html"),
            styles: [__webpack_require__(/*! ./retrieve-question-bank.component.css */ "./src/app/content-creator/retrieve-question-bank/retrieve-question-bank.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__["ContentCreatorServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], RetrieveQuestionBankComponent);
    return RetrieveQuestionBankComponent;
}());



/***/ }),

/***/ "./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    margin: 9px auto;\n}\n.container{\n    max-width: inherit;\n    max-height: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250ZW50LWNyZWF0b3IvcmV0cmlldmUtcXVpei9jcmVhdGUtcXVpei9jcmVhdGUtcXVpei5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImFwcC9jb250ZW50LWNyZWF0b3IvcmV0cmlldmUtcXVpei9jcmVhdGUtcXVpei9jcmVhdGUtcXVpei5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gICAgbWFyZ2luOiA5cHggYXV0bztcbn1cbi5jb250YWluZXJ7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 80%; overflow: auto\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\" style=\"text-align: center\">Create A Quiz</h5><br><br>\n    <ng-container *ngIf=\"val\">\n      <form #form=\"ngForm\" (submit)=\"fetchReqQues(form)\" autocomplete=\"off\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label>Select Difficulty-Level</label>\n            <select name=\"Difficulty\" required #Difficulty=\"ngModel\" [(ngModel)]=\"service.quizForm.Difficulty\"\n              class=\"form-control\">\n              <option value=\"Beginner\">Easy</option>\n              <option value=\"Intermediate\">Medium</option>\n              <option value=\"Advanced\">Hard</option>\n            </select>\n            <div class=\"validation-error\" *ngIf=\"Difficulty.invalid && Difficulty.touched\">This field is required.</div>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label>Select Subject</label>\n            <select name=\"SubjectId\" required #SubjectId=\"ngModel\" [(ngModel)]=\"service.quizForm.SubjectId\"\n              class=\"form-control\">\n              <option *ngFor=\"let Subject of Subjects;\" value=\"{{Subject.SubjectId}}\">{{Subject.Name}}</option>\n            </select>\n\n            <div class=\"validation-error\" *ngIf=\"SubjectId.invalid && SubjectId.touched\">This field is required.</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary btn-block\">Click</button>\n        </div>\n      </form>\n    </ng-container>\n    <div *ngIf=\"!val\">\n      <div class=\"card\" style=\"width: 80%\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\" style=\"text-align: center\">Choose Questions</h5><br><br>\n          <div class=\"container form-group\">\n            <div *ngFor=\"let x of questions; let i = index\"><br>\n              <input [id]=\"'questions-'+i\" type=\"checkbox\" value=\"{{x.Question_ID}}\" [checked]=\"x.selected\"\n                (change)=\"updateSelectedQuestions(i)\">\n              <label>{{x.QuestionStatement}}</label>\n            </div>\n          </div>\n          <button type=\"submit\" (click)=\"checkVal()\" class=\"btn btn-primary btn-block\">Submit</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.ts ***!
  \************************************************************************************/
/*! exports provided: CreateQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuizComponent", function() { return CreateQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/content-creator-service.service */ "./src/app/content-creator/shared/content-creator-service.service.ts");



var CreateQuizComponent = /** @class */ (function () {
    function CreateQuizComponent(service) {
        this.service = service;
        this.val = true;
        this.count = 0;
    }
    CreateQuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetForm();
        this.service.retrieveSubjects().subscribe(function (data) {
            _this.Subjects = data;
            console.log(_this.Subjects);
        });
    };
    CreateQuizComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.resetForm();
        }
        else {
            this.service.quizForm = {
                QuizId: null,
                Difficulty: '',
                TotalQuestions: null,
                TotalMarks: null,
                Subject: '',
                QuizType: '',
                CreatedBy: '',
                qId: null,
                SubjectId: null
            };
            if (this.questions) {
                this.questions.map(function (y) { return y.selected = false; });
            }
        }
    };
    CreateQuizComponent.prototype.onSubmit = function (form) {
        console.log(this.service.quizForm.SubjectId);
        var QuestionId = this.questions.filter(function (QuestionId) { return QuestionId.selected; }).map(function (idSelected) { return idSelected.QuestionId; });
        console.log(QuestionId);
        // this.service.postQuiz(form.value, QuestionId).subscribe(res => {
        //   console.log(this.service.quizForm.SubjectId)
        // });;
    };
    CreateQuizComponent.prototype.fetchReqQues = function (form) {
        var _this = this;
        this.service.getQuesOfUserConstraints(form.value).subscribe(function (data) {
            data.forEach(function (obj) { return obj.selected = false; });
            _this.questions = data;
            console.log(_this.questions);
        });
    };
    CreateQuizComponent.prototype.checkVal = function () {
        this.val = true;
    };
    CreateQuizComponent.prototype.updateSelectedQuestions = function (index) {
        this.questions[index].selected = !this.questions[index].selected;
    };
    CreateQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-quiz',
            template: __webpack_require__(/*! ./create-quiz.component.html */ "./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.html"),
            styles: [__webpack_require__(/*! ./create-quiz.component.css */ "./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__["ContentCreatorServiceService"]])
    ], CreateQuizComponent);
    return CreateQuizComponent;
}());



/***/ }),

/***/ "./src/app/content-creator/retrieve-quiz/retrieve-quiz.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/retrieve-quiz.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th,td{\n    text-align: center;\n    color: aliceblue;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250ZW50LWNyZWF0b3IvcmV0cmlldmUtcXVpei9yZXRyaWV2ZS1xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6ImFwcC9jb250ZW50LWNyZWF0b3IvcmV0cmlldmUtcXVpei9yZXRyaWV2ZS1xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCx0ZHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/content-creator/retrieve-quiz/retrieve-quiz.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/retrieve-quiz.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<br/><br/><br/>\n<h1 style=\"text-align: center\">List of Quizzes</h1>\n<button type=\"button\" (click)=\"onCreate()\" class=\"btn btn-primary\">Create Quiz</button>\n<br/><br/><br/>\n<div class=\"row\">\n  <div>\n    <input style=\"margin-left: 5%; width: 40rem\" #searchField class=\"form-control mr-sm-2 border border-secondary\"\n      placeholder=\"Filter..\" aria-label=\"Filter\" #searchInput=\"ngModel\" [(ngModel)]=\"searchText\">\n  </div>\n  <div>\n    <select (change)=\"filterSubject($event)\" #dropdown style=\"margin-left :40%\" class=\"form-control border border-secondary\">\n      <option  selected value>Choose Difficulty Level</option>\n      <option value=\"Beginner\">Beginner</option>\n      <option value=\"Intermediate\">Intermediate</option>\n      <option value=\"Advanced\">Advanced</option>\n    </select>\n  </div>\n</div>\n<br /><br />\n<table class=\"table table-bordered table-striped\">\n  <thead class=\"thead-dark\">\n    <th scope=\"col\">#Quiz ID</th>\n    <th scope=\"col\">Quiz Type</th>\n    <th scope=\"col\">Difficulty</th>\n    <th scope=\"col\">Subject</th>\n    <th scope=\"col\">Total Questions</th>\n    <th scope=\"col\">Total Marks</th>\n    <th scope=\"col\">Action</th>\n  </thead>\n\n  <tbody>\n    <ng-container *ngFor=\"let item of QuizList;index as i\">\n      <tr *ngIf=\"(filter(item))\">\n        <th scope=\"row\">{{i+1}}</th>\n        <td scope=\"row\">{{item.QuizType}}</td>\n        <td scope=\"row\">{{item.Difficulty}}</td>\n        <td scope=\"row\">{{item.Subject}}</td>\n        <td scope=\"row\">{{item.TotalQuestions}}</td>\n        <td scope=\"row\">{{item.TotalMarks}}</td>\n        <td>\n          <a class=\"btn text-danger\" (click)=\"onEdit(item.QuizId)\"><i class=\"far fa-edit fa-lg\"></i></a>\n          <a class=\"btn text-danger\" (click)=\"onDelete(item.QuizId)\"><i class=\"fa fa-trash fa-lg\"></i></a>\n        </td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n</div>"

/***/ }),

/***/ "./src/app/content-creator/retrieve-quiz/retrieve-quiz.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/retrieve-quiz.component.ts ***!
  \**************************************************************************/
/*! exports provided: RetrieveQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetrieveQuizComponent", function() { return RetrieveQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/content-creator-service.service */ "./src/app/content-creator/shared/content-creator-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-quiz/create-quiz.component */ "./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.ts");







var RetrieveQuizComponent = /** @class */ (function () {
    function RetrieveQuizComponent(service, router, dialog, toastr) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.toastr = toastr;
        this.searchText = '';
        this.difficultyLevel = '';
        this.index = 0;
    }
    RetrieveQuizComponent.prototype.ngOnInit = function () {
        this.loadQuiz();
    };
    RetrieveQuizComponent.prototype.loadQuiz = function () {
        var _this = this;
        this.service.getQuizzes().subscribe(function (res) {
            _this.QuizList = res;
        });
    };
    RetrieveQuizComponent.prototype.filter = function (item) {
        return (item.Subject.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
            // || item.SubjectName.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
            && item.Difficulty.toLowerCase().indexOf(this.difficultyLevel.toLowerCase()) > -1);
    };
    RetrieveQuizComponent.prototype.filterSubject = function (event) {
        this.difficultyLevel = event.target.value;
        console.log(this.difficultyLevel);
    };
    RetrieveQuizComponent.prototype.onCreate = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        dialogConfig.disableClose = true;
        var dialogRef = this.dialog.open(_create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_6__["CreateQuizComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.service.quizForm.QuizId = null;
        });
    };
    RetrieveQuizComponent.prototype.onDelete = function (id) {
        var _this = this;
        console.log(id);
        if (confirm('Are you sure you want to delete this quiz?')) {
            this.service.deleteQuiz(id).subscribe(function (res) {
                _this.loadQuiz();
                _this.toastr.success('Deleted Successfully', 'Assesment System');
            });
        }
    };
    RetrieveQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tag',
            template: __webpack_require__(/*! ./retrieve-quiz.component.html */ "./src/app/content-creator/retrieve-quiz/retrieve-quiz.component.html"),
            styles: [__webpack_require__(/*! ./retrieve-quiz.component.css */ "./src/app/content-creator/retrieve-quiz/retrieve-quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__["ContentCreatorServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], RetrieveQuizComponent);
    return RetrieveQuizComponent;
}());



/***/ }),

/***/ "./src/app/content-creator/shared/content-creator-service.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/content-creator/shared/content-creator-service.service.ts ***!
  \***************************************************************************/
/*! exports provided: ContentCreatorServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentCreatorServiceService", function() { return ContentCreatorServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ContentCreatorServiceService = /** @class */ (function () {
    function ContentCreatorServiceService(http) {
        this.http = http;
        this.rootURL = 'http://408168d5.ngrok.io/api/';
    }
    ContentCreatorServiceService.prototype.postQuestion = function (formData) {
        console.log(formData);
        return this.http.post(this.rootURL + 'Question/CreateQuestion', formData);
    };
    ContentCreatorServiceService.prototype.updateQuestion = function (formData) {
        console.log(formData);
        return this.http.put(this.rootURL + '' + formData.QuestionId, formData);
    };
    ContentCreatorServiceService.prototype.retrieveSubjects = function () {
        return this.http.get(this.rootURL + 'Subject/GetSubjects');
    };
    ContentCreatorServiceService.prototype.getQuesOfUser = function (uid) {
        return this.http.get(this.rootURL + 'Question/GetQuestionByUser/' + localStorage.getItem('uid'));
    };
    ContentCreatorServiceService.prototype.deleteQues = function (qid) {
        console.log(qid);
        return this.http.delete(this.rootURL + '/Question/Delete/' + qid);
    };
    ContentCreatorServiceService.prototype.getTags = function () {
        return this.http.get(this.rootURL + 'Subject/GetSubjects/' + localStorage.getItem('uid'));
    };
    ContentCreatorServiceService.prototype.postTags = function (tagForm) {
        console.log(tagForm);
        if (tagForm.SubjectId === null) {
            return this.http.post(this.rootURL + 'Subject/CreateSubject', tagForm);
        }
        else {
            return this.http.put(this.rootURL + 'Subject/Edit/' + tagForm.SubjectId, tagForm);
        }
    };
    ContentCreatorServiceService.prototype.deleteTags = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURl + '/Tag/Delete/' + id);
    };
    ContentCreatorServiceService.prototype.getQuizzes = function () {
        return this.http.get(this.rootURL + 'Quiz/GetQuiz/' + localStorage.getItem('uid'));
    };
    ContentCreatorServiceService.prototype.deleteQuiz = function (id) {
        return this.http.delete(this.rootURL + '/Quiz/Delete/' + id);
    };
    ContentCreatorServiceService.prototype.getQuesOfUserConstraints = function (form) {
        console.log(form);
        return this.http.get(this.rootURL);
    };
    ContentCreatorServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContentCreatorServiceService);
    return ContentCreatorServiceService;
}());



/***/ }),

/***/ "./src/app/content-creator/tag/createtag/createtag.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/content-creator/tag/createtag/createtag.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29udGVudC1jcmVhdG9yL3RhZy9jcmVhdGV0YWcvY3JlYXRldGFnLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/content-creator/tag/createtag/createtag.component.html":
/*!************************************************************************!*\
  !*** ./src/app/content-creator/tag/createtag/createtag.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 80%;\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{Option}} Tag</h5>\n    <form #form=\"ngForm\" (submit)=\"onSubmit(form)\" autocomplete=\"off\">\n      <input type=\"hidden\" name=\"CreatedBy\" #CreatedBy=\"ngModel\" [(ngModel)]=\"userId\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <input type=\"hidden\" name=\"SubjectId\" #SubjectId=\"ngModel\" [(ngModel)]=\"service.tagForm.SubjectId\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n              <label>Name</label>\n              <input required type=\"text\" name=\"Name\" #Name=\"ngModel\" [(ngModel)]=\"service.tagForm.Name\"\n                class=\"form-control\">\n              <div class=\"validation-error\" *ngIf=\"Name.invalid && Name.touched\">This field is required.</div>\n          </div>\n        <div class=\"form-group col-md-6\">\n          <label>Department</label>\n          <input required type=\"text\" name=\"Department\" #Department=\"ngModel\" [(ngModel)]=\"service.tagForm.Department\"\n            class=\"form-control\">\n          <div class=\"validation-error\" *ngIf=\"Department.invalid && Department.touched\">This field is required.</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button style=\"margin:0 5%\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">Submit</button>\n        <button type=\"button\" class=\"btn btn-primary btn-danger\" [mat-dialog-close]> Close</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/content-creator/tag/createtag/createtag.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content-creator/tag/createtag/createtag.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreatetagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatetagComponent", function() { return CreatetagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/content-creator-service.service */ "./src/app/content-creator/shared/content-creator-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");





var CreatetagComponent = /** @class */ (function () {
    function CreatetagComponent(data, dialogRef, service, toastr) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.toastr = toastr;
        this.userId = "";
        this.Option = '';
    }
    CreatetagComponent.prototype.ngOnInit = function () {
        // console.log(this.service.tagForm);
        this.userId = localStorage.getItem('uid');
        if (this.data === null) {
            // console.log(this.service.tagForm);
            this.Option = 'Create';
            this.resetForm();
        }
        else {
            // console.log(this.service.tagForm);
            this.Option = 'Update';
            this.service.tagForm = this.data;
            console.log(this.service.tagForm);
        }
    };
    CreatetagComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.resetForm();
        }
        this.service.tagForm = {
            SubjectId: null,
            Name: '',
            Department: ''
        };
    };
    CreatetagComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.service.postTags(form.value).subscribe(function (res) {
            _this.toastr.success('Inserted successfully');
            _this.resetForm(form);
        });
        ;
        //this.dialogRef.close();
    };
    CreatetagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createtag',
            template: __webpack_require__(/*! ./createtag.component.html */ "./src/app/content-creator/tag/createtag/createtag.component.html"),
            styles: [__webpack_require__(/*! ./createtag.component.css */ "./src/app/content-creator/tag/createtag/createtag.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__["ContentCreatorServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CreatetagComponent);
    return CreatetagComponent;
}());



/***/ }),

/***/ "./src/app/content-creator/tag/retrievetag/tag.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/content-creator/tag/retrievetag/tag.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n\twidth: 100%;\n\tmargin-top: 10px;\n}\n.container-fluid {\n\tmargin: 7px auto;\n\tpadding: 5px auto;\n}\nh4 {\n\ttext-align: center;\n}\n.th .mat-header-cell {\n\tpadding-left: 20px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250ZW50LWNyZWF0b3IvdGFnL3JldHJpZXZldGFnL3RhZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUIiLCJmaWxlIjoiYXBwL2NvbnRlbnQtY3JlYXRvci90YWcvcmV0cmlldmV0YWcvdGFnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNvbnRhaW5lci1mbHVpZCB7XG5cdG1hcmdpbjogN3B4IGF1dG87XG5cdHBhZGRpbmc6IDVweCBhdXRvO1xufVxuaDQge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGggLm1hdC1oZWFkZXItY2VsbCB7XG5cdHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/content-creator/tag/retrievetag/tag.component.html":
/*!********************************************************************!*\
  !*** ./src/app/content-creator/tag/retrievetag/tag.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <button mat-raised-button (click)=\"onCreate()\">\n    <mat-icon>add</mat-icon>Create\n  </button>\n</div>\n<table class=\"table table-bordered table-striped\">\n  <thead class=\"thead-dark\">\n    <th scope=\"col\">#Subject ID</th>\n    <th scope=\"col\">Subject</th>\n    <th scope=\"col\">Department</th>\n    <th scope=\"col\">Action</th>\n\n  </thead>\n\n  <tbody>\n    <ng-container *ngFor=\"let tag of tagList;index as i;\">\n      <tr style=\"color:azure\">\n        <th scope=\"row\">{{i+1}}</th>\n        <td scope=\"row\">{{tag.Name}}</td>\n        <td scope=\"row\">{{tag.Department}}</td>\n        <td>\n          <a class=\"btn btn-sm btn-info text-white\" (click)=\"onEdit(i+1)\"><i class=\"fa fa-pencil\"></i></a>\n        </td>\n\n      </tr>\n    </ng-container>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/content-creator/tag/retrievetag/tag.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/content-creator/tag/retrievetag/tag.component.ts ***!
  \******************************************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/content-creator-service.service */ "./src/app/content-creator/shared/content-creator-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _createtag_createtag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../createtag/createtag.component */ "./src/app/content-creator/tag/createtag/createtag.component.ts");







var TagComponent = /** @class */ (function () {
    function TagComponent(service, router, dialog, toastr) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.toastr = toastr;
    }
    TagComponent.prototype.ngOnInit = function () {
        this.loadTags();
    };
    TagComponent.prototype.loadTags = function () {
        var _this = this;
        this.service.getTags().subscribe(function (res) {
            console.log(res);
            _this.tagList = res;
        });
    };
    TagComponent.prototype.onCreate = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        dialogConfig.disableClose = true;
        var dialogRef = this.dialog.open(_createtag_createtag_component__WEBPACK_IMPORTED_MODULE_6__["CreatetagComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.service.tagForm.SubjectId = null;
            _this.ngOnInit();
        });
    };
    // onDelete(id: number) {
    // 	console.log(id);
    // 	if (confirm('Are you sure you want to delete this record')) {
    // 		this.service.deleteTags(id).subscribe((res: any) => {
    // 			this.loadTags();
    // 			this.toastr.success('Deleted Successfully', 'Assesment System');
    // 		});
    // 	}
    // }
    TagComponent.prototype.onEdit = function (id) {
        // console.log(id);
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        dialogConfig.disableClose = false;
        dialogConfig.data = this.tagList[id - 1];
        console.log(dialogConfig.data);
        var dialogRef = this.dialog.open(_createtag_createtag_component__WEBPACK_IMPORTED_MODULE_6__["CreatetagComponent"], dialogConfig);
    };
    TagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tag',
            template: __webpack_require__(/*! ./tag.component.html */ "./src/app/content-creator/tag/retrievetag/tag.component.html"),
            styles: [__webpack_require__(/*! ./tag.component.css */ "./src/app/content-creator/tag/retrievetag/tag.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__["ContentCreatorServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], TagComponent);
    return TagComponent;
}());



/***/ }),

/***/ "./src/app/content-creator/update-question/update-question.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/content-creator/update-question/update-question.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29udGVudC1jcmVhdG9yL3VwZGF0ZS1xdWVzdGlvbi91cGRhdGUtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/content-creator/update-question/update-question.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/content-creator/update-question/update-question.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 80%;\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Edit Questions</h5>\n      <form #form=\"ngForm\" (submit)=\"onSubmit(form)\" autocomplete=\"off\">\n        <input type=\"hidden\" name=\"Question_ID\" #Question_ID=\"ngModel\" [(ngModel)]=\"service.formData.Question_ID\">\n        <div class=\"form-group\">\n          <label>Question</label>\n          <textarea class=\"form-control\" name=\"QuestionStatement\" #QuestionStatement=\"ngModel\"\n            [(ngModel)]=\"service.formData.QuestionStatement\" rows=\"3\"></textarea>\n          <div class=\"validation-error\" *ngIf=\"QuestionStatement.invalid && QuestionStatement.touched\">This field is\n            required.\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label>Option 1</label>\n            <input required type=\"text\" name=\"Option1\" #Option1=\"ngModel\" [(ngModel)]=\"service.formData.Option1\"\n              class=\"form-control\">\n            <div class=\"validation-error\" *ngIf=\"Option1.invalid && Option1.touched\">This field is required.</div>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label>Option 2</label>\n            <input required type=\"text\" name=\"Option2\" #Option2=\"ngModel\" [(ngModel)]=\"service.formData.Option2\"\n              class=\"form-control\">\n            <div class=\"validation-error\" *ngIf=\"Option2.invalid && Option2.touched\">This field is required.</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label>Option 3</label>\n            <input required type=\"text\" name=\"Option3\" #Option3=\"ngModel\" [(ngModel)]=\"service.formData.Option3\"\n              class=\"form-control\">\n            <div class=\"validation-error\" *ngIf=\"Option3.invalid && Option3.touched\">This field is required.</div>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label>Option 4</label>\n            <input required type=\"text\" name=\"Option4\" #Option4=\"ngModel\" [(ngModel)]=\"service.formData.Option4\"\n              class=\"form-control\">\n            <div class=\"validation-error\" *ngIf=\"Option4.invalid && Option4.touched\">This field is required.</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label>Correct Option</label>\n            <input required type=\"text\" name=\"Answer\" #Answer=\"ngModel\" [(ngModel)]=\"service.formData.Answer\"\n              class=\"form-control\">\n            <div class=\"validation-error\" *ngIf=\"Answer.invalid && Answer.touched\">This field is required.\n            </div>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label>Marks</label>\n            <input required type=\"text\" name=\"Marks\" #Marks=\"ngModel\" [(ngModel)]=\"service.formData.Marks\"\n              class=\"form-control\">\n            <div class=\"validation-error\" *ngIf=\"Marks.invalid && Marks.touched\">This field is required.</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label>Select Subject</label>\n            <select name=\"SubjectId\" required #SubjectId=\"ngModel\" [(ngModel)]=\"service.formData.SubjectId\"\n              class=\"form-control\">\n              <option value=\"\">Choose</option>\n              <option *ngFor=\"let Subject of Subjects\" value=\"{{Subject.SubjectId}}\">{{Subject.Name}}</option>\n            </select>\n            <div class=\"validation-error\" *ngIf=\"SubjectId.invalid && SubjectId.touched\">This field is required.</div>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label>Select Difficulty-Level</label>\n            <select name=\"Difficulty\" required #Difficulty=\"ngModel\" [(ngModel)]=\"service.formData.Difficulty\"\n              class=\"form-control\">\n              <option value=\"\">Choose</option>\n              <option value=\"Beginner\">Easy</option>\n              <option value=\"Intermediate\">Medium</option>\n              <option value=\"Advanced\">Hard</option>\n            </select>\n            <div class=\"validation-error\" *ngIf=\"Difficulty.invalid && Difficulty.touched\">This field is required.</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <button style=\"margin:0 5%\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">Submit</button>\n          <button type=\"button\" class=\"btn btn-primary btn-danger\" [mat-dialog-close]> Close</button>\n        </div>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/content-creator/update-question/update-question.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/content-creator/update-question/update-question.component.ts ***!
  \******************************************************************************/
/*! exports provided: UpdateQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateQuestionComponent", function() { return UpdateQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_content_creator_shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/content-creator/shared/content-creator-service.service */ "./src/app/content-creator/shared/content-creator-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");





var UpdateQuestionComponent = /** @class */ (function () {
    function UpdateQuestionComponent(data, dialogRef, service, toastr) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.toastr = toastr;
    }
    UpdateQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.retrieveSubjects().subscribe(function (res) {
            _this.Subjects = res;
        });
    };
    UpdateQuestionComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.resetForm();
        }
        this.service.formData = {
            QuestionId: null,
            QuestionStatement: "",
            Option1: "",
            Option2: "",
            Option3: "",
            Option4: "",
            Answer: null,
            Marks: null,
            Difficulty: "",
            SubjectId: "",
        };
    };
    UpdateQuestionComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.service.updateQuestion(form.value).subscribe(function (res) {
            _this.toastr.success('Updated successfully');
            _this.resetForm(form);
        });
        ;
    };
    UpdateQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-question',
            template: __webpack_require__(/*! ./update-question.component.html */ "./src/app/content-creator/update-question/update-question.component.html"),
            styles: [__webpack_require__(/*! ./update-question.component.css */ "./src/app/content-creator/update-question/update-question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            src_app_content_creator_shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__["ContentCreatorServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], UpdateQuestionComponent);
    return UpdateQuestionComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, http) {
        this.router = router;
        this.http = http;
        this.rooturl = 'http://408168d5.ngrok.io/api/';
        this.role = "";
        this.uid = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('id') != null) {
            var body = {
                FirstName: localStorage.getItem('firstname'),
                LastName: localStorage.getItem('lastname'),
                Email: localStorage.getItem('email'),
                ImgURL: localStorage.getItem('imgurl'),
                GoogleId: localStorage.getItem('id')
            };
            // console.log(body);
            this.http.post(this.rooturl + 'User/Register', body).subscribe(function (res) {
                // console.log(res);
                _this.http.get(_this.rooturl + 'GetUserDetails?email=' + localStorage.getItem('email')).subscribe(function (res1) {
                    console.log(res1);
                    _this.uid = res1.Id;
                    _this.role = res1.Roles[0].RoleId;
                    console.log(_this.uid);
                    console.log(_this.role);
                    localStorage.setItem('uid', _this.uid);
                    localStorage.setItem('role', _this.role);
                    _this.redirecttodash(_this.role);
                });
                // this.role = res.role;
                // this.uid = res.Id
                // localStorage.setItem('userId', this.uid);
                // localStorage.setItem('role', this.role);
                // this.redirecttodash(this.role);
            });
        }
        else {
            console.log("sigin first");
            this.router.navigate(['/login']);
        }
    };
    HomeComponent.prototype.redirecttodash = function (role) {
        if (this.role === '2') {
            console.log('i am content creator');
            this.router.navigate(['/cc-dash']);
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\n  <button class=\"btn btn-success\" (click)=\"signInWithGoogle()\"><span\n      class=\"fa fa-google\"></span></button>\n</div>\n<div class=\"card-block\" *ngIf=\"user\">\n  <button class=\"btn btn-danger\" (click)=\"signOut()\">Sign out</button>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            if (user != null) {
                console.log(_this.user);
                localStorage.setItem('token', _this.user.idToken);
                localStorage.setItem('email', _this.user.email);
                localStorage.setItem('firstname', _this.user.firstName);
                localStorage.setItem('lastname', _this.user.lastName);
                localStorage.setItem('id', _this.user.id);
                localStorage.setItem('imgurl', _this.user.photoUrl);
                localStorage.setItem('provider', _this.user.provider);
                _this.router.navigate(['/home']);
            }
            else {
                localStorage.clear();
                console.log('not signed in');
            }
        });
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID);
    };
    LoginComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiURl: 'https://00a0d9f2.ngrok.io/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nirmit/Desktop/AssessmentSystem/WebApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map