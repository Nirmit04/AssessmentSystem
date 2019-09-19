var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"home","component":"HomeComponent"},{"path":"","component":"LoginComponent","pathMatch":"full"},{"path":"app-root","component":"AppComponent"},{"path":"cc-dash","loadChildren":"./features/content-creator/content-creator.module#ContentCreatorModule","canActivate":["AuthGuard"],"data":{"roles":["Content-Creator"]},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/content-creator/content-creator-routing.module.ts","module":"ContentCreatorRoutingModule","children":[{"path":"","component":"UserDetailsComponent","canActivate":["AuthGuard"]},{"path":"tag","component":"TagComponent","canActivate":["AuthGuard"]},{"path":"quiz","component":"RetrieveQuizComponent","canActivate":["AuthGuard"]},{"path":"rqbank","component":"RetrieveQuestionBankComponent","canActivate":["AuthGuard"]},{"path":"create-question","component":"CreateQuestionsComponent","canActivate":["AuthGuard"]},{"path":"archive-quiz","component":"ArchiveQuizComponent","canActivate":["AuthGuard"]}],"kind":"module"}],"module":"ContentCreatorModule"}]},{"path":"login","component":"LoginComponent"},{"path":"ta-dash","loadChildren":"./features/test-admin/test-admin.module#TestAdminModule","canActivate":["AuthGuard"],"data":{"roles":["Test-Administrator"]}},{"path":"emp-dash","loadChildren":"./features/employee/employee.module#EmployeeModule","canActivate":["AuthGuard"],"data":{"roles":["Employee"]}},{"path":"ru-dash","loadChildren":"./features/reporting-user/reporting-user.module#ReportingUserModule","canActivate":["AuthGuard"],"data":{"roles":["Reporting-User"]}},{"path":"http-error","component":"HttpInterceptorComponent"}],"kind":"module"},{"name":"routes","filename":"src/app/features/employee/emploee-routing.module.ts","module":"EmployeeRoutingModule","children":[{"path":"non-mocks","component":"NonMockComponent","canActivate":["AuthGuard"]},{"path":"","component":"EmployeeComponent","canActivate":["AuthGuard"]},{"path":"quiz/take-quiz","component":"TakeQuizComponent","canActivate":["AuthGuard"]},{"path":"quiz/result","component":"ResultComponent","canActivate":["AuthGuard"]},{"path":"quiz/non-mock-report","component":"NonMockReportComponent","canActivate":["AuthGuard"]},{"path":"quiz/detailed-report","component":"DetailedReportComponent","canActivate":["AuthGuard"]},{"path":"mock","component":"MockComponent","canActivate":["AuthGuard"]},{"path":"mock-report","component":"MockReportComponent","canActivate":["AuthGuard"]}],"kind":"module"},{"name":"routes","filename":"src/app/features/reporting-user/reporting-user-routing.module.ts","module":"ReportingUserRoutingModule","children":[{"path":"","component":"ReportingUserComponent","canActivate":["AuthGuard"]},{"path":"ana-by-user","component":"AnalyticsByUserComponent","canActivate":["AuthGuard"]},{"path":"ana-by-tag","component":"AnalyticsByTagComponent","canActivate":["AuthGuard"]},{"path":"ana-by-quiz","component":"AnalyticsByQuizComponent","canActivate":["AuthGuard"]},{"path":"ana-by-user/user-detail","component":"ViewUserDetailsComponent","canActivate":["AuthGuard"]},{"path":"ana-by-user/quiz-detail","component":"DetailsComponent","canActivate":["AuthGuard"]}],"kind":"module"},{"name":"routes","filename":"src/app/features/test-admin/test-admin-routing.module.ts","module":"TestAdminRoutingModule","children":[{"path":"testAdminCreateScheDule","component":"CreateScheduleComponent","canActivate":["AuthGuard"]},{"path":"retrieve-schedule","component":"RetrieveScheduleComponent","canActivate":["AuthGuard"]},{"path":"","component":"TestAdminComponent","canActivate":["AuthGuard"]},{"path":"archive-schedule","component":"ArchivedScheduleComponent","canActivate":["AuthGuard"]},{"path":"add-user","component":"AddUserComponent","canActivate":["AuthGuard"]}],"kind":"module"}]}
