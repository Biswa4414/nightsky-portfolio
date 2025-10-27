import React from "react";

const Theme = ({ children }) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        :root {
          /* 🎨 Core Colors */
          --color-text: #ffffff;
          --color-text-dim: #b3b9c5;
          --color-hover: #ffffff;
          --color-primary: #3a80e9;
          --color-accent: #61c96f;
          --color-border: rgba(255, 255, 255, 0.15);
          --blur-amount: 14px;

          /* 🔷 Header Gradient */
          --color-header-bg: radial-gradient(
            circle at center,
            rgba(0, 80, 255, 0.45) 0%,
            rgba(0, 50, 100, 0.25) 40%,
            rgba(0, 0, 0, 0.1) 100%
          );

          /* 🧭 Shadows & Radii */
          --shadow-soft: 0 4px 25px rgba(0, 0, 0, 0.45);
          --radius-md: 12px;
          --radius-full: 999px;

          /* ✍️ Typography */
          --font-family: "Inter", sans-serif;
          --font-size-sm: 14px;
          --font-size-md: 16px;
          --font-size-lg: 18px;
        }

        /* 🧠 Base Styles */
        body {
          margin: 0;
          font-family: var(--font-family);
          background: #000;
          color: var(--color-text);
          overflow-x: hidden;
        }

        a {
          text-decoration: none;
          color: var(--color-text-dim);
          transition: color 0.3s ease;
        }

        a:hover {
          color: var(--color-hover);
        }
      `}</style>

      {children}
    </>
  );
};

export default Theme;
