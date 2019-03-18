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
/* harmony import */ var _content_creator_retrieve_question_bank_retrieve_question_bank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-creator/retrieve-question-bank/retrieve-question-bank.component */ "./src/app/content-creator/retrieve-question-bank/retrieve-question-bank.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _content_creator_tag_retrievetag_tag_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-creator/tag/retrievetag/tag.component */ "./src/app/content-creator/tag/retrievetag/tag.component.ts");
/* harmony import */ var _content_creator_retrieve_quiz_retrieve_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content-creator/retrieve-quiz/retrieve-quiz.component */ "./src/app/content-creator/retrieve-quiz/retrieve-quiz.component.ts");
/* harmony import */ var _content_creator_create_questions_create_questions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content-creator/create-questions/create-questions.component */ "./src/app/content-creator/create-questions/create-questions.component.ts");
/* harmony import */ var _content_creator_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content-creator/user-details/user-details.component */ "./src/app/content-creator/user-details/user-details.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _content_creator_retrieve_quiz_archive_quiz_archive_quiz_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content-creator/retrieve-quiz/archive-quiz/archive-quiz.component */ "./src/app/content-creator/retrieve-quiz/archive-quiz/archive-quiz.component.ts");
/* harmony import */ var _test_admin_retrieve_schedule_create_schedule_create_schedule_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./test-admin/retrieve-schedule/create-schedule/create-schedule.component */ "./src/app/test-admin/retrieve-schedule/create-schedule/create-schedule.component.ts");
/* harmony import */ var _test_admin_retrieve_schedule_retrieve_schedule_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./test-admin/retrieve-schedule/retrieve-schedule.component */ "./src/app/test-admin/retrieve-schedule/retrieve-schedule.component.ts");
/* harmony import */ var _test_admin_main_nav2_main_nav2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./test-admin/main-nav2/main-nav2.component */ "./src/app/test-admin/main-nav2/main-nav2.component.ts");
















var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], pathMatch: 'full' },
    { path: 'app-root', component: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
    { path: 'cc-dash', component: _content_creator_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'tag', component: _content_creator_tag_retrievetag_tag_component__WEBPACK_IMPORTED_MODULE_7__["TagComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'quiz', component: _content_creator_retrieve_quiz_retrieve_quiz_component__WEBPACK_IMPORTED_MODULE_8__["RetrieveQuizComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'rqbank', component: _content_creator_retrieve_question_bank_retrieve_question_bank_component__WEBPACK_IMPORTED_MODULE_3__["RetrieveQuestionBankComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'create-question', component: _content_creator_create_questions_create_questions_component__WEBPACK_IMPORTED_MODULE_9__["CreateQuestionsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'archive-quiz', component: _content_creator_retrieve_quiz_archive_quiz_archive_quiz_component__WEBPACK_IMPORTED_MODULE_12__["ArchiveQuizComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'testAdminCreateScheDule', component: _test_admin_retrieve_schedule_create_schedule_create_schedule_component__WEBPACK_IMPORTED_MODULE_13__["CreateScheduleComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'retrieve-schedule', component: _test_admin_retrieve_schedule_retrieve_schedule_component__WEBPACK_IMPORTED_MODULE_14__["RetrieveScheduleComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'ta-dash', component: _test_admin_main_nav2_main_nav2_component__WEBPACK_IMPORTED_MODULE_15__["MainNav2Component"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] }
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-login></app-login> -->\n<!-- <app-main-nav></app-main-nav> -->\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _content_creator_retrieve_question_bank_retrieve_question_bank_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content-creator/retrieve-question-bank/retrieve-question-bank.component */ "./src/app/content-creator/retrieve-question-bank/retrieve-question-bank.component.ts");
/* harmony import */ var _content_creator_shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content-creator/shared/content-creator-service.service */ "./src/app/content-creator/shared/content-creator-service.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _content_creator_tag_createtag_createtag_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./content-creator/tag/createtag/createtag.component */ "./src/app/content-creator/tag/createtag/createtag.component.ts");
/* harmony import */ var _content_creator_tag_retrievetag_tag_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./content-creator/tag/retrievetag/tag.component */ "./src/app/content-creator/tag/retrievetag/tag.component.ts");
/* harmony import */ var _content_creator_retrieve_quiz_retrieve_quiz_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./content-creator/retrieve-quiz/retrieve-quiz.component */ "./src/app/content-creator/retrieve-quiz/retrieve-quiz.component.ts");
/* harmony import */ var _content_creator_retrieve_quiz_create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./content-creator/retrieve-quiz/create-quiz/create-quiz.component */ "./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.ts");
/* harmony import */ var _content_creator_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./content-creator/update-question/update-question.component */ "./src/app/content-creator/update-question/update-question.component.ts");
/* harmony import */ var _content_creator_retrieve_quiz_update_quiz_update_quiz_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./content-creator/retrieve-quiz/update-quiz/update-quiz.component */ "./src/app/content-creator/retrieve-quiz/update-quiz/update-quiz.component.ts");
/* harmony import */ var _content_creator_retrieve_quiz_add_ques_in_quiz_add_ques_in_quiz_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./content-creator/retrieve-quiz/add-ques-in-quiz/add-ques-in-quiz.component */ "./src/app/content-creator/retrieve-quiz/add-ques-in-quiz/add-ques-in-quiz.component.ts");
/* harmony import */ var _content_creator_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./content-creator/main-nav/main-nav.component */ "./src/app/content-creator/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _content_creator_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./content-creator/user-details/user-details.component */ "./src/app/content-creator/user-details/user-details.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _test_admin_test_admin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./test-admin/test-admin.component */ "./src/app/test-admin/test-admin.component.ts");
/* harmony import */ var _test_admin_retrieve_schedule_retrieve_schedule_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./test-admin/retrieve-schedule/retrieve-schedule.component */ "./src/app/test-admin/retrieve-schedule/retrieve-schedule.component.ts");
/* harmony import */ var _test_admin_retrieve_schedule_create_schedule_create_schedule_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./test-admin/retrieve-schedule/create-schedule/create-schedule.component */ "./src/app/test-admin/retrieve-schedule/create-schedule/create-schedule.component.ts");
/* harmony import */ var _test_admin_retrieve_schedule_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./test-admin/retrieve-schedule/add-user/add-user.component */ "./src/app/test-admin/retrieve-schedule/add-user/add-user.component.ts");
/* harmony import */ var _content_creator_retrieve_quiz_archive_quiz_archive_quiz_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./content-creator/retrieve-quiz/archive-quiz/archive-quiz.component */ "./src/app/content-creator/retrieve-quiz/archive-quiz/archive-quiz.component.ts");
/* harmony import */ var _test_admin_main_nav2_main_nav2_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./test-admin/main-nav2/main-nav2.component */ "./src/app/test-admin/main-nav2/main-nav2.component.ts");
/* harmony import */ var _test_admin_retrieve_schedule_view_schedule_view_schedule_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./test-admin/retrieve-schedule/view-schedule/view-schedule.component */ "./src/app/test-admin/retrieve-schedule/view-schedule/view-schedule.component.ts");









































