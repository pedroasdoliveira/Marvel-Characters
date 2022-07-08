import api from "./api";

export const findAllService = {
  allCharacters: () =>
    api.get("/character")
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => console.error(error))
};
