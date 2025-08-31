# VibeDev.ai Landing Page

A modern, responsive landing page for VibeDev.ai - the future of AI-powered development.

## ✨ Features

### 🎨 Design & UX
- **Modern Dark Theme** with gradient accents
- **Responsive Design** optimized for all devices
- **Smooth Animations** with scroll-triggered effects
- **Interactive Elements** with hover states and transitions
- **Custom CSS Animations** (float, shimmer, typing effects)

### 🚀 Core Sections
- **Hero Section** with animated logo and CTA
- **Demo Section** with interactive code examples
- **Features** showcasing AI-powered development tools
- **Pricing Tiers** (Free, Pro, Enterprise)
- **Testimonials** from satisfied developers
- **Statistics** highlighting key metrics
- **FAQ Section** with common questions
- **Technology Stack** display
- **Comparison Table** vs traditional development
- **Success Stories** and case studies
- **Getting Started** 3-step guide
- **Community & Support** links
- **Newsletter Signup** with EmailJS integration

### 🔧 Technical Features
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Images** with Next.js Image optimization
- **Form Integration** with Tally.so for early access
- **Email Newsletter** with EmailJS backend
- **Vercel Analytics** for insights
- **Local Storage** for user preferences
- **Keyboard Shortcuts** (S for search, T for theme)
- **Cookie Consent** management
- **Theme Persistence** (dark/light mode)
- **Search Functionality** with recent searches
- **Progress Bar** showing scroll progress
- **Floating Action Button** for quick access

### 📱 Interactive Elements
- **Theme Toggle** with localStorage persistence
- **Search Overlay** with keyboard shortcuts
- **Back to Top** button
- **Cookie Consent** banner
- **Countdown Timer** for urgency
- **Scroll Animations** with intersection observer
- **Hover Effects** throughout the interface

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd landingpage-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file with your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect your GitHub repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy automatically** on push to main branch

### Manual Deployment
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 🔧 Configuration

### EmailJS Setup
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update the environment variables

### Customization
- **Colors**: Modify `tailwind.config.ts`
- **Content**: Update text in `app/page.tsx`
- **Images**: Replace images in `public/images/`
- **Fonts**: Change fonts in `app/layout.tsx`

## 📱 Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Features
- **Image Optimization** with Next.js Image
- **Lazy Loading** for iframes and images
- **CSS-in-JS** with Tailwind for minimal bundle size
- **Code Splitting** with Next.js App Router

## 🔒 Security Features
- **Content Security Policy** headers
- **XSS Protection** headers
- **Frame Options** to prevent clickjacking
- **Content Type Options** to prevent MIME sniffing

## 📊 Analytics
- **Vercel Analytics** enabled by default
- **Performance monitoring** built-in
- **User behavior tracking** for optimization

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License
This project is licensed under the MIT License.

## 🆘 Support
- **Documentation**: Check the code comments
- **Issues**: Open a GitHub issue
- **Community**: Join our Discord server

## 🎉 What's Next?
- [ ] Add more interactive demos
- [ ] Implement user authentication
- [ ] Add blog section
- [ ] Integrate with more email providers
- [ ] Add A/B testing capabilities
- [ ] Implement chat support widget

---

Built with ❤️ by the VibeDev team
