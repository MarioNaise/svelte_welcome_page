import { env } from "$env/dynamic/private";

export function load() {
  const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=berlin";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": env.WEATHER_API_KEY,
      "X-RapidAPI-Host": env.WEATHER_API_HOST,
    },
  };
  const data = (async () => {
    const response = await fetch(url, options);
    return await response.json();
  })();
  return data;
}
