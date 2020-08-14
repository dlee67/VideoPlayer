import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { VideoComponent } from './components/video/video.component';
import { ListComponent } from './components/list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { videoReducer } from './reducer/video.reducer';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    VideoComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      { video: videoReducer }
    ),
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
