const getCamelCase = (string: string) =>
  string
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
    .replace(/\s+/g, "");

export default getCamelCase;
