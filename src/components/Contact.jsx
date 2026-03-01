import { useState, useRef, useEffect } from 'react'

function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) entry.target.classList.add('visible')
            },
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
        e.target.reset()
    }

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">تواصل معي</h2>
                <p className="section-subtitle">هل لديك مشروع في ذهنك؟ دعنا نتحدث!</p>

                <div className="contact-wrapper animate-on-scroll" ref={ref}>
                    <div className="contact-card">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">الاسم</label>
                                <input type="text" id="name" placeholder="أدخل اسمك" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">البريد الإلكتروني</label>
                                <input type="email" id="email" placeholder="أدخل بريدك الإلكتروني" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">الرسالة</label>
                                <textarea id="message" placeholder="اكتب رسالتك هنا..." required />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                {submitted ? '✅ تم الإرسال!' : '📨 إرسال الرسالة'}
                            </button>
                        </form>

                        <div className="contact-socials">
                            <a href="#" className="social-link" aria-label="GitHub" title="GitHub">
                                <span>GH</span>
                            </a>
                            <a href="#" className="social-link" aria-label="LinkedIn" title="LinkedIn">
                                <span>LI</span>
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter" title="Twitter">
                                <span>TW</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
