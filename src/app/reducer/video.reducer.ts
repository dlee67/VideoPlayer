import {VideoAction} from '../action/video.actions';

export interface VideoState {
    videoLink: string;
};

const initialVideo: VideoState = {
    videoLink: "Nothing here"
};

export function videoReducer(state: VideoState = initialVideo, action: VideoAction): string {
    console.log("In video reducer");
    switch(action.type) {
        case "VIDEO_CHANGED": 
            console.log("action payload at: " + action.payload);
            return action.payload;
    }
}