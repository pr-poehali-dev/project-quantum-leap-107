import Icon from "@/components/ui/icon";

const engine = [
  {
    name: "Конструкция модели",
    description: "Лёгкий и прочный материал",
    features: [
      "Фюзеляж — пенопласт ПС-4",
      "Крыло — прямое, трапециевидное",
      "Размах крыла: 40 см",
      "Длина модели: 30 см",
      "Масса без двигателя: ~15 г",
    ],
    highlighted: false,
  },
  {
    name: "Резиновый двигатель",
    description: "Простой и эффективный привод",
    features: [
      "Резиновый жгут сечением 2×2 мм",
      "Длина жгута: 25–30 см",
      "Количество закруток: 80–120 об.",
      "Пропеллер диаметром 15 см",
      "Время полёта: 20–40 секунд",
    ],
    highlighted: true,
  },
];

const materials = [
  { icon: "Square", name: "Пенопласт ПС-4" },
  { icon: "Minus", name: "Резиновый жгут" },
  { icon: "Circle", name: "Пропеллер пластиковый" },
  { icon: "Pipette", name: "Клей ПВА" },
  { icon: "Scissors", name: "Нож канцелярский" },
  { icon: "Ruler", name: "Линейка и карандаш" },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-amber mb-4 block">Технологии и материалы</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4 text-balance">
            Из чего собрана модель
          </h2>
          <p className="text-muted-foreground text-lg">Доступные материалы и простая технология изготовления</p>
        </div>

        {/* Tech specs */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {engine.map((plan, index) => (
            <div
              key={index}
              className={`p-8 md:p-10 rounded-2xl border ${
                plan.highlighted ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
              }`}
            >
              <h3 className={`text-xl mb-2 ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`mb-8 text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Icon name="Check" size={18} className="text-sage" />
                    <span className={plan.highlighted ? "text-primary-foreground/90" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Materials list */}
        <div className="bg-card rounded-2xl border border-border p-10">
          <h3 className="font-serif text-2xl text-foreground mb-2 text-center">Необходимые материалы</h3>
          <p className="text-muted-foreground text-center text-sm mb-8">Экономичный набор для изготовления</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {materials.map((mat, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                <Icon name={mat.icon} size={18} className="text-sage shrink-0" />
                <span className="text-sm text-foreground">{mat.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-8">
            <span className="text-foreground font-medium">Экономическая оценка:</span> общая стоимость материалов — около 150–200 рублей
          </p>
        </div>
      </div>
    </section>
  );
}
