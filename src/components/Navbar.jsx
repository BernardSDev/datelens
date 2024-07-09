import Reset from './Reset'

export default function Navbar({ count, step, onReset }) {
  return (
    <nav>{count !== 0 || step !== 1 ? <Reset onReset={onReset} /> : null}</nav>
  )
}
