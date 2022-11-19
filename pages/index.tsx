import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pavid</title>
                <meta name="description" content="If you brush me till I pass out again I'm going to eat you" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Image src="/images/pavid_icon.jpg" alt="Pavid Icon" width={200} height={200} />
                <h1 className={styles.title}>
                    Pavid
                </h1>

                <p className={styles.description}>
                    <b>Creature:</b> Werewolf (Fire Type)<br/>
                    <b>Responds To:</b> Pavid, Alex, Null<br/>
                    <b>Pronouns:</b> They/Them<br/>
                    <b>Sexuality:</b> Panromantic Asexual<br/>
                    <b>Gender:</b> Transgender Non-Binary<br/>
                    <b>Found In:</b> Pacific Northwest<br/>
                </p>
            </main>
        </div>
    )
}
