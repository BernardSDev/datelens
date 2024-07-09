import Button from './Button'

export default function Input({ step, setStep, onPreviousStep, onNextStep }) {
  return (
    <div className="px-10 pt-10">
      <p className="pl-20 text-xl font-semibold">Step: {step}</p>
      <div className="mx-auto flex items-center justify-center gap-5">
        <Button bgColor="#F5CB3A" size={50} onClick={onPreviousStep}>
          <span className="text-5xl text-black">-</span>
        </Button>
        <input
          className="range block h-2 w-3/4 cursor-pointer appearance-none rounded-lg bg-[#9cc9d0] accent-[#db3315] dark:bg-gray-700"
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <Button bgColor="#F5CB3A" size={50} onClick={onNextStep}>
          <span className="text-4xl text-black">+</span>
        </Button>
      </div>
    </div>
  )
}
