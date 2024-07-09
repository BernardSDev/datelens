export default function Button({
  bgColor,
  textColor,
  size,
  left = 18,
  top = 6,
  right = 18,
  bottom = 16,
  onClick,
  children,
}) {
  return (
    <button
      className="flex items-center justify-center rounded-full px-6 py-2"
      style={{
        backgroundColor: `${bgColor}`,
        color: `${textColor}`,
        height: `${size}px`,
        width: `${size}px`,
        paddingLeft: `${left}px`,
        paddingTop: `${top}px`,
        paddingRight: `${right}px`,
        paddingBottom: `${bottom}px`,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
