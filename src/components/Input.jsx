import Button from './Button'

export default function Input({ step, setStep, onPreviousStep, onNextStep }) {
  return (
    <div className="pt-10">
      <p className="">Step: {step}</p>
      <div className="flex items-center justify-around">
        <Button bgColor="#3719e6" size={40} onClick={onPreviousStep}>
          <span className="text-white">-</span>
        </Button>
        <input
          className="range block h-2 w-3/4 cursor-pointer appearance-none rounded-lg bg-[#9cc9d0] accent-white dark:bg-gray-700"
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <Button bgColor="#d7d2e7" size={40} onClick={onNextStep}>
          <span className="text-white">+</span>
        </Button>
      </div>
    </div>
  )
}
