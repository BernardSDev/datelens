import { useState } from 'react'
import Controls from './components/Controls'
import Input from './components/Input'
import Screen from './components/Screen'
import Reset from './components/Reset'

export default function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  function handleBackward() {
    setCount((count) => count - step)
  }

  function handleForward() {
    setCount((count) => count + step)
  }

  function handlePreviousStep() {
    if (step < 2) return
    setStep((step) => step - 1)
  }
  function handleNextStep() {
    setStep((step) => step + 1)
  }
  function handleReset() {
    setCount(0)
    setStep(1)
  }

  return (
    <div className="relative grid h-screen w-full grid-cols-1 grid-rows-3 gap-4 bg-[#243C58]">
      <div className="relative mx-auto max-w-[786px]">
        <Screen count={count} />
        <Input step={step} setStep={setStep} />
        <Controls
          step={step}
          onSetCount={setCount}
          onBackward={handleBackward}
          onForward={handleForward}
          onPreviousStep={handlePreviousStep}
          onNextStep={handleNextStep}
        />
        {count !== 0 || step !== 1 ? <Reset onReset={handleReset} /> : null}
      </div>
    </div>
  )
}
