import { LOCALE_SET } from "../types";
import zh from 'react-intl/locale-data/zh';
export const localeSet = lang => ({
  type: LOCALE_SET,
  lang: zh,
});

export const setLocale = lang => dispatch => {
  localStorage.alhubLang = lang;
  dispatch(localeSet(lang));
};
