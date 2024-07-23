export default function Button({
  type,
  children,
  color = "bg-primary",
  style,
  textColor = "white",
}) {
  return (
    <button
      className={`h-14 text-${textColor} rounded-lg hover:bg-primary/85 ${style} ${color}`}
      type={type}
    >
      {children}
    </button>
  );
}
