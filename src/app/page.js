export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[70vh] flex items-center justify-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center animate-fade-in">
          <h1 className="text-5xl font-bold text-cyan-400 mb-4">Welcome to Meal Haven</h1>
          <p className="text-lg text-gray-300 mb-6">Discover delicious recipes from around the world!</p>
          <a href="#recipes" className="bg-cyan-500 text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:bg-cyan-600 transition-colors duration-300">
            Explore Recipes
          </a>
        </div>
      </section>

      {/* Popular Recipes Section */}
      <section id="recipes" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">Popular Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Recipe Cards */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up"
            >
              <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Recipe {item}</h3>
              <p className="text-gray-300 mb-4">A short description of the recipe goes here.</p>
              <a
                href={`/recipe/${item}`}
                className="block text-center bg-cyan-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors duration-300"
              >
                View Recipe
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-800">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">About Us</h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
          At Meal Haven, we are passionate about bringing you the best recipes from around the world. Whether you're a seasoned chef or just starting out, our collection of recipes is designed to inspire and delight.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">Contact Us</h2>
        <form className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-500 text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:bg-cyan-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}