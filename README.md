# Voice Over Portfolio Website

A modern, minimalist portfolio website for voice over artists, designed to showcase your demo reels, services, and make it easy for clients to contact you.

## Features

- 🎙️ **Audio Demo Player** - Custom-built audio players for your demo reels
- 📱 **Fully Responsive** - Works beautifully on all devices
- 🎨 **Modern Design** - Clean, professional aesthetic with smooth animations
- 📬 **Contact Form** - Easy way for clients to reach you
- 💼 **Services Section** - Display your rates and offerings
- ⚡ **Fast Loading** - Optimized for performance
- 🚀 **GitHub Pages Ready** - Free hosting with custom domain support

## Quick Start

### 1. Customize Your Content

Open `index.html` and replace the following placeholders:

- **Your Name** - Replace in title, navigation, and hero section
- **About Section** - Add your bio and experience
- **Contact Details** - Update email, phone, and location
- **Services & Rates** - Adjust pricing and service descriptions
- **Footer Year** - Update copyright year
- **Social Links** - Add your LinkedIn, Twitter, Instagram URLs

### 2. Add Your Audio Files

Create an `audio` folder in your repository and add your demo reels:

```
your-repo/
├── index.html
├── styles.css
├── script.js
├── README.md
└── audio/
    ├── commercial-demo.mp3
    ├── narration-demo.mp3
    ├── character-demo.mp3
    └── elearning-demo.mp3
```

**Note:** GitHub has a 100MB file size limit. Keep audio files under this limit by:
- Using MP3 format at 128-192 kbps
- Keeping demos to 1-3 minutes
- Compressing files with tools like Audacity

### 3. Add Your Photo

Replace the placeholder in the About section:

```html
<div class="image-placeholder">
    <img src="images/your-photo.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

Create an `images` folder and add your photo there.

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name it `your-username.github.io` (for personal site) or any name for a project site
4. Make it Public
5. Don't initialize with README (we already have one)

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**
1. Click "uploading an existing file"
2. Drag and drop all your files (index.html, styles.css, script.js, README.md)
3. Commit the changes

**Option B: Using Git Command Line**
```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/your-username/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** in the left sidebar
4. Under "Source", select **main** branch
5. Click **Save**
6. Your site will be live at `https://your-username.github.io/your-repo-name/`

### Step 4: Custom Domain (Optional)

1. Buy a domain from providers like Namecheap, GoDaddy, or Google Domains
2. In your GitHub repository settings under Pages, add your custom domain
3. In your domain provider's DNS settings, add these records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: your-username.github.io
   ```
4. Wait 24-48 hours for DNS propagation

## Contact Form Setup

The contact form currently shows a demo submission. To make it functional, you have several options:

### Option 1: Formspree (Recommended - Free & Easy)

1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form and get your form endpoint
4. In `script.js`, uncomment and update the Formspree code:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
});
```

### Option 2: Netlify Forms

If you deploy to Netlify instead of GitHub Pages, add `netlify` attribute to your form:

```html
<form class="contact-form" id="contactForm" netlify>
```

### Option 3: Your Own Backend

Create your own API endpoint and update the fetch URL in `script.js`.

## Customization Tips

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-bg: #fefefe;          /* Background color */
    --color-text: #1a1a1a;        /* Main text color */
    --color-accent: #2d3748;       /* Accent color (buttons, links) */
    --color-border: #e5e5e5;       /* Border color */
}
```

### Change Fonts

The site uses:
- **Cormorant Garamond** for headings (elegant serif)
- **Outfit** for body text (modern sans-serif)

To change fonts:
1. Browse [Google Fonts](https://fonts.google.com)
2. Select your fonts and copy the embed code
3. Replace the Google Fonts link in `index.html`
4. Update the CSS variables in `styles.css`:

```css
--font-display: 'Your Display Font', serif;
--font-body: 'Your Body Font', sans-serif;
```

### Add More Demo Categories

Copy an existing demo card and update:
- Audio ID
- Title and description
- Audio file path

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

Your site will automatically update in a few minutes.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Compress Audio**: Use Audacity or similar tools to optimize file size
2. **Optimize Images**: Use tools like TinyPNG before uploading
3. **Consider a CDN**: For large audio files, consider hosting on SoundCloud or AWS S3

## Troubleshooting

**Audio not playing?**
- Check file paths in index.html match your audio folder structure
- Ensure audio files are in MP3 format
- Check browser console for errors

**Site not showing on GitHub Pages?**
- Make sure index.html is in the root directory
- Check that GitHub Pages is enabled in repository settings
- Wait a few minutes after pushing changes

**Form not working?**
- Set up Formspree or another form handler as described above
- Check browser console for errors

## License

Free to use for personal portfolios. Please maintain attribution in the footer.

## Credits

Design and development by Claude (Anthropic)

---

**Need Help?** Feel free to open an issue on GitHub or modify the code to suit your needs!
