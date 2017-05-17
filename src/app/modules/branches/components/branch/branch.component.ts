import { Component, OnInit } from '@angular/core';
import { Branch } from '../../classes/branch';
import { BranchesService } from '../../services/branches.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  // branch: Branch;
  branch = new Branch();
  branches: Branch[];

  constructor(private branchService: BranchesService) { }

  save(): void {
    this.branchService.create(this.branch).subscribe(branch => this.branches.push(branch), error => console.log(error));
    // this.branch = {id: 0, name: ' '};
  }

  deleteBranch(branch: Branch): void {
    if (confirm('Do you really want to delete?')) {
      this.branchService.deleteBranch(branch)
        .subscribe(deletedBranch => this.branches = this.branches.filter(b => b !== deletedBranch), err => console.log(err));
    }

  }

  getBranches(): void {
    this.branchService
      .getBranches()
      .subscribe(branches => this.branches = branches, err => console.log(err));
  }

  ngOnInit() {
     this.getBranches();
  }

}
