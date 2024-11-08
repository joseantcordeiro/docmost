import { ForgotPasswordForm } from "@/features/auth/components/forgot-password-form";
import { getAppName } from "@/lib/config";
import { Helmet } from "react-helmet-async";
import { Trans } from "@lingui/macro";

export default function ForgotPassword() {
    return (
        <>
            <Helmet>
                <title><Trans>Forgot Password - {getAppName()}</Trans></title>
            </Helmet>
            <ForgotPasswordForm />
        </>
    );
}
