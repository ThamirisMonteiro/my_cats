import { Component, OnInit, Input } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { Cat } from 'src/app/model/cat.model';

@Component({
  selector: 'app-cat-row',
  templateUrl: './cat-row.component.html',
  styleUrls: ['./cat-row.component.css']
})
export class CatRowComponent implements OnInit {

  @Input() cat : Cat;


  constructor(private catService : CatService) { }

  ngOnInit(): void {
  }

  delete(cat : Cat): void{
    this.catService.deleteCat(cat._id)
    .then(() => {
      this.catService.catDeleteEvent.emit(cat);
  })
    .catch(e => console.error(e));
  }
}
