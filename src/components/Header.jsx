import Logo from './Logo'
import Navbar from './Navbar'

function Header({ count, step, onReset }) {
  return (
    <header className="flex justify-between pt-6">
      <Logo />
      <Navbar count={count} step={step} onReset={onReset} />
    </header>
  )
}

export default Header
