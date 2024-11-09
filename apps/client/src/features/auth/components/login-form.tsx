import * as z from "zod";
import { useForm, zodResolver } from "@mantine/form";
import useAuth from "@/features/auth/hooks/use-auth";
import { ILogin } from "@/features/auth/types/auth.types";
import {
  Container,
  Title,
  TextInput,
  Button,
  PasswordInput,
  Box,

  Anchor,
} from "@mantine/core";
import classes from "./auth.module.css";
import { useRedirectIfAuthenticated } from "@/features/auth/hooks/use-redirect-if-authenticated.ts";
import { Link, useNavigate } from "react-router-dom";
import APP_ROUTE from "@/lib/app-route.ts";
import { t, Trans } from "@lingui/macro";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: t({id: "login.form.email.required", message: "email is required"}) })
    .email({ message: t({id: "login.form.email.invalid", message: "Invalid email address"}) }),
  password: z.string().min(1, { message:  t({id: "login.form.password.required", message: "Password is required"}) }),
});

export function LoginForm() {
  const { signIn, isLoading } = useAuth();
  useRedirectIfAuthenticated();

  const form = useForm<ILogin>({
    validate: zodResolver(formSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: ILogin) {
    await signIn(data);
  }

  return (
    <Container size={420} my={40} className={classes.container}>
      <Box p="xl" mt={200}>
        <Title order={2} ta="center" fw={500} mb="md">
          <Trans id="login.form.title">Login</Trans>
        </Title>

        <form onSubmit={form.onSubmit(onSubmit)}>
          <TextInput
            id="email"
            type="email"
            label={t({id: "login.form.label.email", message: "Email"})}
            placeholder="email@example.com"
            variant="filled"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label={t({id: "login.form.label.password", message: "Password"})}
            placeholder={t({id: "login.form.placeholder.password", message: "Your password"})}
            variant="filled"
            mt="md"
            {...form.getInputProps("password")}
          />

          <Button type="submit" fullWidth mt="xl" loading={isLoading}>
            <Trans id="login.form.button">Sign In</Trans>
          </Button>
        </form>

        <Anchor
          to={APP_ROUTE.AUTH.FORGOT_PASSWORD}
          component={Link}
          underline="never"
          size="sm"
        >
          <Trans id="login.form.anchor">Forgot your password?</Trans>
        </Anchor>
      </Box>
    </Container>
  );
}
