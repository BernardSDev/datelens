export default function Button({ children, onClick, bgColor }) {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#124047]"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
