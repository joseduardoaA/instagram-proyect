import { useEffect, useState } from 'react'

const htmlElement = document.getElementsByTagName('html')

export default function Navbar () {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    htmlElement[0].setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const handleChangeThemeClick = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
      <div className="container">
        <a className="navbar-brand" href="#">
          Mi aplicación
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto d-flex">
            <button className="btn" onClick={handleChangeThemeClick}>
              {isDarkMode
                ? (
                <i className="bi bi-moon-stars-fill" />
                  )
                : (
                <i className="bi bi-brightness-high-fill" />
                  )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
