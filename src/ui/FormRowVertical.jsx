export default function FormRowVertical({ label, error, children }) {
  return (
      <div className="flex flex-col gap-2 py-2 sm:py-3">
          {label && <label htmlFor={children.props.id} className="font-medium">{label}</label>}
          {children}
          {error && <span className="text-sm text-red-700">{error}</span>}
      </div>
  );
}
  