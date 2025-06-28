import { ValidationMessage } from '../types';

export const passwordMessages: ValidationMessage[] = [
  // Required Messages
  {
    id: 'password_required_001',
    message: "A password is required. This isn't a trust exercise",
    tone: 'sarcastic',
    fieldType: 'password',
    errorType: 'required',
    category: 'Password Fields'
  },
  {
    id: 'password_required_002',
    message: "Your account needs protection, unlike your DMs",
    tone: 'millennial',
    fieldType: 'password',
    errorType: 'required',
    category: 'Password Fields'
  },
  {
    id: 'password_required_003',
    message: "No password? Bold strategy. Terrible, but bold",
    tone: 'witty',
    fieldType: 'password',
    errorType: 'required',
    category: 'Password Fields'
  },

  // Too Weak Messages
  {
    id: 'password_weak_001',
    message: "This password couldn't protect a cookie from a toddler",
    tone: 'funny',
    fieldType: 'password',
    errorType: 'tooWeak',
    category: 'Password Fields'
  },
  {
    id: 'password_weak_002',
    message: "Your password is weaker than my WiFi signal",
    tone: 'casual',
    fieldType: 'password',
    errorType: 'tooWeak',
    category: 'Password Fields'
  },
  {
    id: 'password_weak_003',
    message: "This password couldn't stop a determined butterfly",
    tone: 'nerdy',
    fieldType: 'password',
    errorType: 'tooWeak',
    category: 'Password Fields'
  },

  // Doesn't Match Messages
  {
    id: 'password_match_001',
    message: "These passwords have commitment issues",
    tone: 'funny',
    fieldType: 'password',
    errorType: 'doesntMatch',
    category: 'Password Fields'
  },
  {
    id: 'password_match_002',
    message: "Your passwords are fighting. Make them friends",
    tone: 'friendly',
    fieldType: 'password',
    errorType: 'doesntMatch',
    category: 'Password Fields'
  },
  {
    id: 'password_match_003',
    message: "Plot twist: passwords need to match. Revolutionary concept",
    tone: 'sarcastic',
    fieldType: 'password',
    errorType: 'doesntMatch',
    category: 'Password Fields'
  }
];