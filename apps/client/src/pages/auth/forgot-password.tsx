import { ForgotPasswordForm } from "@/features/auth/components/forgot-password-form";
import { getAppName } from "@/lib/config";
import { Helmet } from "react-helmet-async";
import { t } from "@lingui/macro";

export default function ForgotPassword() {
    return (
        <>
            <Helmet>
                <title>{t({id: "forgot.password.title", message: "Forgot Password"})} - {getAppName()}</title>
            </Helmet>
            <ForgotPasswordForm />
        </>
    );
}
