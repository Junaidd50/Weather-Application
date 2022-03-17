
const apiKey = 'JAVk4A96C2QPIWeuWjplp68RQyGAv1AD'

const getCityInfo = async (city)=>{
    const baseurl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;
    const cityInfo = await fetch(baseurl+query)
    const data = await cityInfo.json();
    return data[0]

}

getCityInfo('Lahore')



const getWeather = async (id)=>{
    const baseurl = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${apiKey}`
    const res = await fetch(baseurl+query)
    const data = await res.json();
    return data[0]
}

getWeather('260622')