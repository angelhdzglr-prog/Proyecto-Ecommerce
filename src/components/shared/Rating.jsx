export default function Rating({ value = 0, max = 5 }) {
  const rounded = Math.round(value);

  return (
    <div className="text-base text-yellow-500 flex items-center gap-1">
      {'★'.repeat(rounded)}
      {'☆'.repeat(max - rounded)}

      <span className="text-gray-600 text-sm">({value.toFixed(1)})</span>
    </div>
  );
}