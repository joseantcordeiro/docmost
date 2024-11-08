import { Title, Text, Button, Container, Group } from "@mantine/core";
import classes from "./error-404.module.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Trans } from "@lingui/macro";

export function Error404() {
  return (
    <>
      <Helmet>
          <title><Trans>404 page not found - Docmost</Trans></title>
      </Helmet>
      <Container className={classes.root}>
        <Title className={classes.title}>404 Page Not Found</Title>
        <Text c="dimmed" size="lg" ta="center" className={classes.description}>
          <Trans>Sorry, we can't find the page you are looking for.</Trans>
        </Text>
        <Group justify="center">
          <Button component={Link} to={"/home"} variant="subtle" size="md">
              <Trans>Take me back to homepage</Trans>
          </Button>
        </Group>
      </Container>
    </>
  );
}
