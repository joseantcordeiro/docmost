import type { LinguiConfig } from "@lingui/conf"

const config: LinguiConfig = {
    locales: ["en_US", "pt_PT", "fr_FR", "es_ES"],
    catalogs: [
        {
            path: "src/locales/{locale}",
            include: ["src"],
        },
    ],
}

export default config