export default function Header() {

  return(
    <header className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">

      <div className="text-3xl font-bold">Pokedex</div>
        <nav className="flex space-x-6">
          <a href="/" className="hover:text-yellow-500">Home</a>
          <a href="#" className="hover:text-yellow-500">About</a>
          <a href="#" className="hover:text-yellow-500">Features</a>
          <a href="#" className="hover:text-yellow-500">Contact</a>
        </nav>
      <div>
        <input type="text" placeholder="Search Pokémon" className="p-2 rounded-md text-black" />
      </div>
  
    </header>
  );
}