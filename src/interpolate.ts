export default function interpolate(t: string, c: any) {
  return t.replace(
    /\${([^}]+)}/g,
    (m, p) =>
      p
        .split(".")
        .reduce((a: { [x: string]: any; }, f: string | number) =>
        (a
          ? a[f]
          : undefined)
          , c)
      ?? m
  );
}
