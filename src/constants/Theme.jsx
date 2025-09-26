import React, { useEffect, useState } from "react";

const Theme = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Global styles + theme variables */}
      <style>{`
        :root {
          --text: #fff;
          --background: #111;
          --primary: #3a80e9;
          --grey: #888;
          --success: #61c96f;
          --error: #f94141;
        }

        [data-theme="light"] {
          --text: #111;
          --background: #fff;
          --grey: #555;
        }

        [data-theme="dark"] {
          --text: #fff;
          --background: #111;
          --grey: #aaa;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: "Inter", sans-serif;
          font-weight: 400;
          color: var(--text);
          background-color: var(--background);
          transition: background-color 0.3s, color 0.3s;
        }

        h1, h2, h3, h4, h5, h6, p {
          color: var(--text);
        }
      `}</style>
      {children}
    </>
  );
};

export default Theme;
