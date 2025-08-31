# 🚀 Deployment Guide

This guide will walk you through deploying your VibeDev.ai landing page to various platforms.

## 🌟 Vercel (Recommended)

Vercel is the creators of Next.js and provides the best deployment experience.

### 1. Prepare Your Repository
```bash
# Ensure your code is committed to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Deploy to Vercel
1. **Visit [vercel.com](https://vercel.com)** and sign up/login
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure project settings:**
   - Framework Preset: Next.js
   - Root Directory: `./` (or `landingpage-main` if that's your root)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### 3. Environment Variables
Add these in your Vercel project settings:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Deploy
Click "Deploy" and wait for the build to complete!

### 5. Custom Domain (Optional)
1. **Go to your project settings**
2. **Click "Domains"**
3. **Add your custom domain** (e.g., `vibedev.ai`)
4. **Configure DNS** as instructed by Vercel

## 🐳 Docker Deployment

### 1. Create Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### 2. Build and Run
```bash
docker build -t vibedev-landing .
docker run -p 3000:3000 vibedev-landing
```

## ☁️ AWS Deployment

### 1. AWS Amplify
1. **Connect your GitHub repository**
2. **Configure build settings:**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

### 2. AWS S3 + CloudFront
1. **Build your project:**
   ```bash
   npm run build
   npm run export  # Add this script to package.json
   ```
2. **Upload to S3 bucket**
3. **Configure CloudFront distribution**

## 🔧 Environment Setup

### EmailJS Configuration
1. **Sign up at [EmailJS](https://www.emailjs.com/)**
2. **Create Email Service:**
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
3. **Create Email Template:**
   ```html
   Subject: Welcome to VibeDev.ai Newsletter!
   
   Hi there,
   
   Thank you for subscribing to our newsletter!
   Email: {{email}}
   
   We'll keep you updated with the latest AI development news.
   
   Best regards,
   The VibeDev Team
   ```
4. **Get your credentials:**
   - Service ID
   - Template ID
   - Public Key

### Update Environment Variables
```bash
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_key_xxxxxxx
```

## 📊 Post-Deployment

### 1. Verify Functionality
- [ ] Newsletter signup works
- [ ] Early access form loads
- [ ] All animations work
- [ ] Responsive design on mobile
- [ ] Theme toggle persists

### 2. Performance Testing
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Test loading speeds
- [ ] Verify image optimization

### 3. Analytics Setup
- [ ] Vercel Analytics enabled
- [ ] Google Analytics (optional)
- [ ] Monitor user behavior
- [ ] Track conversion rates

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

#### Environment Variables Not Working
- Ensure variables start with `NEXT_PUBLIC_`
- Restart your development server
- Check Vercel dashboard for typos

#### Images Not Loading
- Verify image paths in `public/images/`
- Check Next.js Image component usage
- Ensure proper alt text for accessibility

#### Newsletter Not Working
- Verify EmailJS credentials
- Check browser console for errors
- Test with a simple email template first

## 🔒 Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Environment variables secured
- [ ] No sensitive data in client code
- [ ] CSP headers set
- [ ] XSS protection enabled

## 📈 Monitoring & Maintenance

### Regular Checks
- **Weekly**: Review analytics and performance
- **Monthly**: Update dependencies
- **Quarterly**: Security audit and optimization

### Performance Optimization
- **Image compression** and optimization
- **Code splitting** and lazy loading
- **CDN configuration** for global reach
- **Caching strategies** implementation

---

## 🎯 Next Steps

After successful deployment:
1. **Set up monitoring** and alerting
2. **Configure backup** and recovery
3. **Plan scaling** strategy
4. **Document deployment** procedures
5. **Train team** on maintenance

Your VibeDev.ai landing page is now ready to convert visitors into users! 🚀

