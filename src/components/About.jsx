import { useEffect, useRef } from 'react'

function About() {
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

    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">عني</h2>
                <p className="section-subtitle">تعرّف عليّ أكثر</p>

                <div className="about-content animate-on-scroll" ref={ref}>
                    <div className="about-card">
                        <p>
                            مطور ويب شغوف بالتكنولوجيا والتصميم. أعمل على بناء مواقع وتطبيقات
                            ويب حديثة باستخدام React و JavaScript وأحدث أدوات التطوير. أسعى دائماً
                            لتقديم تجارب مستخدم استثنائية تجمع بين الجمالية والأداء العالي.
                            أؤمن بأن التفاصيل الصغيرة تصنع الفارق الكبير.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <div className="stat-number">+10</div>
                                <div className="stat-label">مشروع مكتمل</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">+2</div>
                                <div className="stat-label">سنوات خبرة</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">+5</div>
                                <div className="stat-label">عملاء سعداء</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
