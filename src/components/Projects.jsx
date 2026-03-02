import { useEffect, useRef, useState } from 'react'

const projects = [
    {
        title: 'متجر إلكتروني',
        desc: 'منصة تسوق كاملة مع سلة مشتريات ونظام دفع آمن، مبنية بـ React و Node.js.',
        tags: ['React', 'Node.js', 'MongoDB'],
        icon: '🛒',
        demo: '#',
        code: '#',
    },
    {
        title: 'لوحة تحكم',
        desc: 'لوحة تحكم تفاعلية لإدارة البيانات مع رسوم بيانية ديناميكية وتقارير.',
        tags: ['React', 'Chart.js', 'REST API'],
        icon: '📊',
        demo: '#',
        code: '#',
    },
    {
        title: 'تطبيق مهام',
        desc: 'تطبيق لإدارة المهام اليومية مع إمكانية الترتيب والفلترة والتنبيهات.',
        tags: ['JavaScript', 'CSS', 'LocalStorage'],
        icon: '✅',
        demo: '#',
        code: '#',
    },
]

function Projects() {
    const [animated, setAnimated] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setAnimated(true)
            },
            { threshold: 0.15 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">المشاريع</h2>
                <p className="section-subtitle">بعض الأعمال التي أفتخر بها</p>

                <div className="projects-grid" ref={ref}>
                    {projects.map((p, i) => (
                        <div
                            className="project-card"
                            key={p.title}
                            style={{
                                transitionDelay: `${i * 0.15}s`,
                                opacity: animated ? 1 : 0,
                                transform: animated ? 'translateY(0)' : 'translateY(40px)',
                                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                            }}
                        >
                            <div className="project-image">{p.icon}</div>
                            <div className="project-info">
                                <div className="project-tags">
                                    {p.tags.map((tag) => (
                                        <span className="project-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <h3 className="project-title">{p.title}</h3>
                                <p className="project-desc">{p.desc}</p>
                                <div className="project-links">
                                    <a href={p.demo} className="project-link">🔗 معاينة</a>
                                    <a href={p.code} className="project-link">💻 الكود</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
