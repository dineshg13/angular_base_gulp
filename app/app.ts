/// <reference path="../node_modules/@types/angular/index.d.ts" />
/// <reference path="../node_modules/@types/jquery/index.d.ts" />

var app = angular.module('myApp',[]);
app.controller('MyController', function(){

});

class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
 
    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time in NY is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};