var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLoginProvider"]('819840688710-ljvg9sqe86d08r2hlgv6e9s74i3jmiq0.apps.googleusercontent.com')
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
                _content_creator_retrieve_question_bank_retrieve_question_bank_component__WEBPACK_IMPORTED_MODULE_11__["RetrieveQuestionBankComponent"],
                _content_creator_content_creator_component__WEBPACK_IMPORTED_MODULE_10__["ContentCreatorComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _content_creator_tag_createtag_createtag_component__WEBPACK_IMPORTED_MODULE_21__["CreatetagComponent"],
                _content_creator_tag_retrievetag_tag_component__WEBPACK_IMPORTED_MODULE_22__["TagComponent"],
                _content_creator_retrieve_quiz_retrieve_quiz_component__WEBPACK_IMPORTED_MODULE_23__["RetrieveQuizComponent"],
                _content_creator_retrieve_quiz_create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_24__["CreateQuizComponent"],
                _content_creator_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_25__["UpdateQuestionComponent"],
                _content_creator_retrieve_quiz_update_quiz_update_quiz_component__WEBPACK_IMPORTED_MODULE_26__["UpdateQuizComponent"],
                _content_creator_retrieve_quiz_add_ques_in_quiz_add_ques_in_quiz_component__WEBPACK_IMPORTED_MODULE_27__["AddQuesInQuizComponent"],
                _content_creator_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_28__["MainNavComponent"],
                _content_creator_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_31__["UserDetailsComponent"],
                _test_admin_test_admin_component__WEBPACK_IMPORTED_MODULE_33__["TestAdminComponent"],
                _test_admin_retrieve_schedule_retrieve_schedule_component__WEBPACK_IMPORTED_MODULE_34__["RetrieveScheduleComponent"],
                _test_admin_retrieve_schedule_create_schedule_create_schedule_component__WEBPACK_IMPORTED_MODULE_35__["CreateScheduleComponent"],
                _test_admin_retrieve_schedule_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_36__["AddUserComponent"],
                _content_creator_retrieve_quiz_archive_quiz_archive_quiz_component__WEBPACK_IMPORTED_MODULE_37__["ArchiveQuizComponent"],
                _test_admin_main_nav2_main_nav2_component__WEBPACK_IMPORTED_MODULE_38__["MainNav2Component"],
                _test_admin_retrieve_schedule_view_schedule_view_schedule_component__WEBPACK_IMPORTED_MODULE_39__["ViewScheduleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["SocialLoginModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_29__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_30__["MatListModule"]
            ],
            providers: [
                _auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"],
                _content_creator_shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_12__["ContentCreatorServiceService"],
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            entryComponents: [
                _content_creator_tag_createtag_createtag_component__WEBPACK_IMPORTED_MODULE_21__["CreatetagComponent"],
                _content_creator_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_25__["UpdateQuestionComponent"],
                _content_creator_retrieve_quiz_create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_24__["CreateQuizComponent"],
                _content_creator_retrieve_quiz_update_quiz_update_quiz_component__WEBPACK_IMPORTED_MODULE_26__["UpdateQuizComponent"],
                _content_creator_retrieve_quiz_add_ques_in_quiz_add_ques_in_quiz_component__WEBPACK_IMPORTED_MODULE_27__["AddQuesInQuizComponent"],
                _test_admin_retrieve_schedule_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_36__["AddUserComponent"],
                _test_admin_retrieve_schedule_view_schedule_view_schedule_component__WEBPACK_IMPORTED_MODULE_39__["ViewScheduleComponent"]
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('uid') != null) {
            return true;
        }
        localStorage.clear();
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard.prototype.canActivateChild = function (next, state) {
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/content-creator/content-creator.component.css":
/*!***************************************************************!*\
  !*** ./src/app/content-creator/content-creator.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQtY3JlYXRvci9jb250ZW50LWNyZWF0b3IuY29tcG9uZW50LmNzcyJ9 */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQtY3JlYXRvci9jcmVhdGUtcXVlc3Rpb25zL2NyZWF0ZS1xdWVzdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/content-creator/create-questions/create-questions.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/content-creator/create-questions/create-questions.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav>\n  <div class=\"card\" style=\"width: 80%;\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Add Questions</h5>\n      <form #form=\"ngForm\" (submit)=\"onSubmit(form)\" autocomplete=\"off\">\n        <input type=\"hidden\" name=\"CreatedBy\" #CreatedBy=\"ngModel\" [(ngModel)]=\"CCreatedBy\">\n        <div class=\"form-group\">\n          <label>Question</label>\n          <textarea class=\"form-control\" name=\"QuestionStatement\" #QuestionStatement=\"ngModel\"\n            [(ngModel)]=\"service.formData.QuestionStatement\" rows=\"3\" required></textarea>\n          <div class=\"validation-error\" *ngIf=\"QuestionStatement.invalid && QuestionStatement.touched\">This field is\n            required.\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label>Option 1</label>\n            <input required type=\"text\" name=\"Option1\" #Option1=\"ngModel\" [(ngModel)]=\"service.formData.Option1\"\n              class=\"form-control\">\n            <div class=\"validation-error\" *ngIf=\"Option1.invalid && Option1.touched\">This field is required.</div>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label>Option 2</label>\n            <input required type=\"text\" name=\"Option2\" #Option2=\"ngModel\" [(ngModel)]=\"service.formData.Option2\"\n              class=\"form-control\">\n            <div class=\"validation-error\" *ngIf=\"Option2.invalid && Option2.touched\">This field is required.</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label>Option 3</label>\n            <input required type=\"text\" name=\"Option3\" #Option3=\"ngModel\" [(ngModel)]=\"service.formData.Option3\"\n              class=\"form-control\">\n            <div class=\"validation-error\" *ngIf=\"Option3.invalid && Option3.touched\">This field is required.</div>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label>Option 4</label>\n            <input required type=\"text\" name=\"Option4\" #Option4=\"ngModel\" [(ngModel)]=\"service.formData.Option4\"\n              class=\"form-control\">\n            <div class=\"validation-error\" *ngIf=\"Option4.invalid && Option4.touched\">This field is required.</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label>Correct Option</label>\n            <input required type=\"text\" name=\"Answer\" #Answer=\"ngModel\" [(ngModel)]=\"service.formData.Answer\"\n              class=\"form-control\">\n            <div class=\"validation-error\" *ngIf=\"Answer.invalid && Answer.touched\">This field is required.\n            </div>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label>Marks</label>\n            <input required type=\"text\" name=\"Marks\" #Marks=\"ngModel\" [(ngModel)]=\"service.formData.Marks\"\n              class=\"form-control\">\n            <div class=\"validation-error\" *ngIf=\"Marks.invalid && Marks.touched\">This field is required.</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label>Select Subject</label>\n            <select name=\"SubjectId\" required #SubjectId=\"ngModel\" [(ngModel)]=\"service.formData.SubjectId\"\n              class=\"form-control\">\n              <option value=\"\">Choose</option>\n              <option *ngFor=\"let Subject of Subjects\" value=\"{{Subject.SubjectId}}\">{{Subject.Name}}</option>\n            </select>\n            <div class=\"validation-error\" *ngIf=\"SubjectId.invalid && SubjectId.touched\">This field is required.</div>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label>Select Difficulty-Level</label>\n            <select name=\"Difficulty\" required #Difficulty=\"ngModel\" [(ngModel)]=\"service.formData.Difficulty\"\n              class=\"form-control\">\n              <option value=\"\">Choose</option>\n              <option value=\"Beginner\">Easy</option>\n              <option value=\"Intermediate\">Medium</option>\n              <option value=\"Advanced\">Hard</option>\n            </select>\n            <div class=\"validation-error\" *ngIf=\"Difficulty.invalid && Difficulty.touched\">This field is required.</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary btn-block\">Submit</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</app-main-nav>"

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
/* harmony import */ var _shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/content-creator-service.service */ "./src/app/content-creator/shared/content-creator-service.service.ts");
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__["ContentCreatorServiceService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CreateQuestionsComponent);
    return CreateQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/content-creator/main-nav/main-nav.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/content-creator/main-nav/main-nav.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n\theight: 100%;\n}\n.sidenav-container a {\n\tcolor: white;\n}\n/* .sidenav-container a:focus {\n\tbackground-color: green !important;\n}\n.sidenav-container a:active {\n\tbackground-color: green !important;\n} */\n.sidenav-container a:hover,\n.sidenav-container a:focus {\n\tbackground-color: red !important;\n}\n/* a:focus {\n\tbackground-color: red !important;\n} */\n.sidenav {\n\twidth: 250px;\n\tbackground-color: #021521;\n}\n.sidenav .mat-toolbar {\n\tbackground: inherit;\n}\n.mat-toolbar {\n\tbackground-color: #021521;\n\ttext-decoration: none;\n\tborder-bottom: .2px solid #030e13;\n}\n.mat-toolbar span {\n\tcolor: white;\n}\n.mat-list-item {\n\tmargin-top: 10px;\n}\n.log {\n\tfont-size: 15px;\n\tcursor: pointer;\n\tcolor: red !important;\n}\n.mat-toolbar.mat-primary {\n\tposition: -webkit-sticky;\n\tposition: sticky;\n\ttop: 0;\n\tz-index: 1;\n}\n.content {\n\tpadding: 30px 30px 0px 50px !important;\n\tmargin: 30px auto;\n}\n.mat-icon {\n\tcolor: white;\n}\n.spacer {\n\tflex: 1 1 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC1jcmVhdG9yL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOzs7OztHQUtHO0FBQ0g7O0NBRUMsZ0NBQWdDO0FBQ2pDO0FBQ0E7O0dBRUc7QUFFSDtDQUNDLFlBQVk7Q0FDWix5QkFBeUI7QUFDMUI7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixpQ0FBaUM7QUFDbEM7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZUFBZTtDQUNmLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0Msd0JBQWdCO0NBQWhCLGdCQUFnQjtDQUNoQixNQUFNO0NBQ04sVUFBVTtBQUNYO0FBQ0E7Q0FDQyxzQ0FBc0M7Q0FDdEMsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLGNBQWM7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQtY3JlYXRvci9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcblx0aGVpZ2h0OiAxMDAlO1xufVxuLnNpZGVuYXYtY29udGFpbmVyIGEge1xuXHRjb2xvcjogd2hpdGU7XG59XG4vKiAuc2lkZW5hdi1jb250YWluZXIgYTpmb2N1cyB7XG5cdGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XG59XG4uc2lkZW5hdi1jb250YWluZXIgYTphY3RpdmUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xufSAqL1xuLnNpZGVuYXYtY29udGFpbmVyIGE6aG92ZXIsXG4uc2lkZW5hdi1jb250YWluZXIgYTpmb2N1cyB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuLyogYTpmb2N1cyB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufSAqL1xuXG4uc2lkZW5hdiB7XG5cdHdpZHRoOiAyNTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAyMTUyMTtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcblx0YmFja2dyb3VuZDogaW5oZXJpdDtcbn1cbi5tYXQtdG9vbGJhciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMjE1MjE7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Ym9yZGVyLWJvdHRvbTogLjJweCBzb2xpZCAjMDMwZTEzO1xufVxuLm1hdC10b29sYmFyIHNwYW4ge1xuXHRjb2xvcjogd2hpdGU7XG59XG4ubWF0LWxpc3QtaXRlbSB7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubG9nIHtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG5cdHBvc2l0aW9uOiBzdGlja3k7XG5cdHRvcDogMDtcblx0ei1pbmRleDogMTtcbn1cbi5jb250ZW50IHtcblx0cGFkZGluZzogMzBweCAzMHB4IDBweCA1MHB4ICFpbXBvcnRhbnQ7XG5cdG1hcmdpbjogMzBweCBhdXRvO1xufVxuLm1hdC1pY29uIHtcblx0Y29sb3I6IHdoaXRlO1xufVxuLnNwYWNlciB7XG5cdGZsZXg6IDEgMSBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/content-creator/main-nav/main-nav.component.html":
/*!******************************************************************!*\
  !*** ./src/app/content-creator/main-nav/main-nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar><a mat-list-item routerLink=\"/cc-dash\">Dashboard</a></mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/create-question\">Create Question</a>\n      <a mat-list-item routerLink=\"/quiz\">Create/Retrieve Quiz</a>\n      <a mat-list-item routerLink=\"/tag\">Create / Edit Tag</a>\n      <a mat-list-item routerLink=\"/rqbank\">Questions Created</a>\n      <a mat-list-item routerLink=\"/archive-quiz\">Archive Quizes</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar>\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Content Creator</span>\n      <span class=\"spacer\"></span>\n      <a class= \"log\"(click)=\"logout()\" >Log Out</a>\n    </mat-toolbar>\n    <div class=\"content\">\n    <ng-content></ng-content>\n  </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/content-creator/main-nav/main-nav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/content-creator/main-nav/main-nav.component.ts ***!
  \****************************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver, authService, router) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.router = router;
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    MainNavComponent.prototype.ngOnInit = function () {
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
    MainNavComponent.prototype.Open = function (link) {
        this.Val = link;
        console.log(this.Val);
    };
    MainNavComponent.prototype.logout = function () {
        localStorage.clear();
        this.authService.signOut();
    };
    MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/content-creator/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/content-creator/main-nav/main-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/content-creator/retrieve-question-bank/retrieve-question-bank.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-question-bank/retrieve-question-bank.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th,\ntd {\n\ttext-align: center;\n\tcolor: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC1jcmVhdG9yL3JldHJpZXZlLXF1ZXN0aW9uLWJhbmsvcmV0cmlldmUtcXVlc3Rpb24tYmFuay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50LWNyZWF0b3IvcmV0cmlldmUtcXVlc3Rpb24tYmFuay9yZXRyaWV2ZS1xdWVzdGlvbi1iYW5rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCxcbnRkIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogYmxhY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/content-creator/retrieve-question-bank/retrieve-question-bank.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-question-bank/retrieve-question-bank.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav>\n\n<div class=\"row\">\n  <div>\n    <input style=\"margin-left: 5%; width: 40rem\" #searchField class=\"form-control mr-sm-2 border border-secondary\"\n      placeholder=\"Filter..\" aria-label=\"Filter\" #searchInput=\"ngModel\" [(ngModel)]=\"searchText\">\n  </div>\n  <div>\n    <select (change)=\"filterSubject($event)\" #dropdown style=\"margin-left :40%\"\n      class=\"form-control border border-secondary\">\n      <option selected value>Choose Difficulty Level</option>\n      <option value=\"Beginner\">Beginner</option>\n      <option value=\"Intermediate\">Intermediate</option>\n      <option value=\"Advanced\">Advanced</option>\n    </select>\n  </div>\n</div>\n<br /><br />\n<table class=\"table table-bordered table-striped\">\n  <thead class=\"thead-dark\">\n    <th scope=\"col\">#Question ID</th>\n    <th scope=\"col\">Question</th>\n    <th scope=\"col\">Subject</th>\n    <th scope=\"col\">Difficulty Level</th>\n    <th scope=\"col\">Action</th>\n\n  </thead>\n\n  <tbody>\n    <ng-container *ngFor=\"let ques of questionList;index as i;\">\n      <tr *ngIf=\"(filter(ques))\"  style=\"color:azure\">\n        <th (click)=\"viewUserQues(ques.QuestionId,i+1)\" scope=\"row\">{{i+1}}</th>\n        <td (click)=\"viewUserQues(ques.QuestionId,i+1)\" scope=\"row\">{{ques.QuestionStatement}}</td>\n        <td (click)=\"viewUserQues(ques.QuestionId,i+1)\" scope=\"row\">{{ques.SubjectName}}</td>\n        <td (click)=\"viewUserQues(ques.QuestionId,i+1)\" scope=\"row\">{{ques.Difficulty}}</td>\n        <td>\n          <a class=\"btn btn-sm btn-info text-white\" (click)=\"editUserQues(ques.QuestionId,i+1)\"><i\n              class=\"fa fa-pencil\"></i></a>\n          <a class=\"btn btn-sm btn-danger text-white ml-1\" (click)=\"deleteQues(ques.QuestionId)\"><i\n              class=\"fa fa-trash\"></i></a>\n        </td>\n\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n</app-main-nav>\n"

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
    RetrieveQuestionBankComponent.prototype.filter = function (ques) {
        console.log(this.difficultyLevel);
        console.log(ques.Difficulty);
        return ((ques.QuestionStatement.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
            || ques.SubjectName.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1)
            && ques.Difficulty.toLowerCase().indexOf(this.difficultyLevel.toLowerCase()) > -1);
    };
    RetrieveQuestionBankComponent.prototype.filterSubject = function (event) {
        this.difficultyLevel = event.target.value;
        console.log(this.difficultyLevel);
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
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        dialogConfig.disableClose = true;
        this.service.readonlyStatus = false;
        this.service.formData = this.questionList[arrayindex - 1];
        this.dialog.open(_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_5__["UpdateQuestionComponent"], dialogConfig).afterClosed().subscribe(function (res) {
            console.log(res);
            _this.getQuesOfUser(localStorage.getItem('uid'));
        });
    };
    RetrieveQuestionBankComponent.prototype.viewUserQues = function (quesid, arrayindex) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        dialogConfig.disableClose = true;
        this.service.readonlyStatus = true;
        this.service.formData = this.questionList[arrayindex - 1];
        this.dialog.open(_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_5__["UpdateQuestionComponent"], dialogConfig).afterClosed().subscribe(function (res) {
        });
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

/***/ "./src/app/content-creator/retrieve-quiz/add-ques-in-quiz/add-ques-in-quiz.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/add-ques-in-quiz/add-ques-in-quiz.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQtY3JlYXRvci9yZXRyaWV2ZS1xdWl6L2FkZC1xdWVzLWluLXF1aXovYWRkLXF1ZXMtaW4tcXVpei5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content-creator/retrieve-quiz/add-ques-in-quiz/add-ques-in-quiz.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/add-ques-in-quiz/add-ques-in-quiz.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\n  <h5 class=\"card-title\" style=\"text-align: center\">Choose Questions</h5><br>\n  <form #Questionform=\"ngForm\" (submit)=\"onDetailsSubmit(Questionform)\" autocomplete=\"off\">\n    <div *ngFor=\"let x of questions; let i = index\"><br>\n      <input [id]=\"'questions-'+i\" type=\"checkbox\" value=\"{{x.Question_ID}}\" [checked]=\"x.selected\"\n        (change)=\"updateSelectedQuestions(i)\">\n      <label>{{x.QuestionStatement}}</label>\n    </div>\n    <button style=\"margin-left:5%; margin-right: 5%\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    <button type=\"button\" class=\"btn btn-primary btn-danger\" [mat-dialog-close]> Close</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/content-creator/retrieve-quiz/add-ques-in-quiz/add-ques-in-quiz.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/add-ques-in-quiz/add-ques-in-quiz.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddQuesInQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuesInQuizComponent", function() { return AddQuesInQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/content-creator-service.service */ "./src/app/content-creator/shared/content-creator-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");





var AddQuesInQuizComponent = /** @class */ (function () {
    function AddQuesInQuizComponent(data, service, toastr, dialog, dialogref) {
        this.data = data;
        this.service = service;
        this.toastr = toastr;
        this.dialog = dialog;
        this.dialogref = dialogref;
        this.val = false;
        this.count = 0;
        this.CDifficulty = "";
        this.CSubjectID = null;
    }
    AddQuesInQuizComponent.prototype.ngOnInit = function () {
        this.questions = this.data;
        console.log(this.questions);
        this.resetForm();
    };
    AddQuesInQuizComponent.prototype.resetForm = function (form) {
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
                QuestionIds: null,
                SubjectId: null,
                QuizName: ''
            };
            if (this.questions) {
                this.questions.map(function (y) { return y.selected = false; });
            }
        }
    };
    AddQuesInQuizComponent.prototype.updateSelectedQuestions = function (index) {
        this.questions[index].selected = !this.questions[index].selected;
    };
    AddQuesInQuizComponent.prototype.onDetailsSubmit = function (form) {
        var _this = this;
        var QuestionId = this.questions.filter(function (QuestionId) { return QuestionId.selected; }).map(function (idSelected) { return idSelected.QuestionId; });
        console.log(QuestionId);
        this.service.putQuestionsSelected(QuestionId).subscribe(function (res) {
            _this.toastr.success('Inserted successfully');
        });
        // this.dialogref.close();
    };
    AddQuesInQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-ques-in-quiz',
            template: __webpack_require__(/*! ./add-ques-in-quiz.component.html */ "./src/app/content-creator/retrieve-quiz/add-ques-in-quiz/add-ques-in-quiz.component.html"),
            styles: [__webpack_require__(/*! ./add-ques-in-quiz.component.css */ "./src/app/content-creator/retrieve-quiz/add-ques-in-quiz/add-ques-in-quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__["ContentCreatorServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
    ], AddQuesInQuizComponent);
    return AddQuesInQuizComponent;
}());



/***/ }),

