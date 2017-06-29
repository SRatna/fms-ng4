import { Component, OnInit,AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
declare let $: any;
@Component({
    templateUrl: './account.component.html',
})

export class AccountComponent implements AfterViewInit {
    constructor() { };

    ngAfterViewInit() {
     $('body').attr('style','background-color: #F7F7F7');
    }
};
