import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { Cat } from '../../model/cat.model';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css'],
})
export class CatListComponent implements OnInit {
  public catList: Array<Cat>;
  public deleteCat: Boolean;
  public displayMsg: boolean;

  constructor(private catService: CatService) {
    this.catService.catDeletedEvent.subscribe((deletedCat: Cat) => {
      this.catList = this.catList.filter((cat: Cat) => {
        if (cat._id === deletedCat._id) {
          return false;
        } else {
          return true;
        }
      });
    });
  }

  ngOnInit(): void {
    this.catService
      .listCats()
      .then((catListFromDb: Array<Cat>) => {
        this.catList = catListFromDb;
      })
      .catch((e) => console.error(e));
  }

  delete(cat: Cat): void {
    var r = confirm('Are you sure you want to delete ' + cat.name + '?');
    if (r == true) {
      this.deleteCat = true;
    } else {
      this.deleteCat = false;
    }
    if (this.deleteCat)
    {
    this.catService.deleteCat(cat._id)
      .then(() => {
        this.catService.catDeletedEvent.emit(cat);
      })
      .catch((e) => console.error(e));
      this.displayMsg = true;
        setTimeout(() => {
          this.displayMsg = false;
        }, 3000);
    }

  }
}

