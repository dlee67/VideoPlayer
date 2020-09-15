import { Component, OnInit } from '@angular/core';

import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
  }

  buttonClicked() {
    this.videoService.sendMessage('Eeeeeaasy, right?');
  }
}
