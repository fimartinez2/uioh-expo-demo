import { View } from "react-native";
import { Text, useTheme } from "uioh";

export default function Swatch({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const t = useTheme();
  return (
    <View
      style={{
        width: "48%",
        borderRadius: 14,
        borderWidth: 1,
        borderColor: t.color.border.default,
        backgroundColor: t.color.bg.surface,
        padding: 12,
        gap: 6,
      }}
    >
      <View
        style={{
          height: 28,
          borderRadius: 10,
          backgroundColor: value,
          borderWidth: 1,
          borderColor: t.color.border.default,
        }}
      />
      <Text variant="label">{label}</Text>
      <Text variant="caption" color="text.muted">
        {value}
      </Text>
    </View>
  );
}
