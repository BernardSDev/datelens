import { Icon } from '@iconify/react/dist/iconify.js'

export default function Reset({ onReset }) {
  return (
    <div className="flex rounded-full bg-[#124047] p-1">
      <button onClick={onReset}>
        <Icon
          className="text-2xl text-white"
          icon="ri:reset-right-line"
          width="1.2em"
          height="1.2em"
        />
      </button>
    </div>
  )
}
