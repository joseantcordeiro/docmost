import AccountNameForm from "@/features/user/components/account-name-form";
import ChangeEmail from "@/features/user/components/change-email";
import ChangePassword from "@/features/user/components/change-password";
import { Divider } from "@mantine/core";
import AccountAvatar from "@/features/user/components/account-avatar";
import SettingsTitle from "@/components/settings/settings-title.tsx";
import {getAppName} from "@/lib/config.ts";
import {Helmet} from "react-helmet-async";
import { t } from "@lingui/macro";

export default function AccountSettings() {
  return (
    <>
        <Helmet>
            <title>{t({id: "account.settings.title", message: "My Profile"})} - {getAppName()}</title>
        </Helmet>
      <SettingsTitle title={t({id: "account.settings.my_profile", message: "My Profile"})} />

      <AccountAvatar />

      <AccountNameForm />

      <Divider my="lg" />

      <ChangeEmail />

      <Divider my="lg" />

      <ChangePassword />
    </>
  );
}
