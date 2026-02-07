import { Link } from "react-router-dom";

export default function Cars() {
  const cars = [
    { name: "Toyota Camry 2020", image: "/cars/Car-1.jpg" },
    { name: "Honda Accord 2019", image: "/cars/car-2.jpg" },
    { name: "Hyundai Elantra 2021", image: "/cars/car-3.jpg" },
    { name: "Ford Explorer 2018", image: "/cars/car-4.jpg" },
    { name: "Chevrolet Malibu 2020", image: "/cars/car-5.jpg" },
    { name: "Kia Sportage 2019", image: "/cars/car-6.jpg" },
  ];

  return (
    <section className="pt-32 pb-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* BACK BUTTON - THIS IS ALL I ADDED */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-brand-blue hover:text-brand-red transition mb-8 font-semibold"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          <span>Back to Home</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-brand-blue">
          Available Cars
        </h1>

        <p className="text-center text-gray-600 mb-12 text-lg">
          Sample vehicles we can source for you (images for reference)
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-brand-blue">
                  {car.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Contact us for price & availability
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}