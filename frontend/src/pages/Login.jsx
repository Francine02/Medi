import bgImage from '../assets/6.png';
import { Button } from '../components/form/Button';
import { Input } from '../components/form/Input';
import { useNavigate } from 'react-router-dom';
import { loginAccount, validateForm } from '../utils/Account';
import { useState } from 'react';

export function Login() {
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => navigate("/auth/register");

    const handleLogin = async (e) => {
        e.preventDefault()

        const error = validateForm({email, password})
        if (error) {
            setErrorMessage(error)
            return
        }

        const data = { email, password }

        try {
            const response = await loginAccount(data)

            if (response.status === 200) {
                navigate('/medicines')
            }
        } catch (error) {
            console.log("Erro ao fazer o login: " + error)
        }
    }

    return (
        <div className="bg-cover bg-no-repeat bg-center px-7 sm:px-12 lg:px-20 min-h-screen flex justify-center items-center" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className='w-96 h-auto p-7 overflow-auto bg-[#fffcf2] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_1px_-6px_rgba(0,0,0,0.06),0px_24px_2px_-12px_rgba(0,0,0,0.06)]'>
                <h1 className='text-center text-[#8f5cd7] text-[27px] sm:text-3xl lg:text-4xl font-bold'>Entrar</h1>

                <form onSubmit={handleLogin} className='inline-grid justify-items-center pt-10 space-y-9 w-full px-5'>
                    <Input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <Input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                    {errorMessage && (
                        <div className="text-red-500 text-sm">{errorMessage}</div>
                    )}


                    <Button type="submit" />
                </form>
                <p className='pt-10 text-center text-sm font-normal'>Não tem uma conta? <a onClick={handleRegister} className='text-[#8f5cd7] font-medium hover:opacity-85 cursor-pointer'>Cadastre-se</a></p>
            </div>
        </div>
    )
}