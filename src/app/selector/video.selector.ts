import { createSelector } from '@ngrx/store';

export interface AppState {
  video: string;
}
 
export const videoLink = (state: AppState) => {
    return state; 
};
 
export const videoSelector = createSelector( 
    videoLink,
    (state: AppState) => {
        return state.video; // From the looks of things, this is what's being assigned to count$.
    }
);