/***/ "./src/app/content-creator/retrieve-quiz/archive-quiz/archive-quiz.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/archive-quiz/archive-quiz.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQtY3JlYXRvci9yZXRyaWV2ZS1xdWl6L2FyY2hpdmUtcXVpei9hcmNoaXZlLXF1aXouY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/content-creator/retrieve-quiz/archive-quiz/archive-quiz.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/archive-quiz/archive-quiz.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav>\n<div>\n  <br/><br/><br/>\n  <h1 style=\"text-align: center\">List of Archived Quizzes</h1>\n  <div class=\"row\">\n    <div>\n      <input style=\"margin-left: 5%; width: 40rem\" #searchField class=\"form-control mr-sm-2 border border-secondary\"\n        placeholder=\"Filter..\" aria-label=\"Filter\" #searchInput=\"ngModel\" [(ngModel)]=\"searchText\">\n    </div>\n    <div>\n      <select (change)=\"filterSubject($event)\" #dropdown style=\"margin-left :40%\" class=\"form-control border border-secondary\">\n        <option  selected value>Choose Difficulty Level</option>\n        <option value=\"Beginner\">Beginner</option>\n        <option value=\"Intermediate\">Intermediate</option>\n        <option value=\"Advanced\">Advanced</option>\n      </select>\n    </div>\n  </div>\n  <br /><br />\n  <table class=\"table table-bordered table-striped\">\n    <thead class=\"thead-dark\">\n      <th scope=\"col\">#Quiz ID</th>\n      <th scope=\"col\">Quiz Type</th>\n      <th scope=\"col\">Difficulty</th>\n      <th scope=\"col\">Subject</th>\n      <th scope=\"col\">Total Questions</th>\n      <th scope=\"col\">Total Marks</th>\n      <th scope=\"col\">Action</th>\n    </thead>\n  \n    <tbody>\n      <ng-container *ngFor=\"let item of QuizList;index as i\">\n        <tr *ngIf=\"(filter(item))\">\n          <th class=\"text-primary\" scope=\"row\">{{i+1}}</th>\n          <td class=\"text-primary\" scope=\"row\">{{item.QuizType}}</td>\n          <td class=\"text-primary\" scope=\"row\">{{item.Difficulty}}</td>\n          <td class=\"text-primary\" scope=\"row\">{{item.Subject}}</td>\n          <td class=\"text-primary\" scope=\"row\">{{item.TotalQuestions}}</td>\n          <td class=\"text-primary\" scope=\"row\">{{item.TotalMarks}}</td>\n          <td>\n            <a class=\"btn text-danger\" (click)=\"onUnArchived(item.QuizId)\"><i class=\"fa fa-file-archive-o\"></i></a>\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n  </div>\n</app-main-nav>"

/***/ }),

/***/ "./src/app/content-creator/retrieve-quiz/archive-quiz/archive-quiz.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/archive-quiz/archive-quiz.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ArchiveQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveQuizComponent", function() { return ArchiveQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/content-creator-service.service */ "./src/app/content-creator/shared/content-creator-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var ArchiveQuizComponent = /** @class */ (function () {
    function ArchiveQuizComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.searchText = '';
        this.difficultyLevel = '';
        this.index = 0;
    }
    ArchiveQuizComponent.prototype.ngOnInit = function () {
        this.loadQuiz();
    };
    ArchiveQuizComponent.prototype.loadQuiz = function () {
        var _this = this;
        this.service.getArchivedQuizzes().subscribe(function (res) {
            _this.QuizList = res;
        });
    };
    ArchiveQuizComponent.prototype.filter = function (item) {
        return ((item.Subject.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
            || item.QuizType.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1)
            && item.Difficulty.toLowerCase().indexOf(this.difficultyLevel.toLowerCase()) > -1);
    };
    ArchiveQuizComponent.prototype.filterSubject = function (event) {
        this.difficultyLevel = event.target.value;
        console.log(this.difficultyLevel);
    };
    ArchiveQuizComponent.prototype.onUnArchived = function (id) {
        var _this = this;
        console.log(id);
        if (confirm('Are you sure you want to un-archive this quiz?')) {
            this.service.unArchiveQuiz(id).subscribe(function (res) {
                console.log(res);
                _this.loadQuiz();
                _this.toastr.success('Un-Archived Successfully', 'Assesment System');
            });
        }
    };
    ArchiveQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-archive-quiz',
            template: __webpack_require__(/*! ./archive-quiz.component.html */ "./src/app/content-creator/retrieve-quiz/archive-quiz/archive-quiz.component.html"),
            styles: [__webpack_require__(/*! ./archive-quiz.component.css */ "./src/app/content-creator/retrieve-quiz/archive-quiz/archive-quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__["ContentCreatorServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ArchiveQuizComponent);
    return ArchiveQuizComponent;
}());



/***/ }),

