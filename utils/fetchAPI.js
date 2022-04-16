import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async(url) =>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'f5789981f8mshc65b7995e3eba38p15357ajsn1852d735371a'
          }
    })

    return data;
}