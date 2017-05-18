import { Component, OnInit } from '@angular/core';
import { Branch } from '../../classes/branch';
// import { BranchesService } from '../../services/branches.service';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  // branch: Branch;
  branch = new Branch();
  branches: Branch[];
  private branchesUrl = 'http://localhost/advanced/api/web/v1/branches';


  constructor(private branchService: CommonService) { }

  save(): void {
    this.branchService.create(this.branch, this.branchesUrl).subscribe(branch => this.branches.push(branch), error => console.log(error));
    // this.branch = {id: 0, name: ' '};
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
