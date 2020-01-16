export function getJsonValueOr(valueToParse, byDefault) {
  switch (valueToParse) {
    case "":
    case "undefined":
    case null:
      return byDefault;
    default:
      return JSON.parse(valueToParse);
  }
}
