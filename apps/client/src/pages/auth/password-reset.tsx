import { Helmet } from "react-helmet-async";
import { PasswordResetForm } from "@/features/auth/components/password-reset-form";
import { Link, useSearchParams } from "react-router-dom";
import { useVerifyUserTokenQuery } from "@/features/auth/queries/auth-query";
import { Button, Container, Group, Text } from "@mantine/core";
import APP_ROUTE from "@/lib/app-route";
import {getAppName} from "@/lib/config.ts";
import {t, Trans} from "@lingui/macro";

export default function PasswordReset() {
  const [searchParams] = useSearchParams();
  const { data, isLoading, isError } = useVerifyUserTokenQuery({
    token: searchParams.get("token"),
    type: "forgot-password",
  });
  const resetToken = searchParams.get("token");

  if (isLoading) {
    return <div></div>;
  }

  if (isError || !resetToken) {
    return (
      <>
        <Helmet>
          <title>{t({id: "password.reset.title", message: "Password Reset"})} - {getAppName()}</title>
        </Helmet>
        <Container my={40}>
          <Text size="lg" ta="center">
              <Trans id="password.reset.invalid">Invalid or expired password reset link</Trans>
          </Text>
          <Group justify="center">
            <Button
              component={Link}
              to={APP_ROUTE.AUTH.LOGIN}
              variant="subtle"
              size="md"
            >
                <Trans id="password.reset.goto">Goto login page</Trans>
            </Button>
          </Group>
        </Container>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title><Trans id="password.reset.title">Password Reset - {getAppName()}</Trans></title>
      </Helmet>
      <PasswordResetForm resetToken={resetToken} />
    </>
  );
}
