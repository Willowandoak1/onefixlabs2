'use client'

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner - Dark Blue */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-blue-700 text-white py-0 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between">
            {/* Left - Logo Only */}
            <div className="flex items-center">
              <img 
                src="/images/whitelogo.png" 
                alt="ONEFIX LABS Logo" 
                className="h-12 sm:h-16 w-auto"
              />
            </div>
            
            {/* Center - Promotional Offer */}
            <div className="hidden sm:block text-lg sm:text-2xl font-bold text-center">
              Up to 70% off!
            </div>
            
            {/* Right - CTA Button */}
            <a 
              href="https://www.onefixlabs.com/products/onefix%E2%84%A2-advanced-micro-infusion-hair-regrowth-kit?variant=55476048822607" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-3 sm:px-6 py-1 sm:py-2 rounded-lg transition-colors duration-200 inline-block text-xs sm:text-base whitespace-nowrap"
            >
              Try OneFix Today
            </a>
          </div>
        </div>
      </header>

      {/* Empty main content area for spacing */}
      <main className="pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Landingpage2 - Top Banner Only
            </h1>
            <p className="text-gray-600">
              This is Landingpage2 with only the top banner visible.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
