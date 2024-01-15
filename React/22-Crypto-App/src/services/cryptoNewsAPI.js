import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = "https://real-time-news-data.p.rapidapi.com";

const cryptoNewsAPIHeaders = {
    'X-RapidAPI-Key': '6a2d0307a0mshc840862d5a271adp1144fajsn2be971f9fdc6',
    'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
}
const params = {
    query: 'Cryptocurrency',
    lang: 'en'
}

const createRequest = (url) => ({url,headers: cryptoNewsAPIHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (bulider) => ({
        getCryptoNews: bulider.query({
            query: (newsCategorey) => createRequest(`/search?query=${newsCategorey}&?lang=en`)
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;