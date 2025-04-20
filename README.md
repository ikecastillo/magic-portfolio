# Isaac Castillo Portfolio

A professional, executive-facing personal site for Isaac Castillo, Workflow Systems Architect and Atlassian Platform Specialist.

## Overview

This portfolio showcases Isaac's experience in workflow automation, Atlassian tools, and platform architecture. The site features a premium, clean design targeted at enterprise audiences including Fortune 500 tech and semiconductor companies.

## Features

- **Dark-themed, professional interface** designed for executive audiences
- **Responsive design** that works across all devices
- **Section-based layout** including:
  - Hero with clear headline and CTAs
  - About Me with professional background
  - Expertise showcasing technical skills and capabilities
  - Case Studies highlighting major projects
  - Recognition section with key metrics
  - Contact information in a minimalist footer

## Technologies

Built with:
- [Next.js](https://nextjs.org)
- [Once UI](https://once-ui.com) design system
- TypeScript
- MDX for case studies

## Setup & Development

To run this project locally:

1. Clone the repository
```
git clone https://github.com/ikecastillo/magic-portfolio.git
cd magic-portfolio
```

2. Install dependencies
```
npm install
```

3. Run the development server
```
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Content Management

Key content files:
- `src/app/resources/content.js` - Contains all text content
- `src/app/resources/config.js` - Theme, colors and global settings
- `src/app/work/projects/*.mdx` - Case study content files

## Deployment

### Deploy with Vercel (Recommended)
1. Create an account on [Vercel](https://vercel.com)
2. Connect your GitHub repository
3. Import the repository and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fikecastillo%2Fmagic-portfolio)

### Manual Deployment
To build the project for production:

```
npm run build
```

The output can be deployed to any static site hosting service.

## License

Based on Magic Portfolio by Once UI, distributed under the CC BY-NC 4.0 License.
- Commercial usage is not allowed
- Attribution is required

## Contact

Isaac Castillo - [ike@ikecastillo.com](mailto:ike@ikecastillo.com)