export default function Button({
  bgColor,
  textColor,
  size,
  left = 4,
  top = 5,
  right = 4,
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
