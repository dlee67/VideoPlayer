import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, videoSelector } from '../../selector/video.selector';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private videoStore: Store<AppState>) { }

  ngOnInit(): void {
  }

  buttonClicked() {
    console.log("Button clicked");
    this.videoStore.dispatch({ type: "VIDEO_CHANGED", payload: "example payload"});
  }
}
