import Head from 'next/head';
// import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to simple project Next.js with <a>Bootstrap 5!</a>
                </h1>

                <p className={styles.description}>
                    Start page{' '}
                    <code className={styles.code}>
                        <a href="/">pages/index.js</a>
                    </code>
                </p>

                <p className={styles.description}>
                    Api router{' '}
                    <code className={styles.code}>
                        <a href="/api/hello">api/hello.js</a>
                    </code>
                </p>

                <p className={styles.description}>
                    First page in bootstrap {' '}
                    <code className={styles.code}>
                        <a href="/firstPage">pages/firstPage.js</a>
                    </code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Next.js &rarr;</h2>
                        <p>My favorite framework.</p>
                    </a>

                    <a href="https://getbootstrap.com/" className={styles.card}>
                        <h2>Bootstrap &rarr;</h2>
                        <p>Build fast, responsive sites with Bootstrap!</p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a href="http://hml-intelligence.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Powered by{' '}
                    <span className={styles.logo}>HML-Intelligence</span>
                </a>
            </footer>
        </div>
    )
}
