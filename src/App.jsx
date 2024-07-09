import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleSubStep() {
    if (step < 2) return;
    setStep((step) => step - 1);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="relative mx-auto grid h-screen w-full max-w-[786px] grid-cols-1 grid-rows-3 gap-4 rounded-lg bg-[#243C58] px-10 py-12">
      <div className="mb-24 mt-10 font-serif text-6xl font-semibold text-[#ddac86]">
        <span className="mr-4 text-3xl text-[#457495] sm:mb-2 sm:block">
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} ${count === 1 ? "day" : "days"} from today is `
              : `${Math.abs(count)} ${count === -1 ? "day" : "days"} ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>

      <div className="mt-16">
        <input
          className="range h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#9cc9d0] pr-6 accent-white dark:bg-gray-700"
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>

      <div className="bg-yellow-5000 p-2">
        <div className="bg-fuchsia-6000 flex justify-between p-4">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff]"
            onClick={() => setCount((count) => count - step)}
          >
            <Icon icon="fluent-mdl2:back" width="1.2em" height="1.2em" />
          </button>

          <div className="bg-red-5000 flex w-48 items-center justify-between">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3dacbd] text-2xl"
              onClick={handleSubStep}
            >
              <span className="text-gray-200">-</span>
            </button>
            <span className="block text-2xl text-[#ddac86]">Step: {step}</span>
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3dacbd] text-2xl"
              onClick={() => setStep((step) => step + 1)}
            >
              <span className="text-gray-200">+</span>
            </button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff]"
            onClick={() => setCount((count) => count + step)}
          >
            <Icon icon="fluent-mdl2:forward" width="1.2em" height="1.2em" />
          </button>
        </div>
      </div>

      {count !== 0 || step !== 1 ? (
        <div className="absolute right-6 top-6 flex rounded-full bg-[#124047] p-1">
          <button onClick={handleReset}>
            <Icon
              className="text-2xl text-white"
              icon="ri:reset-right-line"
              width="1.2em"
              height="1.2em"
            />
          </button>
        </div>
      ) : null}
    </div>
  );
}
