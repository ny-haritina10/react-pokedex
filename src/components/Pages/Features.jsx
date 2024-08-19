export default function Features() {
  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-600 text-center">Features</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-500">Search Pokémon</h3>
            <p className="text-gray-700 mt-2">Find detailed information about any Pokémon in the database.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-500">View Stats</h3>
            <p className="text-gray-700 mt-2">Analyze the stats and abilities of each Pokémon.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-500">Build Teams</h3>
            <p className="text-gray-700 mt-2">Create and manage your Pokémon battle teams.</p>
          </div>
        </div>
      </div>
      
    </section>
  );
}