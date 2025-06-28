import { ValidationMessage } from '../types';

export const nameMessages: ValidationMessage[] = [
  // Required Messages
  {
    id: 'name_required_001',
    message: "Your FBI agent is waiting for your real name",
    tone: 'funny',
    fieldType: 'name',
    errorType: 'required',
    category: 'Name Fields'
  },
  {
    id: 'name_required_002',
    message: "Bestie, we need your government name, not your finsta handle",
    tone: 'millennial',
    fieldType: 'name',
    errorType: 'required',
    category: 'Name Fields'
  },
  {
    id: 'name_required_003',
    message: "Not even Voldemort goes by 'He-Who-Must-Not-Be-Named' here",
    tone: 'popCulture',
    fieldType: 'name',
    errorType: 'required',
    category: 'Name Fields'
  },

  // Too Short Messages
  {
    id: 'name_short_001',
    message: "Is your name really just two letters? Are you an AI?",
    tone: 'witty',
    fieldType: 'name',
    errorType: 'tooShort',
    category: 'Name Fields'
  },
  {
    id: 'name_short_002',
    message: "Your name is shorter than a TikTok attention span",
    tone: 'genZ',
    fieldType: 'name',
    errorType: 'tooShort',
    category: 'Name Fields'
  },
  {
    id: 'name_short_003',
    message: "Even Prince had more letters in his symbol",
    tone: 'popCulture',
    fieldType: 'name',
    errorType: 'tooShort',
    category: 'Name Fields'
  },

  // Invalid Format Messages
  {
    id: 'name_invalid_001',
    message: "Numbers in names? What is this, the Matrix?",
    tone: 'nerdy',
    fieldType: 'name',
    errorType: 'invalid',
    category: 'Name Fields'
  },
  {
    id: 'name_invalid_002',
    message: "Your name contains more special characters than my password",
    tone: 'sarcastic',
    fieldType: 'name',
    errorType: 'invalid',
    category: 'Name Fields'
  },
  {
    id: 'name_invalid_003',
    message: "That's not a name, that's a WiFi password",
    tone: 'casual',
    fieldType: 'name',
    errorType: 'invalid',
    category: 'Name Fields'
  }
];