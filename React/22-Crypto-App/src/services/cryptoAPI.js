import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = "https://coinranking1.p.rapidapi.com";

const cryptoHeaders = {
    'X-RapidAPI-Key': '6a2d0307a0mshc840862d5a271adp1144fajsn2be971f9fdc6',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const createRequest = (url) => ({url,headers: cryptoHeaders});

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (id) => createRequest(`/coin/${id}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId,timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest('/coin/Qwsogvtv82FCd/exchanges'),
        }),
    })
});

export const { useGetCryptosQuery , useGetCryptoDetailsQuery , useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;