import Reset from './Reset'

function Header({ count, step, onReset }) {
  return (
    <header className="mb-10 flex items-center justify-between">
      <h1 className="text-4xl font-semibold text-black">
        <span>date</span>
        <span className="text-[#40d1d6]">Lens</span>
      </h1>
      <nav>
        {count !== 0 || step !== 1 ? <Reset onReset={onReset} /> : null}
      </nav>
    </header>
  )
}

export default Header
