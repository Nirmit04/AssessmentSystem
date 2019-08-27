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

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Authors

* **Pulkit Varma** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
