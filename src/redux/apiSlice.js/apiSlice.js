import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({baseUrl: "https://www.googleapis.com/youtube/v3/"}),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyDgXyUKnbs4zve2OY_bDzPINHaW0jCsEAM",
    })
  })
})

export const {useGetVideosQuery} = apiSlice;

export default apiSlice;