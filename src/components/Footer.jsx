function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <p>
                © {year} — صنع بـ 💜 بواسطة <span>Portfolio</span>
            </p>
        </footer>
    )
}

export default Footer
