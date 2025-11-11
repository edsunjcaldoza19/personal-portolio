# Personal Portfolio Website

A modern, minimalist one-page portfolio website for web and graphic designers. Built with HTML, CSS, JavaScript, and Tailwind CSS.

## 🌟 Features

- **Modern Minimalist Design**: Clean, professional layout with a friendly touch
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll animations and hover effects for enhanced user experience
- **One-Page Layout**: All sections on a single page with smooth scrolling navigation
- **Fast Loading**: Optimized for performance with lazy loading images
- **SEO Friendly**: Semantic HTML structure and proper meta tags

## 📁 Project Structure

```
Personal-Portfolio/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🎨 Design Specifications

- **Typography**: 
  - Headings: Poppins (Google Fonts)
  - Body: Montserrat (Google Fonts)
- **Color Palette**: 
  - Base: White / Light Gray
  - Accent: #00ADB5 (Teal)
- **Layout**: One-page scroll with 9 main sections

## 📑 Sections

1. **Hero Section** - Introduction and call-to-action
2. **About Me** - Personal story and resume download
3. **Services** - What I do (Web Design, Graphic Design, Brand Identity)
4. **Portfolio** - 6 featured projects with hover effects
5. **Testimonials** - Client feedback
6. **Resume Snapshot** - Experience and skills overview
7. **Education** - Academic qualifications and achievements
8. **Contact** - Email and social media links
9. **Footer** - Copyright and back to top link

## 🚀 Getting Started

### Option 1: Open Directly

Simply open `index.html` in your web browser. No build process required!

### Option 2: Local Development Server

For better development experience, you can use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## ✏️ Customization Guide

### Personalizing Your Portfolio

1. **Change Your Name**: 
   - Search for "Alex Morgan" and replace with your name throughout the HTML
   - Update the email address (search for "hello@alexmorgan.com")

2. **Update Images**: 
   - Replace placeholder images with your actual photos
   - Hero section: `src="your-hero-image.jpg"`
   - About section: `src="your-about-image.jpg"`
   - Project images: Replace all 6 portfolio project images

3. **Modify Content**: 
   - Update the About Me section with your story
   - Add your real project descriptions and links
   - Update experience and skills sections

4. **Change Colors**: 
   - In `index.html`, find the Tailwind config section
   - Change `accent: '#00ADB5'` to your preferred color
   - Also update in `styles.css` if using custom CSS

5. **Social Media Links**: 
   - Update Behance, LinkedIn, and Instagram URLs
   - Add or remove social platforms as needed

6. **Project Content**: 
   - Replace all 6 project titles, descriptions, and images
   - Update tool tags (Figma, Photoshop, etc.)
   - Link to your actual Behance portfolio or project URLs

### Adding More Projects

To add more projects, copy the project card structure:

```html
<div class="project-card group">
    <div class="relative overflow-hidden rounded-lg mb-4">
        <img src="your-image.jpg" 
             alt="Project Name" 
             class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
    </div>
    <h3 class="text-xl font-heading font-semibold mb-2">Project Title</h3>
    <p class="text-gray-600 mb-3">Project description</p>
    <p class="text-sm text-accent mb-4">Tools: Figma, Photoshop</p>
    <a href="link" target="_blank" class="text-accent hover:text-accent/80 font-medium">
        View on Behance →
    </a>
</div>
```

### Customizing Services

Add or modify service cards in the Services section. Each service card includes:
- An icon (SVG)
- A title
- A description
- Hover effects

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Dependencies

- **Tailwind CSS**: Loaded via CDN
- **Google Fonts**: Poppins and Montserrat
- No other dependencies required!

## 🔧 Technologies Used

- HTML5
- CSS3 (Custom + Tailwind CSS)
- Vanilla JavaScript (ES6+)
- Tailwind CSS (via CDN)

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them!

## 📧 Support

For questions or issues, please open an issue on the repository.

## 🙏 Acknowledgments

- Images from Unsplash
- Icons from Heroicons
- Fonts from Google Fonts
- Tailwind CSS for the utility framework

---

**Note**: Remember to replace all placeholder content, images, and links with your actual information before deploying your portfolio.
