import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Header, Navbar } from '../components'
const Home: NextPage = () => {
  return (
    <div>
    <Navbar />
    <Header />
    </div>
  )
}

export default Home
