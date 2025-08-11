import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { css, keyframes } from "@pandacss/react"

const rotar = keyframes({
  "0%": { "--deg": "0deg" },
  "100%": { "--deg": "360deg" }
})

const bodyStyle = css({
  h: "100vh",
  w: "100%",
  display: "flex",
  flexWrap: "wrap",
  placeContent: "center",
  overflow: "hidden",
  animation: `${rotar} 120s linear infinite alternate both`,
  fontFamily:
    "Verdana, Geneva, Tahoma, sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
  backgroundImage: `
    repeating-conic-gradient(from calc(var(--deg) / 2.5) at 50% 0%, var(--primary-color) 0 1deg, transparent 2deg 3deg),
    repeating-conic-gradient(from calc(var(--deg) * 5) at 50% 100%, var(--secondary-color) 0 1deg, transparent 2deg 3deg)
  `
})

function App() {
  return (
    <div
      className={bodyStyle}
      style={{
        "--primary-color": "#439cfb",
        "--secondary-color": "#f187fb"
      }}
    />
  )
}

const rootDiv = document.createElement("div")
document.body.appendChild(rootDiv)
createRoot(rootDiv).render(
  <StrictMode>
    <App />
  </StrictMode>
)
