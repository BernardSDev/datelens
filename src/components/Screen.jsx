export default function Screen({ count }) {
  const date = new Date()
  date.setDate(date.getDate() + count)

  return (
    <div className="mb-24 mt-10 font-serif text-6xl font-semibold text-[#ddac86]">
      <span className="mr-4 text-3xl text-[#457495] sm:mb-2 sm:block">
        {count === 0
          ? 'Today is '
          : count > 0
            ? `${count} ${count === 1 ? 'day' : 'days'} from today is `
            : `${Math.abs(count)} ${count === -1 ? 'day' : 'days'} ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  )
}
