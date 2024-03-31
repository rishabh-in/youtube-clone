import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { API_KEY } from '../../../appConfig';

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({baseUrl: "https://www.googleapis.com/youtube/v3/"}),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => `videos?part=snippet&chart=mostPopular&maxResults=10&key=${API_KEY}`,
    })
  })
})

export const {useGetVideosQuery} = apiSlice;

export default apiSlice;