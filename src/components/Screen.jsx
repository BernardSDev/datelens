export default function Screen({ count }) {
  const date = new Date()
  date.setDate(date.getDate() + count)

  return (
    <div className="grid place-items-center text-[#ff6e3b]">
      <div>
        <span className="block text-2xl text-[#000]">
          {count === 0
            ? 'Today is '
            : count > 0
              ? `${count} ${count === 1 ? 'day' : 'days'} from today is `
              : `${Math.abs(count)} ${count === -1 ? 'day' : 'days'} ago was `}
        </span>
        <span className="text-6xl">{date.toDateString()}</span>
      </div>
    </div>
  )
}
