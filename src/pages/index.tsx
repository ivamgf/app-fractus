import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import HeaderInit from '../../lib/components/nav/headerInit'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const Home: NextPage = () => {

    const router = useRouter()

    function redirect() {
        setTimeout(() => {
            router.push('/views/accept/')
        }, 3000)
    }
    
    redirect()

    return (
        <div className={styles.container}>
            <Head>
                <title>Fractus App</title>
                <meta
                    name="description"
                    content="Objeto de aprendizagem para ensino de frações"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeaderInit />

            <main className={styles.main}>
                <div className={styles.logo}>
                    <Image
                        src="/images/logo-fractus-cor.svg"
                        alt="Logo Fractus"
                        width={500}
                        height={150}
                    />
                </div>              

                <p className={styles.description}>
                    Aprendendo frações com Fractus!
                </p>

                <div className={styles.grid}>
                    <div className={styles.loader}></div>                                                         
                </div>
                <p>
                    Carregando ...
                </p><br /><br />
                <p>
                    App Versão 1.0.0
                </p> 
            </main>

            <footer className={styles.footer}>
                
                    Powered by{' '}
                    
                    <span className={styles.logo}>
                        <Image
                            src="/images/logo-orkneytech.svg"
                            alt="Orkneytech Logo"
                            width={72}
                            height={16}
                        />                          
                    </span>
               
            </footer>
        </div>
    )
}

export default Home
