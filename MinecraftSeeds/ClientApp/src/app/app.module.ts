import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
import { MinecraftSeedViewComponent } from './minecraft-seeds/minecraft-seed-view/minecraft-seed-view.component';

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
    MinecraftSeedDetailComponent,
    MinecraftSeedViewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MinecraftSeedListComponent, pathMatch: 'full' },
      { path: 'view', component: MinecraftSeedViewComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [MinecraftSeedsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
