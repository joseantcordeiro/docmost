import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { Trans } from "@lingui/macro";

export function ThemeToggle() {
    const { setColorScheme } = useMantineColorScheme();

    return (
      <Group justify="center" mt="xl">
          <Button onClick={() => setColorScheme('light')}><Trans id="theme.toggle.light">Light</Trans></Button>
          <Button onClick={() => setColorScheme('dark')}><Trans id="theme.toggle.dark">Dark</Trans></Button>
          <Button onClick={() => setColorScheme('auto')}><Trans id="theme.toggle.auto">Auto</Trans></Button>
      </Group>
    );
}
