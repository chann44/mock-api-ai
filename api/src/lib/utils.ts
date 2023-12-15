import { Chance } from "chance";

const chance = new Chance();
const chanceTypes = Object.keys(Object.getPrototypeOf(chance));

function valid(type: string): boolean {
  return chanceTypes.indexOf(type) !== -1;
}

function getArrayValue(definition: [string, number]): any[] | null {
  if (definition.length !== 2) {
    return null;
  }
  const type = definition[0];
  const count = definition[1];
  if (!valid(type) || typeof count !== "number" || count === 0) {
    return null;
  }
  return new Array(count).fill(null).map(() => getValue(type));
}

function getValue(type: string | [string, number] | object): any {
  if (Array.isArray(type)) {
    return getArrayValue(type as [string, number]);
  }
  if (typeof type === "object" && !Array.isArray(type) && type != null) {
    return createData(type as object);
  }
  try {
    //@ts-ignore
    return chance[type as string]({ length: 100 });
  } catch (exception) {
    return null;
  }
}

function createData(template: object): object {
  const output: { [key: string]: any } = {};
  Object.keys(template).map((key: string) => {
    output[key] = getValue((template as { [key: string]: any })[key]);
  });
  return output;
}

export default createData;
