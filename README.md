# Rica Mae's Personal Portfolio (2022)

This is the repository for my personal portfolio website, created in 2022. It showcases my skills, work experience, and projects as an ETL Developer and Data Engineer.

## 🚀 Live Demo

You can view the live version of my portfolio by opening the `index.html` file in your web browser.

## ✨ Features

*   **Home:** A welcoming landing page with a dynamic typing animation.
*   **About Me:** A brief introduction, my professional background, and a link to download my CV.
*   **Services:** Highlights my key areas of expertise: ETL, Cloud Computing, and Data Analytics.
*   **Skills:** A detailed overview of my technical skills, work experience, and relevant AWS certifications.
*   **Projects:** A filterable grid showcasing my work with categories (Data Engineering, Cloud, AI/ML).
*   **Blog:** Articles and tutorials with multi-category filtering.
*   **Contact:** A fully functional contact form with EmailJS backend integration, real-time validation, and success/error notifications.
*   **Dark Mode:** Toggle between light and dark themes with smooth transitions and localStorage persistence.
*   **Responsive Design:** The website is designed to be accessible on various devices.
*   **Scroll Animations:** Smooth scroll-triggered animations using Intersection Observer API.

## 🛠️ Technologies Used

*   **Frontend:** HTML, CSS, JavaScript
*   **Backend Integration:** EmailJS for contact form
*   **Libraries:**
    *   jQuery
    *   Font Awesome for icons
    *   Typed.js for the typing animation
    *   Owl Carousel for the project slider
    *   EmailJS for email handling

## 📂 Project Structure

```
Portfolio2022/
├── assets/
│   ├── css/
│   │   └── style.css           # All styling including dark mode and animations
│   ├── js/
│   │   ├── script.js           # Main JavaScript with contact form handler
│   │   └── Button.js           # Form validation utilities
│   ├── images/                 # Project images and assets
│   └── documents/              # PDFs (Resume, Certifications)
├── index.html                  # Main HTML file
├── README.md                   # Project documentation
├── EMAILJS_SETUP.md            # Contact form setup guide
└── DEVELOPMENT_PLAN.md         # Development roadmap
```

## 📧 Contact Form Setup

The contact form requires EmailJS configuration. Follow these steps:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service and template
3. Get your Public Key, Service ID, and Template ID
4. Update the configuration in `assets/js/script.js`:
   - Line 279: Replace `YOUR_PUBLIC_KEY`
   - Line 305: Replace `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID`

For detailed instructions, see [EMAILJS_SETUP.md](EMAILJS_SETUP.md).

## ✍️ Author

*   **Rica Mae Lacson**
*   **Email:** lacsonrica@gmail.com

---
Created by RMCL © 2022.
