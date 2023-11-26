const quizData = [
    {
      number: 1,
      title: "На какое количество человек ваше мероприятие?",
      answer_alias: "people",
      answers: [
        {
          answer_title: "До 50",
          type: "radio",
        },
        {
          answer_title: "От 100",
          type: "radio",
        },
        {
          answer_title: "Более 500",
          type: "radio",
        },
        {
          answer_title: "Другой вариант",
          type: "text",
        },
      ],
    },
    {
      number: 2,
      title: "Какая у вас публика",
      answer_alias: "public",
      answers: [
        {
          answer_title: "Взросла",
          type: "radio",
        },
        {
          answer_title: "Детская",
          type: "radio",
        },
        {
          answer_title: "Смешанная (обычно от 7-14 лет)",
          type: "radio",
        },
      ],
    },
    {
      number: 3,
      title: "В какое время суток планируется событие",
      answer_alias: "ewening",
      answers: [
        {
          answer_title: "Световой день",
          type: "radio",
        },
        {
          answer_title: "Сумерки",
          type: "radio",
        },
        {
          answer_title: "Ночное время",
          type: "radio",
        },
      ],
    },
    {
      number: 4,
      title: "Как вы хотите занять гостей?",
      answer_alias: "active",
      answers: [
        {
          answer_title: "Ненадолго",
          type: "radio",
        },
        {
          answer_title: "Вовлечь в сюжет *интерактив",
          type: "radio",
        },
        {
          answer_title: "Увлечь внимание на сцене",
          type: "radio",
        },
        {
          answer_title: "Свой вариант, опишите",
          type: "text",
        },
      ],
    },
    {
      number: 5,
      title: "Какого формата площадка?",
      answer_alias: "place",
      answers: [
        {
          answer_title: "Под открытым небом",
          type: "radio",
        },
        {
          answer_title: "В помещении",
          type: "radio",
        },
      ],
    },
    {
      number: 6,
      title: "Имеется сцена на площадке, если да - то какая?",
      answer_alias: "scene",
      answers: [
        {
          answer_title: "Да, маленькая *до 4м",
          type: "radio",
        },
        {
          answer_title: "Да, большая *от 4м",
          type: "radio",
        },
        {
          answer_title: "Нет",
          type: "radio",
        },
      ],
    },
    {
      number: 7,
      title: "Какой бюджет?",
      answer_alias: "budget",
      answers: [
        {
          answer_title: "До 15.000руб",
          type: "radio",
        },
        {
          answer_title: "От 15.000 до 25.000руб",
          type: "radio",
        },
        {
          answer_title: "От 25.000 до 35.000",
          type: "radio",
        },
      ],
    },
    {
        number: 7,
        title: "Какой бюджет?",
        answer_alias: "tel",
        answers: [
          {
            answer_title: "Введите номер телефона",
            type: "text",
          },
        ],
      },
  ];