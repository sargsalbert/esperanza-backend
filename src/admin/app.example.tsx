import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to MyCompany!",
      },
    },
    head: {
      favicon: "./extensions/logo.png",
    },
    auth: {
      logo: "./extensions/logo.png",
    },
    menu: {
      logo: "./extensions/logo.png",
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
