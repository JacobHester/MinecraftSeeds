import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MinecraftSeedCreateComponent } from './minecraft-seeds/minecraft-seed-create/minecraft-seed-create.component';
import { MinecraftSeedDetailComponent } from './minecraft-seeds/minecraft-seed-detail/minecraft-seed-detail.component';
import { MinecraftSeedListComponent } from './minecraft-seeds/minecraft-seed-list/minecraft-seed-list.component';
import { MinecraftSeedsComponent } from './minecraft-seeds/minecraft-seeds.component';
import { MinecraftSeedsService } from './shared/minecraft-seeds.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MinecraftSeedsComponent,
    MinecraftSeedCreateComponent,
    MinecraftSeedListComponent,
    MinecraftSeedDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [MinecraftSeedsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
