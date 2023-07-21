import {
  Button,
  View,
  Checkbox,
  Input,
  Progress,
  RadioGroup,
  Select,
  Slider,
  Tooltip,
  TooltipGroup,
  YStack,
  XStack,
  TooltipProps,
  Paragraph,
} from "tamagui";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
} from "@tamagui/lucide-icons";
import { Check } from "@tamagui/lucide-icons";

export function Stuff() {
  return (
    <View>
      <Button mb="$2">Button</Button>
      <Checkbox mb="$2" size="$4">
        <Checkbox.Indicator>
          <Check />
        </Checkbox.Indicator>
      </Checkbox>
      <Input mb="$2" size="$4" borderWidth={2} />
      <Progress mb="$2" value={60}>
        <Progress.Indicator animation="bouncy" />
      </Progress>
      <RadioGroup mb="$2" value="foo" /* size="$4" */ space="$2">
        <RadioGroup.Item value="foo" id="foo-radio-item">
          <RadioGroup.Indicator />
        </RadioGroup.Item>
        <RadioGroup.Item value="bar" id="bar-radio-item">
          <RadioGroup.Indicator />
        </RadioGroup.Item>
      </RadioGroup>

      <View mb="$10">
        <Select defaultValue="">
          <Select.Trigger>
            <Select.Value placeholder="Search..." />
          </Select.Trigger>
          <Select.Content>
            <Select.ScrollUpButton />
            <Select.Viewport>
              <Select.Group>
                <Select.Label />
                {/* <Select.Item>
                <Select.ItemText />
              </Select.Item> */}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </Select>
      </View>

      <Slider
        mb="$2"
        size="$4"
        width={200}
        defaultValue={[50]}
        max={100}
        step={1}
      >
        <Slider.Track>
          <Slider.TrackActive />
        </Slider.Track>
        <Slider.Thumb circular index={0} />
      </Slider>

      <TooltipGroup delay={{ open: 3000, close: 100 }}>
        <YStack space="$2" alignSelf="center">
          <XStack space="$2">
            <Demo groupId="0" placement="top-end" Icon={Circle} />
            <Demo groupId="1" placement="top" Icon={ChevronUp} />
            <Demo groupId="2" placement="top-start" Icon={Circle} />
          </XStack>
          <XStack space="$2">
            <Demo groupId="3" placement="left" Icon={ChevronLeft} />
            <YStack flex={1} />
            <Demo groupId="4" placement="right" Icon={ChevronRight} />
          </XStack>
          <XStack space="$2">
            <Demo groupId="5" placement="bottom-end" Icon={Circle} />
            <Demo groupId="6" placement="bottom" Icon={ChevronDown} />
            <Demo groupId="7" placement="bottom-start" Icon={Circle} />
          </XStack>
        </YStack>
      </TooltipGroup>
    </View>
  );
}

function Demo({ Icon, ...props }: TooltipProps & { Icon?: any }) {
  return (
    <Tooltip {...props}>
      <Tooltip.Trigger>
        <Button icon={Icon} circular />
      </Tooltip.Trigger>
      <Tooltip.Content
        enterStyle={{ x: 0, y: -5, opacity: 0, scale: 0.9 }}
        exitStyle={{ x: 0, y: -5, opacity: 0, scale: 0.9 }}
        scale={1}
        x={0}
        y={0}
        opacity={1}
        animation={[
          "quick",
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
      >
        <Tooltip.Arrow />
        <Paragraph size="$2" lineHeight="$1">
          Hello world
        </Paragraph>
      </Tooltip.Content>
    </Tooltip>
  );
}
