import { useState } from "react";
import * as z from "zod";
import { useForm, zodResolver } from "@mantine/form";
import useAuth from "@/features/auth/hooks/use-auth";
import { IForgotPassword } from "@/features/auth/types/auth.types";
import { Box, Button, Container, Text, TextInput, Title } from "@mantine/core";
import classes from "./auth.module.css";
import { useRedirectIfAuthenticated } from "@/features/auth/hooks/use-redirect-if-authenticated.ts";
import {t, Trans} from "@lingui/macro";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: t({id: "forgot.password.form.required", message: "Email is required"}) })
    .email({ message: t({id: "forgot.password.form.invalid", message: "Invalid email address"}) }),
});

export function ForgotPasswordForm() {
  const { forgotPassword, isLoading } = useAuth();
  const [isTokenSent, setIsTokenSent] = useState<boolean>(false);
  useRedirectIfAuthenticated();

  const form = useForm<IForgotPassword>({
    validate: zodResolver(formSchema),
    initialValues: {
      email: "",
    },
  });

  async function onSubmit(data: IForgotPassword) {
    if (await forgotPassword(data)) {
      setIsTokenSent(true);
    }
  }

  return (
    <Container size={420} my={40} className={classes.container}>
      <Box p="xl" mt={200}>
        <Title order={2} ta="center" fw={500} mb="md">
          <Trans id="forgot.password.form.title">Forgot password</Trans>
        </Title>

        <form onSubmit={form.onSubmit(onSubmit)}>
          {!isTokenSent && (
            <TextInput
              id="email"
              type="email"
              label={t({id: "forgot.password.form.label", message: "Email"})}
              placeholder="email@example.com"
              variant="filled"
              {...form.getInputProps("email")}
            />
          )}

          {isTokenSent && (
            <Text>
              <Trans id="forgot.password.form.sent">
                A password reset link has been sent to your email. Please check
                your inbox.
              </Trans>
            </Text>
          )}

          {!isTokenSent && (
            <Button type="submit" fullWidth mt="xl" loading={isLoading}>
              <Trans id="forgot.password.form.button">Send reset link</Trans>
            </Button>
          )}
        </form>
      </Box>
    </Container>
  );
}
