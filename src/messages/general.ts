import { ValidationMessage } from '../types';

export const generalMessages: ValidationMessage[] = [
  // General Required Messages
  {
    id: 'general_required_001',
    message: "You broke the form. JK, just fix the red stuff",
    tone: 'casual',
    fieldType: 'general',
    errorType: 'required',
    category: 'General Errors'
  },
  {
    id: 'general_required_002',
    message: "This isn't Fight Club. We DO talk about required fields here",
    tone: 'popCulture',
    fieldType: 'general',
    errorType: 'required',
    category: 'General Errors'
  },
  {
    id: 'general_required_003',
    message: "Field required. System mildly judging you",
    tone: 'sarcastic',
    fieldType: 'general',
    errorType: 'required',
    category: 'General Errors'
  },

  // General Invalid Messages
  {
    id: 'general_invalid_001',
    message: "Try again. But like... better",
    tone: 'sarcastic',
    fieldType: 'general',
    errorType: 'invalid',
    category: 'General Errors'
  },
  {
    id: 'general_invalid_002',
    message: "You're doing great! (You're not, but we believe in you.)",
    tone: 'motivational',
    fieldType: 'general',
    errorType: 'invalid',
    category: 'General Errors'
  },
  {
    id: 'general_invalid_003',
    message: "Invalid input detected. Our computers are confused",
    tone: 'nerdy',
    fieldType: 'general',
    errorType: 'invalid',
    category: 'General Errors'
  },

  // General Too Long Messages
  {
    id: 'general_long_001',
    message: "Your input is longer than a CVS receipt",
    tone: 'millennial',
    fieldType: 'general',
    errorType: 'tooLong',
    category: 'General Errors'
  },
  {
    id: 'general_long_002',
    message: "Brevity is the soul of wit. This ain't it, chief",
    tone: 'witty',
    fieldType: 'general',
    errorType: 'tooLong',
    category: 'General Errors'
  },
  {
    id: 'general_long_003',
    message: "Your text is giving 'college essay' vibes. Keep it short",
    tone: 'genZ',
    fieldType: 'general',
    errorType: 'tooLong',
    category: 'General Errors'
  }
];