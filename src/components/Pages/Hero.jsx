export default function Hero() {
  return (
    <section className="bg-white text-center py-16">

      <h1 className="text-5xl font-extrabold text-blue-600">Catch 'Em All!</h1>
      <p className="text-xl text-gray-700 mt-4">Explore the world of Pokémon and build your ultimate Pokedex.</p>
      <button className="mt-8 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300">
        Get Started
      </button>
      <div className="mt-10">
        <img src="./src/assets/img/banner-2.jpg" alt="Pikachu" className="mx-auto w-1/2" />
      </div>
      
    </section>
  );
}