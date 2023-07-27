import { Activity, Airplay } from "@tamagui/lucide-icons";

import { Button, XGroup, XStack, YStack } from "tamagui";

export function ButtonDemo(props: any) {
  return (
    <YStack padding="$3" space="$3" {...props}>
      <Button>Plain</Button>

      <Button alignSelf="center" icon={Airplay} size="$6">
        Large
      </Button>

      <XStack space="$2" justifyContent="center">
        <Button size="$3" theme="alt2">
          Alt2
        </Button>

        <Button size="$3" theme="yellow">
          Yellow
        </Button>
      </XStack>

      <XStack space="$2">
        <Button themeInverse size="$3">
          Inverse
        </Button>

        <Button iconAfter={Activity} size="$3">
          iconAfter
        </Button>
      </XStack>

      <XGroup>
        <XGroup.Item>
          <Button width="50%" size="$2" disabled opacity={0.5}>
            disabled
          </Button>
        </XGroup.Item>
        <XGroup.Item>
          <Button width="50%" size="$2" chromeless>
            chromeless
          </Button>
        </XGroup.Item>
      </XGroup>
    </YStack>
  );
}
