import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { Trans } from "@lingui/macro";

export function ThemeToggle() {
    const { setColorScheme } = useMantineColorScheme();

    return (
      <Group justify="center" mt="xl">
          <Button onClick={() => setColorScheme('light')}><Trans>Light</Trans></Button>
          <Button onClick={() => setColorScheme('dark')}><Trans>Dark</Trans></Button>
          <Button onClick={() => setColorScheme('auto')}><Trans>Auto</Trans></Button>
      </Group>
    );
}
