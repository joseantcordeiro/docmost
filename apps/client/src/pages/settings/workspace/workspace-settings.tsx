import SettingsTitle from "@/components/settings/settings-title.tsx";
import WorkspaceNameForm from "@/features/workspace/components/settings/components/workspace-name-form";
import {getAppName} from "@/lib/config.ts";
import {Helmet} from "react-helmet-async";
import { Trans } from "@lingui/macro";

export default function WorkspaceSettings() {
    return (
        <>
            <Helmet>
                <title><Trans>Workspace Settings - {getAppName()}</Trans></title>
            </Helmet>
            <SettingsTitle title="General"/>
            <WorkspaceNameForm/>
        </>
    );
}
