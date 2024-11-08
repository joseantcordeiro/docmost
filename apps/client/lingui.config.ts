import type { LinguiConfig } from "@lingui/conf"

const config: LinguiConfig = {
    locales: ["en", "pt", "fr", "es"],
    catalogs: [
        {
            path: "src/locales/{locale}",
            include: ["src"],
        },
    ],
}

export default config