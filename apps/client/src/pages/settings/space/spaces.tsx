import SettingsTitle from "@/components/settings/settings-title.tsx";
import SpaceList from "@/features/space/components/space-list.tsx";
import useUserRole from "@/hooks/use-user-role.tsx";
import {Group} from "@mantine/core";
import CreateSpaceModal from "@/features/space/components/create-space-modal.tsx";
import {getAppName} from "@/lib/config.ts";
import {Helmet} from "react-helmet-async";
import { t } from "@lingui/macro";

export default function Spaces() {
    const {isAdmin} = useUserRole();

    return (
        <>
            <Helmet>
                <title>{t({id: "spaces.title", message: "Spaces"})} - {getAppName()}</title>
            </Helmet>
            <SettingsTitle title={t({id: "spaces.spaces", message: "Spaces"})}/>

            <Group my="md" justify="flex-end">
                {isAdmin && <CreateSpaceModal/>}
            </Group>

            <SpaceList/>
        </>
    );
}
