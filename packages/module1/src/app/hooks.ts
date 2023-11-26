import {useTranslation} from "react-i18next";
import {i18n} from "@stenafh/core";

export const useAppTranslation = () => useTranslation('default', {i18n: i18n});
