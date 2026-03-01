function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <span className="hero-badge">👋 مرحباً بالعالم</span>
                <h1>
                    أنا <span className="gradient-text">مطور ويب</span>
                    <br />أبني تجارب رقمية مميزة
                </h1>
                <p className="hero-subtitle">
                    أحب تحويل الأفكار إلى مواقع ويب حديثة وأنيقة باستخدام أحدث التقنيات.
                    <br />مرحباً بك في معرض أعمالي!
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">
                        🚀 استعرض مشاريعي
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        ✉️ تواصل معي
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
