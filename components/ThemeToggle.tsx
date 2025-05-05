'use client'

import React, { useEffect, useState } from 'react'

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded bg-neutral-200 dark:bg-neutral-700 text-sm"
    >
      Toggle {darkMode ? 'Light' : 'Dark'}
    </button>
  )
}

export default ThemeToggle