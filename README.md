# Puhan Properties - Luxury Real-Estate Website (HTML, CSS, JS)

This project is a modern, professional, and luxury real-estate website for "Puhan Properties", a trusted property dealer and real-estate broker in Mayur Vihar Phase 1, Delhi. The website is built using only HTML5, CSS3, and JavaScript, making it a static, production-ready frontend application.

## 🚀 Features

*   **Modern & Luxury Design:** Clean, premium aesthetic with a carefully chosen color palette and fonts.
*   **Fully Responsive:** Optimized for both desktop and mobile devices.
*   **Static Pages:**
    *   Home (`index.html`)
    *   Buy Property (`buy.html`)
    *   Sell Property (`sell.html`)
    *   Rent / Lease (`rent.html`)
    *   Areas We Serve (`areas.html`)
    *   Contact Us (`contact.html`)
*   **Interactive Contact Form:** Validated using JavaScript, offering WhatsApp pre-fill or `mailto:` for inquiries (no backend required).
*   **Click-to-Call Functionality:** Integrated phone numbers and floating WhatsApp chat button.
*   **Google Map Embedding:** Shows business location.
*   **SEO Optimized:** Keywords naturally included in meta tags, titles, and content.

## 🎨 Design Guidelines

*   **Color Palette:**
    *   Primary: `#0B1F3A` (Deep Navy Blue)
    *   Secondary: `#F5F5F5` (Off-White / Light Grey)
    *   Accent: `#C9A24D` (Gold / Champagne)
    *   Text: `#222222` (Dark Grey / Black)
*   **Fonts:**
    *   Headings: Playfair Display / Libre Baskerville (via Google Fonts)
    *   Body Text: Poppins / Lato (via Google Fonts)

## 📁 Project Structure

```
puhan-properties/
├── index.html
├── buy.html
├── sell.html
├── rent.html
├── areas.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── logo.png (Placeholder)
│   ├── hero.jpg (Placeholder - modern buildings/city skyline)
│   ├── buy-hero.jpg (Placeholder)
│   ├── sell-hero.jpg (Placeholder)
│   ├── rent-hero.jpg (Placeholder)
│   ├── areas-hero.jpg (Placeholder)
│   ├── contact-hero.jpg (Placeholder)
│   ├── property1.jpg (Placeholder - property for sale)
│   ├── property2.jpg (Placeholder - property for sale)
│   ├── property3.jpg (Placeholder - property for sale)
│   ├── property4.jpg (Placeholder - property for sale)
│   ├── rent1.jpg (Placeholder - property for rent)
│   ├── rent2.jpg (Placeholder - property for rent)
│   ├── rent3.jpg (Placeholder - property for rent)
│   ├── rent4.jpg (Placeholder - property for rent)
│   └── whatsapp-icon.png (Placeholder - WhatsApp logo)
└── README.md
```

## 🛠️ Setup and Usage

1.  **Clone or Download:** Get the project files.
2.  **Open in Browser:** Simply open any `.html` file (e.g., `index.html`) in your web browser.
3.  **Replace Placeholders:**
    *   Replace `images/*.jpg` and `images/whatsapp-icon.png` with actual, high-quality images relevant to real estate.
    *   Update phone numbers and WhatsApp links in `index.html`, `contact.html`, and `js/main.js` with the correct business numbers.
    *   Modify the Google Map iframe source in `contact.html` and `index.html` to point to the exact business location if different from Mayur Vihar Phase 1.
4.  **Hosting:** The website can be easily hosted on any static site hosting service (Hostinger, Netlify, GitHub Pages, etc.).

## 📝 Notes

*   All interactive elements are handled client-side using JavaScript. No server-side setup or database is required.
*   The `main.js` includes a basic form validation and a mechanism to open WhatsApp with a pre-filled message on form submission. A `mailto:` fallback is commented out but can be easily enabled.
*   SEO meta tags and keywords are pre-populated but should be reviewed and optimized further for specific local SEO strategies.