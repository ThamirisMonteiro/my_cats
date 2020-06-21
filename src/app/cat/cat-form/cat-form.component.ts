import { Component, OnInit } from '@angular/core';
import {Cat} from '../../model/cat.model';
import {CatService} from '../../services/cat.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent implements OnInit {

  public cat: Cat = new Cat();
  public displayMsg: boolean;
  public displayMsg2: boolean;

  constructor(private catService: CatService, private router: Router, private activatedRoute: ActivatedRoute) {
    if (this.activatedRoute.snapshot.params.id != null){
      this.catService.findById(this.activatedRoute.snapshot.params.id)
        .then((cat: Cat) => {
          this.cat = cat;
        })
        .catch(e => console.error(e));
    }
  }

  ngOnInit(): void {
  }

  save(): void{
    if (!this.cat.name){
      alert("Please inform the cat's name");
    }
    else {
      if (!this.cat.age){
        alert("Please inform the cat's age");
      }
      else{
        if (!this.cat.breed){
          alert("Please inform the cat's breed");
        }
        else {
          if (!this.cat.favoriteToy){
            alert("Please inform the cat's favorite toy");
          }
          else {
            if (this.cat._id != null){
              this.update();
            }else{
              this.insert();
            }
          }
        }
      }
    }
  }
  goBack(): void{
    window.history.back();
  }

  private update(): void{
    this.catService.editCat(this.cat)
      .then((cat: Cat) => {
        this.displayMsg = true;
        setTimeout(() => {
          this.displayMsg = false;
        }, 3000);
      })
      .catch(e => console.error(e));
  }

  private insert(): void{
    this.catService.addCat(this.cat)
      .then((cat: Cat) => {
        this.displayMsg2 = true;
        setTimeout(() => {
          this.displayMsg2 = false;
        }, 3000);
        setTimeout(() => {
          this.router.navigate(['/cats']);
        },500);
      })
      .catch(e => console.error(e));
  }

}
