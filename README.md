# Personal Portfolio Website

This project is a personal portfolio website built with React and Vite, showcasing various projects and skills. It
features a dynamic particle background and is designed to be deployed as a static site on GitHub Pages.

[fragmepls.dev](https://fragmepls.dev/)

## Project Structure

```
/
├── public/                 # Static assets
├── src/                    # Source files
│   ├── assets/             # Images, fonts, etc.
│   ├── components/         # Reusable React components
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── routes/             # Routing configuration
│   ├── styles/             # Global and component-specific styles
│   ├── App.tsx             # Main App component
│   └── main.tsx            # Entry point of the application
├── eslint.config.js        # ESLint configuration
├── package.json            # Project dependencies and scripts
└── vite.config.ts          # Vite configuration
```

## Deployment

This site is configured for continuous deployment to GitHub Pages using GitHub Actions.

1. **Workflow**: A GitHub Actions workflow automatically builds and deploys the site on every push to the `master`
   branch.
2. **Process**: The workflow installs dependencies, runs `npm run build` to create a production build, and deploys the
   contents of the `/dist` directory.
3. **Hosting**: GitHub Pages is configured to serve the static files, enabling automated and seamless updates to the
   live site.
4. **Client-Side Routing**: A `404.html` file in the `public` directory handles redirects for the single-page
   application's routing, ensuring that direct navigation to subpages works correctly on GitHub Pages.
5. **Custom Domain**: A `CNAME` file is present in the `public` directory to map the deployment to a custom domain.

## Technologies Used

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [TypeScript](https://www.typescriptlang.org/)
