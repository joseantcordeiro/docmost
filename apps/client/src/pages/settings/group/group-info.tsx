import SettingsTitle from "@/components/settings/settings-title.tsx";
import GroupMembersList from "@/features/group/components/group-members";
import GroupDetails from "@/features/group/components/group-details";
import {getAppName} from "@/lib/config.ts";
import {Helmet} from "react-helmet-async";
import { t } from "@lingui/macro";

export default function GroupInfo() {
    return (
        <>
            <Helmet>
                <title>{t({id: "group.info.title", message: "Manage Group"})} - {getAppName()}</title>
            </Helmet>
            <SettingsTitle title={t({id: "group.info.manage_group", message: "Manage Group"})}/>
            <GroupDetails/>
            <GroupMembersList/>
        </>
    );
}
