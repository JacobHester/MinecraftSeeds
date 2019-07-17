import { Injectable } from '@angular/core';
import { MinecraftSeed } from './minecraft-seed.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MinecraftSeedsService {

formData: MinecraftSeed;

readonly baseURL: "https://localhost:44377/api";

  constructor(private http:HttpClient) { }

  postSeed(formData:MinecraftSeed){
    return this.http.post("https://localhost:44377/api/Seed", formData);
  }
}
