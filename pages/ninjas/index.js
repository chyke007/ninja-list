import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import ninjastyle from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { 
      ninjas: data
    }
  }
}

export default function Ninjas({ ninjas }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ninjas Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <Link key={ninja.id} href={'/ninjas/'+ ninja.id}>
          <a className={ninjastyle.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}
