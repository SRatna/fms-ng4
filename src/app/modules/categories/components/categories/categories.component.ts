import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Category } from '../../classes/category';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  category = new Category();
  categories: Category[];
  private categoiresUrl = 'http://localhost/advanced/api/web/v1/categories';


  constructor(private commonService: CommonService) { }

  save(): void {
    this.commonService.create(this.category, this.categoiresUrl).subscribe(obj => this.categories.push(obj), error => console.log(error));
    // this.branch = {id: 0, name: ' '};
  }

  deleteCategory(category: Category): void {
    if (confirm('Do you really want to delete?')) {
      this.commonService.remove(category, this.categoiresUrl)
        .subscribe(deletedObj => this.categories = this.categories.filter(o => o !== deletedObj), err => console.log(err));
    }

  }

  getCategories(): void {
    this.commonService
      .getObjects(this.categoiresUrl)
      .subscribe(objects => this.categories = objects, err => console.log(err));
  }

  ngOnInit() {
    this.getCategories();
  }

}
