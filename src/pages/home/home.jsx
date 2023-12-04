import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">E-Commerce Store</h1>
          <p className="text-sm">Discover our wide range of products, curated to meet your every need.</p>
        </div>
      </header>

      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cover Image"
          className="w-full h-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">Welcome to our Store</h1>
          <Link to="/products">
            <button className="bg-teal-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-teal-600">
              Explore Products...
            </button>
          </Link>
        </div>
      </div>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <div className="container mx-auto">
          <p>&copy; 2023 E-Commerce Store</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
