import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Header from '../components/header';
import CardSocialComponent from '../components/cardSocialComponent';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Manual dos Devs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main className={styles.main}>
        <CardSocialComponent />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/gabrielsoaresgsm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by <strong>Gabriel Mielo</strong>
        </a>
      </footer>
    </div>
  );
}
