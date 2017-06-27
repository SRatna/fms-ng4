import { Component, OnInit } from '@angular/core';
import { Branch } from '../../classes/branch';
import { CommonService } from '../../../../services/common.service';
import { FormGroup } from '@angular/forms';
import { DataService } from '../../../../services/data.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  duplicity: boolean;
  duplicityErrorMsg: string;
  branch = new Branch();
  branches: any;
  branchesUrl: string;
  presentComponent: string;


  constructor(private branchService: CommonService, private dataService: DataService) { }

  save(myForm: FormGroup): void {

    this.dataService.saveData(this.branchesUrl, this.branch)
      .subscribe((response: Response) => {
        this.branches.push(response.json());
    },error=>console.log(error))  ;

  }

  deleteBranch(branch: Branch): void {
    if (confirm('Do you really want to delete?')) {
      this.branchService.remove(branch, this.branchesUrl)
        .subscribe(deletedBranch => this.branches = this.branches.filter(b => b !== deletedBranch), err => console.log(err));
    }

  }

  getBranches(): void {
    this.dataService
      .getDatas(this.branchesUrl)
      .subscribe((branches: Response) => {
        this.branches = branches.json().objects;
      }, err => console.log(err));
  }

  ngOnInit() {
    this.branchesUrl = this.branchService.getServer()+'branch';
    this.getBranches();

  }
}
