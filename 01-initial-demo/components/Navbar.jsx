import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

const buildNavbar = () => {
 return  menuItems.map(({ text, href}) => (
    <ActiveLink key={href} text={text} href={href}></ActiveLink>
   ))
}

export const Navbar = () => {

  return (
    <nav className={styles['menu-container']}>
      <>
        {buildNavbar()}
      </>
    </nav>
  )
}
