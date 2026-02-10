"use client";

import { categoryLabels, Product } from "@/lib/productsData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, FileText, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const images = [
    { id: "logo", src: product.logoImage, alt: `${product.name} Logo` },
    { id: "packs", src: product.packsImage, alt: `${product.name} Packaging` },
    ...(product.deviceImage
      ? [{ id: "device", src: product.deviceImage, alt: `${product.name} Device` }]
      : []),
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Lightbox Modal */}
      {showLightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowLightbox(false)}
        >
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-primary py-12 md:py-16 px-6 lg:px-0">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <Link
            href={`/products?tab=${product.category}`}
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {categoryLabels[product.category]}
          </Link>
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">
            {product.name}
          </h1>
          <p className="text-white/80 text-lg">({product.genericName})</p>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-12 md:py-16 bg-white px-6 lg:px-0">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Image Gallery */}
            <div>
              {/* Main Image */}
              <div
                className="bg-gray-50 border border-gray-200 mb-4 aspect-[4/3] flex items-center justify-center cursor-zoom-in p-8"
                onClick={() => setShowLightbox(true)}
              >
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-50 border-2 overflow-hidden p-2 ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div>
              {/* Product Details Card */}
              <div className="bg-gray-50 border border-gray-200 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Product information
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Brand name
                    </h3>
                    <p className="text-lg text-gray-900">{product.brandName}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Generic name
                    </h3>
                    <p className="text-lg text-gray-900">
                      {product.genericName}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Formulation
                    </h3>
                    <p className="text-lg text-gray-900">{product.form}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Dosing frequency
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      {product.frequency}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                      Available dosages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.dosages.map((dosage) => (
                        <span
                          key={dosage}
                          className="px-3 py-1.5 bg-primary/10 text-primary font-medium"
                        >
                          {dosage}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Downloads */}
              {product.leafletPdf && (
                <div className="bg-primary/5 border border-primary/20 p-6 mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Downloads
                  </h2>
                  <a
                    href={product.leafletPdf}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" className="w-full">
                      <Download className="w-5 h-5" />
                      Download PDF
                    </Button>
                  </a>
                </div>
              )}

              {/* Disclaimer */}
              <div className="p-4 bg-yellow-50 border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> This information is intended for
                  healthcare professionals only. Please refer to the full
                  prescribing information before use. Always consult with a
                  qualified healthcare provider for medical advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
