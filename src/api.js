const API_KEY = "5372cbdfc50fac57f77bb887fa1382e0";

export const getWeatherForCity = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}