export type Tone =
  | "casual"
  | "dark"
  | "dramatic"
  | "friendly"
  | "funny"
  | "genZ"
  | "millennial"
  | "motivational"
  | "mysterious"
  | "nerdy"
  | "poetic"
  | "popCulture"
  | "professional"
  | "sarcastic"
  | "witty";

export type FieldType =
  | "address"
  | "checkbox"
  | "creditCard"
  | "date"
  | "email"
  | "file"
  | "general"
  | "name"
  | "password"
  | "phone"
  | "radio"
  | "select"
  | "time"
  | "url"
  | "zipcode";

export type ErrorType =
  | "doesntMatch"
  | "duplicate"
  | "expired"
  | "exists"
  | "format"
  | "inFuture"
  | "inPast"
  | "invalid"
  | "invalidCVV"
  | "invalidType"
  | "notSelected"
  | "outOfRange"
  | "required"
  | "tooLarge"
  | "tooLong"
  | "tooShort"
  | "tooSmall"
  | "tooWeak";

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
  defaultTone?: Tone | "random";
  trackUsedMessages?: boolean;
  fallbackToGeneric?: boolean;
  strictValidation?: boolean;
}
