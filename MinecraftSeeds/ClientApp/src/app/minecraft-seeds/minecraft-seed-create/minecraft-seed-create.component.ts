import { Component, OnInit } from '@angular/core';
import { MinecraftSeedsService } from 'src/app/shared/minecraft-seeds.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-minecraft-seed-create',
  templateUrl: './minecraft-seed-create.component.html',
  styleUrls: ['./minecraft-seed-create.component.css']
})
export class MinecraftSeedCreateComponent implements OnInit {

  constructor(private service:MinecraftSeedsService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form != null)
      form.resetForm();
    this.service.formData = {
    SeedID: 0,
    SeedValue: '',
    SeedText: '',
    Title: '',
    Description: '',
    Image: '',
    version: ''
    }
  }

  onSubmit(form: NgForm){
    this.service.postSeed(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    )
  }

}
