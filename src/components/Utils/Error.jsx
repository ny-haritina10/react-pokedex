export default function Error({ message }) {
  return (
    <div className="text-center py-10">
      <p className="text-red-600">Error: {message}</p>
    </div>
  );
}