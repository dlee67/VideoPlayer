import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { VideoState } from '../../reducer/video.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild('someVideo') myDiv: ElementRef;

  constructor(private videoStore: Store<VideoState>) { }

  ngOnInit(): void {
  }

  buttonClicked() {
    this.videoStore.dispatch({ type: "VIDEO_CHANGED", 
      payload: this.myDiv.nativeElement.innerHTML});
  }
}
