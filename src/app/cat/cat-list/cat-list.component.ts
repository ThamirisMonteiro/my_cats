import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { Cat } from 'src/app/model/cat.model';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  public catList : Array<Cat>;

  constructor(private catService : CatService) {
    this.catService.catDeleteEvent.subscribe((deletedCat : Cat)=>{
      this.catList = this.catList.filter((cat : Cat)=>{
        if(cat._id === deletedCat._id)
          return false;
        else
          return true;
      });
    })
  }

  ngOnInit(): void
  {
    this.catService.listCats()
    .then((catListFromDb : Array<Cat>) =>
    {this.catList = catListFromDb;})
    .catch(e => console.error(e));
  }

  delete (cat : Cat) : void
  {
    this.catService.deleteCat(cat._id)
    .then(() => {

    })
    .catch(e => console.error(e));
  }

}
