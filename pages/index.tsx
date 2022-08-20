import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Header, Navbar, Usage } from '../components'
const Home: NextPage = () => {
  return (
    <div>
    <Navbar />
    <Header />
    <Usage />
    </div>
  )
}

export default Home
