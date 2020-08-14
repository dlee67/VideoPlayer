import {Action} from '@ngrx/store';

export function videoReducer(state, action: Action) {
    console.log("In video reducer");
    switch(action.type) {
        case "VIDEO_CHANGED":
            console.log("In video changed");
            return "from video reducer";
    }
}