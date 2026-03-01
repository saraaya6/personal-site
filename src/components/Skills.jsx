import { useEffect, useRef, useState } from 'react'

const skills = [
    { name: 'React', desc: 'بناء واجهات تفاعلية', level: 90, icon: '⚛️' },
    { name: 'JavaScript', desc: 'البرمجة الأساسية', level: 85, icon: '🟨' },
    { name: 'CSS / التصميم', desc: 'تصميم متجاوب وأنيق', level: 88, icon: '🎨' },
    { name: 'Git / GitHub', desc: 'إدارة الكود والتعاون', level: 80, icon: '🔀' },
    { name: 'Node.js', desc: 'تطوير الواجهة الخلفية', level: 70, icon: '🟩' },
    { name: 'قواعد البيانات', desc: 'SQL و NoSQL', level: 65, icon: '🗄️' },
]

function Skills() {
    const [animated, setAnimated] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setAnimated(true)
            },
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">المهارات</h2>
                <p className="section-subtitle">التقنيات التي أتقنها وأعمل بها يومياً</p>

                <div className="skills-grid" ref={ref}>
                    {skills.map((s, i) => (
                        <div
                            className="skill-card animate-on-scroll"
                            key={s.name}
                            style={{
                                transitionDelay: `${i * 0.1}s`,
                                opacity: animated ? 1 : 0,
                                transform: animated ? 'translateY(0)' : 'translateY(40px)',
                            }}
                        >
                            <div className="skill-icon">{s.icon}</div>
                            <h3 className="skill-name">{s.name}</h3>
                            <p className="skill-desc">{s.desc}</p>
                            <div className="skill-bar-container">
                                <div
                                    className={`skill-bar-fill ${animated ? 'animated' : ''}`}
                                    style={{ width: animated ? `${s.level}%` : '0%' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
