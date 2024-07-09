import { useState } from 'react'
import Controls from './components/Controls'
import Input from './components/Input'
import Screen from './components/Screen'
import Reset from './components/Reset'

export default function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  function handleSubStep() {
    if (step < 2) return
    setStep((step) => step - 1)
  }

  function handleReset() {
    setCount(0)
    setStep(1)
  }

  function handleSetStep(e) {
    setStep(Number(e.target.value))
  }

  function handleSetCount() {
    setCount((count) => count + step)
  }

  return (
    <div className="relative mx-auto grid h-screen w-full max-w-[786px] grid-cols-1 grid-rows-3 gap-4 rounded-lg bg-[#243C58] px-10 py-12">
      <Screen count={count} onSetCount={handleSetCount} />
      <Input step={step} onSetStep={handleSetStep} />
      <Controls
        step={step}
        onSetCount={handleSetCount}
        onSetStep={handleSetStep}
        onSubStep={handleSubStep}
      />
      {count !== 0 || step !== 1 ? <Reset onReset={handleReset} /> : null}
    </div>
  )
}
