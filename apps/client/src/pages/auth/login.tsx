import { LoginForm } from "@/features/auth/components/login-form";
import { Helmet } from "react-helmet-async";
import {getAppName} from "@/lib/config.ts";
import { t } from "@lingui/macro";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>{t({id: "login.title", message: "Login"})} - {getAppName()}</title>
      </Helmet>
      <LoginForm />
    </>
  );
}
