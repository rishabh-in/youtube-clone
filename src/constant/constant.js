import { API_KEY } from "../appConfig"

export const YOUTUBE_VIDEO_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=${API_KEY}`
export const BASE_URL = "https://www.googleapis.com/youtube/v3/videos"
