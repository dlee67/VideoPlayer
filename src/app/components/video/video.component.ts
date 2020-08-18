import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  video$: Observable<string>
  videoLink: string

  constructor(private store: Store<{ video: string }>) {
    this.video$ = store.pipe(select('video'));
    this.video$.subscribe((videoLink: string) => {
      console.log("In subscribe(), got: " + videoLink);
      this.videoLink = videoLink;
    });
  }

  ngOnInit(): void {
  }

}
