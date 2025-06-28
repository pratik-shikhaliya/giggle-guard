export type Tone =
  | "witty"
  | "dark"
  | "funny"
  | "casual"
  | "sarcastic"
  | "nerdy"
  | "popCulture"
  | "millennial"
  | "genZ"
  | "professional"
  | "friendly"
  | "motivational"
  | "mysterious"
  | "dramatic"
  | "poetic";

export type FieldType =
  | "name"
  | "email"
  | "password"
  | "phone"
  | "address"
  | "zipcode"
  | "date"
  | "time"
  | "file"
  | "creditCard"
  | "url"
  | "checkbox"
  | "radio"
  | "select"
  | "general";

export type ErrorType =
  | "required"
  | "invalid"
  | "tooShort"
  | "tooLong"
  | "exists"
  | "tooWeak"
  | "doesntMatch"
  | "inPast"
  | "inFuture"
  | "invalidType"
  | "tooLarge"
  | "tooSmall"
  | "expired"
  | "invalidCVV"
  | "format"
  | "notSelected"
  | "outOfRange"
  | "duplicate";

export interface ValidationMessage {
  id: string;
  message: string;
  tone: Tone;
  fieldType: FieldType;
  errorType: ErrorType;
  category: string;
}

export interface GetMessageOptions {
  fieldType: FieldType;
  errorType: ErrorType;
  tone?: Tone;
  excludeUsed?: boolean;
}

export interface ValidationMessageMap {
  [key: string]: ValidationMessage[];
}

export interface GiggleGuardConfig {
  defaultTone?: Tone;
  trackUsedMessages?: boolean;
  fallbackToGeneric?: boolean;
  strictValidation?: boolean;
}
