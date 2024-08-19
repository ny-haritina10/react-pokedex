export default function() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex justify-between">
        <div>
          <p className="font-bold">Pokedex App</p>
          <p className="text-sm text-gray-400">© 2024 Pokedex. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-yellow-500">Facebook</a>
          <a href="#" className="hover:text-yellow-500">Twitter</a>
          <a href="#" className="hover:text-yellow-500">Instagram</a>
        </div>
      </div>
    </footer>
  );
}