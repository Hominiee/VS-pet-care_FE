import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const AppApi = createApi({
  reducerPath: "AppApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/',
    prepareHeaders: (headers) => {
        headers.set("Access-Control-Allow-Origin", "*");
        return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});

export default AppApi;