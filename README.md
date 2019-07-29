# Assessment System
An ASP.NET Web API 2.0 and Angular Application that allows user to create and conduct assessments/quizzes. 
The application has 4 personas : 
* Content-Creator
* Test-Administrator
* Employee
* Reporting User

---
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Things required to get the web application up and running.
* ASP.NET Framework 4.5
* Angular 7
* Node.js
* npm
* SQL Server
* IIS
* Visual Studio 2017
* Visual Studio Code
* Microsoft SQL Server Management Studio

### Installation
A step by step series of examples that tell you how to get a development environment running.

Run the below commands :-
# WebApi
* Open the Solution and Build the Project
* Goto Properties > Web > Servers :
* Local IIS > Create Virtual Directory
* Save
* Build

# WebApp
* Open the Project Directory in VS Code
* In Terminal > Goto Directory having package.json
* To Run Server : 
```
    npm install
    ng serve -o
```

---
### Project Structure
```

+---WebApi
    |   AuthorizeAttribute.cs
    |   connectionString.config
    |   favicon.ico
    |   Global.asax
    |   Global.asax.cs
    |   packages.config
    |   Startup.cs
    |   Web.config
    |   Web.Debug.config
    |   Web.Release.config
    |   WebApi.csproj
    |   WebApi.csproj.user
    |   
    +---App_Data
    +---App_Start
    |       FilterConfig.cs
    |       IdentityConfig.cs
    |       SwaggerConfig.cs
    |       WebApiConfig.cs
    |       
    +---bin/
    +---Controllers
    |       DefaultController.cs
    |       DetailedReportController.cs
    |       EmployeeController.cs
    |       QuestionController.cs
    |       QuizController.cs
    |       QuizScheduleController.cs
    |       ReportController.cs
    |       ReportingUserController.cs
    |       RoleController.cs
    |       SubjectController.cs
    |       UserController.cs
    |       UserScheduleController.cs
    |       
    +---Images
    |       question2192909664.png
    |       
    +---Migrations
    |       Configuration.cs
    |       
    +---Models
    |       Account.cs
    |       DetailedReport.cs
    |       GoogleApiTokenInfo.cs
    |       IdentityModels.cs
    |       Question.cs
    |       QuestionTag.cs
    |       Quiz.cs
    |       QuizBuffer.cs
    |       QuizQuestion.cs
    |       QuizSchedule.cs
    |       QuizTag.cs
    |       Report.cs
    |       Subject.cs
    |       SubjectAnalytics.cs
    |       UserAnalytics.cs
    |       UserSchedule.cs
    |       
    +---obj/
    +---Properties
    |       AssemblyInfo.cs
    |       
    +---Providers
    |       ApplicationOAuthProvider.cs
    |       
    +---Repository
    |       HelperClass.cs
    |       HelperModel.cs
    |       RDetailedReport.cs
    |       REmployee.cs
    |       RQuestion.cs
    |       RQuiz.cs
    |       RQuizBuffer.cs
    |       RQuizQuestion.cs
    |       RQuizSchedule.cs
    |       RQuizTag.cs
    |       RReport.cs
    |       RRoles.cs
    |       RSubject.cs
    |       RUser.cs
    |       RUserSchedule.cs
    |         
    +---Services
    |       IDetailedReport.cs
    |       IEmployee.cs
    |       IQuestion.cs
    |       IQuiz.cs
    |       IQuizBuffer.cs
    |       IQuizQuestion.cs
    |       IQuizSchedule.cs
    |       IQuizTag.cs
    |       IReport.cs
    |       IRoles.cs
    |       ISubject.cs
    |       IUser.cs
    |       IUserSchedule.cs
+---WebApi.sln            

```
---
### License
This project is licensed under Nineleaps Technology Solutions Pvt Ltd. © 2019.