export default function Button({ children, onClick }) {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff]"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
