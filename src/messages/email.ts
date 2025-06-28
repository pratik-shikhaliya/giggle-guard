import { ValidationMessage } from '../types';

export const emailMessages: ValidationMessage[] = [
  // Required Messages
  {
    id: 'email_required_001',
    message: "Even my spam folder has higher standards",
    tone: 'sarcastic',
    fieldType: 'email',
    errorType: 'required',
    category: 'Email Fields'
  },
  {
    id: 'email_required_002',
    message: "This field is more empty than your DMs",
    tone: 'millennial',
    fieldType: 'email',
    errorType: 'required',
    category: 'Email Fields'
  },
  {
    id: 'email_required_003',
    message: "Error 404: Email not found",
    tone: 'nerdy',
    fieldType: 'email',
    errorType: 'required',
    category: 'Email Fields'
  },

  // Invalid Format Messages
  {
    id: 'email_invalid_001',
    message: "Your email is giving 'I just discovered the internet' vibes",
    tone: 'genZ',
    fieldType: 'email',
    errorType: 'invalid',
    category: 'Email Fields'
  },
  {
    id: 'email_invalid_002',
    message: "That's not an email, that's abstract art",
    tone: 'witty',
    fieldType: 'email',
    errorType: 'invalid',
    category: 'Email Fields'
  },
  {
    id: 'email_invalid_003',
    message: "Your email is throwing a NullPointerException",
    tone: 'nerdy',
    fieldType: 'email',
    errorType: 'invalid',
    category: 'Email Fields'
  },

  // Already Exists Messages
  {
    id: 'email_exists_001',
    message: "This email is already taken. Plot twist: it might be you",
    tone: 'mysterious',
    fieldType: 'email',
    errorType: 'exists',
    category: 'Email Fields'
  },
  {
    id: 'email_exists_002',
    message: "Someone beat you to it. Probably your evil twin",
    tone: 'funny',
    fieldType: 'email',
    errorType: 'exists',
    category: 'Email Fields'
  },
  {
    id: 'email_exists_003',
    message: "This email address is more popular than avocado toast",
    tone: 'millennial',
    fieldType: 'email',
    errorType: 'exists',
    category: 'Email Fields'
  }
];