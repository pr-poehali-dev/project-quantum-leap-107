import Icon from "@/components/ui/icon";

const steps = [
  {
    icon: "FileText",
    step: "01",
    title: "Подготовка чертежа",
    description: "Разрабатываем схему модели с указанием всех размеров: размах крыльев, длина фюзеляжа, форма хвостового оперения.",
  },
  {
    icon: "Scissors",
    step: "02",
    title: "Разметка и вырезание деталей",
    description: "Переносим чертёж на пенопласт, аккуратно вырезаем все элементы: крыло, фюзеляж, стабилизатор и киль.",
  },
  {
    icon: "Layers",
    step: "03",
    title: "Сборка фюзеляжа",
    description: "Склеиваем основу самолёта — фюзеляж. Проверяем симметрию и ровность конструкции на плоской поверхности.",
  },
  {
    icon: "Wind",
    step: "04",
    title: "Установка крыла и хвоста",
    description: "Крепим крыло в центре тяжести модели, устанавливаем хвостовое оперение под правильным углом для устойчивости.",
  },
  {
    icon: "Zap",
    step: "05",
    title: "Установка резинового двигателя",
    description: "Монтируем резиновый жгут от хвостового крюка до пропеллера. Резиновый двигатель — простой и надёжный источник тяги.",
  },
  {
    icon: "CheckCircle",
    step: "06",
    title: "Проверка и запуск модели",
    description: "Балансируем модель, проверяем центр тяжести, заводим пропеллер и отпускаем — модель готова к полёту!",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">Пошаговая инструкция</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Как собрать модель самолёта
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
            От чертежа до первого полёта — шесть простых шагов
          </p>
        </div>

        {/* Assembly image */}
        <div className="mb-16 rounded-2xl overflow-hidden aspect-[21/9]">
          <img
            src="https://cdn.poehali.dev/projects/c9c88917-24a1-41c4-aa4c-ddeed932d193/files/aa806534-a24c-4d7f-9362-44443eebdede.jpg"
            alt="Процесс сборки модели"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-sage/30 transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center group-hover:bg-sage/20 transition-colors duration-500">
                  <Icon name={step.icon} size={24} className="text-sage" />
                </div>
                <span className="font-serif text-3xl text-border">{step.step}</span>
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
