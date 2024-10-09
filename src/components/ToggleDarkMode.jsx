import { useState, useEffect } from 'react';

export default function ToggleDarkMode() {
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme) {
            setTheme(storedTheme)
            document.getElementsByTagName('html')[0].classList.add(storedTheme)
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
            document.getElementsByTagName('html')[0].classList.add("dark")
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)

        document.getElementsByTagName('html')[0] .classList.remove(theme)
        document.getElementsByTagName('html')[0] .classList.add(newTheme)
    }

    return ( 
        <button onClick={toggleTheme}>
            Switch
        </button>
    )
}
