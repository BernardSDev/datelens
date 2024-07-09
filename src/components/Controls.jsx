import { Icon } from '@iconify/react/dist/iconify.js'
import Button from './Button'

export default function Controls({ onBackward, onForward }) {
  return (
    <div className="flex items-center justify-around">
      <Button bgColor="#32803f" size={50} onClick={onBackward}>
        <Icon
          icon="fluent-mdl2:back"
          className="text-white"
          width="1.2em"
          height="1.2em"
        />
      </Button>

      <Button bgColor="#32803f" size={50} onClick={onForward}>
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
