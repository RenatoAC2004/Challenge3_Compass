import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithFacebook, doSignInWithGoogle } from '../../firebase/auth';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await doSignInWithEmailAndPassword(email, password);
      navigate('/');
    } catch (error) {
      setError('Falha ao fazer login. Verifique seu e-mail e senha.');
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      await doSignInWithGoogle();
      navigate('/');
    } catch (error) {
      setError('Falha ao fazer login com o Google.');
    }

    setLoading(false);
  };

  const handleFacebookLogin = async () => {
    setError('');
    setLoading(true);

    try {
      await doSignInWithFacebook();
      navigate('/');
    } catch (error) {
      setError('Falha ao fazer login com o Google.');
    }

    setLoading(false);
  };

  return (
    <div className='h-screen pt-[6.25rem]'>
      <h2>Login</h2>
      <form onSubmit={handleEmailLogin}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Insira seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar com E-mail/Senha'}
        </button>
      </form>

      <div>
        <button onClick={handleGoogleLogin} disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar com Google'}
        </button>
        <button onClick={handleFacebookLogin} disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar com Facebook'}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
