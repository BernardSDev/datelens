import { Icon } from '@iconify/react/dist/iconify.js'
import Button from './Button'

export default function Controls({ onBackward, onForward }) {
  return (
    <div className="flex items-center justify-between rounded-tl-lg rounded-tr-lg">
      <Button
        bgColor="#6C5EF1"
        left={20}
        right={20}
        top={7}
        bottom={7}
        onClick={onBackward}
      >
        <Icon
          icon="fluent-mdl2:back"
          width="1.2em"
          height="1.2em"
          className="text-white"
        />
        <span className="pl-3 text-lg font-semibold text-white">Backward</span>
      </Button>

      <Button
        bgColor="#6C5EF1"
        left={20}
        right={20}
        top={7}
        bottom={7}
        onClick={onForward}
      >
        <span className="pr-3 text-lg font-semibold text-white">Forward</span>
        <Icon
          icon="fluent-mdl2:forward"
          width="1.2em"
          height="1.2em"
          className="text-white"
        />
      </Button>
    </div>
  )
}
