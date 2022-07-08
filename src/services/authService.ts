import api from "./api";

interface UserLogin {
  email: string;
  password: string;
}

const loginService = {
  login: (values: UserLogin) => {
    return api.post('/auth/login', values)
    .then((response: any) => {
        return response
    })
    .catch((error: any) => console.log('Erro na chamada:', error))
  },
};

export {loginService}