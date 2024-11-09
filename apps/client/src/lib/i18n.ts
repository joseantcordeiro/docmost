import { i18n } from "@lingui/core";

export const locales = {
    en_US: "English",
    pt_PT: "Português",
    fr_FR: "Français",
    es_ES: "Español"
};
export const defaultLocale = "pt_PT";

/**
 * Dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export async function dynamicActivate(locale: string) {
    const { messages } = await import(`../locales/${locale}.ts`);
    i18n.load(locale, messages);
    i18n.activate(locale);
}