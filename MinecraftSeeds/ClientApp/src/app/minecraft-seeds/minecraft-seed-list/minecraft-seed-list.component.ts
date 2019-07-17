import { Component, OnInit } from '@angular/core';
import { MinecraftSeedsService } from 'src/app/shared/minecraft-seeds.service';
import { MinecraftSeed } from 'src/app/shared/minecraft-seed.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-minecraft-seed-list',
  templateUrl: './minecraft-seed-list.component.html',
  styleUrls: ['./minecraft-seed-list.component.css']
})
export class MinecraftSeedListComponent implements OnInit {

  constructor(private service:MinecraftSeedsService, private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  update(seed:MinecraftSeed){
     this.service.formData = Object.assign({}, seed);
  }

  onDelete(seedId){
    if(confirm('Do you want to delete this seed?')){
    this.service.deleteSeed(seedId)
    .subscribe(res =>{
       this.service.refreshList();
       this.toastr.warning('Deleted Successfully', 'Minecraft Seed')
    },
    err => {
      console.log(err);
    })
   }
  }
}
