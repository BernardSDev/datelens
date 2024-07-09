import Reset from './Reset'

function Header({ count, step, onReset }) {
  return (
    <header className="mb-10 flex items-center justify-between px-10">
      <h1 className="text-4xl font-semibold text-[#000]">
        <span>date</span>
        <span className="font-extrabold text-[#e94438]">Lens</span>
      </h1>
      <nav>
        {count !== 0 || step !== 1 ? <Reset onReset={onReset} /> : null}
      </nav>
    </header>
  )
}

export default Header
