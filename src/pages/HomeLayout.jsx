import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section className='page'>
        <Outlet />
      </section>
    </>
  )
}
export default HomeLayout
