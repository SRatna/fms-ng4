import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
declare const jQuery: any;

@Component({
    templateUrl: './layout.component.html'
})

export class LayoutComponent implements AfterViewInit {
    constructor() { }
    ngAfterViewInit() {
        jQuery('body').addClass('nav-md  pace-done');
        jQuery('body').removeAttr('style');
    }

 }
