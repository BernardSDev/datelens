export default function Screen({ count }) {
  const date = new Date()
  date.setDate(date.getDate() + count)

  return (
    <div className="mx-16 my-8 grid place-items-center rounded-lg bg-[#e7e7e2] font-bold text-violet-600">
      <div>
        <span className="block text-2xl text-[#9EC64B]">
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
