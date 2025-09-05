'use client'

import { useState } from 'react'

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const carouselImages = [
    '/images/caro1.png',
    '/images/caro2.png',
    '/images/43.png',
    '/images/caro4.png',
    '/images/caro5.png',
    '/images/caro6.png',
    '/images/comparison1.png',
    '/images/comparison2.png',
    '/images/comparison3.png',
    '/images/comparison4.png',
    '/images/comparison5.png'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-center">
          <img 
            src="/images/page11.png" 
            alt="ALPHAINFUSE logo" 
            className="mx-auto w-80 h-auto"
          />
        </div>
      </main>
      
      {/* Full Width Separator Line */}
      <div className="w-full h-px bg-gray-300"></div>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Heading */}
        <div className="mt-8 mb-6">
          <h2 className="text-5xl font-black text-black uppercase leading-tight">
            5 WAYS ONEFIX™ LABS DELIVERS HAIR RESULTS FAST
          </h2>
        </div>

        {/* Introductory Paragraph */}
        <div className="mb-8">
          <p className="text-lg text-black leading-relaxed">
          Forget complicated routines and empty promises—ONEFIX™ delivers real regrowth, backed by science. Thicker, stronger hair starts here.
          </p>
          <div className="w-full h-px bg-gray-300 mt-4"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <div className="relative w-96 h-96">
              <img 
                src="/images/main1.png" 
                alt="Person applying ALPHAINFUSE product to scalp" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6 text-left flex flex-col justify-center">
            <h3 className="text-4xl font-extrabold text-black uppercase">
              1. From Thinning to Thriving: Restore Your Hairline Fast
            </h3>
            <p className="text-lg text-black leading-relaxed">
            ONEFIX™ shuts down excess DHT—the hormone responsible for thinning hair. Its micro-needling system drives the active serum directly into your scalp, reducing shedding in as little as 7 days and jumpstarting regrowth within 2 months.
            </p>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-8 space-y-8">
          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Product Image */}
            <div className="flex justify-center">
              <div className="relative w-96 h-96">
                <img 
                  src="/images/product2.png" 
                  alt="ALPHA INFUSE product with vials" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-6 text-left flex flex-col justify-center">
              <h3 className="text-4xl font-extrabold text-black uppercase">
                2. One minute is all it takes to restart regrowth
              </h3>
              <p className="text-lg text-black leading-relaxed">
              Forget complicated routines. Just stamp ONEFIX™ on thinning spots—it takes under 60 seconds and feels effortless. Results start showing in as little as one week, with fuller growth appearing by weeks 8–10.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Person Image */}
            <div className="flex justify-center">
              <div className="relative w-96 h-96">
                <video 
                  src="/images/UGC2.mp4" 
                  alt="Man holding ALPHA hair regrowth solution" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-6 text-left flex flex-col justify-center">
              <h3 className="text-4xl font-extrabold text-black uppercase">
                3. Trusted and Endorsed by Top Trichologists
              </h3>
              <p className="text-lg text-black leading-relaxed">
              Developed alongside Dr. Moore and backed by top trichologists, ONEFIX™ combines Saw Palmetto and Apigenin—two powerhouse compounds that fight DHT and fuel rapid, natural regrowth.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <div className="relative w-96 h-96">
                <img 
                  src="/images/saw1.png" 
                  alt="Natural ingredients and results" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-6 text-left flex flex-col justify-center">
              <h3 className="text-4xl font-extrabold text-black uppercase">
                4. All-Natural. Clinically Effective
              </h3>
              <p className="text-lg text-black leading-relaxed">
              A clean, chemical-free formula designed to restore thicker, healthier hair by targeting DHT and reactivating follicles.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <div className="relative w-96 h-96">
                <img 
                  src="/images/120day2.png" 
                  alt="Before and after results comparison" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-6 text-left flex flex-col justify-center">
              <h3 className="text-4xl font-extrabold text-black uppercase">
                5. No Risk. All Growth
              </h3>
              <p className="text-lg text-black leading-relaxed">
              Your confidence means everything. With our 120-Day Guarantee, you either see thicker, healthier hair—or you get your money back. Simple as that.
              </p>
            </div>
          </div>
        </div>

        {/* Product Section - E-commerce Style */}
        <div className="mt-16">
          <h2 className="text-4xl font-extrabold text-black uppercase text-center mb-8">
          #1 Best Seller – The Trusted Choice for Thicker Hair
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Left Side - Product Image + Carousel */}
            <div className="space-y-6">
              {/* Main Product Image */}
              <div className="flex justify-center">
                <div className="relative aspect-square w-[40rem]">
                  <img 
                    src={`${carouselImages[selectedImage]}?v=${Date.now()}`} 
                    alt="ALPHAINFUSE product" 
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Carousel Thumbnails */}
              <div className="flex justify-center">
                <div className="flex gap-2 w-[40rem]">
                  {carouselImages.slice(0, 6).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                        selectedImage === index 
                          ? 'ring-2 ring-blue-500 scale-105' 
                          : 'hover:scale-105'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`Product view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Product Information */}
            <div className="space-y-2">
                              <div>
                  <h3 className="text-4xl font-extrabold text-black mb-4">
                    ONEFIX™ HAIR REGROWTH SYSTEM
                  </h3>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                  <span className="text-sm text-gray-600">10k+ reviews</span>
                </div>
                <div className="border-t border-gray-300 pt-1 mb-0">
                  <span className="text-red-600 font-bold">LIMITED-TIME DEAL</span>
                </div>
              </div>

              <p className="text-lg text-black leading-relaxed mb-0">
              Hair loss steals more than just your hair—it impacts your confidence. ONEFIX™ fights DHT at the source, reviving dormant roots to bring back thicker, healthier growth you can see and feel within weeks.
              </p>

              <div className="flex justify-center">
                <div className="flex gap-2 w-[40rem] justify-center">
                  <img 
                    src="/images/onefixlabslogotm.png" 
                    alt="ONEFIX LABS Logo" 
                    className="h-14 w-auto"
                  />
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-xs text-black">100% Satisfaction Guarantee</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🔒</span>
                  </div>
                  <span className="text-xs text-black">Secure & Encrypted Transactions</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">$</span>
                  </div>
                  <span className="text-xs text-black">No results? No problem! We refund your money.</span>
                </div>
              </div>

              {/* Call to Action */}
              <div>
                <a 
                  href="https://www.onefixlabs.com/products/onefix%E2%84%A2-advanced-micro-infusion-hair-regrowth-kit?variant=55476048822607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-black text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-800 transition-colors inline-block text-center"
                >
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 py-6 mt-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-8 text-white">
            <a href="https://www.onefixlabs.com/policies/contact-information" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              Contact Us
            </a>
            <a href="https://www.onefixlabs.com/products/onefix%E2%84%A2-advanced-micro-infusion-hair-regrowth-kit?variant=55476048822607" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              Shipping Policy
            </a>
            <a href="https://www.onefixlabs.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="https://www.onefixlabs.com/policies/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
            <a href="https://www.onefixlabs.com/policies/refund-policy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              Return & Refund Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
