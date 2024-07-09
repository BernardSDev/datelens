import { Icon } from '@iconify/react/dist/iconify.js'

export default function Controls({ step, onSetCount, onSetStep, onSubStep }) {
  return (
    <div className="bg-yellow-500 p-2">
      <div className="flex justify-between p-4">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff]"
          onClick={onSetCount}
        >
          <Icon icon="fluent-mdl2:back" width="1.2em" height="1.2em" />
        </button>

        <div className="bg-red-5000 flex w-48 items-center justify-between">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3dacbd] text-2xl"
            onClick={onSubStep}
          >
            <span className="text-gray-200">-</span>
          </button>
          <span className="block text-2xl text-[#ddac86]">Step: {step}</span>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3dacbd] text-2xl"
            onClick={onSetStep}
          >
            <span className="text-gray-200">+</span>
          </button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff]"
          onClick={onSetCount}
        >
          <Icon icon="fluent-mdl2:forward" width="1.2em" height="1.2em" />
        </button>
      </div>
    </div>
  )
}
