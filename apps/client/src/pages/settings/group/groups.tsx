import GroupList from "@/features/group/components/group-list";
import SettingsTitle from "@/components/settings/settings-title.tsx";
import { Group } from "@mantine/core";
import CreateGroupModal from "@/features/group/components/create-group-modal";
import useUserRole from "@/hooks/use-user-role.tsx";
import {getAppName} from "@/lib/config.ts";
import {Helmet} from "react-helmet-async";
import { t } from "@lingui/macro";

export default function Groups() {
  const { isAdmin } = useUserRole();

  return (
    <>
        <Helmet>
            <title>{t({id: "groups.title", message: "Groups"})} - {getAppName()}</title>
        </Helmet>
      <SettingsTitle title={t({id: "groups.groups", message: "Groups"})} />

      <Group my="md" justify="flex-end">
        {isAdmin && <CreateGroupModal />}
      </Group>

      <GroupList />
    </>
  );
}
