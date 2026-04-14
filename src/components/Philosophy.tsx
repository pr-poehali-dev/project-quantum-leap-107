export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/c9c88917-24a1-41c4-aa4c-ddeed932d193/files/199feebf-865a-484d-830d-50d07a7481ff.jpg"
              alt="Модель самолёта из пены"
              className="w-full h-full object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                «Мечты об авиации начинаются с маленькой модели в руках ребёнка.»
              </p>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col gap-8">
            <span className="text-sm uppercase tracking-widest text-sage">История авиамоделизма</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight text-balance">
              От Леонардо да Винчи до наших дней
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Мечта о полёте существовала всегда. Леонардо да Винчи в XV веке создавал чертежи летательных
                аппаратов, вдохновлённых птицами. Его орнитоптеры и винтокрылые машины стали первыми
                систематическими попытками покорить небо.
              </p>
              <p>
                В XIX веке Отто Лилиенталь совершил первые управляемые полёты на планёрах, а братья Райт
                в 1903 году подняли в воздух первый моторный самолёт. Авиамоделизм как спорт и хобби
                сформировался в начале XX века и сегодня остаётся отличной школой инженерного мышления.
              </p>
              <p>
                Создание модели с резиновым приводом — это классика авиамоделизма: простая конструкция,
                понятная физика, и огромный простор для творчества.
              </p>
            </div>
            <div className="pt-4">
              <a href="#features" className="inline-flex items-center gap-2 text-foreground group">
                <span className="border-b border-foreground pb-0.5">Как собрать модель</span>
                <span className="text-terracotta group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
