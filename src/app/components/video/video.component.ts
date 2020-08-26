import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { VideoState } from '../../reducer/video.reducer';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  video$: Observable<string>
  videoLink: string

  constructor(private store: Store<VideoState>) {
    this.video$ = store.pipe(select('videoLink'));
    this.video$.subscribe((videoLink: string) => {
      this.videoLink = videoLink;
      console.log('video link at: ' + this.videoLink);
    });
  }

  ngOnInit(): void {
  }

}
