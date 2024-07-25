export default function Button({
  type,
  children,
  color = "bg-primary",
  style,
}) {
  return (
    <button
      className={`h-14 rounded-lg hover:bg-primary/85 ${style} ${color}`}
      type={type}
    >
      {children}
    </button>
  );
}
