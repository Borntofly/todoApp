"use strict";var jsMytodoApp=angular.module("jsMytodoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.sortable","LocalStorageModule"]);jsMytodoApp.config(["localStorageServiceProvider",function(a){a.setPrefix("ls")}]),jsMytodoApp.controller("mainctrl",["$scope","localStorageService",function(a,b){var c=b.get("todos");a.todos=c||[],a.$watch("todos",function(){b.set("todos",a.todos)},!0),a.todo="",a.addTodo=function(){a.todos.push(a.todo),a.todo=""},a.removeTodo=function(b){a.todos.splice(b,1)}}]),jsMytodoApp.controller("aboutctrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),jsMytodoApp.controller("headerctrl",["$scope","$location",function(a,b){a.isActive=function(a){return console.log("location path: "+b.path()),a===b.path()}}]),jsMytodoApp.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"mainctrl"}).when("/about",{templateUrl:"views/about.html",controller:"aboutctrl"})}]),angular.module("jsMytodoApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="jumbotron"> <h1>About Me</h1> <p>some text with pics will come soon...</p> <p><a class="btn btn-primary btn-lg" href="#/" role="button">Go Home</a></p> </div>'),a.put("views/main.html",'<div class="container"> <h2>My todos</h2> <!-- Todos input --> <form role="form" ng-submit="addTodo()"> <div class="row"> <div class="input-group"> <input type="text" ng-model="todo" placeholder="What needs to be done?" class="form-control"> <span class="input-group-btn"> <input type="submit" class="btn btn-primary" value="Add"> </span> </div> </div> </form> <!-- Todos list --> <div ui-sortable ng-model="todos"> <p class="input-group" ng-repeat="todo in todos" style="padding:5px 10px; cursor: move"> <input type="text" ng-model="todo" class="form-control"> <span class="input-group-btn"> <button class="btn btn-danger" ng-click="removeTodo($index)" aria-label="Remove">X</button> </span> </p> </div></div>')}]);