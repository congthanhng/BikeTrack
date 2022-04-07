import { serverUrl } from "./constantServer"

  export const getMoviesFromApi = () => {
    return fetch(serverUrl)
      .then((response) => response.json())
      .then((json) => {
          console.log(json)
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };