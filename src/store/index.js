import { createStore } from "vuex";

export default createStore({
  state: {
    link: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfm_Yj07urIb_fF0mTRGZgl5DWt5lC2qYd4TngwXWMgMHiYMg/viewform?pli=1",
    },
    banner: {
      Header: "Стань нашим респондентом",
      Description:
        "Мы хотим услышать твое мнение, опыт и боли общения с цифровыми продуктами Beeline.",
      Button: "Я готов!",
    },
    whois: {
      Header: "Кто такой респондент?",
      Description:
        "Респондент - человек, принимающий участие в опросе, интервью или тестировании дизайна. Мы используем твои ответы в проектировании новых продуктов, чтобы сделать их понятнее, удобнее и приятнее для пользователей.",
    },
    features: {
      Header: "Какие плюсы?",
      firstCard: {
        name: "Будь первым",
        description:
          "Ты первым увидишь наши новые продукты и поучаствуешь в их разработке",
      },
      secondCard: {
        name: "Поделись опытом",
        description:
          "Будем рады узнать о твоем опыте использования наших продуктов",
      },
      thirdCard: {
        name: "Получи уникальную ачивку",
        description:
          "Блестящая, свеженькая и такая уникальная ачивка в приложении “Мой Билайн”",
      },
    },
    howto: {
      header: "Как принять участие?",
      first: {
        Header: "Оставь заявку",
        Description:
          "Заполни форму максимально честно, выбери продукты которые хочешь тестировать",
      },
      second: {
        Header: "Ожидай приглашения на интервью",
        Description:
          "Будь на связи :) Мы напишем/позвоним тебе заранее и договоримся об удобном времени. Обычно интервью не занимает больше 30-40 минут.",
      },
      third: {
        Header: "Позаботься об окружении",
        Description:
          "Выбери спокойное, тихое место с хорошим интернетом. Обязательно приноси с собой хорошее настроение 😉",
      },
      fourth: {
        Header: "Получи клевую ачивку",
        Description:
          "После первого интервью, в приложении Мой Билайн тебе откроется новая ачивка «Яркий пиздюк». Спасибо, что ты с нами!",
      },
    },
  },
  getters: {
    getLink: (state) => state.link.url,
    //banner
    bannerHeader: (state) => state.banner.Header,
    bannerDescription: (state) => state.banner.Description,
    bannerButton: (state) => state.banner.Button,
    //whois
    whoisHeader: (state) => state.whois.Header,
    whoisDescription: (state) => state.whois.Description,
    //features
    featuresHeader: (state) => state.features.Header,
    featuresFirstCardName: (state) => state.features.firstCard.name,
    featuresFirstCardDescription: (state) =>
      state.features.firstCard.description,
    featuresSecondCardName: (state) => state.features.secondCard.name,
    featuresSecondCardDescription: (state) =>
      state.features.secondCard.description,
    featuresThirdCardName: (state) => state.features.thirdCard.name,
    featuresThirdCardDescription: (state) =>
      state.features.thirdCard.description,
    // howto
    howtoHeader: (state) => state.howto.header,
    howtoFirstName: (state) => state.howto.first.Header,
    howtoFirstDesc: (state) => state.howto.first.Description,
    howtoSecondName: (state) => state.howto.second.Header,
    howtoSecondDesc: (state) => state.howto.second.Description,
    howtoThirdName: (state) => state.howto.third.Header,
    howtoThirdDesc: (state) => state.howto.third.Description,
    howtoFourthName: (state) => state.howto.fourth.Header,
    howtoFourthDesc: (state) => state.howto.fourth.Description,
  },
  mutations: {},
  actions: {},
  modules: {},
});
