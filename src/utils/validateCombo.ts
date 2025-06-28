import { FieldType, ErrorType } from "../types";

// Map valid error types per field type
const validCombos: Record<FieldType, ErrorType[]> = {
  name: ["required", "invalid", "tooShort", "tooLong", "exists"],
  email: ["required", "invalid", "exists", "duplicate"],
  password: ["required", "tooShort", "tooWeak"],
  phone: ["required", "invalid", "format"],
  address: ["required", "tooShort", "tooLong"],
  zipcode: ["required", "invalid", "format"],
  date: ["required", "inPast", "inFuture", "invalid"],
  time: ["required", "invalid", "outOfRange"],
  file: ["required", "invalidType", "tooLarge", "tooSmall"],
  creditCard: ["required", "invalid", "expired", "invalidCVV"],
  url: ["required", "invalid"],
  checkbox: ["required", "notSelected"],
  radio: ["required", "notSelected"],
  select: ["required", "notSelected"],
  general: [
    "required",
    "invalid",
    "tooShort",
    "tooLong",
    "format",
    "duplicate",
    "notSelected",
  ],
};

export const validateFieldErrorCombo = (
  fieldType: FieldType,
  errorType: ErrorType
): { valid: boolean; allowedErrors?: ErrorType[] } => {
  const allowedErrors = validCombos[fieldType];

  if (!allowedErrors) return { valid: false };

  const isValid = allowedErrors.includes(errorType);

  return {
    valid: isValid,
    allowedErrors: isValid ? undefined : allowedErrors,
  };
};