/***/ "./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n\tmargin: 9px auto;\n}\n.container {\n\tmax-width: inherit;\n\tmax-height: inherit;\n}\nbutton {\n\tmargin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC1jcmVhdG9yL3JldHJpZXZlLXF1aXovY3JlYXRlLXF1aXovY3JlYXRlLXF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC1jcmVhdG9yL3JldHJpZXZlLXF1aXovY3JlYXRlLXF1aXovY3JlYXRlLXF1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcblx0bWFyZ2luOiA5cHggYXV0bztcbn1cbi5jb250YWluZXIge1xuXHRtYXgtd2lkdGg6IGluaGVyaXQ7XG5cdG1heC1oZWlnaHQ6IGluaGVyaXQ7XG59XG5idXR0b24ge1xuXHRtYXJnaW4tbGVmdDogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <div class=\"card\" style=\"width: 80%; overflow: auto\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" style=\"text-align: center\">Create A Quiz</h5><br><br>\n      <ng-container *ngIf=\"!val\">\n        <form #form=\"ngForm\" (submit)=\"fetchReqQues(form)\" autocomplete=\"off\">\n          <input type=\"hidden\" name=\"CreatedBy\" #CreatedBy=\"ngModel\" [(ngModel)]=\"CCreatedBy\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label>Select Difficulty-Level</label>\n              <select name=\"Difficulty\" required #Difficulty=\"ngModel\" [(ngModel)]=\"service.quizForm.Difficulty\"\n                class=\"form-control\">\n                <option value=\"Beginner\">Easy</option>\n                <option value=\"Intermediate\">Medium</option>\n                <option value=\"Advanced\">Hard</option>\n              </select>\n              <div class=\"validation-error\" *ngIf=\"Difficulty.invalid && Difficulty.touched\">This field is required.\n              </div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label>Select Subject</label>\n              <select name=\"SubjectId\" required #SubjectId=\"ngModel\" [(ngModel)]=\"service.quizForm.SubjectId\"\n                class=\"form-control\">\n                <option *ngFor=\"let Subject of Subjects;\" value=\"{{Subject.SubjectId}}\">{{Subject.Name}}</option>\n              </select>\n\n              <div class=\"validation-error\" *ngIf=\"SubjectId.invalid && SubjectId.touched\">This field is required.</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label>Quiz Name</label>\n              <input type=\"text\" required name=\"QuizName\" #QuizName=\"ngModel\" [(ngModel)]=\"service.quizForm.QuizName\">\n              <div class=\"validation-error\" *ngIf=\"QuizName.invalid && QuizName.touched\">This field is required.</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary \">Click</button>\n            <button type=\"button\" [mat-dialog-close] class=\"btn btn-danger\">Close</button>\n          </div>\n        </form>\n      </ng-container>\n      <div *ngIf=\"val\">\n        <div class=\"card-body\">\n\n          <h5 *ngIf=\"length>0\" class=\"card-title\" style=\"text-align: center\">Choose Questions</h5><br><br>\n          <h5 *ngIf=\"length==0\" class=\"card-title\" style=\"text-align: center\">No Question Available</h5><br><br>\n          <form #Questionform=\"ngForm\" (submit)=\"onDetailsSubmit(Questionform)\" autocomplete=\"off\">\n            <div *ngFor=\"let x of questions; let i = index\"><br>\n              <input [id]=\"'questions-'+i\" type=\"checkbox\" value=\"{{x.Question_ID}}\" [checked]=\"x.selected\"\n                (change)=\"updateSelectedQuestions(i)\">\n              <label>{{x.QuestionStatement}}</label>\n            </div>\n            <div *ngIf=\"length==0\">\n              <a routerLink='/create-question' routerLinkActive='active'>Click Here to Create Question</a>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            <button type=\"button\" [mat-dialog-close] class=\"btn btn-danger\">Close</button>\n            <!-- </div> -->\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</mat-dialog-content>"

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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var CreateQuizComponent = /** @class */ (function () {
    function CreateQuizComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.val = false;
        this.count = 0;
        this.CCreatedBy = "";
        this.length = 0;
    }
    CreateQuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetForm();
        this.CCreatedBy = localStorage.getItem('uid');
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
                QuestionIds: null,
                SubjectId: null,
                QuizName: ''
            };
            if (this.questions) {
                this.questions.map(function (y) { return y.selected = false; });
            }
        }
    };
    CreateQuizComponent.prototype.fetchReqQues = function (form) {
        var _this = this;
        console.log(form.value);
        this.service.quizForm = form.value;
        this.service.getQuesOfUserConstraints(form.value).subscribe(function (data) {
            data.forEach(function (obj) { return obj.selected = false; });
            _this.questions = data;
            _this.length = _this.questions.length;
            console.log(_this.questions);
            _this.checkVal();
        });
    };
    CreateQuizComponent.prototype.checkVal = function () {
        this.val = true;
    };
    CreateQuizComponent.prototype.updateSelectedQuestions = function (index) {
        this.questions[index].selected = !this.questions[index].selected;
    };
    CreateQuizComponent.prototype.onDetailsSubmit = function (form) {
        var _this = this;
        var QuestionId = this.questions.filter(function (QuestionId) { return QuestionId.selected; }).map(function (idSelected) { return idSelected.QuestionId; });
        console.log(QuestionId);
        this.service.postQuestionsSelected(QuestionId).subscribe(function (res) {
            _this.toastr.success('Inserted successfully');
        });
    };
    CreateQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-quiz',
            template: __webpack_require__(/*! ./create-quiz.component.html */ "./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.html"),
            styles: [__webpack_require__(/*! ./create-quiz.component.css */ "./src/app/content-creator/retrieve-quiz/create-quiz/create-quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__["ContentCreatorServiceService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
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

module.exports = "th,\ntd {\n\ttext-align: center;\n\tcolor: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC1jcmVhdG9yL3JldHJpZXZlLXF1aXovcmV0cmlldmUtcXVpei5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50LWNyZWF0b3IvcmV0cmlldmUtcXVpei9yZXRyaWV2ZS1xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCxcbnRkIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogYmxhY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/content-creator/retrieve-quiz/retrieve-quiz.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/retrieve-quiz.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav>\n  <div>\n    <h1 style=\"text-align: center\">List of Quizzes</h1>\n    <button type=\"button\" (click)=\"onCreate()\" class=\"btn btn-primary\">Create Quiz</button>\n    <br /><br /><br />\n    <div class=\"row\">\n      <div>\n        <input style=\"margin-left: 5%; width: 40rem\" #searchField class=\"form-control mr-sm-2 border border-secondary\"\n          placeholder=\"Filter..\" aria-label=\"Filter\" #searchInput=\"ngModel\" [(ngModel)]=\"searchText\">\n      </div>\n      <div>\n        <select (change)=\"filterSubject($event)\" #dropdown style=\"margin-left :40%\"\n          class=\"form-control border border-secondary\">\n          <option selected value>Choose Difficulty Level</option>\n          <option value=\"Beginner\">Beginner</option>\n          <option value=\"Intermediate\">Intermediate</option>\n          <option value=\"Advanced\">Advanced</option>\n        </select>\n      </div>\n    </div>\n    <br /><br />\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-dark\">\n        <th scope=\"col\">#Quiz ID</th>\n        <th scope=\"col\">Quiz Type</th>\n        <th scope=\"col\">Difficulty</th>\n        <th scope=\"col\">Subject</th>\n        <th scope=\"col\">Total Questions</th>\n        <th scope=\"col\">Total Marks</th>\n        <th scope=\"col\">Action</th>\n      </thead>\n  \n      <tbody>\n        <ng-container *ngFor=\"let item of QuizList;index as i\">\n          <tr *ngIf=\"(filter(item))\">\n            <th scope=\"row\">{{i+1}}</th>\n            <td scope=\"row\">{{item.QuizType}}</td>\n            <td scope=\"row\">{{item.Difficulty}}</td>\n            <td scope=\"row\">{{item.Subject}}</td>\n            <td scope=\"row\">{{item.TotalQuestions}}</td>\n            <td scope=\"row\">{{item.TotalMarks}}</td>\n            <td>\n              <a class=\"btn text-danger\" (click)=\"onEdit(item.QuizId)\"><i class=\"fa fa-edit fa-lg\"></i></a>\n              <a class=\"btn text-danger\" (click)=\"onArchive(item.QuizId)\"><i class=\"fa fa-trash fa-lg\"></i></a>\n            </td>\n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n  </div>\n</app-main-nav>\n"

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
/* harmony import */ var _update_quiz_update_quiz_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-quiz/update-quiz.component */ "./src/app/content-creator/retrieve-quiz/update-quiz/update-quiz.component.ts");








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
        return ((item.Subject.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
            || item.QuizType.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1)
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
            _this.loadQuiz();
        });
    };
    RetrieveQuizComponent.prototype.onArchive = function (id) {
        var _this = this;
        console.log(id);
        if (confirm('Are you sure you want to delete this quiz?')) {
            this.service.deleteQuiz(id).subscribe(function (res) {
                _this.loadQuiz();
                _this.toastr.success('Archieved Successfully', 'Assesment System');
            });
        }
    };
    RetrieveQuizComponent.prototype.onEdit = function (id) {
        var _this = this;
        localStorage.setItem('quizId', id.toString());
        this.service.getQuestionsByQuiz(id).subscribe(function (res) {
            _this.QuestionList = res;
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
            dialogConfig.autoFocus = true;
            dialogConfig.width = "70%";
            dialogConfig.disableClose = true;
            dialogConfig.data = _this.QuestionList;
            console.log(dialogConfig.data);
            _this.dialog.open(_update_quiz_update_quiz_component__WEBPACK_IMPORTED_MODULE_7__["UpdateQuizComponent"], dialogConfig).afterClosed().subscribe(function (res) {
                _this.loadQuiz();
                localStorage.removeItem('quizId');
            });
        });
    };
    RetrieveQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'retrieve-quiz',
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

/***/ "./src/app/content-creator/retrieve-quiz/update-quiz/update-quiz.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/update-quiz/update-quiz.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQtY3JlYXRvci9yZXRyaWV2ZS1xdWl6L3VwZGF0ZS1xdWl6L3VwZGF0ZS1xdWl6LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/content-creator/retrieve-quiz/update-quiz/update-quiz.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/update-quiz/update-quiz.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <button type=\"button\" (click)=\"onCreate()\" class=\"btn btn-primary\">Add Question</button>\n  <div>\n    <br /><br />\n    <h1 style=\"text-align: center\">View Quiz Details</h1>\n    <br />\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-dark\">\n        <th scope=\"col\">#Question ID</th>\n        <th scope=\"col\">Question</th>\n        <th scope=\"col\">Marks</th>\n        <th scope=\"col\">Action</th>\n      </thead>\n\n      <tbody>\n        <ng-container *ngFor=\"let item of UpdateQuizQuestionList;index as i\">\n          <tr>\n            <th class=\"text-primary\" scope=\"row\">{{i+1}}</th>\n            <th class=\"text-primary\" scope=\"row\">{{item.QuestionStatement}}</th>\n            <td class=\"text-primary\" scope=\"row\">{{item.Marks}}</td>\n            <td>\n              <a class=\"btn text-danger\" (click)=\"onDelete(item.QuestionId)\"><i class=\"fa fa-trash fa-lg\"></i></a>\n            </td>\n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n  </div>\n  <button type=\"button\" class=\"btn btn-primary btn-danger\" [mat-dialog-close]> Close</button>\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/content-creator/retrieve-quiz/update-quiz/update-quiz.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/content-creator/retrieve-quiz/update-quiz/update-quiz.component.ts ***!
  \************************************************************************************/
