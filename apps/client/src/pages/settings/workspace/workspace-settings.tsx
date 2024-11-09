import SettingsTitle from "@/components/settings/settings-title.tsx";
import WorkspaceNameForm from "@/features/workspace/components/settings/components/workspace-name-form";
import {getAppName} from "@/lib/config.ts";
import {Helmet} from "react-helmet-async";
import { t } from "@lingui/macro";

export default function WorkspaceSettings() {
    return (
        <>
            <Helmet>
                <title>{t({id: "workspace.settings.title", message: "Workspace Settings"})} - {getAppName()}</title>
            </Helmet>
            <SettingsTitle title={t({id: "workspace.settings.general", message: "General"})}/>
            <WorkspaceNameForm/>
        </>
    );
}
