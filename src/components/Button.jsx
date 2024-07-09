export default function Button({
  bgColor,
  textColor,
  size,
  onClick,
  children,
}) {
  return (
    <button
      className="flex items-center justify-center rounded-full"
      style={{
        backgroundColor: `${bgColor}`,
        color: `${textColor}`,
        height: `${size}px`,
        width: `${size}px`,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
