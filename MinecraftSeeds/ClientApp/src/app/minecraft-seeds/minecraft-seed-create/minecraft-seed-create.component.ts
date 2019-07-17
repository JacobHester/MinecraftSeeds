import { Component, OnInit } from '@angular/core';
import { MinecraftSeedsService } from 'src/app/shared/minecraft-seeds.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-minecraft-seed-create',
  templateUrl: './minecraft-seed-create.component.html',
  styleUrls: ['./minecraft-seed-create.component.css']
})
export class MinecraftSeedCreateComponent implements OnInit {

  constructor(private service:MinecraftSeedsService,
              private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form != null)
      form.resetForm();
    this.service.formData = {
    seedID: 0,
    seedValue: '',
    seedText: '',
    title: '',
    description: '',
    image: '',
    version: ''
    }
  }

  onSubmit(form: NgForm){
    if (this.service.formData.seedID == 0)
    {
       this.insertSeed(form);
    }
    else
    {
       this.updateSeed(form);
    }
  }

  insertSeed(form:NgForm){
    this.service.postSeed().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted Succsessfully', 'Minecraft Seed');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateSeed(form:NgForm){
    this.service.putUpdateSeed().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Updated Succsessfully', 'Minecraft Seed');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
