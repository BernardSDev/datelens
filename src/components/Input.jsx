export default function Input({ step, onSetStep }) {
  return (
    <div className="mt-16 bg-indigo-600">
      <input
        className="range h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#9cc9d0] pr-6 accent-white dark:bg-gray-700"
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={onSetStep}
      />
    </div>
  )
}
