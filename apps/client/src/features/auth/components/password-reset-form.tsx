import * as z from "zod";
import { useForm, zodResolver } from "@mantine/form";
import useAuth from "@/features/auth/hooks/use-auth";
import { IPasswordReset } from "@/features/auth/types/auth.types";
import {
  Box,
  Button,
  Container,
  PasswordInput,
  Text,
  Title,
} from "@mantine/core";
import classes from "./auth.module.css";
import { useRedirectIfAuthenticated } from "@/features/auth/hooks/use-redirect-if-authenticated.ts";
import {t, Trans} from "@lingui/macro";

const formSchema = z.object({
  newPassword: z
    .string()
    .min(8, { message: t({id: "password.reset.form.password.invalid", message: "Password must contain at least 8 characters"}) }),
});

interface PasswordResetFormProps {
  resetToken?: string;
}

export function PasswordResetForm({ resetToken }: PasswordResetFormProps) {
  const { passwordReset, isLoading } = useAuth();
  useRedirectIfAuthenticated();

  const form = useForm<IPasswordReset>({
    validate: zodResolver(formSchema),
    initialValues: {
      newPassword: "",
    },
  });

  async function onSubmit(data: IPasswordReset) {
    await passwordReset({
      token: resetToken,
      newPassword: data.newPassword
    })
  }

  return (
    <Container size={420} my={40} className={classes.container}>
      <Box p="xl" mt={200}>
        <Title order={2} ta="center" fw={500} mb="md">
          <Trans id="password.reset.form.title">Password reset</Trans>
        </Title>

        <form onSubmit={form.onSubmit(onSubmit)}>
          <PasswordInput
            label={t({id: "password.reset.form.label", message: "New password"})}
            placeholder={t({id: "password.reset.form.placeholder", message: "Your new password"})}
            variant="filled"
            mt="md"
            {...form.getInputProps("newPassword")}
          />

          <Button type="submit" fullWidth mt="xl" loading={isLoading}>
            <Trans id="password.reset.form.button">Set password</Trans>
          </Button>
        </form>
      </Box>
    </Container>
  );
}
