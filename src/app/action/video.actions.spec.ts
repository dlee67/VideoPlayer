import * as fromVideo from './video.actions';

describe('loadVideos', () => {
  it('should return an action', () => {
    expect(fromVideo.loadVideos().type).toBe('[Video] Load Videos');
  });
});
