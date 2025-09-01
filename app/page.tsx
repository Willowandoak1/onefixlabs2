'use client'

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner - Dark Blue */}
      <header className="bg-blue-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left - Logo Only */}
            <div className="flex items-center">
              <img 
                src="/images/logowhite.png" 
                alt="ONEFIX LABS Logo" 
                className="h-24 w-auto"
              />
            </div>
            
            {/* Center - Promotional Offer */}
            <div className="text-lg font-medium">
              Up to 70% off!
            </div>
            
            {/* Right - CTA Button */}
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
              Try OneFix Today
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Question/Category */}
              <div className="text-lg font-medium text-gray-700">
                ARE YOU LOSING HAIR?
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Stop Hair Loss and Regrow Thicker Hair in Just Weeks
              </h1>
              
              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">
                    Eliminate the root cause of thinning hair and activate regrowth.
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">
                    Clinically proven to reverse hair loss caused by Genetics, DHT, Stress, Diet, Aging, and more.
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">
                    Painless and takes 1 minute to apply
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">
                    Long-lasting and sustainable results for longer, more youthful hair.
                  </span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Hero Image */}
            <div className="text-center">
              {/* Hero Image */}
              <div className="relative mb-6">
                <img 
                  src="/images/main1.png" 
                  alt="ONEFIX LABS Hair Regrowth System"
                  className="w-[500px] h-[500px] object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Customer Satisfaction Callout */}
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg transition-colors duration-200">
                ✨ 22429+ Men Love OneFix Labs ✨
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* "As seen in:" Section */}
      <section className="py-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-700 mb-8">As seen in:</h2>
            <div className="flex items-center justify-center space-x-12 opacity-80">
              {/* Forbes Logo */}
              <img 
                src="/images/3.png" 
                alt="Forbes" 
                className="h-20 w-auto object-contain"
              />
              
              {/* Men's Health Logo */}
              <img 
                src="/images/4.png" 
                alt="Men's Health" 
                className="h-20 w-auto object-contain"
              />
              
              {/* SPY Logo */}
              <img 
                src="/images/5.png" 
                alt="SPY" 
                className="h-20 w-auto object-contain"
              />
              
              {/* Rolling Stone Logo */}
              <img 
                src="/images/6.png" 
                alt="Rolling Stone" 
                className="h-20 w-auto object-contain"
              />
              
              {/* GQ Logo */}
              <img 
                src="/images/9.png" 
                alt="GQ" 
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Hair Loss Confidence Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Main Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Don&apos;t Let Hair Loss Take Away Your Confidence
            </h2>
            
            {/* Introductory Text */}
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                You&apos;re not alone. <span className="font-bold">86% of men</span> struggle with the frustration of <span className="font-bold">thinning hair</span>, a <span className="font-bold">receding hairline</span>, and <span className="font-bold">embarrassing bald spots</span> as early as their late 20s...
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                ...The daily anxiety of seeing your <span className="font-bold">hairline slowly retreat in the mirror</span>, feeling self-conscious about <span className="font-bold">thinning strands</span> and <span className="font-bold">exposed scalp</span>, and watching your hair lose its <span className="font-bold">volume</span> and <span className="font-bold">density</span> every day.
              </p>
            </div>
            
            {/* Single Editable Image */}
            <div className="mt-12">
              <div className="relative max-w-4xl mx-auto">
                <img 
                  src="/images/comparison2.png" 
                  alt="Hair Loss Comparison" 
                  className="w-full max-w-3xl h-auto rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Research on DHT Section */}
      <section className="py-2 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-0">
            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Scientific Research Exposes the Real Cause of Hair Loss
            </h2>
            
            {/* Introductory Paragraphs */}
            <div className="max-w-4xl mx-auto space-y-6 text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                Leading hair loss experts have uncovered the #1 cause of hair loss: <span className="font-bold">DHT (Dihydrotestosterone)</span> a hormone silently attacking your hair follicles right now as you&apos;re reading.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                It creates a &quot;stranglehold effect&quot; blocking vital nutrients from reaching your hair follicles and weakening them over time. Starved of what they need to survive, <span className="font-bold">your follicles shrink daily until they completely die.</span>
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                This process comes with <span className="font-bold">daily warning signs: hair shedding, a receding hairline, thinning strands,</span> and <span className="font-bold">visible scalp patches.</span>
              </p>
            </div>
            
            {/* Highlighted Warning Box */}
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-pink-100 border border-pink-200 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Studies show that <span className="font-bold">8 out of 10 men</span> have excessive DHT levels that are literally suffocating their hair follicles.
                </p>
              </div>
            </div>
            
            {/* Consequences/Symptoms List */}
            <div className="mt-12 max-w-4xl mx-auto text-left">
              <p className="text-lg text-gray-700 mb-6">
                Your hair is literally being starved of what it needs, leading to:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Embarrassing thin patches that make you look older than you are
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Excessive shedding that leaves hair all over your pillow and shower
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    A receding hairline that&apos;s impossible to hide or style around
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Progressive DHT buildup that slowly suffocates and weakens your follicles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DHT Percentage Chart Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Chart Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              PERCENTAGE OF DHT IN THE SCALP
            </h2>
            
            {/* DHT Chart Image */}
            <div className="mt-12">
              <div className="relative max-w-4xl mx-auto">
                <img 
                  src="/images/chart1.png" 
                  alt="DHT Percentage Chart" 
                  className="w-full max-w-xl h-auto rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
            
            {/* Description Text */}
            <div className="mt-8 max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                This chart demonstrates the dramatic increase in DHT levels as men age, showing how the hormone progressively attacks hair follicles over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breakthrough Discovery Section */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Breakthrough Discovery: Why 99% of Hair Loss Treatments Are Useless
            </h2>
            
            {/* Warning/Information Box */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-pink-100 border border-pink-200 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="space-y-4 text-left">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    According to <span className="font-bold">Harvard Health</span>, our roots can absorb <span className="font-bold">only 15%</span> of the ingredients applied on the scalp, and <span className="font-bold">up to 25%</span> if ingested as pills. But in the case of hair loss shampoos? <span className="font-bold">0%!</span>
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    That means most of the formula is <span className="font-bold">completely wasted</span>—never reaching the DHT buildup where the real damage happens.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Subsequent Text Content */}
            <div className="mt-12 max-w-4xl mx-auto space-y-6 text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                See, 99% of so-called &quot;<span className="font-bold">hair thickening</span>&quot; and &quot;<span className="font-bold">hair restoring</span>&quot; treatments never reach the root cause of the problem. The issue? These treatments are applied on the surface of the skin, your scalp.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Serums? Barely penetrate.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Supplements? Absorb too little to make a real impact.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                And hair loss shampoos? You <span className="font-bold">wash them off</span> before they even have a chance to work!
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold">How stupid is that?!</span>
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                So, as you can imagine, there is <span className="font-bold">no real effect</span>. No thickening. No regrowth. No restoration. Absolutely nothing.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Meanwhile, <span className="font-bold">DHT levels continue rising</span>, accelerating hair loss every single day. And by the time men realize it, it&apos;s often too late.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editable Scientific Illustration Section */}
      <section className="py-4 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Scientific Illustration GIF */}
            <div className="mt-8 flex justify-center">
              <div className="relative">
                <img 
                  src="/images/gif2.gif" 
                  alt="Scientific Illustration" 
                  className="w-[35rem] h-[35rem] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Description Text */}
            <div className="mt-4 max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                This scientific illustration demonstrates how traditional topical treatments fail to penetrate deep enough to reach the hair follicles where DHT damage occurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DANGER: Every Day You Delay Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              DANGER: Every Day You Delay, DHT Strengthens Its Grip
            </h2>
            
            {/* Subtitle */}
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Your Hair Loss Is Getting Worse As You Read This...
            </h3>
            
            {/* Introductory Paragraph */}
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                At the International Hair Science Symposium, experts revealed a shocking truth —once DHT starts attacking your hair follicles, without immediate action:
              </p>
            </div>
            
            {/* Consequences List */}
            <div className="mt-12 max-w-4xl mx-auto space-y-4 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-xl">✕</span>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                  Your follicles will completely die, making regrowth nearly impossible
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-xl">✕</span>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                  Thinning speeds up, leaving hair weaker by the day
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-xl">✕</span>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                  Your confident, youthful hair becomes a thing of the past
                </span>
              </div>
            </div>
            
            {/* Before & After Image */}
            <div className="mt-12">
              <div className="relative max-w-5xl mx-auto">
                <img 
                  src="/images/comparison3.png" 
                  alt="Before and After Hair Loss Comparison" 
                  className="w-full max-w-3xl h-auto rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Infusion Hair System Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              The First True Breakthrough in Hair Regrowth: Stronger, Faster, Proven
            </h2>
            
            {/* Introductory Paragraph */}
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                A groundbreaking scientific breakthrough published in the International Journal of Hair Restoration has uncovered a clinically proven solution to stop hair loss for good: <span className="font-bold">Micro-Infusion Hair System</span>
              </p>
            </div>
            
            {/* First Image - Microneedle GIF */}
            <div className="mt-0">
              <div className="relative max-w-4xl mx-auto">
                <img 
                  src="/images/microneedle1.gif" 
                  alt="Microneedle Technology" 
                  className="w-full max-w-2xl h-auto rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
            
            {/* Second Image - News Articles */}
            <div className="mt-0">
              <div className="relative max-w-2xl mx-auto">
                <img 
                  src="/images/news.png" 
                  alt="News Articles" 
                  className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Infusion & AlphaInfuse™ Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Light Green Banner with Checkmark */}
            <div className="bg-green-100 rounded-lg p-8 max-w-5xl mx-auto">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                The key? A <span className="font-bold">high-absorption</span> delivery system called <span className="font-bold">Micro-Infusion</span>, paired with a clinically backed formula that penetrates deep beneath the scalp neutralizing DHT and delivering vital nutrients directly to your hair follicles.
              </p>
            </div>
            
            {/* Results Introduction */}
            <div className="mt-8">
              <p className="text-xl text-gray-700 font-medium">
                And the results speak for themselves:
              </p>
            </div>
            
            {/* Bulleted List of Benefits/Results */}
            <div className="mt-8 max-w-4xl mx-auto space-y-4 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold">300% increase</span> in formula absorption
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold">5X faster</span> hair growth with micro-needle stimulation
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold">75% increase</span> in hair thickness
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                  Neutralizes DHT to protect and revive your hair follicles
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                  Dramatical increase in overall hair density
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                  Fills in embarrassing thin spots, restores receding hairline, with strong new growth
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                  Transforms weak, lifeless strands into thick, healthy hair
                </span>
              </div>
            </div>
            
            {/* Concluding Paragraph */}
            <div className="mt-12 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Now, thanks to this discovery, the <span className="font-bold">OneFix™ Lab&apos;s Hair Regrowth System</span> has helped thousands of men regrow the hair they thought was gone forever. It&apos;s hands down the most effective hair restoration system ever developed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced 3 Scientific Innovations Section with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Main Header */}
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Get Thicker, Attractive Hair Fast
              </h2>
              <p className="text-xl text-gray-600">
                The 3 scientific innovations behind Onefix™ Hair Regrowth System
              </p>
            </div>

            {/* Innovation 1: Advanced Delivery System */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left Column - Text Content */}
              <div className="space-y-6 text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  1. Advanced Delivery System
                </h3>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Delivering key ingredients to the root of hair loss requires more than just surface application.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-bold">Micro-Infusion Technology</span> creates <span className="font-bold">tiny scalp channels</span>, boosting absorption by up to <span className="font-bold">300%</span> and delivering <span className="font-bold">10-15x more active ingredients</span> where needed most.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    This breakthrough helps men <span className="font-bold">stop hair loss instantly</span> and <span className="font-bold">accelerate hair growth</span>.
                  </p>
                </div>
                <button className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200">
                  <span>LINKED STUDY</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
              
              {/* Right Column - Video */}
              <div className="relative">
                <video 
                  src="/images/UGC1.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Innovation 2: Dual-Action Formula */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left Column - Video */}
              <div className="relative">
                <video 
                  src="/images/hair1.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Right Column - Text Content */}
              <div className="space-y-6 text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  2. Dual-Action Formula
                </h3>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The <span className="font-bold">OneFix™ Hair Regrowth System</span> features a clinically proven natural blend with zero side effects.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-bold">Panax Ginseng</span> eliminates DHT and promotes regrowth, <span className="font-bold">Eclipta Prostrata Extract</span> accelerates follicle regeneration, and <span className="font-bold">Peppermint Oil & Ginger Root Extract</span> improve circulation and create the ideal scalp environment.
                  </p>
                </div>
                <button className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200">
                  <span>LINKED STUDY</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Innovation 3: Micro-Needle Stimulation */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6 text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  3. Micro-Needle Stimulation
                </h3>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Micro-needles stimulate the scalp for accelerated hair growth beyond just absorption.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-bold">Tiny punctures</span> cause the body to send <span className="font-bold">more nutrients</span> to heal, triggering a <span className="font-bold">natural repair response that speeds up hair regeneration</span>, with clinical studies confirming hair growth <span className="font-bold">up to 5x faster</span>.
                  </p>
                </div>
                <button className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200">
                  <span>LINKED STUDY</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
              
              {/* Right Column - Before/After Image */}
              <div className="relative">
                <img 
                  src="/images/comparison5.png" 
                  alt="Before and After Hair Loss Comparison" 
                  className="w-full max-w-md h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maximum Results with Minimal Effort Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            {/* Main Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Maximum Results with Minimal Effort
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-xl text-gray-600">
              No complicated steps. No long routines. Just real results.
            </p>
            
            {/* Three Steps with Checkmarks */}
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">✔</span>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                  Load the formula into the micro-infusion device—no prep, no mess.
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">✔</span>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                  Gently stamp the micro-infusion device onto thinning areas. Takes less than <span className="font-bold">1 minute</span> and feels like lightly tapping your nail on your skin, <span className="font-bold">completely painless</span>. That&apos;s it. Let it absorb and go about your day.
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">✔</span>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                  See results in as little as 1 week, with remarkable growth in just 8-10 weeks.
                </span>
              </div>
            </div>
            
            {/* Concluding Paragraph */}
            <p className="text-lg text-gray-600">
              This system is engineered for <span className="font-bold">real</span> men who want <span className="font-bold">real</span> regrowth without the hassle.
            </p>
            
            {/* Central Product Image */}
            <div className="mt-6">
              <div className="relative max-w-4xl mx-auto">
                <img 
                  src="/images/UGC1.png" 
                  alt="Product Image" 
                  className="w-full max-w-xl h-auto rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
            

          </div>
        </div>
      </section>

      {/* Benefits and Product Comparison Section */}
      <section className="py-0 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-1">
            {/* Top Section - Headline and Benefits */}
            <div className="space-y-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                The Only Hair Treatment You&apos;ll Ever Need
              </h2>
              
              <p className="text-lg text-gray-700">
                22,731+ customers use Onefix Labs daily!
              </p>
              
              {/* Benefits List */}
              <div className="max-w-4xl mx-auto space-y-1 text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-lg">✔</span>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Fills in bald patches for a <span className="font-bold">thicker, fuller</span> look
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-lg">✔</span>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Restores receding hairline to its <span className="font-bold">full potential</span>
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-lg">✔</span>
                  </div>
                  <span className="text-white font-bold text-lg">✔</span>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Stops hair loss and promotes <span className="font-bold">drastic hair regrowth</span>
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-lg">✔</span>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-bold">No side effects</span> - Pure natural blend formulated and developed in the US.
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-lg">✔</span>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-bold">Painless</span> and takes <span className="font-bold">1 minute</span> to apply
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-lg">✔</span>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-bold">Long-lasting</span> results
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-lg">✔</span>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Backed by a <span className="font-bold">120-Day Growth Money-Back Guarantee</span>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Middle Section - Single Image */}
            <div className="mt-3">
              <div className="relative max-w-4xl mx-auto">
                <img 
                  src="/images/compare1.png" 
                  alt="Comparison Image" 
                  className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Bottom Section - Product Comparison */}
            <div className="mt-3">
              <div className="relative max-w-5xl mx-auto">
                <div className="grid grid-cols-2 gap-8">
                  {/* Competitors - Red X */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg overflow-hidden border-2 border-dashed border-red-400 h-64 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-2xl">✕</span>
                        </div>
                        <p className="text-red-700 font-medium mb-2">Competitors</p>
                        <p className="text-red-600 text-sm">Minoxidil, Derma-roller, Supplements</p>
                        <div className="mt-3 text-xs text-red-500">
                          <p>Various hair loss products</p>
                          <p>Not recommended</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Alpha Product - Green Checkmark */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg overflow-hidden border-2 border-dashed border-green-400 h-64 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-2xl">✔</span>
                        </div>
                        <p className="text-green-700 font-medium mb-2">ONEFIX LABS</p>
                        <p className="text-green-600 text-sm">Microneedle Infusion Solution</p>
                        <div className="mt-3 text-xs text-green-500">
                          <p>Recommended solution</p>
                          <p>Two vials included</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </section>

      {/* Risk-Free Guarantee and Product Showcase Section */}
      <section className="py-0 bg-white -mt-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Banner */}
          <div className="bg-amber-600 text-white py-3 text-center mb-6 mt-12">
            <p className="text-lg font-bold uppercase tracking-wide">
              TRY TODAY
            </p>
          </div>
          
          <div className="text-center space-y-2">
            {/* Main Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              The Best Part? You Don&apos;t Have to Decide Now! Try It Risk-FREE for 120 Days.
            </h2>
            
            {/* Main Content Area */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mt-4">
              {/* Left Column - Before/After Image with Guarantee Badge */}
              <div className="relative">
                <div className="relative">
                  <img 
                    src="/images/120day.png" 
                    alt="Before and After Hair Loss Comparison" 
                    className="w-80 h-80 rounded-lg object-cover mx-auto"
                  />
                  

                </div>
              </div>
              
              {/* Right Column - Guarantee Explanation */}
              <div className="space-y-3 text-left">
                <h3 className="text-2xl font-bold text-gray-900">
                  Here&apos;s the deal:
                </h3>
                
                <div className="space-y-1">
                  <p className="text-lg text-gray-700 leading-tight">
                    We&apos;re so confident in OneFix™ that we don&apos;t want you to spend a dime until you&apos;re 100% sure it works for you.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-tight">
                    <span className="font-bold">That&apos;s why we offer a 120-day, no-questions-asked guarantee.</span>
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-tight">
                    If you don&apos;t see the results you expect, we&apos;ll issue a full refund—no hassle, no risk.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-tight">
                    Simply put, you only pay if it delivers real, life-changing results. And based on our track record, we&apos;re certain it will.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Product Benefits Callout */}
            <div className="mt-8">
              <div className="bg-gray-100 rounded-lg p-8 max-w-2xl mx-auto text-center">
                <p className="text-2xl text-gray-900">
                  Fuller and <span className="font-bold">thicker</span> looking hair in less than <span className="font-bold">4 weeks</span>
                </p>
              </div>
            </div>
            
            {/* Product Image - ONEFIX™ System */}
            <div className="mt-8">
              <div className="relative max-w-4xl mx-auto">
                <img 
                  src="/images/product1.png" 
                  alt="ONEFIX™ Hair Regrowth System Product" 
                  className="w-2/3 h-auto rounded-lg object-cover mx-auto"
                />
              </div>
            </div>
            
            {/* Bottom Section Title */}
            <div className="mt-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight uppercase tracking-wide">
                ONEFIX™ Hair Regrowth System
              </h3>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA Button */}
        <div className="mt-8 mb-12 text-center">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-lg text-lg uppercase tracking-wide transition-colors duration-200">
            TRY TODAY
          </button>
        </div>
      </section>

      {/* Footer Section - Dark Blue Background */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          
          {/* Upper Middle Section - Reviews and Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 pb-8 border-b border-white">
            {/* Google Reviews */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="text-2xl font-bold text-blue-400">G</div>
                <div className="text-2xl font-bold text-red-500">o</div>
                <div className="text-2xl font-bold text-yellow-500">o</div>
                <div className="text-2xl font-bold text-blue-400">g</div>
                <div className="text-2xl font-bold text-green-500">l</div>
                <div className="text-2xl font-bold text-red-500">e</div>
              </div>
              <p className="text-white mb-2">REVIEWS</p>
              <div className="flex items-center justify-center space-x-1 mb-2">
                <span className="text-2xl font-bold text-white">4.82</span>
                <div className="flex space-x-1">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Satisfied Customers */}
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="text-white mb-1">Satisfied Customers</p>
              <p className="text-2xl font-bold text-white">108,271+</p>
            </div>
            
            {/* 5 Star Reviews */}
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <p className="text-white mb-1">5 Star Reviews</p>
              <p className="text-2xl font-bold text-white">27,872+</p>
            </div>
          </div>
          
          {/* Lower Middle Section - Links and Company Branding */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 pb-8 border-b border-white">
            {/* Links */}
            <div className="space-y-3">
              <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200">Contact Us</a>
              <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200">Terms and Conditions</a>
              <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200">Returns and Refunds Policy</a>
              <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200">Shipping Policy</a>
            </div>
            
            {/* Company Branding */}
            <div className="text-right">
              <p className="text-white mb-2">info@onefixlabs.com</p>
              <h3 className="text-3xl font-bold text-white">ONEFIX LABS</h3>
            </div>
          </div>
          
          {/* Bottom Section - Guarantees and Support */}
          <div className="grid md:grid-cols-4 gap-8">
            {/* Money Back Guarantee */}
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h4 className="font-bold text-white mb-2">120-DAYS MONEY BACK GUARANTEE</h4>
                                <p className="text-sm text-white">If you&apos;re not satisfied with the purchase within 120 days, we&apos;ll give you a full refund.</p>
            </div>
            
            {/* Customer Service */}
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </div>
              <h4 className="font-bold text-white mb-2">CUSTOMER SERVICE</h4>
              <p className="text-sm text-white">We are available from monday to friday to answer your questions.</p>
            </div>
            
            {/* Secure Payment */}
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h4 className="text-white mb-2">SECURE PAYMENT</h4>
              <p className="text-sm text-white">Your payment information is processed securely.</p>
            </div>
            
            {/* Contact Us */}
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h4 className="font-bold text-white mb-2">CONTACT US</h4>
              <p className="text-sm text-white">Need to contact us ? Just send us an e-mail at <span className="underline">info@onefixlabs.com</span></p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
