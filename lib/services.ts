export const englishPricelist = {
  haircuts: {
    heading: "Haircuts",
    services: [
      {
        title: [
          "Стрижка женская",
          "(короткие/средние/длинные волосы)",
        ],
        price: "15/25/35",
      },
      {
        title: [
          "Стрижка",
          "(кончики, по форме)",
        ],
        price: "15",
      },
      {
        title: [
          "Прямой срез",
        ],
        price: "12",
      },
      {
        title: [
          "Стрижка челки",
        ],
        price: "7",
      },
      {
        title: [
          "Полировка по длине",
        ],
        price: "25",
      },
      {
        title: [
          "Стрижка мужская",
        ],
        price: "20/25",
      },
      {
        title: [
          "Стрижка машинкой мужская",
        ],
        price: "15",
      },
      {
        title: [
          "Стрижка детская (до 12 лет)",
        ],
        price: "15",
      },
    ],
    addons: "+ 10 Мытье & Стандартная укладка (Брашинг)",
  },
  styling: {
    heading: "Styling",
    description: "Стандартная укладка",
    services: [
      {
        title: [
          "Мытье + Брашинг",
        ],
        price: "10",
      },
      {
        title: [
          "Плойка Конус / Щипцы / Гафре",
        ],
        price: "+5",
      },
      {
        title: [
          "Утюг",
        ],
        price: "+7",
      },
      {
        title: [
          "Beach waves",
        ],
        price: "+10",
      },
    ],
  },
  colouring: {
    heading: "Colouring",
    description:
      "* Цены на окрашивания указаны без учета расходных материалов Материалы AlterEgo Italy",
    services: [
      {
        title: "Окрашивание корней",
        options: [
          {
            title: "краской",
            price: "30",
          },
          {
            title: "осветляющим порошком (крем)",
            price: "35",
          },
        ],
      },
      {
        title: "Окрашивание по длине / тон-в-тон",
        options: [
          {
            title: "(короткие/средние/длинные волосы)",
            price: "40/50/60",
          },
        ],
      },
      {
        title: "Тонирование",
        options: [
          {
            title: "тон-в-тон (короткие/средние/длинные волосы)",
            price: "40/50/60",
          },
          {
            title: "после блондирования",
            price: "30",
          },
        ],
      },
      {
        title: "Мелирование",
        options: [
          {
            title: "корни (до 5см)",
            price: "50",
          },
          {
            title: "full",
            price: "90",
          },
          {
            title: "half",
            price: "70",
          },
        ],
      },
      {
        title: "Сложное орашивание",
        options: [
          {
            title: "Balayage, Shatush, Airtouch, Handtouch, Ombre, ect.",
            price: "от 100",
          },
        ],
      },
    ],
    addons: "+ 10 Мытье & Стандартная укладка (Брашинг)",
  },
  treatments: {
    heading: "Treatments",
    services: [
      {
        title: [
          "GK Восстановление",
        ],
        price: "25",
      },
      {
        title: [
          "4-step Botugen Hair Ritual",
        ],
        price: "50 + расход",
      },
      {
        title: [
          "FULL EGOBOND 3-step Treatment",
        ],
        price: "50 + расход",
      },
      {
        title: [
          "Добавление BOND 1 (Booster) в краску & блонд (8гр)",
        ],
        price: "10",
      },
    ],
  },
} as const;
