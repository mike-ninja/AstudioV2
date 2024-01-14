export const englishPricelist = {
  haircuts: {
    heading: "Haircuts",
    services: [
      {
        title: [
          "Women's haircut",
          "(short/medium/long hair)",
        ],
        price: "20/40/50",
      },
      {
        title: [
          "Bangs",
        ],
        price: "15",
      },
      {
        title: [
          "Length polishing",
        ],
        price: "40",
      },
      {
        title: [
          "Men’s Haircut",
        ],
        price: "20",
      },
      {
        title: [
          "Children’s haircut (until 12 years old)",
        ],
        price: "15",
      },
    ],
  },
  styling: {
    heading: "Styling",
    services: [
      {
        title: [
          "Brushing",
        ],
        price: "20",
      },
      {
        title: [
          "Curler, Iron, Beach waves, etc",
        ],
        price: "25",
      },
    ],
  },
  colouring: {
    heading: "Colouring",
    description:
      "*Prices for colouring includes the use of materials plus wahing & brushing. Materials: AlterEgo Italy",
    services: [
      {
        title: "Roots",
        options: [
          {
            title: "colour",
            price: "40",
          },
          {
            title: "bleaching powder (cream)",
            price: "45",
          },
        ],
      },
      {
        title: "Length colouring / same tone",
        options: [
          {
            title: "(short/medium/long hair)",
            price: "50/60/70",
          },
        ],
      },
      {
        title: "Toning",
        options: [
          {
            title: "same tone (short/medium/long hair)",
            price: "50/60/70",
          },
          {
            title: "after blonde",
            price: "40",
          },
        ],
      },
      {
        title: "Highlights",
        options: [
          {
            title: "Depends on the amount",
            price: "70-120",
          },
        ],
      },
      {
        title: "Difficult colouring techniques",
        options: [
          {
            title: "Balayage, Shatush, Airtouch, Handtouch, Ombre, ect.",
            price: "from 150",
          },
        ],
      },
    ],
  },
  treatments: {
    heading: "Treatments",
    services: [
      {
        title: [
          "4-step Botugen Hair Ritual",
        ],
        price: "50 + use",
      },
      {
        title: [
          "FULL EGOBOND 3-step Treatment",
        ],
        price: "50 + use",
      },
      {
        title: [
          "Add BOND 1 (Booster) to colouring & blond (8g)",
        ],
        price: "15",
      },
    ],
  },
} as const;

export const russianPricelist = {
  haircuts: {
    heading: "Стрижки",
    services: [
      {
        title: [
          "Стрижка женская",
          "(короткие/средние/длинные волосы)",
        ],
        price: "20/40/50",
      },
      {
        title: [
          "Стрижка челки",
        ],
        price: "15",
      },
      {
        title: [
          "Полировка по длине",
        ],
        price: "40",
      },
      {
        title: [
          "Стрижка мужская",
        ],
        price: "20",
      },
      {
        title: [
          "Стрижка детская (до 12 лет)",
        ],
        price: "15",
      },
    ],
  },
  styling: {
    heading: "Styling",
    description: "Стандартная укладка",
    services: [
      {
        title: [
          "Брашинг",
        ],
        price: "20",
      },
      {
        title: [
          "Плойка Конус / Щипцы / Гафре / Утюг / Beach waves",
        ],
        price: "25",
      },
    ],
  },
  colouring: {
    heading: "Окрашивание",
    description:
      "* Цены на окрашивания указаны с учетом расходных материалов. Мытье & укладка на брашинг включены в стоимость. Материалы: AlterEgo Italy",
    services: [
      {
        title: "Окрашивание корней",
        options: [
          {
            title: "краской",
            price: "40",
          },
          {
            title: "осветляющим порошком (крем)",
            price: "45",
          },
        ],
      },
      {
        title: "Окрашивание по длине / тон-в-тон",
        options: [
          {
            title: "(короткие/средние/длинные волосы)",
            price: "50/60/70",
          },
        ],
      },
      {
        title: "Тонирование",
        options: [
          {
            title: "тон-в-тон (короткие/средние/длинные волосы)",
            price: "50/60/70",
          },
          {
            title: "после блондирования",
            price: "40",
          },
        ],
      },
      {
        title: "Мелирование",
        options: [
          {
            title: "Зависит от количества",
            price: "70-120",
          },
        ],
      },
      {
        title: "Сложное орашивание",
        options: [
          {
            title: "Balayage, Shatush, Airtouch, Handtouch, Ombre, ect.",
            price: "от 150",
          },
        ],
      },
    ],
  },
  treatments: {
    heading: "Treatments",
    services: [
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
        price: "15",
      },
    ],
  },
} as const;
