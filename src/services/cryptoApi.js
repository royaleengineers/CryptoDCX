import{createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '62d9d782e1msh9b5dce701e4a314p11b3dejsn83eb392707f4'
}
const baseUrl='https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({url ,headers: cryptoApiHeaders})
 export const cryptoApi =createApi({
     reducerPath: 'cryptoApi',
     baseQuery: fetchBaseQuery({baseUrl}),
     endpoints: (builder) =>({
         getCryptos: builder.query({
             query: (count) => createRequest(`/coins?limit=${count}`),
         })
     })
 });

 export const{
     useGetCryptosQuery,
 } = cryptoApi;

// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/stats',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '62d9d782e1msh9b5dce701e4a314p11b3dejsn83eb392707f4'
//     }
//   };