/*! exports provided: UpdateQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateQuizComponent", function() { return UpdateQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/content-creator-service.service */ "./src/app/content-creator/shared/content-creator-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _add_ques_in_quiz_add_ques_in_quiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-ques-in-quiz/add-ques-in-quiz.component */ "./src/app/content-creator/retrieve-quiz/add-ques-in-quiz/add-ques-in-quiz.component.ts");





// import { CreateQuestionsComponent } from '../../retrieve-question-bank/create-questions/create-questions.component';
// import { CreateQuizComponent } from '../create-quiz/create-quiz.component';

var UpdateQuizComponent = /** @class */ (function () {
    function UpdateQuizComponent(data, dialogRef, service, toastr, dialog) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.toastr = toastr;
        this.dialog = dialog;
    }
    UpdateQuizComponent.prototype.ngOnInit = function () {
        this.UpdateQuizQuestionList = this.data;
    };
    UpdateQuizComponent.prototype.loadingData = function () {
        var _this = this;
        this.service.getQuestionsByQuiz(Number(localStorage.getItem('quizId'))).subscribe(function (res) {
            _this.UpdateQuizQuestionList = res;
        });
    };
    UpdateQuizComponent.prototype.onDelete = function (id) {
        var _this = this;
        console.log(id);
        this.service.deleteQuesOfQuiz(id).subscribe(function (res) {
            _this.toastr.success('Deleted Successfully', 'Assesment System');
            _this.loadingData();
        });
    };
    UpdateQuizComponent.prototype.onCreate = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        dialogConfig.disableClose = true;
        this.service.getQuizQuestions(Number(localStorage.getItem('quizId'))).subscribe(function (res) {
            dialogConfig.data = res;
            console.log(dialogConfig.data);
            _this.dialog.open(_add_ques_in_quiz_add_ques_in_quiz_component__WEBPACK_IMPORTED_MODULE_5__["AddQuesInQuizComponent"], dialogConfig).afterClosed().subscribe(function (res) {
                _this.loadingData();
            });
        });
    };
    UpdateQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-quiz',
            template: __webpack_require__(/*! ./update-quiz.component.html */ "./src/app/content-creator/retrieve-quiz/update-quiz/update-quiz.component.html"),
            styles: [__webpack_require__(/*! ./update-quiz.component.css */ "./src/app/content-creator/retrieve-quiz/update-quiz/update-quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_3__["ContentCreatorServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], UpdateQuizComponent);
    return UpdateQuizComponent;
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
        this.rootURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURl;
    }
    ContentCreatorServiceService.prototype.postQuestion = function (formData) {
        console.log(formData);
        return this.http.post(this.rootURL + 'Question/CreateQuestion', formData);
    };
    ContentCreatorServiceService.prototype.updateQuestion = function (formData) {
        console.log(formData);
        return this.http.put(this.rootURL + 'Question/Edit/' + formData.QuestionId, formData);
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
    ContentCreatorServiceService.prototype.getArchivedQuizzes = function () {
        return this.http.get(this.rootURL + 'Quiz/Archived/' + localStorage.getItem('uid'));
    };
    ContentCreatorServiceService.prototype.unArchiveQuiz = function (id) {
        console.log(id);
        return this.http.put(this.rootURL + '/Quiz/UnArchive', id);
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
        return this.http.delete(this.rootURL + '/Tag/Delete/' + id);
    };
    ContentCreatorServiceService.prototype.getQuizzes = function () {
        return this.http.get(this.rootURL + 'Quiz/GetQuiz/' + localStorage.getItem('uid'));
    };
    ContentCreatorServiceService.prototype.deleteQuiz = function (id) {
        return this.http.delete(this.rootURL + '/Quiz/Delete/' + id);
    };
    ContentCreatorServiceService.prototype.getQuesOfUserConstraints = function (form) {
        return this.http.get(this.rootURL + 'Question/GetQuestion/' + form.Difficulty + '/' + form.SubjectId);
    };
    ContentCreatorServiceService.prototype.postQuestionsSelected = function (questions) {
        this.quizForm.QuestionIds = questions;
        console.log(this.quizForm);
        return this.http.post(this.rootURL + 'Quiz/CreateQuiz', this.quizForm);
    };
    // pulkit's methods
    ContentCreatorServiceService.prototype.putQuestionsSelected = function (questions) {
        this.quizForm.QuestionIds = questions;
        this.quizForm.CreatedBy = localStorage.getItem('uid');
        console.log(this.quizForm.QuestionIds);
        return this.http.put(this.rootURL + 'Quiz/EditQuiz/AddQuestion/' + Number(localStorage.getItem('quizId')), this.quizForm.QuestionIds);
    };
    ContentCreatorServiceService.prototype.deleteQuesOfQuiz = function (id) {
        console.log(id);
        return this.http.delete(this.rootURL + 'Quiz/QuizQuestion/Delete/' + Number(localStorage.getItem('quizId')) + '/' + id);
    };
    ContentCreatorServiceService.prototype.getQuestionsByQuiz = function (id) {
        return this.http.get(this.rootURL + 'Quiz/QuizQuestion/' + id);
    };
    ContentCreatorServiceService.prototype.getQuizQuestions = function (qid) {
        return this.http.get(this.rootURL + 'Quiz/GetQuestionsNotInQuiz/' + qid);
    };
    ContentCreatorServiceService.prototype.getUserDetails = function () {
        console.log(localStorage.getItem('email'));
        return this.http.get(this.rootURL + 'GetUserDetails?email=' + localStorage.getItem('email'));
    };
    ContentCreatorServiceService.prototype.getUserProgress = function () {
        console.log(localStorage.getItem('uid'));
        return this.http.get(this.rootURL + 'Stats/' + localStorage.getItem('uid'));
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

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQtY3JlYXRvci90YWcvY3JlYXRldGFnL2NyZWF0ZXRhZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content-creator/tag/createtag/createtag.component.html":
/*!************************************************************************!*\
  !*** ./src/app/content-creator/tag/createtag/createtag.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"card\" style=\"width: 80%;\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{Option}} Tag</h5>\n      <form #form=\"ngForm\" (submit)=\"onSubmit(form)\" autocomplete=\"off\">\n        <input type=\"hidden\" name=\"CreatedBy\" #CreatedBy=\"ngModel\" [(ngModel)]=\"userId\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <input type=\"hidden\" name=\"SubjectId\" #SubjectId=\"ngModel\" [(ngModel)]=\"service.tagForm.SubjectId\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n                <label>Name</label>\n                <input required type=\"text\" name=\"Name\" #Name=\"ngModel\" [(ngModel)]=\"service.tagForm.Name\"\n                  class=\"form-control\">\n                <div class=\"validation-error\" *ngIf=\"Name.invalid && Name.touched\">This field is required.</div>\n            </div>\n          <div class=\"form-group col-md-6\">\n            <label>Department</label>\n            <input required type=\"text\" name=\"Department\" #Department=\"ngModel\" [(ngModel)]=\"service.tagForm.Department\"\n              class=\"form-control\">\n            <div class=\"validation-error\" *ngIf=\"Department.invalid && Department.touched\">This field is required.</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <button style=\"margin:0 5%\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">Submit</button>\n          <button type=\"button\" class=\"btn btn-primary btn-danger\" [mat-dialog-close]> Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n"

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

module.exports = "table {\n\twidth: 100%;\n\tmargin-top: 10px;\n\tcolor: black;\n}\n.container-fluid {\n\tmargin: 7px auto;\n\tpadding: 5px auto;\n}\nh4 {\n\ttext-align: center;\n\tcolor: black;\n}\n.th .mat-header-cell {\n\tpadding-left: 20px !important;\n\tcolor: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC1jcmVhdG9yL3RhZy9yZXRyaWV2ZXRhZy90YWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyw2QkFBNkI7Q0FDN0IsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC1jcmVhdG9yL3RhZy9yZXRyaWV2ZXRhZy90YWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG5cdGNvbG9yOiBibGFjaztcbn1cbi5jb250YWluZXItZmx1aWQge1xuXHRtYXJnaW46IDdweCBhdXRvO1xuXHRwYWRkaW5nOiA1cHggYXV0bztcbn1cbmg0IHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogYmxhY2s7XG59XG4udGggLm1hdC1oZWFkZXItY2VsbCB7XG5cdHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xuXHRjb2xvcjogYmxhY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/content-creator/tag/retrievetag/tag.component.html":
/*!********************************************************************!*\
  !*** ./src/app/content-creator/tag/retrievetag/tag.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav>\n  <div>\n    <button mat-raised-button (click)=\"onCreate()\">\n      <mat-icon>add</mat-icon>Create\n    </button>\n  </div>\n  <table class=\"table table-bordered table-striped\">\n    <thead class=\"thead-dark\">\n      <th scope=\"col\">#Subject ID</th>\n      <th scope=\"col\">Subject</th>\n      <th scope=\"col\">Department</th>\n      <th scope=\"col\">Action</th>\n  \n    </thead>\n  \n    <tbody>\n      <ng-container *ngFor=\"let tag of tagList;index as i;\">\n        <tr>\n          <th scope=\"row\">{{i+1}}</th>\n          <td scope=\"row\">{{tag.Name}}</td>\n          <td scope=\"row\">{{tag.Department}}</td>\n          <td>\n            <a class=\"btn btn-sm btn-info text-white\" (click)=\"onEdit(i+1)\"><i class=\"fa fa-pencil\"></i></a>\n          </td>\n  \n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</app-main-nav>\n"

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
            _this.loadTags();
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
        var _this = this;
        // console.log(id);
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        dialogConfig.disableClose = true;
        dialogConfig.data = this.tagList[id - 1];
        console.log(dialogConfig.data);
        var dialogRef = this.dialog.open(_createtag_createtag_component__WEBPACK_IMPORTED_MODULE_6__["CreatetagComponent"], dialogConfig).afterClosed().subscribe(function (res) {
            _this.loadTags();
        });
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQtY3JlYXRvci91cGRhdGUtcXVlc3Rpb24vdXBkYXRlLXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/content-creator/update-question/update-question.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/content-creator/update-question/update-question.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 80%;\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{label}}</h5>\n    <form #form=\"ngForm\" (submit)=\"onSubmit(form)\" autocomplete=\"off\">\n      <input type=\"hidden\" name=\"CreatedBy\" #CreatedBy=\"ngModel\" [(ngModel)]=\"CCreatedBy\">\n      <input type=\"hidden\" name=\"QuestionId\" #QuestionId=\"ngModel\" [(ngModel)]=\"service.formData.QuestionId\">\n      <div class=\"form-group\">\n        <label>Question</label>\n        <textarea class=\"form-control\" [readonly]=\"bool\" name=\"QuestionStatement\" #QuestionStatement=\"ngModel\"\n          [(ngModel)]=\"service.formData.QuestionStatement\" rows=\"3\"></textarea>\n        <div class=\"validation-error\" *ngIf=\"QuestionStatement.invalid && QuestionStatement.touched\">This field is\n          required.\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label>Option 1</label>\n          <input required type=\"text\" [readonly]=\"bool\" name=\"Option1\" #Option1=\"ngModel\" [(ngModel)]=\"service.formData.Option1\"\n            class=\"form-control\">\n          <div class=\"validation-error\" *ngIf=\"Option1.invalid && Option1.touched\">This field is required.</div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>Option 2</label>\n          <input required type=\"text\" [readonly]=\"bool\" name=\"Option2\" #Option2=\"ngModel\" [(ngModel)]=\"service.formData.Option2\"\n            class=\"form-control\">\n          <div class=\"validation-error\" *ngIf=\"Option2.invalid && Option2.touched\">This field is required.</div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label>Option 3</label>\n          <input required type=\"text\" [readonly]=\"bool\" name=\"Option3\" #Option3=\"ngModel\" [(ngModel)]=\"service.formData.Option3\"\n            class=\"form-control\">\n          <div class=\"validation-error\" *ngIf=\"Option3.invalid && Option3.touched\">This field is required.</div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>Option 4</label>\n          <input required type=\"text\" [readonly]=\"bool\" name=\"Option4\" #Option4=\"ngModel\" [(ngModel)]=\"service.formData.Option4\"\n            class=\"form-control\">\n          <div class=\"validation-error\" *ngIf=\"Option4.invalid && Option4.touched\">This field is required.</div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label>Correct Option</label>\n          <input required type=\"text\" [readonly]=\"bool\" name=\"Answer\" #Answer=\"ngModel\" [(ngModel)]=\"service.formData.Answer\"\n            class=\"form-control\">\n          <div class=\"validation-error\" *ngIf=\"Answer.invalid && Answer.touched\">This field is required.\n          </div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>Marks</label>\n          <input required type=\"text\" [readonly]=\"bool\" name=\"Marks\" #Marks=\"ngModel\" [(ngModel)]=\"service.formData.Marks\"\n            class=\"form-control\">\n          <div class=\"validation-error\" *ngIf=\"Marks.invalid && Marks.touched\">This field is required.</div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label>Select Subject</label>\n          <select name=\"SubjectId\" [disabled]=\"bool\" required #SubjectId=\"ngModel\" [(ngModel)]=\"service.formData.SubjectId\"\n            class=\"form-control\">\n            <option value=\"\">Choose</option>\n            <option *ngFor=\"let Subject of Subjects\" value=\"{{Subject.SubjectId}}\">{{Subject.Name}}</option>\n          </select>\n          <div class=\"validation-error\" *ngIf=\"SubjectId.invalid && SubjectId.touched\">This field is required.</div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>Select Difficulty-Level</label>\n          <select name=\"Difficulty\" [disabled]=\"bool\" required #Difficulty=\"ngModel\" [(ngModel)]=\"service.formData.Difficulty\"\n            class=\"form-control\">\n            <option value=\"\">Choose</option>\n            <option value=\"Beginner\">Easy</option>\n            <option value=\"Intermediate\">Medium</option>\n            <option value=\"Advanced\">Hard</option>\n          </select>\n          <div class=\"validation-error\" *ngIf=\"Difficulty.invalid && Difficulty.touched\">This field is required.</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button style=\"margin:0 5%\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">Submit</button>\n        <button type=\"button\" class=\"btn btn-primary btn-danger\" [mat-dialog-close]> Close</button>\n      </div>\n    </form>\n  </div>\n</div>"

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
/* harmony import */ var _shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/content-creator-service.service */ "./src/app/content-creator/shared/content-creator-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UpdateQuestionComponent = /** @class */ (function () {
    function UpdateQuestionComponent(data, dialogRef, service, toastr, router) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.CCreatedBy = '';
        this.bool = false;
    }
    UpdateQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bool = this.service.readonlyStatus;
        if (this.bool === true) {
            this.label = "View Question";
        }
        else {
            this.label = "Edit Questions";
        }
        this.CCreatedBy = localStorage.getItem('uid');
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
            // this.router.navigate(['/cc-dash'])
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
            _shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__["ContentCreatorServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UpdateQuestionComponent);
    return UpdateQuestionComponent;
}());



