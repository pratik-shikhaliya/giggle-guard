import { ValidationMessage } from '../types';

export const phoneMessages: ValidationMessage[] = [
  // Required Messages
  {
    id: 'phone_required_001',
    message: "We need your number, but not for spam calls (we promise)",
    tone: 'friendly',
    fieldType: 'phone',
    errorType: 'required',
    category: 'Phone Numbers'
  },
  {
    id: 'phone_required_002',
    message: "Your phone number is MIA. Did it ghost us?",
    tone: 'genZ',
    fieldType: 'phone',
    errorType: 'required',
    category: 'Phone Numbers'
  },
  {
    id: 'phone_required_003',
    message: "Houston, we have a problem. (We need your phone number.)",
    tone: 'popCulture',
    fieldType: 'phone',
    errorType: 'required',
    category: 'Phone Numbers'
  },

  // Invalid Format Messages
  {
    id: 'phone_invalid_001',
    message: "Calling this number will summon a ghost",
    tone: 'mysterious',
    fieldType: 'phone',
    errorType: 'invalid',
    category: 'Phone Numbers'
  },
  {
    id: 'phone_invalid_002',
    message: "That's not a phone number, that's a math equation",
    tone: 'witty',
    fieldType: 'phone',
    errorType: 'invalid',
    category: 'Phone Numbers'
  },
  {
    id: 'phone_invalid_003',
    message: "Your phone number has more drama than a reality show",
    tone: 'sarcastic',
    fieldType: 'phone',
    errorType: 'invalid',
    category: 'Phone Numbers'
  },

  // Too Short Messages
  {
    id: 'phone_short_001',
    message: "This phone number is shorter than my attention span",
    tone: 'millennial',
    fieldType: 'phone',
    errorType: 'tooShort',
    category: 'Phone Numbers'
  },
  {
    id: 'phone_short_002',
    message: "Did you forget the rest of your number?",
    tone: 'casual',
    fieldType: 'phone',
    errorType: 'tooShort',
    category: 'Phone Numbers'
  },
  {
    id: 'phone_short_003',
    message: "Your number needs more digits. It's not a PIN code",
    tone: 'funny',
    fieldType: 'phone',
    errorType: 'tooShort',
    category: 'Phone Numbers'
  }
];