import { ValidationMessage } from '../types';

export const fileMessages: ValidationMessage[] = [
  // Required Messages
  {
    id: 'file_required_001',
    message: "Files don't upload themselves. Yet",
    tone: 'witty',
    fieldType: 'file',
    errorType: 'required',
    category: 'File Uploads'
  },
  {
    id: 'file_required_002',
    message: "Your file is playing hard to get",
    tone: 'funny',
    fieldType: 'file',
    errorType: 'required',
    category: 'File Uploads'
  },
  {
    id: 'file_required_003',
    message: "Upload a file or this form will judge you silently",
    tone: 'sarcastic',
    fieldType: 'file',
    errorType: 'required',
    category: 'File Uploads'
  },

  // File Too Large Messages
  {
    id: 'file_large_001',
    message: "Your file is giving 'shot with a potato' energy",
    tone: 'genZ',
    fieldType: 'file',
    errorType: 'tooLarge',
    category: 'File Uploads'
  },
  {
    id: 'file_large_002',
    message: "This file is bigger than my hopes and dreams",
    tone: 'dramatic',
    fieldType: 'file',
    errorType: 'tooLarge',
    category: 'File Uploads'
  },
  {
    id: 'file_large_003',
    message: "Your file crashed our server's gym membership",
    tone: 'casual',
    fieldType: 'file',
    errorType: 'tooLarge',
    category: 'File Uploads'
  },

  // Invalid File Type Messages
  {
    id: 'file_invalid_001',
    message: "That file type is more mysterious than the Bermuda Triangle",
    tone: 'mysterious',
    fieldType: 'file',
    errorType: 'invalidType',
    category: 'File Uploads'
  },
  {
    id: 'file_invalid_002',
    message: "Your file format is not supported. It's not you, it's us",
    tone: 'friendly',
    fieldType: 'file',
    errorType: 'invalidType',
    category: 'File Uploads'
  },
  {
    id: 'file_invalid_003',
    message: "This file type is rarer than a unicorn",
    tone: 'poetic',
    fieldType: 'file',
    errorType: 'invalidType',
    category: 'File Uploads'
  }
];