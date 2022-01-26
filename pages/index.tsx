import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const Home: NextPage = () => {

    const router = useRouter()

    function redirect() {
        setTimeout(() => {
            router.push('/views/home')
        }, 3000)
    }
    
    redirect()

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
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

            <main className={styles.main}>
            <div>
                <Image
                    src="/images/logo-fractus-cor.png"
                    alt="Logo Fractus"
                    width={500}
                    height={150}
                />
            </div>              

                <p className={styles.description}>
                    Aprendendo frações comFractus!
                </p>

                <div className={styles.grid}>
                    <div className={styles.loader}></div>                                                         
                </div>
                <p>
                    App Versão 1.0.0.
                </p> 
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    )
}

export default Home