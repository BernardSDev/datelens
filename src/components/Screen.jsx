export default function Screen({ count }) {
  const date = new Date()
  date.setDate(date.getDate() + count)

  return (
    <div className="mb-10 rounded-lg bg-[#6C5EF1] px-6 pt-8 font-bold text-white shadow-xl shadow-indigo-400/55">
      <span className="mb-4 block text-xl text-gray-400">
        {count === 0
          ? 'Today is '
          : count > 0
            ? `${count} ${count === 1 ? 'day' : 'days'} from today is `
            : `${Math.abs(count)} ${count === -1 ? 'day' : 'days'} ago was `}
      </span>
      <span className="font-serif text-4xl">{date.toDateString()}</span>
    </div>
  )
}
