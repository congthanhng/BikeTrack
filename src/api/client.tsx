import { serverUrl } from "./constantServer"

  export const getWeatherFromApi = () => {
    return fetch(serverUrl)
      .then((response) => response.json())
      .then((json) => {
          // console.log(json)
        return json;
      })
      .catch((error) => {
        console.log("catch Erorr");
        throw new Error(error)
        // console.error(error);
      });
  };