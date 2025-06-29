// messages/index.js

// 1. Import all message arrays in A–Z order
import { addressMessages } from "./address";
import { checkboxMessages } from "./checkbox";
import { creditCardMessages } from "./creditCard";
import { dateMessages } from "./date";
import { emailMessages } from "./email";
import { fileMessages } from "./file";
import { generalMessages } from "./general";
import { nameMessages } from "./name";
import { passwordMessages } from "./password";
import { phoneMessages } from "./phone";
import { radioMessages } from "./radio";
import { selectMessages } from "./select";
import { timeMessages } from "./time";
import { urlMessages } from "./url";
import { zipcodeMessages } from "./zipcode";

// 2. Export all message arrays in A–Z order
export { addressMessages } from "./address";
export { checkboxMessages } from "./checkbox";
export { creditCardMessages } from "./creditCard";
export { dateMessages } from "./date";
export { emailMessages } from "./email";
export { fileMessages } from "./file";
export { generalMessages } from "./general";
export { nameMessages } from "./name";
export { passwordMessages } from "./password";
export { phoneMessages } from "./phone";
export { radioMessages } from "./radio";
export { selectMessages } from "./select";
export { timeMessages } from "./time";
export { urlMessages } from "./url";
export { zipcodeMessages } from "./zipcode";

// 3. Combine all messages in A–Z order
export const allMessages = [
  ...addressMessages,
  ...checkboxMessages,
  ...creditCardMessages,
  ...dateMessages,
  ...emailMessages,
  ...fileMessages,
  ...generalMessages,
  ...nameMessages,
  ...passwordMessages,
  ...phoneMessages,
  ...radioMessages,
  ...selectMessages,
  ...timeMessages,
  ...urlMessages,
  ...zipcodeMessages,
];
