/**
 * Validates the first object and theirs properties then returns a new object with missing properties from a second object used as a default prop validator.
 * If obj1 is undefined or null, returns obj2.
 * @param obj1 - The first object to validate.
 * @param obj2 - The second object to validate.
 * @returns A new object with merged properties from obj1 and obj2.
 */
const validateObjects = (obj1, obj2) => {
  const newObj = {};

  if (obj1 === undefined || obj1 === null) {
    return obj2;
  }

  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (
        typeof obj2[key] === "object" &&
        obj2[key] !== null &&
        obj2[key] !== "undefined" &&
        !Array.isArray(obj2[key])
      ) {
        newObj[key] = validateObjects(obj1[key], obj2[key]);
      }

      if (Object.prototype.hasOwnProperty.call(obj1, key)) {
        newObj[key] = obj1[key];
      } else {
        newObj[key] = obj2[key];
      }
    }
  }

  return newObj;
};

export default validateObjects;
