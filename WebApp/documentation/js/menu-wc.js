'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">web-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-071cf023266619939ac7663ef3c5db05"' : 'data-target="#xs-components-links-module-AppModule-071cf023266619939ac7663ef3c5db05"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-071cf023266619939ac7663ef3c5db05"' :
                                            'id="xs-components-links-module-AppModule-071cf023266619939ac7663ef3c5db05"' }>
                                            <li class="link">
                                                <a href="components/AddQuesInQuizComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddQuesInQuizComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddUser1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddUser1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnalyticsByQuizComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnalyticsByQuizComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnalyticsByTagComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnalyticsByTagComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnalyticsByUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnalyticsByUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArchiveQuizComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArchiveQuizComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArchivedScheduleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArchivedScheduleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentCreatorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContentCreatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateQuestionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateQuestionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateQuizComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateQuizComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateScheduleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateScheduleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreatetagComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreatetagComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailedReportComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailedReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmployeeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmployeeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HttpInterceptorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HttpInterceptorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InstructionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InstructionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainNav2Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainNav2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainNav3Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainNav3Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainNavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Mainnav4Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Mainnav4Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MockComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MockReportComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MockReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NonMockComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NonMockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NonMockReportComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NonMockReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportingUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReportingUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResultComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RetrieveQuestionBankComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RetrieveQuestionBankComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RetrieveQuizComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RetrieveQuizComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RetrieveScheduleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RetrieveScheduleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TagComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TakeQuizComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TakeQuizComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestAdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateQuestionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UpdateQuestionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateQuizComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UpdateQuizComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewAnswerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewAnswerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewScheduleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewScheduleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewUserDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewUserDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-071cf023266619939ac7663ef3c5db05"' : 'data-target="#xs-injectables-links-module-AppModule-071cf023266619939ac7663ef3c5db05"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-071cf023266619939ac7663ef3c5db05"' :
                                        'id="xs-injectables-links-module-AppModule-071cf023266619939ac7663ef3c5db05"' }>
                                        <li class="link">
                                            <a href="injectables/ContentCreatorService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ContentCreatorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoaderServiceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LoaderServiceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Question.html" data-type="entity-link">Question</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuizModel.html" data-type="entity-link">QuizModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/Report.html" data-type="entity-link">Report</a>
                            </li>
                            <li class="link">
                                <a href="classes/Schedule.html" data-type="entity-link">Schedule</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subject.html" data-type="entity-link">Subject</a>
                            </li>
                            <li class="link">
                                <a href="classes/TagModel.html" data-type="entity-link">TagModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/EmployeeService.html" data-type="entity-link">EmployeeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportingUserService.html" data-type="entity-link">ReportingUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TestAdminService.html" data-type="entity-link">TestAdminService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpErrorInterceptor.html" data-type="entity-link">HttpErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/LoaderInterceptorService.html" data-type="entity-link">LoaderInterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/postReport.html" data-type="entity-link">postReport</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});