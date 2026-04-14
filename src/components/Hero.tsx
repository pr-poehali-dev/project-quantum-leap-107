import Icon from "@/components/ui/icon";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/c9c88917-24a1-41c4-aa4c-ddeed932d193/files/ab644550-65fd-4d9d-a911-86ce3af1e84a.jpg"
          alt="Модель самолёта в полёте"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Subtle badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/10 text-sage mb-8">
          <span className="w-2 h-2 rounded-full bg-sage" />
          <span className="text-sm">Проектная работа · 9 «Б» класс</span>
        </div>

        {/* Main heading with serif font */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-[1.1] text-balance mb-8">
          Модель самолёта
          <br />
          <span className="italic">из пены</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
          Разработка и изготовление авиамодели с резиновым приводом — от чертежа до первого полёта.
        </p>
        <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed mb-12">
          Авторы: <span className="text-foreground">Ментей Пётр</span> и <span className="text-foreground">Некрасова Елизавета</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#features"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base hover:opacity-90 transition-all duration-300"
          >
            Смотреть инструкцию
            <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#philosophy"
            className="inline-flex items-center gap-2 px-8 py-4 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            История авиамоделизма
          </a>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-border" />
      </div>
    </section>
  );
}
