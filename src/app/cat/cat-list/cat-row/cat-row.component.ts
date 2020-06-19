import {Component, Input, OnInit} from '@angular/core';
import {Cat} from '../../../model/cat.model';
import {CatService} from '../../../services/cat.service';

@Component({
  selector: 'app-cat-row',
  templateUrl: './cat-row.component.html',
  styleUrls: ['./cat-row.component.css']
})
export class CatRowComponent implements OnInit {

  @Input() cat: Cat;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
  }

  delete(cat: Cat): void {
    this.catService.deleteCat(cat._id)
      .then(() => {
        this.catService.catDeletedEvent.emit(cat);
      })
      .catch(e => console.error(e));
  }
}
