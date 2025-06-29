import { FieldType, ErrorType } from "../types";

// Map valid error types per field type
const validCombos: Record<FieldType, ErrorType[]> = {
  address: ["required", "tooShort", "tooLong"],
  checkbox: ["required", "notSelected"],
  creditCard: ["required", "invalid", "expired", "invalidCVV"],
  date: ["required", "inPast", "inFuture", "invalid"],
  email: ["required", "invalid", "exists", "duplicate"],
  file: ["required", "invalidType", "tooLarge", "tooSmall"],
  general: [
    "required",
    "invalid",
    "tooShort",
    "tooLong",
    "format",
    "duplicate",
    "notSelected",
  ],
  name: ["required", "invalid", "tooShort", "tooLong", "exists"],
  password: ["required", "tooShort", "tooWeak"],
  phone: ["required", "invalid", "format"],
  radio: ["required", "notSelected"],
  select: ["required", "notSelected"],
  time: ["required", "invalid", "outOfRange"],
  url: ["required", "invalid"],
  zipcode: ["required", "invalid", "format"],
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
