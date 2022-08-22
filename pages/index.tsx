import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Header, Navbar, Usage } from '../components'
import Article from '../components/Article'
const Home: NextPage = () => {
  return (
    <div>
    <Navbar />
    <Header />
    <Usage />
    <Article />
    </div>
  )
}

export default Home
