import { Icon } from '@iconify/react/dist/iconify.js'
import Button from './Button'

export default function Controls({ onBackward, onForward }) {
  return (
    <div className="flex items-center justify-around rounded-tl-lg rounded-tr-lg bg-violet-600">
      <Button
        bgColor="#9EC64B"
        left={30}
        right={30}
        top={12}
        bottom={12}
        onClick={onBackward}
      >
        <Icon
          icon="fluent-mdl2:back"
          width="1.2em"
          height="1.2em"
          className="text-black"
        />
        <span className="pl-2 text-xl font-bold">Backward</span>
      </Button>

      <Button
        bgColor="#9EC64B"
        onClick={onForward}
        left={30}
        right={30}
        top={12}
        bottom={12}
      >
        <span className="pr-2 text-xl font-bold">Forward</span>
        <Icon
          icon="fluent-mdl2:forward"
          width="1.2em"
          height="1.2em"
          className="text-black"
        />
      </Button>
    </div>
  )
}
