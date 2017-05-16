import { Component, OnInit } from '@angular/core';
import { Branch } from '../../classes/branch';
import { BranchesService } from '../../services/branches.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  branch: Branch;

  constructor(private branchService: BranchesService) { }

  save(): void {
    this.branchService.create(this.branch).then(() => null);
  }

  ngOnInit() {
  }

}
