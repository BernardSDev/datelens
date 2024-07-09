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
    <div className="h-screen w-full bg-[#edece6]">
      <div className="mx-auto max-w-[960px] p-4">
        <header className="mb-10 flex justify-between">
          <h1 className="text-4xl font-semibold text-black">
            <span>date</span>
            <span className="text-[#40d1d6]">Lens</span>
          </h1>
          <nav>
            {count !== 0 || step !== 1 ? <Reset onReset={handleReset} /> : null}
          </nav>
        </header>
        <main
          style={{ display: 'grid', gridTemplateRows: '250px 200px 100px' }}
        >
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
        </main>
      </div>
    </div>
  )
}
