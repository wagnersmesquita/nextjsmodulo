import { User } from "../../types/User";
import Head from "next/head";
import { Layout } from "../../components/Layout";
import api from "../../libs/api";
import styles from "../../styles/UsuariosNovo.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";


const UsuariosNovo = () => {
    const router = useRouter();

    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');

    const handleSaveForm = async () => {
        if (nameInput && emailInput) {
           
            const json = await axios.post(`/api/users`,{
                name: nameInput,
                email: emailInput
            });
            
            if (json.data.status) {
                router.push('/usuarios');
            } else {
                alert(json.data.error)
            }
        }
    }


    return (
        <Layout>
            <div>
                <Head>
                    <title>Usuários - Novo</title>
                </Head>
                <h1>Pásgina Usuários - Novo</h1>

                <input
                    className={styles.input}
                    type="text"
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    placeholder="Digite o nome do usuário"
                />

                <input
                    className={styles.input}
                    type="email"
                    value={emailInput}
                    onChange={e => setEmailInput(e.target.value)}
                    placeholder="Digite o email do usuário"
                />

                <button onClick={handleSaveForm}>Cadastrar</button>

            </div>
        </Layout>
    );
}



export default UsuariosNovo;