/***/ }),

/***/ "./src/app/content-creator/user-details/user-details.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/content-creator/user-details/user-details.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .card {\n\tmargin: 9px auto;\n}\n.form-control{\n\tbackground-color: inherit;\n} */\n.card-header {\n\tfont-size: 30px;\n\tbackground-image: linear-gradient(to right, black, rgba(255, 0, 242, 0.719));\n}\n.parent {\n\tposition: relative;\n}\n.child1 {\n\tposition: absolute;\n\tmargin-top: 5px;\n\tmargin-bottom: 5px;\n\tmargin-left: 8px;\n}\n.child2 {\n\tposition: absolute;\n\tmargin-top: 5px;\n\tmargin-bottom: 5px;\n\tmargin-left: 143px;\n}\n.child3 {\n\tposition: absolute;\n\tmargin-top: 300px;\n\tmargin-left: 150px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC1jcmVhdG9yL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRztBQUNIO0NBQ0MsZUFBZTtDQUNmLDRFQUE0RTtBQUM3RTtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50LWNyZWF0b3IvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNhcmQge1xuXHRtYXJnaW46IDlweCBhdXRvO1xufVxuLmZvcm0tY29udHJvbHtcblx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn0gKi9cbi5jYXJkLWhlYWRlciB7XG5cdGZvbnQtc2l6ZTogMzBweDtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBibGFjaywgcmdiYSgyNTUsIDAsIDI0MiwgMC43MTkpKTtcbn1cbi5wYXJlbnQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hpbGQxIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRtYXJnaW4tdG9wOiA1cHg7XG5cdG1hcmdpbi1ib3R0b206IDVweDtcblx0bWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5jaGlsZDIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdG1hcmdpbi10b3A6IDVweDtcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRtYXJnaW4tbGVmdDogMTQzcHg7XG59XG4uY2hpbGQzIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRtYXJnaW4tdG9wOiAzMDBweDtcblx0bWFyZ2luLWxlZnQ6IDE1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/content-creator/user-details/user-details.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/content-creator/user-details/user-details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav>\n<div class=\"container parent\">\n  <div class=\"child1\">\n    <img class=\"card-img\" src=\"\" alt=\"Profile image\">\n  </div>\n  <div class=\"child2\">\n    <div class=\"card text-white bg-dark\">\n      <div class=\"card-header\">Profile</div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <label>Firstname: {{Firstname}}</label>\n          </div>\n          <div class=\"col-md-6\">\n            <label>Lastname: {{Lastname}}</label>\n          </div>\n          <div class=\"col-md-12\">\n            <label>Email: {{email}}</label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"child3\">\n      <div class=\"card-deck\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Quizzes Created</h5>\n              <label>{{Quizzes}}</label>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Questions Created</h5>\n              <label>{{Questions}}</label>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Tags Created</h5>\n              <label>{{Tags}}</label>\n            </div>\n          </div>\n        </div>\n  </div>\n</div>\n</app-main-nav>"

/***/ }),

/***/ "./src/app/content-creator/user-details/user-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/content-creator/user-details/user-details.component.ts ***!
  \************************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/content-creator-service.service */ "./src/app/content-creator/shared/content-creator-service.service.ts");



