import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import { useStoreListener } from '../utils/firebase'

export default function Home() {
  // const store = useStoreListener();
  // const users = fetch(("/api  ")).then((res)=>res.json())
  //                                 .then(res=>console.log("res",res)).catch(err=>console.log("err",err))
  return (
    <div >
      <Head>
        <title>Oral Sağlık</title>
        <meta name="description" content="Generated by Burak" />
        <link rel="icon" href="/dental.png" />
      </Head>
      <Layout>

        <main className="main">
          
         
        </main>

        <footer className="footer">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span  className="logo" >
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </Layout>

    </div>
  )
}
