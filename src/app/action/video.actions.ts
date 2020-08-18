import { Action } from '@ngrx/store'
import { createAction, props } from '@ngrx/store';

export class VideoAction implements Action {
  type: string;
  payload: {
    videoLink: string,
  }
}

export class LoadVideo implements Action {
  readonly type = "LOAD_VIDEO";

  constructor(readonly payload: any) {

  }
}

export type VideoActions = LoadVideo;