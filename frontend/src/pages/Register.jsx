import bgImage from '../assets/6.png';
import { Button } from '../components/form/Button';
import { Input } from '../components/form/Input';
import { useNavigate } from 'react-router-dom';
import { createAccount } from '../utils/Account';
import { useState } from 'react';

export function Register() {
    const navigate = useNavigate();

    const [newEmail, setNewEmail] = useState('');
    const [newNome, setNewNome] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleLogin = () => navigate("/auth/login");

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            nome: newNome,
            email: newEmail,
            password: newPassword
        }

        try {
            const response = await createAccount(data)

            if (response.status === 200) {
                setTimeout(() => {
                    navigate('/auth/login')
                }, 3000)
            }
        } catch (error) {
            console.log("Erro ao fazer o cadastro: " + error);
        }
    }

    return (
        <div className="bg-cover bg-no-repeat bg-center px-7 sm:px-12 lg:px-20 min-h-screen flex justify-center items-center" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className='w-96 h-auto p-7 overflow-auto bg-[#fffcf2] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_1px_-6px_rgba(0,0,0,0.06),0px_24px_2px_-12px_rgba(0,0,0,0.06)]'>
                <h1 className='text-center text-[#8f5cd7] text-[27px] sm:text-3xl lg:text-4xl font-bold'>Cadastrar</h1>

                <form onSubmit={handleSubmit} className='inline-grid justify-items-center pt-10 space-y-9 w-full px-5'>
                    <Input
                        type="text"
                        placeholder="Nome"
                        value={newNome}
                        onChange={(e) => setNewNome(e.target.value)} />

                    <Input
                        type="email"
                        placeholder="E-mail"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)} />

                    <Input
                        type="password"
                        placeholder="Senha"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)} />

                    <Button type="submit" />
                </form>
                <p className='pt-10 text-center text-sm font-normal'>Já tem uma conta? <a onClick={handleLogin} className='text-[#8f5cd7] font-medium hover:opacity-85 cursor-pointer'>Entrar</a></p>
            </div>
        </div>
    )
}