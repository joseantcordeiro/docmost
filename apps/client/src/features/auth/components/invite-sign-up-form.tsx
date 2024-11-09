import * as React from "react";
import * as z from "zod";
import { t, Trans } from "@lingui/macro";

import { useForm, zodResolver } from "@mantine/form";
import {
  Container,
  Title,
  TextInput,
  Button,
  PasswordInput,
  Box,
  Stack,
} from "@mantine/core";
import { useParams, useSearchParams } from "react-router-dom";
import { IRegister } from "@/features/auth/types/auth.types";
import useAuth from "@/features/auth/hooks/use-auth";
import classes from "@/features/auth/components/auth.module.css";
import { useGetInvitationQuery } from "@/features/workspace/queries/workspace-query.ts";
import { useRedirectIfAuthenticated } from "@/features/auth/hooks/use-redirect-if-authenticated.ts";

const formSchema = z.object({
  name: z.string().trim().min(1),
  password: z.string().min(8),
});

type FormValues = z.infer<typeof formSchema>;

export function InviteSignUpForm() {
  const params = useParams();
  const [searchParams] = useSearchParams();

  const { data: invitation, isError } = useGetInvitationQuery(
    params?.invitationId,
  );
  const { invitationSignup, isLoading } = useAuth();
  useRedirectIfAuthenticated();

  const form = useForm<FormValues>({
    validate: zodResolver(formSchema),
    initialValues: {
      name: "",
      password: "",
    },
  });

  async function onSubmit(data: IRegister) {
    const invitationToken = searchParams.get("token");

    await invitationSignup({
      invitationId: invitation.id,
      name: data.name,
      password: data.password,
      token: invitationToken,
    });
  }

  if (isError) {
    return <div><Trans id="invite.signup.form.error">invalid invitation link</Trans></div>;
  }

  if (!invitation) {
    return <div></div>;
  }

  return (
    <Container size={420} my={40} className={classes.container}>
      <Box p="xl" mt={200}>
        <Title order={2} ta="center" fw={500} mb="md">
          <Trans id="invite.signup.form.title">Join the workspace</Trans>
        </Title>

        <Stack align="stretch" justify="center" gap="xl">
          <form onSubmit={form.onSubmit(onSubmit)}>
            <TextInput
              id="name"
              type="text"
              label={t({id: "invite.signup.form.label.name", message: "Name"})}
              placeholder={t({id: "invite.signup.form.placeholder.name", message: "enter your full name"})}
              variant="filled"
              {...form.getInputProps("name")}
            />

            <TextInput
              id="email"
              type="email"
              label={t({id: "invite.signup.form.label.email", message: "Email"})}
              value={invitation.email}
              disabled
              variant="filled"
              mt="md"
            />

            <PasswordInput
              label={t({id: "invite.signup.form.label.password", message: "Password"})}
              placeholder={t({id: "invite.signup.form.placeholder.password", message: "Your password"})}
              variant="filled"
              mt="md"
              {...form.getInputProps("password")}
            />
            <Button type="submit" fullWidth mt="xl" loading={isLoading}>
              <Trans id="invite.signup.form.button">Sign Up</Trans>
            </Button>
          </form>
        </Stack>
      </Box>
    </Container>
  );
}
