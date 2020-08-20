import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { VideoState } from '../../reducer/video.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private videoStore: Store<VideoState>) { }

  ngOnInit(): void {
  }

  buttonClicked() {
    console.log("Button clicked");
    this.videoStore.dispatch({ type: "VIDEO_CHANGED", payload: "example payload"});
  }
}