var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(service) {
        this.service = service;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.loadUserDetails();
        this.loadUserProgress();
    };
    UserDetailsComponent.prototype.loadUserDetails = function () {
        var _this = this;
        this.service.getUserDetails().subscribe(function (res) {
            // console.log(res);
            _this.Firstname = res.FirstName;
            _this.Lastname = res.LastName;
            _this.email = res.Email;
        });
    };
    UserDetailsComponent.prototype.loadUserProgress = function () {
        var _this = this;
        this.service.getUserProgress().subscribe(function (res) {
            console.log(res);
            _this.Quizzes = res[0];
            _this.Questions = res[1];
            _this.Tags = res[2];
            // console.log(this.Questions);
        });
    };
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/content-creator/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/content-creator/user-details/user-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_content_creator_service_service__WEBPACK_IMPORTED_MODULE_2__["ContentCreatorServiceService"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, http) {
        this.router = router;
        this.http = http;
        this.rooturl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURl;
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

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

/***/ "./src/app/test-admin/main-nav2/main-nav2.component.css":
/*!**************************************************************!*\
  !*** ./src/app/test-admin/main-nav2/main-nav2.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n\theight: 100%;\n}\n.sidenav-container a {\n\tcolor: white;\n}\n/* .sidenav-container a:focus {\n\tbackground-color: green !important;\n}\n.sidenav-container a:active {\n\tbackground-color: green !important;\n} */\n.sidenav-container a:hover,\n.sidenav-container a:focus {\n\tbackground-color: red !important;\n}\n/* a:focus {\n\tbackground-color: red !important;\n} */\n.sidenav {\n\twidth: 250px;\n\tbackground-color: #021521;\n}\n.sidenav .mat-toolbar {\n\tbackground: inherit;\n}\n.mat-toolbar {\n\tbackground-color: #021521;\n\ttext-decoration: none;\n\tborder-bottom: .2px solid #030e13;\n}\n.mat-toolbar span {\n\tcolor: white;\n}\n.mat-list-item {\n\tmargin-top: 10px;\n}\n.log {\n\tfont-size: 15px;\n\tcursor: pointer;\n\tcolor: red !important;\n}\n.mat-toolbar.mat-primary {\n\tposition: -webkit-sticky;\n\tposition: sticky;\n\ttop: 0;\n\tz-index: 1;\n}\n.content {\n\tpadding: 30px 30px 0px 50px !important;\n\tmargin: 30px auto;\n}\n.mat-icon {\n\tcolor: white;\n}\n.spacer {\n\tflex: 1 1 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC1hZG1pbi9tYWluLW5hdjIvbWFpbi1uYXYyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOzs7OztHQUtHO0FBQ0g7O0NBRUMsZ0NBQWdDO0FBQ2pDO0FBQ0E7O0dBRUc7QUFFSDtDQUNDLFlBQVk7Q0FDWix5QkFBeUI7QUFDMUI7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixpQ0FBaUM7QUFDbEM7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZUFBZTtDQUNmLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0Msd0JBQWdCO0NBQWhCLGdCQUFnQjtDQUNoQixNQUFNO0NBQ04sVUFBVTtBQUNYO0FBQ0E7Q0FDQyxzQ0FBc0M7Q0FDdEMsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLGNBQWM7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtYWRtaW4vbWFpbi1uYXYyL21haW4tbmF2Mi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcblx0aGVpZ2h0OiAxMDAlO1xufVxuLnNpZGVuYXYtY29udGFpbmVyIGEge1xuXHRjb2xvcjogd2hpdGU7XG59XG4vKiAuc2lkZW5hdi1jb250YWluZXIgYTpmb2N1cyB7XG5cdGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XG59XG4uc2lkZW5hdi1jb250YWluZXIgYTphY3RpdmUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xufSAqL1xuLnNpZGVuYXYtY29udGFpbmVyIGE6aG92ZXIsXG4uc2lkZW5hdi1jb250YWluZXIgYTpmb2N1cyB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuLyogYTpmb2N1cyB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufSAqL1xuXG4uc2lkZW5hdiB7XG5cdHdpZHRoOiAyNTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAyMTUyMTtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcblx0YmFja2dyb3VuZDogaW5oZXJpdDtcbn1cbi5tYXQtdG9vbGJhciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMjE1MjE7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Ym9yZGVyLWJvdHRvbTogLjJweCBzb2xpZCAjMDMwZTEzO1xufVxuLm1hdC10b29sYmFyIHNwYW4ge1xuXHRjb2xvcjogd2hpdGU7XG59XG4ubWF0LWxpc3QtaXRlbSB7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubG9nIHtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG5cdHBvc2l0aW9uOiBzdGlja3k7XG5cdHRvcDogMDtcblx0ei1pbmRleDogMTtcbn1cbi5jb250ZW50IHtcblx0cGFkZGluZzogMzBweCAzMHB4IDBweCA1MHB4ICFpbXBvcnRhbnQ7XG5cdG1hcmdpbjogMzBweCBhdXRvO1xufVxuLm1hdC1pY29uIHtcblx0Y29sb3I6IHdoaXRlO1xufVxuLnNwYWNlciB7XG5cdGZsZXg6IDEgMSBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/test-admin/main-nav2/main-nav2.component.html":
/*!***************************************************************!*\
  !*** ./src/app/test-admin/main-nav2/main-nav2.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar><a mat-list-item routerLink=\"/ta-dash\">Dashboard</a></mat-toolbar>\n    <mat-nav-list>\n      <!-- <a mat-list-item routerLink=\"/retrieve-schedule\">Test-admin</a> -->\n      <a mat-list-item routerLink=\"/retrieve-schedule\">Create/Retrieve Schedule</a>\n      <!-- <a mat-list-item routerLink=\"/tag\">Create / Edit Tag</a>\n      <a mat-list-item routerLink=\"/rqbank\">Questions Created</a>\n      <a mat-list-item routerLink=\"#\">Archive Quizes</a> -->\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar>\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Test Admin</span>\n      <span class=\"spacer\"></span>\n      <a class= \"log\" (click)=\"logout()\" >Log Out</a>\n    </mat-toolbar>\n    <div class=\"content\">\n    <ng-content></ng-content>\n  </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/test-admin/main-nav2/main-nav2.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/test-admin/main-nav2/main-nav2.component.ts ***!
  \*************************************************************/
/*! exports provided: MainNav2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNav2Component", function() { return MainNav2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var MainNav2Component = /** @class */ (function () {
    function MainNav2Component(breakpointObserver, authService, router) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.router = router;
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    MainNav2Component.prototype.ngOnInit = function () {
        var _this = this;
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
    MainNav2Component.prototype.logout = function () {
        this.authService.signOut();
    };
    MainNav2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-nav2',
            template: __webpack_require__(/*! ./main-nav2.component.html */ "./src/app/test-admin/main-nav2/main-nav2.component.html"),
            styles: [__webpack_require__(/*! ./main-nav2.component.css */ "./src/app/test-admin/main-nav2/main-nav2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], MainNav2Component);
    return MainNav2Component;
}());



/***/ }),

/***/ "./src/app/test-admin/retrieve-schedule/add-user/add-user.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/test-admin/retrieve-schedule/add-user/add-user.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtYWRtaW4vcmV0cmlldmUtc2NoZWR1bGUvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test-admin/retrieve-schedule/add-user/add-user.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/test-admin/retrieve-schedule/add-user/add-user.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <form #Userform=\"ngForm\" (submit)=\"onSubmit(Userform)\" autocomplete=\"off\">\n        <div *ngFor=\"let x of quiztakers; let i = index\"><br>\n          <input [id]=\"'quiztakers-'+i\" type=\"checkbox\" value=\"{{x.Id}}\" [checked]=\"x.selected\"\n            (change)=\"updateSelectedUsers(i)\">\n          <label>{{x.FirstName  }}{{x.LastName}}</label>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        <button type=\"button\" [mat-dialog-close] class=\"btn btn-danger\">Close</button>\n      </form>\n"

/***/ }),

/***/ "./src/app/test-admin/retrieve-schedule/add-user/add-user.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/test-admin/retrieve-schedule/add-user/add-user.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_test_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/test-admin.service */ "./src/app/test-admin/shared/test-admin.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(data, dialogRef, toastr, dialog, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.dialog = dialog;
        this.service = service;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        // if(Number(localStorage.getItem('sid')) !=null)  {
        //   this.loadSpecificUsers(this.data);
        //   }
        //else{
        this.loadUsers();
        //  }
    };
    AddUserComponent.prototype.loadUsers = function () {
        var _this = this;
        this.service.retrieveAllEmployees().subscribe(function (res) {
            res.forEach(function (obj) { return obj.selected = false; });
            _this.quiztakers = res;
        });
    };
    AddUserComponent.prototype.loadSpecificUsers = function (id) {
        var _this = this;
        this.service.retrieveSpecificEmployees(id).subscribe(function (res) {
            res.forEach(function (obj) { return obj.selected = false; });
            _this.quiztakers = res;
        });
    };
    AddUserComponent.prototype.updateSelectedUsers = function (index) {
        this.quiztakers[index].selected = !this.quiztakers[index].selected;
    };
    AddUserComponent.prototype.onSubmit = function (form) {
        var quiztakerId = this.quiztakers.filter(function (Id) { return Id.selected; }).map(function (idSelected) { return idSelected.Id; });
        console.log(quiztakerId);
        this.service.quiztakerId = quiztakerId;
    };
    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/test-admin/retrieve-schedule/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/test-admin/retrieve-schedule/add-user/add-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _shared_test_admin_service__WEBPACK_IMPORTED_MODULE_2__["TestAdminService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/test-admin/retrieve-schedule/create-schedule/create-schedule.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/test-admin/retrieve-schedule/create-schedule/create-schedule.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtYWRtaW4vcmV0cmlldmUtc2NoZWR1bGUvY3JlYXRlLXNjaGVkdWxlL2NyZWF0ZS1zY2hlZHVsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test-admin/retrieve-schedule/create-schedule/create-schedule.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/test-admin/retrieve-schedule/create-schedule/create-schedule.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav2>\n    <div class=\"card\" style=\"width: 80%;\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Create Schedule</h5>\n          <button type=\"button\" (click)=\"adduser()\" class=\"btn btn-primary\">Add Users</button><br />\n          <form #form=\"ngForm\" (submit)=\"sub(form)\" autocomplete=\"off\">\n            <div class=\"form-row\">\n              <input type=\"hidden\" #CreatedBy=\"ngModel\" name=\"CreatedBy\" [(ngModel)]=\"CCreatedBy\">\n              <div class=\"form-group col-md-6\">\n                <label>Start Date Time</label>\n                <input type=\"datetime-local\" required name=\"StartDateTime\" #StartDateTime=\"ngModel\" [(ngModel)]=\"q1\">\n                <div class=\"validation-error\" *ngIf=\"StartDateTime.invalid && StartDateTime.touched\">This field is\n                  required.\n                </div>\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label>End Date Time</label>\n                <input type=\"datetime-local\" required name=\"EndDateTime\" #EndDateTime=\"ngModel\" [(ngModel)]=\"q2\">\n                <div class=\"validation-error\" *ngIf=\"EndDateTime.invalid && EndDateTime.touched\">This field is\n                  required.\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Select Quiz</label>\n                <select name=\"QuizId\" required #QuizId=\"ngModel\" [(ngModel)]=\"q3\" class=\"form-control\">\n                  <option value=\"\">Choose</option>\n                  <option *ngFor=\"let Quiz of QuizList\" value=\"{{Quiz.QuizId}}\">\n                    {{Quiz.Subject}}&nbsp;&nbsp;{{Quiz.Difficulty}}</option>\n                </select>\n                <div class=\"validation-error\" *ngIf=\"QuizId.invalid && QuizId.touched\">This field is required.</div>\n              </div>\n            </div>\n      \n      \n            <div class=\"form-group\">\n              <button type=\"submit\" [disabled]=\"btndisable || form.invalid\" class=\"btn btn-primary btn-block\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n</app-main-nav2>\n"

/***/ }),

/***/ "./src/app/test-admin/retrieve-schedule/create-schedule/create-schedule.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/test-admin/retrieve-schedule/create-schedule/create-schedule.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CreateScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateScheduleComponent", function() { return CreateScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_test_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/test-admin.service */ "./src/app/test-admin/shared/test-admin.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_test_admin_retrieve_schedule_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/test-admin/retrieve-schedule/add-user/add-user.component */ "./src/app/test-admin/retrieve-schedule/add-user/add-user.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var CreateScheduleComponent = /** @class */ (function () {
    function CreateScheduleComponent(service, dialog, toastr) {
        this.service = service;
        this.dialog = dialog;
        this.toastr = toastr;
        this.q1 = "";
        this.q2 = "";
        this.q3 = "";
        this.btndisable = true;
        this.CCreatedBy = "";
    }
    CreateScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CCreatedBy = localStorage.getItem('uid');
        this.service.retriveAllQuizzes().subscribe(function (res) {
            // console.log(res);
            _this.QuizList = res;
            console.log(_this.QuizList);
            _this.q1 = "";
            _this.q2 = "";
            _this.q3 = "";
        });
    };
    CreateScheduleComponent.prototype.sub = function (form) {
        // console.log(form.value);
        this.service.postSchedule(form.value).subscribe(function (res) {
            console.log(res);
        });
        this.toastr.success('Inserted successfully');
    };
    CreateScheduleComponent.prototype.adduser = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        dialogConfig.disableClose = true;
        var dialogRef = this.dialog.open(src_app_test_admin_retrieve_schedule_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__["AddUserComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            //console.log(this.service.quiztakerId);
            if (_this.service.quiztakerId != null) {
                _this.btndisable = false;
            }
        });
    };
    CreateScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-schedule',
            template: __webpack_require__(/*! ./create-schedule.component.html */ "./src/app/test-admin/retrieve-schedule/create-schedule/create-schedule.component.html"),
            styles: [__webpack_require__(/*! ./create-schedule.component.css */ "./src/app/test-admin/retrieve-schedule/create-schedule/create-schedule.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_test_admin_service__WEBPACK_IMPORTED_MODULE_2__["TestAdminService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], CreateScheduleComponent);
    return CreateScheduleComponent;
}());



/***/ }),

