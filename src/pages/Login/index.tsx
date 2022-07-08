import axios from 'axios';
import React, { useState } from 'react';
import './style.css'
import { loginService } from '../../services/authService'
import { useNavigate } from 'react-router-dom';

interface UserLogin {
  email: string;
  password: string
}

const Login = () => {
  const navigate = useNavigate()

  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: UserLogin) => (
      {...values, [e.target.name]: e.target.value}
    ))
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response = await loginService.login(values)
    const jwt = response.data.token

    if (jwt) {
      localStorage.setItem('jwt', jwt);
      navigate('/');
    }
    console.log(response.data);
  }

  return (
    <section className="login-container">
      <div className="login-card">
        <h2>Entrar</h2>

        <form onSubmit={handleSubmit} className="form-login">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Digite o seu E-mail"
            onChange={handleChangesValues}
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite a sua senha"
            onChange={handleChangesValues}
          />

          <button>Cadastrar</button>
        </form>
        <p>Não tem conta? Cadastre-se aqui!</p>
      </div>
    </section>
  );
};

export default Login;
