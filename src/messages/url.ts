import { ValidationMessage } from '../types';

export const urlMessages: ValidationMessage[] = [
  // Required Messages
  {
    id: 'url_required_001',
    message: "URLs don't materialize from thin air. We need one",
    tone: 'witty',
    fieldType: 'url',
    errorType: 'required',
    category: 'URLs'
  },
  {
    id: 'url_required_002',
    message: "Your URL is MIA. Did it get lost in cyberspace?",
    tone: 'nerdy',
    fieldType: 'url',
    errorType: 'required',
    category: 'URLs'
  },
  {
    id: 'url_required_003',
    message: "We need a link. Not the Zelda kind, the internet kind",
    tone: 'popCulture',
    fieldType: 'url',
    errorType: 'required',
    category: 'URLs'
  },

  // Invalid URL Messages
  {
    id: 'url_invalid_001',
    message: "That URL is more broken than my phone screen",
    tone: 'millennial',
    fieldType: 'url',
    errorType: 'invalid',
    category: 'URLs'
  },
  {
    id: 'url_invalid_002',
    message: "This URL leads to the digital equivalent of nowhere",
    tone: 'dramatic',
    fieldType: 'url',
    errorType: 'invalid',
    category: 'URLs'
  },
  {
    id: 'url_invalid_003',
    message: "Your URL is giving 404 energy before we even try it",
    tone: 'genZ',
    fieldType: 'url',
    errorType: 'invalid',
    category: 'URLs'
  },

  // Malformed URL Messages
  {
    id: 'url_malformed_001',
    message: "This URL looks like it was typed by a cat walking on a keyboard",
    tone: 'funny',
    fieldType: 'url',
    errorType: 'invalid',
    category: 'URLs'
  },
  {
    id: 'url_malformed_002',
    message: "Your URL is more confusing than assembly language",
    tone: 'nerdy',
    fieldType: 'url',
    errorType: 'invalid',
    category: 'URLs'
  },
  {
    id: 'url_malformed_003',
    message: "Even browsers are scratching their heads at this URL",
    tone: 'sarcastic',
    fieldType: 'url',
    errorType: 'invalid',
    category: 'URLs'
  }
];