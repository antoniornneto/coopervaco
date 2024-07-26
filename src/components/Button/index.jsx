export default function Button({
  type = "button",
  children,
  onClick,
  backgroundColor = "primary",
  textColor = "white",
  roundedButton = "xl",
  paddingX = "2",
  paddingY = "4",
  hover = "primary/85",
  className,
}) {
  return (
    <button
      className={`bg-${backgroundColor} rounded-${roundedButton} text-${textColor} px-${paddingX} py-${paddingY} ${className} hover:bg-${hover}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
