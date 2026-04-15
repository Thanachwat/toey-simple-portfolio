# Portfolio Website Development Plan - Business Development (Thanach Toey)

## Objective
Create a professional, modern portfolio website for a Business Development profile, hosted on GitHub Pages, featuring a dark theme and custom typography.

## Scope & Requirements
- **Theme:** Modern dark theme.
- **Typography:** JetBrains Mono font.
- **Sections:**
    - **Hero:** Clearly state name ("Thanach Toey") and role ("Business Development").
    - **Projects:** 3 distinct project showcases.
    - **Contact:** Clearly visible contact information.
- **Platform:** GitHub Pages.

## Implementation Steps

### Phase 1: Setup & Project Structure
1. Create a new GitHub repository named `thanachtoey.github.io` (or similar).
2. Initialize local project folder:
   - `index.html` (Main structure)
   - `style.css` (Dark theme, fonts, layout)
   - `script.js` (Basic interactivity, if needed)

### Phase 2: Core Development
1. **HTML Structure:**
   - Define `<head>` with meta tags and Google Fonts link (JetBrains Mono).
   - Create `<header>` for navigation (optional).
   - Create `<section id="hero">` with name and job title.
   - Create `<section id="projects">` with 3 project card containers.
   - Create `<section id="contact">` with links to email, LinkedIn, etc.
2. **CSS Styling (Modern Dark Theme):**
   - Apply CSS variables for colors (dark background, light/accent text).
   - Set global font-family to 'JetBrains Mono'.
   - Implement responsive design (flexbox/grid).

### Phase 3: Content & Polish
1. Populate hero content.
2. Draft and format the 3 project descriptions.
3. Add professional contact details.

### Phase 4: Deployment
1. Push code to the `main` branch.
2. Navigate to Repository **Settings > Pages**.
3. Enable GitHub Pages deployment from the `main` branch.
4. Verify site at `https://thanachtoey.github.io`.

## Verification & Testing
- Check responsiveness on various screen sizes.
- Ensure JetBrains Mono font renders correctly.
- Verify all links in the Contact section are functional.
- Validate GitHub Pages deployment status.
