import { Injectable } from '@angular/core';
import { MinecraftSeed } from './minecraft-seed.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MinecraftSeedsService {

formData: MinecraftSeed;
list : MinecraftSeed[];

  constructor(private http:HttpClient) { }

  postSeed(){
    return this.http.post("https://localhost:5001/api/Seed", this.formData);
  }

  refreshList(){
    this.http.get("https://localhost:5001/api/Seed")
    .toPromise()
    .then(res => this.list = res as MinecraftSeed[]);

  }

  putUpdateSeed(){
    return this.http.put("https://localhost:5001/api/Seed/" + this.formData.seedID, this.formData);
  }

  deleteSeed(seedID){
    return this.http.delete("https://localhost:5001/api/Seed/" + seedID);
  }


}
