import { Component, OnInit } from '@angular/core';
import { Branch } from '../../classes/branch';
import { CommonService } from '../../../../services/common.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  duplicity: boolean;
  duplicityErrorMsg: string;
  branch = new Branch();
  branches: Branch[];
  private branchesUrl = 'http://localhost/advanced/api/web/v1/branches';


  constructor(private branchService: CommonService) { }

  save(myForm: FormGroup): void {
    this.branchService.checkDuplicity(this.branch, this.branchesUrl).subscribe(obj => {
      this.duplicity = obj.duplicity;
      if (this.duplicity) {
        this.duplicityErrorMsg = 'Sorry, name already exists.';
      } else {
        this.branchService.create(this.branch, this.branchesUrl)
          .subscribe(branch => {
            this.branches.push(branch);
            myForm.reset();
          }, error => console.log(error));
        }
      }, e => console.log(e)
    );
  }

  deleteBranch(branch: Branch): void {
    if (confirm('Do you really want to delete?')) {
      this.branchService.remove(branch, this.branchesUrl)
        .subscribe(deletedBranch => this.branches = this.branches.filter(b => b !== deletedBranch), err => console.log(err));
    }

  }

  getBranches(): void {
    this.branchService
      .getObjects(this.branchesUrl)
      .subscribe(branches => this.branches = branches, err => console.log(err));
  }

  ngOnInit() {
     this.getBranches();
  }
}
