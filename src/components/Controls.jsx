import { Icon } from '@iconify/react/dist/iconify.js'
import Button from './Button'

export default function Controls({
  step,
  onBackward,
  onForward,
  onPreviousStep,
  onNextStep,
}) {
  return (
    <div className="mx-auto w-5/6">
      <div
        className=""
        style={{
          display: 'grid',
          gridTemplateColumns: '50 300px 50',
          placeItems: 'center',
        }}
      >
        <Button bgColor="#32803f" size={50} onClick={onBackward}>
          <Icon
            icon="fluent-mdl2:back"
            className="text-white"
            width="1.2em"
            height="1.2em"
          />
        </Button>

        <div className="flex w-48 items-center justify-between">
          <Button bgColor="#df1f1f" size={40} onClick={onPreviousStep}>
            <span className="text-white">-</span>
          </Button>
          <span className="block text-2xl text-[#191a19]">Step: {step}</span>
          <Button bgColor="#df1f1f" size={40} onClick={onNextStep}>
            <span className="text-white">+</span>
          </Button>
        </div>

        <Button bgColor="#32803f" size={50} onClick={onForward}>
          <Icon
            icon="fluent-mdl2:forward"
            width="1.2em"
            height="1.2em"
            className="text-white"
          />
        </Button>
      </div>
    </div>
  )
}
