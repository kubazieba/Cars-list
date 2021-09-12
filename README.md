# Cars List

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2 and [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Author](#author)

## General info
Recruitment task "Cars list" for Invisio - Digital Solutions.

## Technologies
* Angular - v12.2.2
* Node.js - v14.15.4
* npm - v6.14.10
* Loopback 4
* IntelliJ IDEA Ultimate
* Visual Studio Code
* Postman

## Setup
Project cars-api You should open with "npm run start". Database is set as in-memory lb4, so at start You will have empty database. I prepared cars.json for run collection in Postman with:
POST Request as localhost:3000/cars
Raw as JSON like:
{
    "brand": "{{brand}}",
    "model": "{{model}}",
    "year": {{year}}
}
Next step is project CarsJZ. First You must install all dependencies from package.json with "npm install" command. Finally run command "ng serve".

## Features
Functionalities in the application:
* Add a new car
* Editing an existing car
* Delete a car
* Sorting
* Filter by model

## Status
Project is: _finished_

## Author
Created by Jakub Zięba