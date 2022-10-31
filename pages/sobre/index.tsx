import { useState } from "react";
import Link from "next/link";
import { MyButton } from "../../components/myButton";
import styles from '../../styles/Sobre.module.css';
import { Layout } from "../../components/Layout";
import Head from "next/head";

const Sobre = () => {
    const [contador, setContador] = useState(0);
    const handleContadorBtn = () => {
        setContador(contador + 1);
    }

    return (
        <Layout>
            <div>
                <Head>
                    <title>Sobre</title>
                </Head>
                <h1 className={styles.sobreTitle}>Página Sobre ({contador})</h1>
                <ul>
                    <li><Link href="/sobre/wagner">Wagner</Link></li>
                    <li><a href="/sobre/aline">Aline</a></li>
                    <li><a href="/sobre/abraao">Abraão</a></li>
                    <li><a href="/sobre/annelise">Annelise</a></li>
                </ul>

                <MyButton label="Aumentar" onClick={handleContadorBtn} />
            </div>
        </Layout>
    )
}

export default Sobre;