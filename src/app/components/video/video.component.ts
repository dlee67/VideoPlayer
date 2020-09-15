import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  messages: any[] = [];
  subscription: Subscription;

  constructor(private videoService: VideoService) {
      // subscribe to home component messages
      this.subscription = this.videoService.getMessage().subscribe(message => {
        if (message) {
          alert(message.text)
          this.messages.push(message);
        } else {
          // clear messages when empty message received
          this.messages = [];
        }
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
