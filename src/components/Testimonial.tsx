export function Testimonial() {
  return (
    <section className="py-32 px-6 bg-sage/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-8 block">Польза авиамоделизма</span>

        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight tracking-tight mb-10 text-balance">
          «Создание модели самолёта развивает пространственное мышление, мелкую моторику и инженерный взгляд на мир.»
        </blockquote>

        <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
          <div className="text-center">
            <p className="font-serif text-4xl text-foreground mb-1">🧠</p>
            <p className="text-sm font-medium text-foreground">Логика и мышление</p>
            <p className="text-xs text-muted-foreground mt-1">Развитие инженерного подхода</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl text-foreground mb-1">✋</p>
            <p className="text-sm font-medium text-foreground">Мелкая моторика</p>
            <p className="text-xs text-muted-foreground mt-1">Точность и аккуратность</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl text-foreground mb-1">📐</p>
            <p className="text-sm font-medium text-foreground">Работа с чертежом</p>
            <p className="text-xs text-muted-foreground mt-1">Пространственное воображение</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl text-foreground mb-1">🚀</p>
            <p className="text-sm font-medium text-foreground">Интерес к авиации</p>
            <p className="text-xs text-muted-foreground mt-1">Путь к профессии</p>
          </div>
        </div>
      </div>
    </section>
  );
}
