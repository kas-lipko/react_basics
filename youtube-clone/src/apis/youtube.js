import axios from 'axios';

const KEY = 'AIzaSyB_AlM65ZQfMi4nf3dzoIXFafByD2uieBk';

// 'https://www.googleapis.com/youtube/v3/search'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
