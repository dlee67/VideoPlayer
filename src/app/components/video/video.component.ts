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

  constructor(private store: Store<{ video: string }>) {
    this.video$ = store.pipe(select('video'));
  }

  ngOnInit(): void {
  }

}
