import { Injectable } from '@angular/core';
import { MinecraftSeed } from './minecraft-seed.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MinecraftSeedsService {

formData: MinecraftSeed;
formTest: FormData;

list : MinecraftSeed[];
selectedFile: File;

  constructor(private http:HttpClient) { }

  postSeed(){
    console.log(this.formData);
    console.log(this.selectedFile);
    this.formTest = new FormData();
    this.formTest.append('file', this.selectedFile);
    return this.http.post("https://localhost:44377/api/Seed", this.formTest);
  }

  refreshList(){
    this.http.get("https://localhost:44377/api/Seed")
    .toPromise()
    .then(res => this.list = res as MinecraftSeed[]);

  }

  putUpdateSeed(){
    return this.http.put("https://localhost:44377/api/Seed/" + this.formData.seedID, this.formData);
  }

  deleteSeed(seedID){
    return this.http.delete("https://localhost:44377/api/Seed/" + seedID);
  }


}
