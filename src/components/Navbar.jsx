import { useState, useEffect } from 'react'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { label: 'الرئيسية', href: '#hero' },
        { label: 'عني', href: '#about' },
        { label: 'المهارات', href: '#skills' },
        { label: 'المشاريع', href: '#projects' },
        { label: 'تواصل', href: '#contact' },
    ]

    const handleClick = () => setMenuOpen(false)

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <a href="#hero" className="navbar-logo">Portfolio</a>

            <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                {links.map((l) => (
                    <a key={l.href} href={l.href} onClick={handleClick}>{l.label}</a>
                ))}
            </div>

            <button
                className={`hamburger ${menuOpen ? 'active' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="فتح القائمة"
            >
                <span /><span /><span />
            </button>
        </nav>
    )
}

export default Navbar
