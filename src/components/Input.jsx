import Button from './Button'

export default function Input({ step, setStep, onPreviousStep, onNextStep }) {
  return (
    <div className="mt-4">
      <p className="pl-16 text-xl font-semibold text-[#5f5f5f]">Step: {step}</p>
      <div className="flex items-center justify-between gap-2">
        <Button bgColor="#fb923c" size={50} onClick={onPreviousStep}>
          <span className="text-3xl text-white">-</span>
        </Button>
        <input
          className="range block h-2 w-3/4 cursor-pointer appearance-none rounded-full bg-[#4AC3F6] accent-orange-400 shadow-xl shadow-indigo-400/55"
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <Button bgColor="#fb923c" size={50} onClick={onNextStep}>
          <span className="text-2xl text-white">+</span>
        </Button>
      </div>
    </div>
  )
}
