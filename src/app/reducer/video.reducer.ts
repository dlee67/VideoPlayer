import {Action} from '@ngrx/store';
import {VideoAction} from '../action/video.actions';

export interface VideoState {
    videoLink: string;
};

const initialVideo: VideoState = {
    videoLink: "Nothing here"
};

export function videoReducer(state: VideoState = initialVideo, action: VideoAction): VideoState {
    console.log("In video reducer");
    switch(action.type) {
        case "VIDEO_CHANGED": {
            return action.payload;
        }
    }
}