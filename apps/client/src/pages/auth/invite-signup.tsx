import { Helmet } from "react-helmet-async";
import { InviteSignUpForm } from "@/features/auth/components/invite-sign-up-form.tsx";
import {getAppName} from "@/lib/config.ts";
import { t } from "@lingui/macro";

export default function InviteSignup() {
  return (
    <>
        <Helmet>
            <title>{t({id: "invite.signup.title", message: "Invitation Signup"})} - {getAppName()}</title>
        </Helmet>
      <InviteSignUpForm />
    </>
  );
}
