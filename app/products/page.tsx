export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Products
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl">
            Healthcare products and resources for managing diabesity
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-600 text-lg">
              No products are currently available. Please check back later.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
