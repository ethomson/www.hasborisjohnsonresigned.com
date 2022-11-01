import Head from 'next/head'
import styles from '../styles/resigned.module.css'

export async function getServerSideProps({ req }) {
  return {
    props: {
      resigned: req.headers['x-resigned'] || 'false',
      leftOffice: req.headers['x-left-office'] || 'false'
    }
  }
}

export default function Index(props) {
  const resigned = props.resigned === 'true' ? 'Yes' : 'No';
  const description = props.leftOffice === 'true' ?  'and is no longer the Prime Minister 🤣' : (props.resigned === 'true' ? 'but' : 'and') + ' he is still Prime Minister 😭';

  return (
    <div className={styles.container}>
      <Head>
        <title>Has Boris Johnson resigned?</title>
        <meta name="description" content="🤡" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content="https://hasborisjohnsonresigned.com/" />
        <meta property="og:title" content="Has Boris Johnson Resigned?" />
        <meta property="og:description" content="🤡" />
        <meta property="og:image" content="https://hasborisjohnsonresigned.com/og_card.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.question}>
          Has Boris Johnson resigned?
        </div>

        <div className={styles.answer}>
          <span className={styles.yesno}>{resigned},</span>
          <span className={styles.description}>{description}.</span>
        </div>
      </main>

      <footer className={styles.footer}>
        A silly website from <a href="https://edwardthomson.com/">Edward Thomson</a>.
      </footer>
    </div>
  )
}