/***/ "./src/app/test-admin/retrieve-schedule/retrieve-schedule.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/test-admin/retrieve-schedule/retrieve-schedule.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th,td{\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC1hZG1pbi9yZXRyaWV2ZS1zY2hlZHVsZS9yZXRyaWV2ZS1zY2hlZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtYWRtaW4vcmV0cmlldmUtc2NoZWR1bGUvcmV0cmlldmUtc2NoZWR1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoLHRke1xuICAgIGNvbG9yOiBibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/test-admin/retrieve-schedule/retrieve-schedule.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/test-admin/retrieve-schedule/retrieve-schedule.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav2>\n  <button type=\"button\" (click)=\"onCreate()\" class=\"btn btn-primary\">Create Schedule</button>\n    <br /><br />\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-dark\">\n        <th scope=\"col\">#Schedule ID</th>\n        <th scope=\"col\">Quiz Id</th>\n        <th scope=\"col\">Start Date/Time</th>\n        <th scope=\"col\">End Date/Time</th>\n        <th scope=\"col\">Action</th>\n    \n      </thead>\n    \n      <tbody>\n        <ng-container *ngFor=\"let item of scheduleList;index as i;\">\n          <tr style=\"color:azure\">\n            <th (click)=\"viewSchedule(item.QuizId,i+1)\" scope=\"row\">{{i+1}}</th>\n            <td (click)=\"viewSchedule(item.QuizId,i+1)\" scope=\"row\">{{item.QuizId}}</td>\n            <td (click)=\"viewSchedule(item.QuizId,i+1)\" scope=\"row\">{{item.StartDateTime}}</td>\n            <td (click)=\"viewSchedule(item.QuizId,i+1)\" scope=\"row\">{{item.EndDateTime}}</td>\n            <td>\n              <a class=\"btn btn-sm btn-info text-white\" (click)=\"editSchedule(item.QuizId,i+1)\"><i\n                  class=\"fa fa-pencil\"></i></a>\n              <a class=\"btn btn-sm btn-danger text-white ml-1\" (click)=\"deleteSchedule(ques.QuestionId)\"><i\n                  class=\"fa fa-trash\"></i></a>\n            </td>\n    \n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n    </app-main-nav2>\n    "

/***/ }),

/***/ "./src/app/test-admin/retrieve-schedule/retrieve-schedule.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/test-admin/retrieve-schedule/retrieve-schedule.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RetrieveScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetrieveScheduleComponent", function() { return RetrieveScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_test_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/test-admin.service */ "./src/app/test-admin/shared/test-admin.service.ts");
/* harmony import */ var _view_schedule_view_schedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-schedule/view-schedule.component */ "./src/app/test-admin/retrieve-schedule/view-schedule/view-schedule.component.ts");







var RetrieveScheduleComponent = /** @class */ (function () {
    function RetrieveScheduleComponent(service, toastr, dialog, router) {
        this.service = service;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.searchText = '';
        this.difficultyLevel = '';
    }
    RetrieveScheduleComponent.prototype.onCreate = function () {
        this.router.navigate(['/testAdminCreateScheDule']);
    };
    RetrieveScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getSchedule(localStorage.getItem('uid')).subscribe(function (res) {
            _this.scheduleList = res;
            console.log(_this.scheduleList);
        });
    };
    RetrieveScheduleComponent.prototype.deleteSchedule = function (qid) {
        var _this = this;
        this.service.deleteSchedule(qid).subscribe(function (res) {
            _this.toastr.success('Deleted Successfully', 'Assesment System');
        });
    };
    RetrieveScheduleComponent.prototype.viewSchedule = function (scheduleid, arrayindex) {
        var _this = this;
        this.service.getScheduleQuizUsers(scheduleid).subscribe(function (res) {
            _this.service.scheduleQuizUsers = res;
        });
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        dialogConfig.disableClose = true;
        this.service.readonlyStatus = true;
        this.service.formdata = this.scheduleList[arrayindex - 1];
        this.dialog.open(_view_schedule_view_schedule_component__WEBPACK_IMPORTED_MODULE_6__["ViewScheduleComponent"], dialogConfig).afterClosed().subscribe(function (res) {
        });
    };
    RetrieveScheduleComponent.prototype.editSchedule = function (scheduleid, arrayindex) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        dialogConfig.disableClose = true;
        this.service.readonlyStatus = false;
        this.service.formdata = this.scheduleList[arrayindex - 1];
        localStorage.setItem('sId', scheduleid.toString());
        this.dialog.open(_view_schedule_view_schedule_component__WEBPACK_IMPORTED_MODULE_6__["ViewScheduleComponent"], dialogConfig).afterClosed().subscribe(function (res) {
            localStorage.removeItem('sId');
        });
    };
    RetrieveScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-retrieve-schedule',
            template: __webpack_require__(/*! ./retrieve-schedule.component.html */ "./src/app/test-admin/retrieve-schedule/retrieve-schedule.component.html"),
            styles: [__webpack_require__(/*! ./retrieve-schedule.component.css */ "./src/app/test-admin/retrieve-schedule/retrieve-schedule.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_test_admin_service__WEBPACK_IMPORTED_MODULE_5__["TestAdminService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RetrieveScheduleComponent);
    return RetrieveScheduleComponent;
}());



/***/ }),

/***/ "./src/app/test-admin/retrieve-schedule/view-schedule/view-schedule.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/test-admin/retrieve-schedule/view-schedule/view-schedule.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtYWRtaW4vcmV0cmlldmUtc2NoZWR1bGUvdmlldy1zY2hlZHVsZS92aWV3LXNjaGVkdWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test-admin/retrieve-schedule/view-schedule/view-schedule.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/test-admin/retrieve-schedule/view-schedule/view-schedule.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 80%;\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{label}}</h5>\n    <button type=\"button\" (click)=\"onAdd()\" class=\"btn btn-primary\">Add Question</button>\n    <form #form=\"ngForm\" (submit)=\"onSubmit(form)\" autocomplete=\"off\">\n      <input type=\"hidden\" name=\"CreatedBy\" #CreatedBy=\"ngModel\" [(ngModel)]=\"this.CCreatedBy\">\n      <input type=\"hidden\" name=\"QuizId\" #QuizId=\"ngModel\" [(ngModel)]=\"service.formdata.QuizId\">\n      <div class=\"form-group col-md-6\">\n        <label>Start Date Time</label>\n        <input type=\"datetime-local\" required name=\"StartDateTime\" #StartDateTime=\"ngModel\"\n          [(ngModel)]=service.formdata.StartDateTime [readonly]=\"bool\">\n        <div class=\"validation-error\" *ngIf=\"StartDateTime.invalid && StartDateTime.touched\">This field is required.\n        </div>\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label>End Date Time</label>\n        <input type=\"datetime-local\" required name=\"EndDateTime\" #EndDateTime=\"ngModel\"\n          [(ngModel)]=\"service.formdata.EndDateTime\" [readonly]=\"bool\">\n        <div class=\"validation-error\" *ngIf=\"EndDateTime.invalid && EndDateTime.touched\">This field is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button style=\"margin:0 5%\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">Submit</button>\n        <button type=\"button\" class=\"btn btn-primary btn-danger\" [mat-dialog-close]> Close</button>\n      </div>   \n      <ng-container *ngFor=\"let item of scheduleList;index as i\">\n        <p>{{i+1}}.&nbsp;&nbsp;item.name</p><br/>\n      </ng-container>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/test-admin/retrieve-schedule/view-schedule/view-schedule.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/test-admin/retrieve-schedule/view-schedule/view-schedule.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ViewScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewScheduleComponent", function() { return ViewScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_test_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/test-admin.service */ "./src/app/test-admin/shared/test-admin.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-user/add-user.component */ "./src/app/test-admin/retrieve-schedule/add-user/add-user.component.ts");






var ViewScheduleComponent = /** @class */ (function () {
    function ViewScheduleComponent(data, dialogRef, toastr, service, dialog) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.service = service;
        this.dialog = dialog;
        this.CCreatedBy = '';
    }
    ViewScheduleComponent.prototype.ngOnInit = function () {
        console.log(this.service.formdata);
        this.bool = this.service.readonlyStatus;
        if (this.bool === true) {
            this.label = "View Schedule";
        }
        else {
            this.label = "Edit Schedule";
        }
        this.CCreatedBy = localStorage.getItem('uid');
        this.usersList = this.service.scheduleQuizUsers;
    };
    ViewScheduleComponent.prototype.onAdd = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        dialogConfig.disableClose = true;
        var dialogRef = this.dialog.open(_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__["AddUserComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ViewScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-schedule',
            template: __webpack_require__(/*! ./view-schedule.component.html */ "./src/app/test-admin/retrieve-schedule/view-schedule/view-schedule.component.html"),
            styles: [__webpack_require__(/*! ./view-schedule.component.css */ "./src/app/test-admin/retrieve-schedule/view-schedule/view-schedule.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shared_test_admin_service__WEBPACK_IMPORTED_MODULE_2__["TestAdminService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ViewScheduleComponent);
    return ViewScheduleComponent;
}());



/***/ }),

/***/ "./src/app/test-admin/shared/test-admin.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/test-admin/shared/test-admin.service.ts ***!
  \*********************************************************/
/*! exports provided: TestAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestAdminService", function() { return TestAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var TestAdminService = /** @class */ (function () {
    function TestAdminService(http) {
        this.http = http;
        this.rooturl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURl;
        this.quiztakerId = null;
    }
    TestAdminService.prototype.retriveAllQuizzes = function () {
        return this.http.get(this.rooturl + 'Quiz/GetAllQuiz');
    };
    TestAdminService.prototype.retrieveAllEmployees = function () {
        return this.http.get(this.rooturl + 'User/GetUserAll');
    };
    TestAdminService.prototype.retrieveSpecificEmployees = function (sId) {
        return this.http.get(this.rooturl + 'User/GetUserSpecific/' + sId);
    };
    TestAdminService.prototype.postSchedule = function (formdata) {
        formdata.UserId = this.quiztakerId;
        console.log(formdata);
        return this.http.post(this.rooturl + 'QuizSchedule/ScheduleQuiz', formdata);
    };
    TestAdminService.prototype.getSchedule = function (id) {
        return this.http.get(this.rooturl + 'QuizSchedule/GetAllQuizSchedule/' + id);
    };
    TestAdminService.prototype.getScheduleQuizUsers = function (id) {
        return this.http.get(this.rooturl + 'QuizSchedule/GetUsersForSchedule/' + id);
    };
    TestAdminService.prototype.deleteSchedule = function (id) {
        return this.http.delete(this.rooturl + '/' + id);
    };
    TestAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TestAdminService);
    return TestAdminService;
}());



/***/ }),

/***/ "./src/app/test-admin/test-admin.component.css":
/*!*****************************************************!*\
  !*** ./src/app/test-admin/test-admin.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtYWRtaW4vdGVzdC1hZG1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test-admin/test-admin.component.html":
/*!******************************************************!*\
  !*** ./src/app/test-admin/test-admin.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test-admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/test-admin/test-admin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/test-admin/test-admin.component.ts ***!
  \****************************************************/
/*! exports provided: TestAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestAdminComponent", function() { return TestAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestAdminComponent = /** @class */ (function () {
    function TestAdminComponent() {
    }
    TestAdminComponent.prototype.ngOnInit = function () {
    };
    TestAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-admin',
            template: __webpack_require__(/*! ./test-admin.component.html */ "./src/app/test-admin/test-admin.component.html"),
            styles: [__webpack_require__(/*! ./test-admin.component.css */ "./src/app/test-admin/test-admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestAdminComponent);
    return TestAdminComponent;
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
    apiURl: 'http://62d591eb.ngrok.io/api/'
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