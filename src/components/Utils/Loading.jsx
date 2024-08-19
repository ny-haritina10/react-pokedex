export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
        <p className="mt-4 text-blue-600">Loading ...</p>
      </div>
    </div>
  );
}