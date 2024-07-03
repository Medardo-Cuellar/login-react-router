export default function PageSection({children, title, className, contentClassName}) {
    return(
        <section className={className}>
            <div
            className={contentClassName}>
                {title && <h2 className="text-4xl font-bold text-center">{title}</h2>}
                {children}
            </div>
        </section>
    )
}