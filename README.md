# Assessment System

The main objective of the project titled “Assessment System” was to enable organization to conduct quizzes and organize assessments to gauge the understandings and learnings of employees through workshops, training sessions and seminars held at the organization in just few simple steps and thereby making assessment and evaluation a hassle free affair.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

git clone https://github.com/Nirmit04/AssessmentSystem.git
cd AssessmentSystem
npm install
ng serve --open

### Prerequisites

Things to have angular app running on your system are:
1. Node Package Manager (NPM)
2. Angular Command Line Interface (CLI)
3. Text Editor (e.g., Visual Studio Code)

Things to have .Net application running on your system
1. .NET framework
2. SQL database
3. Text Editor (e.g., Visual Studio Code)

### Installing

Things to have angular app running on your system are:
1. Install NPM - https://nodejs.org/en/
2. Install Angular CLI - npm install -g @angular/cli

Things to have .Net application running on your system
1. Install the .NET framework
2. Install the SQL database, latest is recommended.

Install the VSCode on your machine.
After cloning the project on your machine by the following command - 
git clone https://github.com/Nirmit04/AssessmentSystem.git, perform the following steps :
cd AssessmentSystem
npm install
ng serve --open
Browse to the application at [http://localhost:4200]
Sign in to the application.

## Feature list

 * Content Creator
 1) Add Mock Questions
 2) Add Scheduled Questions 
 3) Add Subjects/Tags
 4) Add Quiz - Scheduled/Mock
 4) Retrieve Questions
 5) Retrieve Quiz
 6) Retrieve Tags
 7) Edit Questions
 8) Edit Quiz Details
 9) Edit Tags/Subjects
 10) Archived Quizzes
 * Test Administrator
 1) Schedule Quizzes
 2) Add Users to Schedule Quiz
 3) Remove Existing Users from Schedule Quizzes
 * Employee
 1) View Scheduled Quizzes for that user
 2) View Mock Quizzes
 3) Take Quiz - Mock/Scheduled
 4) View Qui Reports - Mock/Scheduled
 * Reporting user
 1) Analysis By User
 2) Analysis By Tag
 3) Analysis By Quiz
 
 
## Angular 4 features used

 * Modules
 * Routes
 * Services
 * Components
 * Browser Animations
 * Forms Module
 * Reactive Forms
 * Directives
 * Pipes
 * Filters
 

## Libraries Used

 * Bootstrap
 * Font Awesome Icons
 * Angular Material Dialog Box
 * Toster for success/error messages


## Running the tests

Run ng test to execute the unit tests via Karma.

## Deployment

List of Commands Once Jenkins Job is hooked to a branch:-
1. rm -rf build
2. npm install -g @angular/cli
3. ng build --prod --build-optimizer
4. cd build
5. tar -pczf ../assessment-system.tgz .
6. cd ../
7. rm -rf assessment-system
8. mkdir assessment-system
9. tar -xvzf assessment-system.tgz -C assessment-system
10. rm -rf assessment-system.tgz]

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Authors

* **Pulkit Varma** - *Initial work*

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
