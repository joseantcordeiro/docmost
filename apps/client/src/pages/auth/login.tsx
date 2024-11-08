import { LoginForm } from "@/features/auth/components/login-form";
import { Helmet } from "react-helmet-async";
import {getAppName} from "@/lib/config.ts";
import { Trans } from "@lingui/macro";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title><Trans>Login - {getAppName()}</Trans></title>
      </Helmet>
      <LoginForm />
    </>
  );
}
