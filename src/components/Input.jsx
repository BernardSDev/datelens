export default function Input({ step, setStep }) {
  return (
    <div className="grid place-items-center">
      <input
        className="range mx-auto block h-2 w-5/6 cursor-pointer appearance-none rounded-lg bg-[#9cc9d0] pr-6 accent-white dark:bg-gray-700"
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
    </div>
  )
}
