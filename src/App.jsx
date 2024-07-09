import { useState } from 'react'
import Controls from './components/Controls'
import Input from './components/Input'
import Screen from './components/Screen'
import Header from './components/Header'

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
    <div className="bg-[#e1dece]">
      <div className="mx-auto max-w-[960px]">
        <div
          className="h-dvh w-full shadow-lg"
          style={{ display: 'grid', gridTemplateRows: '15vh 40vh 25vh 20vh' }}
        >
          <Header count={count} step={step} onReset={handleReset} />
          <Screen count={count} />
          <Input
            step={step}
            setStep={setStep}
            onPreviousStep={handlePreviousStep}
            onNextStep={handleNextStep}
          />
          <Controls
            onSetCount={setCount}
            onBackward={handleBackward}
            onForward={handleForward}
          />
        </div>
      </div>
    </div>
  )
}
