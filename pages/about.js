import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <>
    <Head>
      <title>Ninja List | About</title>
      <meta name="keywords" content="ninjas"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <h1>About page</h1>
      <p className={styles.text}> Consequat do voluptate anim cupidatat tempor. Dolore ullamco tempor occaecat minim labore eiusmod. Sunt elit eu esse eiusmod ad adipisicing velit sint culpa nulla pariatur proident pariatur elit. In incididunt elit ad esse deserunt.</p> 
      <p className={styles.text}>Eu id laborum exercitation dolor ullamco. Mollit non ex qui occaecat. Do enim sit sunt in mollit mollit ad amet duis tempor tempor. Nulla do laboris sit id id reprehenderit velit velit dolore. Deserunt deserunt elit officia duis dolore elit excepteur nostrud ut exercitation sit.
Proident ad esse non mollit laboris consequat nostrud. Do laboris magna occaecat elit dolor officia eu deserunt cillum cupidatat labore ullamco. Deserunt esse dolor labore Lorem reprehenderit do tempor consectetur consequat enim. Aliqua irure elit nostrud proident aute.</p>
      
    </>
  )
}
