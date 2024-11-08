import { Helmet } from "react-helmet-async";
import { InviteSignUpForm } from "@/features/auth/components/invite-sign-up-form.tsx";
import {getAppName} from "@/lib/config.ts";
import { Trans } from "@lingui/macro";

export default function InviteSignup() {
  return (
    <>
        <Helmet>
            <title><Trans>Invitation Signup - {getAppName()}</Trans></title>
        </Helmet>
      <InviteSignUpForm />
    </>
  );
}
