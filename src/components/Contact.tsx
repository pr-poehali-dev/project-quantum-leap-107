export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">Авторы проекта</span>
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-6 text-balance">
          Проектная работа
        </h2>
        <p className="text-muted-foreground text-lg mb-16 leading-relaxed">
          Введение в проектную деятельность · 9 «Б» класс
        </p>

        {/* Authors */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-background border border-border">
            <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4 text-2xl">
              ✈️
            </div>
            <p className="font-serif text-2xl text-foreground mb-1">Ментей Пётр</p>
            <p className="text-sm text-muted-foreground">9 «Б» класс</p>
          </div>
          <div className="p-8 rounded-2xl bg-background border border-border">
            <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4 text-2xl">
              🛩️
            </div>
            <p className="font-serif text-2xl text-foreground mb-1">Некрасова Елизавета</p>
            <p className="text-sm text-muted-foreground">9 «Б» класс</p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="p-8 rounded-2xl bg-sage/10 border border-sage/20 text-left">
          <p className="text-sm uppercase tracking-widest text-sage mb-4">Заключение</p>
          <p className="text-foreground font-serif text-xl leading-relaxed mb-4">
            В ходе проекта мы изучили историю авиамоделизма, освоили технологию изготовления модели из пенопласта
            и собрали летающий самолёт с резиновым приводом.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Проект показал, что создание модели — это не только увлекательное занятие, но и отличный способ
            познакомиться с основами аэродинамики, развить аккуратность и инженерное мышление.
          </p>
        </div>

        {/* Sources */}
        <div className="mt-12 text-left">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 text-center">Список источников</p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-sage mt-0.5">1.</span>
              <span>Учебник по технологии. 9 класс — основная теоретическая база проекта</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage mt-0.5">2.</span>
              <span>Энциклопедия юного техника — история авиации и авиамоделизма</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
