import { Icon } from '@iconify/react/dist/iconify.js'
import Button from './Button'

export default function Controls({ step, onSetCount, onSetStep, onSubStep }) {
  return (
    <div className="">
      <div className="flex justify-between p-4">
        <Button onClick={onSetCount}>
          <Icon icon="fluent-mdl2:back" width="1.2em" height="1.2em" />
        </Button>

        <div className="bg-red-5000 flex w-48 items-center justify-between">
          <Button onClick={onSubStep}>
            <span className="text-black">-</span>
          </Button>
          <span className="block text-2xl text-[#ddac86]">Step: {step}</span>
          <Button onClick={onSetStep}>
            <span className="text-black">+</span>
          </Button>
        </div>

        <Button onClick={onSetCount}>
          <Icon icon="fluent-mdl2:forward" width="1.2em" height="1.2em" />
        </Button>
      </div>
    </div>
  )
}
