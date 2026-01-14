import { ScrollView, View } from "react-native";
import {
  Card,
  CardContent,
  CardDivider,
  CardHeader,
  ColorModeToggle,
  Heading,
  Link,
  Text,
  useTheme,
} from "uioh";
import { Swatch } from "./_components/swatch";

export default function HomeScreen() {
  const t = useTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        padding: 20,
        gap: 16,
        backgroundColor: t.color.bg.canvas,
      }}
    >
      <View style={{ gap: 6 }}>
        <Heading variant="h2">UI-OH sistema de diseño</Heading>
        <Text color="text.muted">
          Expo Router + paquete uioh importado desde npm.
        </Text>
      </View>
      <Card>
        <CardHeader
          title="Proof of concept"
          subtitle="Boton para cambiar modo de color"
          right={<ColorModeToggle />}
        />
        <CardDivider />
        <CardContent>
          <Text variant="label" color="text.brand">
            Dynamic theme
          </Text>
          <Heading variant="h3">Light/Dark sin estilos locales</Heading>
          <Text color="text.muted">
            La UI se renderiza con tipografía y colores estandarizados, y cambia
            a dark mode sin tocar estilos locales.
          </Text>
        </CardContent>
      </Card>

      {/* Tokens */}
      <Card>
        <CardHeader
          title="Tokens"
          subtitle="Swatches generados desde useTheme()"
        />
        <CardDivider />
        <CardContent>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
            <Swatch label="bg.canvas" value={t.color.bg.canvas} />
            <Swatch label="bg.surface" value={t.color.bg.surface} />
            <Swatch label="text.primary" value={t.color.text.primary} />
            <Swatch label="text.brand" value={t.color.text.brand} />
          </View>
        </CardContent>
      </Card>

      {/* Typography */}
      <Card>
        <CardHeader title="Typography" subtitle="Scale + variants" />
        <CardDivider />
        <CardContent>
          <View style={{ gap: 10 }}>
            <Heading variant="h1">Heading h1</Heading>
            <Heading variant="h2">Heading h2</Heading>
            <Heading variant="h3">Heading h3</Heading>
            <Text>Body (default)</Text>
            <Text variant="bodyStrong">Body strong</Text>
            <Text variant="label">Label</Text>
            <Text variant="caption" color="text.muted">
              Caption (muted)
            </Text>
          </View>
        </CardContent>
      </Card>

      {/* Links */}
      <Card>
        <CardHeader title="Links" subtitle="NPM + GitHub" />
        <CardDivider />
        <CardContent>
          <View style={{ gap: 10 }}>
            <Link href="https://www.npmjs.com/package/uioh" external>
              Ver paquete en npm
            </Link>

            <Link href="https://github.com/fimartinez2/uioh" external>
              Ver repositorio
            </Link>
          </View>
        </CardContent>
      </Card>
    </ScrollView>
  );
}
