import { ValidationMessage } from '../types';

export const dateMessages: ValidationMessage[] = [
  // --- Required Messages ---

  // Required - Witty (5 messages)
  {
    id: 'date_required_witty_001',
    message: "Don't leave us hanging! We need a date to mark on the calendar.",
    tone: 'witty',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_witty_002',
    message: "Time waits for no one, especially not for a missing date!",
    tone: 'witty',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_witty_003',
    message: "This date field is feeling a bit lonely. Care to fill it?",
    tone: 'witty',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_witty_004',
    message: "Our chronometer says you forgot the date. Please provide it!",
    tone: 'witty',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_witty_005',
    message: "To proceed, you'll need to set the date. Don't be late!",
    tone: 'witty',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },

  // Required - Dark (5 messages)
  {
    id: 'date_required_dark_001',
    message: "The timeline is unwritten. A date is demanded.",
    tone: 'dark',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_dark_002',
    message: "Without a date, the future remains shrouded in uncertainty.",
    tone: 'dark',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_dark_003',
    message: "The sands of time refuse to flow. Provide the date.",
    tone: 'dark',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_dark_004',
    message: "A void exists in the calendar. Fill it with a date.",
    tone: 'dark',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_dark_005',
    message: "The passage of moments halts. The required date is missing.",
    tone: 'dark',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },

  // Required - Funny (5 messages)
  {
    id: 'date_required_funny_001',
    message: "Did your calendar run away? We need a date here!",
    tone: 'funny',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_funny_002',
    message: "My psychic powers tell me you forgot the date. Please enter it!",
    tone: 'funny',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_funny_003',
    message: "Don't leave this date on read! It's required!",
    tone: 'funny',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_funny_004',
    message: "Our time machine can't function without a valid date!",
    tone: 'funny',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_funny_005',
    message: "This date field is giving me the silent treatment. Input required!",
    tone: 'funny',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },

  // Required - Casual (5 messages)
  {
    id: 'date_required_casual_001',
    message: "Please enter a date to continue.",
    tone: 'casual',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_casual_002',
    message: "We need a date here.",
    tone: 'casual',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_casual_003',
    message: "Don't forget to add the date.",
    tone: 'casual',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_casual_004',
    message: "Just need a date for this.",
    tone: 'casual',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_casual_005',
    message: "This field requires a date.",
    tone: 'casual',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },

  // Required - Sarcastic (5 messages)
  {
    id: 'date_required_sarcastic_001',
    message: "Oh, you thought dates were optional? How adorable.",
    tone: 'sarcastic',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_sarcastic_002',
    message: "Of course, we'll just guess the date. No need for your input, really.",
    tone: 'sarcastic',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_sarcastic_003',
    message: "Because temporal precision is so overrated. Please provide a date.",
    tone: 'sarcastic',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_sarcastic_004',
    message: "The calendar simply manifests a date, right? No? Then enter one.",
    tone: 'sarcastic',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_sarcastic_005',
    message: "Such a minor detail, the date. Except it's required.",
    tone: 'sarcastic',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },

  // Required - Nerdy (5 messages)
  {
    id: 'date_required_nerdy_001',
    message: "Error 400: Date parameter missing. Requires 'YYYY-MM-DD' format.",
    tone: 'nerdy',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_nerdy_002',
    message: "Null value detected for 'date' field. Input required for timestamp generation.",
    tone: 'nerdy',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_nerdy_003',
    message: "System cannot compute chronological sequence without a date.",
    tone: 'nerdy',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_nerdy_004',
    message: "Dependent variable 'date' is undefined. Please define to proceed.",
    tone: 'nerdy',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_nerdy_005',
    message: "Critical 'date' attribute is not populated. Data integrity compromised.",
    tone: 'nerdy',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },

  // Required - PopCulture (5 messages)
  {
    id: 'date_required_popCulture_001',
    message: "Great Scott! We need a date to flux capacitor the process!",
    tone: 'popCulture',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_popCulture_002',
    message: "Winter is coming, but first, a date is required!",
    tone: 'popCulture',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_popCulture_003',
    message: "To infinity and beyond, but not without a date!",
    tone: 'popCulture',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_popCulture_004',
    message: "May the Force be with you... and your date entry!",
    tone: 'popCulture',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_popCulture_005',
    message: "This isn't the date you're looking for... because there isn't one!",
    tone: 'popCulture',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },

  // Required - Millennial (5 messages)
  {
    id: 'date_required_millennial_001',
    message: "This date field is giving 'empty vibes'. Needs your info, fam.",
    tone: 'millennial',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_millennial_002',
    message: "Low-key, we need a date to complete this. No cap.",
    tone: 'millennial',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_millennial_003',
    message: "Adulting moment: providing the date. It's required, sweetie!",
    tone: 'millennial',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_millennial_004',
    message: "Vibes check: date's pending. Gotta drop those deets.",
    tone: 'millennial',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_millennial_005',
    message: "Not to be extra, but this date field is literally empty. Fill it!",
    tone: 'millennial',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },

  // Required - GenZ (5 messages)
  {
    id: 'date_required_genZ_001',
    message: "POV: You forgot the date. Big L, gotta enter it.",
    tone: 'genZ',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_genZ_002',
    message: "This date field is blank, it's giving 'no progress'. Pls input.",
    tone: 'genZ',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_genZ_003',
    message: "Slay the form by adding a date. It's required, periodt.",
    tone: 'genZ',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_genZ_004',
    message: "Cap, no date here. We need it, for real for real.",
    tone: 'genZ',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_genZ_005',
    message: "This field is empty, and it's not aesthetic. Drop your date, bestie.",
    tone: 'genZ',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },

  // Required - Professional (5 messages)
  {
    id: 'date_required_professional_001',
    message: "A date is required for this field. Please provide the necessary information.",
    tone: 'professional',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_professional_002',
    message: "Please enter a valid date to complete this section.",
    tone: 'professional',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_professional_003',
    message: "The date field cannot be left blank. Input is mandatory.",
    tone: 'professional',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_professional_004',
    message: "Kindly specify a date in the designated field.",
    tone: 'professional',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_professional_005',
    message: "To ensure accurate record-keeping, a date must be entered.",
    tone: 'professional',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },

  // Required - Friendly (5 messages)
  {
    id: 'date_required_friendly_001',
    message: "Just need a date here to finish things up!",
    tone: 'friendly',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_friendly_002',
    message: "Hey! Could you please add a date in this field?",
    tone: 'friendly',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_friendly_003',
    message: "Almost there! Just pop a date into this box.",
    tone: 'friendly',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_friendly_004',
    message: "To make sure everything's correct, we'll need a date here.",
    tone: 'friendly',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_friendly_005',
    message: "Quick step! Please fill in the date.",
    tone: 'friendly',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },

  // Required - Motivational (5 messages)
  {
    id: 'date_required_motivational_001',
    message: "Set your course! A date is required to chart your progress!",
    tone: 'motivational',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_motivational_002',
    message: "Define your moment! Providing a date propels you forward!",
    tone: 'motivational',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_motivational_003',
    message: "The timeline awaits your input! Enter the date and seize your destiny!",
    tone: 'motivational',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_motivational_004',
    message: "Unlock the next chapter! A date is the key to proceeding!",
    tone: 'motivational',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_motivational_005',
    message: "Your journey needs a starting point! Provide the date and begin!",
    tone: 'motivational',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },

  // Required - Mysterious (5 messages)
  {
    id: 'date_required_mysterious_001',
    message: "The scroll of time yearns for its inscription. A date is sought.",
    tone: 'mysterious',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_mysterious_002',
    message: "A temporal void awaits definition. Reveal the chosen date.",
    tone: 'mysterious',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_mysterious_003',
    message: "The chronomancer demands a specific moment. The date must be known.",
    tone: 'mysterious',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_mysterious_004',
    message: "The web of causality cannot be spun without this anchor point.",
    tone: 'mysterious',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_mysterious_005',
    message: "Only by marking time can the sequence unfold. A date is required.",
    tone: 'mysterious',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },

  // Required - Dramatic (5 messages)
  {
    id: 'date_required_dramatic_001',
    message: "A temporal anomaly! The missing date halts all progress!",
    tone: 'dramatic',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_dramatic_002',
    message: "The very fabric of destiny unravels without this vital date!",
    tone: 'dramatic',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_dramatic_003',
    message: "Behold the chasm of uncertainty! The date must be provided!",
    tone: 'dramatic',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_dramatic_004',
    message: "A silent scream echoes from the empty date field! Fill it!",
    tone: 'dramatic',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_dramatic_005',
    message: "The universe demands its schedule! The date is paramount!",
    tone: 'dramatic',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },

  // Required - Poetic (5 messages)
  {
    id: 'date_required_poetic_001',
    message: "The calendar awaits, a canvas blank and wide. Imprint the moment, let the hours ride.",
    tone: 'poetic',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_poetic_002',
    message: "No journey starts, nor story can unfold. Until a date, in timely script, is told.",
    tone: 'poetic',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_poetic_003',
    message: "The river of time, a current yet unknown. Bestow a date, upon this digital throne.",
    tone: 'poetic',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_poetic_004',
    message: "A silent void, where seconds dare not fly. Until your chosen date, adorns the digital sky.",
    tone: 'poetic',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },
  {
    id: 'date_required_poetic_005',
    message: "The tapestry of days, begins with a single thread. The date's bright dawn, must now be softly spread.",
    tone: 'poetic',
    fieldType: 'date',
    errorType: 'required',
    category: 'Date'
  },

  // --- Invalid Messages (e.g., wrong format, impossible date like Feb 30) ---

  // Invalid - Witty (5 messages)
  {
    id: 'date_invalid_witty_001',
    message: "That date looks like it's from another dimension! Please try a valid one.",
    tone: 'witty',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_witty_002',
    message: "Oops! Your date seems to have gone rogue. Could you correct it?",
    tone: 'witty',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_witty_003',
    message: "Our calendar elves say this date is a no-go. Invalid format!",
    tone: 'witty',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_witty_004',
    message: "This date isn't playing by the rules. Please enter a valid one.",
    tone: 'witty',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_witty_005',
    message: "Did your date come from a fantasy novel? It's not valid!",
    tone: 'witty',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },

  // Invalid - Dark (5 messages)
  {
    id: 'date_invalid_dark_001',
    message: "The temporal sequence is fractured. This date is an illusion.",
    tone: 'dark',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_dark_002',
    message: "A dissonant chord in the symphony of time. The date is false.",
    tone: 'dark',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_dark_003',
    message: "The threads of fate cannot weave with this malformed date.",
    tone: 'dark',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_dark_004',
    message: "Its form is corrupted. This date holds no true existence.",
    tone: 'dark',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_dark_005',
    message: "A broken moment. This date cannot be reconciled.",
    tone: 'dark',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },

  // Invalid - Funny (5 messages)
  {
    id: 'date_invalid_funny_001',
    message: "Did you enter 'February 30th'? Because that date doesn't exist!",
    tone: 'funny',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_funny_002',
    message: "Our system says 'nope' to this date. Check for typos!",
    tone: 'funny',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_funny_003',
    message: "This date is clearly a prankster. It refuses to be valid!",
    tone: 'funny',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_funny_004',
    message: "Is this date from a parallel universe? Because it's not working here!",
    tone: 'funny',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_funny_005',
    message: "Warning: Entering impossible dates may lead to a visit from the time police!",
    tone: 'funny',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },

  // Invalid - Casual (5 messages)
  {
    id: 'date_invalid_casual_001',
    message: "The date you entered is invalid. Please check it.",
    tone: 'casual',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_casual_002',
    message: "That's not a valid date format. Try again.",
    tone: 'casual',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_casual_003',
    message: "There's an issue with your date entry.",
    tone: 'casual',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_casual_004',
    message: "Please enter a correct date.",
    tone: 'casual',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_casual_005',
    message: "Your date information seems incorrect.",
    tone: 'casual',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },

  // Invalid - Sarcastic (5 messages)
  {
    id: 'date_invalid_sarcastic_001',
    message: "Congratulations, you've invented a new date! Now, how about a real one?",
    tone: 'sarcastic',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_sarcastic_002',
    message: "I'm sure 'December 32nd' is a very important date. It's not.",
    tone: 'sarcastic',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_sarcastic_003',
    message: "Did you just mash your keyboard? That's not how dates work.",
    tone: 'sarcastic',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_sarcastic_004',
    message: "Excellent attempt at a time paradox. Now, for the valid date?",
    tone: 'sarcastic',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_sarcastic_005',
    message: "This date is so invalid, it's almost impressive. Please enter a valid one.",
    tone: 'sarcastic',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },

  // Invalid - Nerdy (5 messages)
  {
    id: 'date_invalid_nerdy_001',
    message: "Date parsing error: Input does not conform to ISO 8601 or common formats.",
    tone: 'nerdy',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_nerdy_002',
    message: "Date object instantiation failed: Invalid day/month combination detected.",
    tone: 'nerdy',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_nerdy_003',
    message: "Chronological anomaly: The provided date is logically impossible.",
    tone: 'nerdy',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_nerdy_004',
    message: "Input validation error: Date string fails format regex.",
    tone: 'nerdy',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_nerdy_005',
    message: "Temporal data stream corrupted. Recalibration requires a valid date.",
    tone: 'nerdy',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },

  // Invalid - PopCulture (5 messages)
  {
    id: 'date_invalid_popCulture_001',
    message: "This date isn't the timeline we're looking for. Invalid!",
    tone: 'popCulture',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_popCulture_002',
    message: "You've got the wrong date, Neo. This one is invalid.",
    tone: 'popCulture',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_popCulture_003',
    message: "My Spidey-sense is tingling... because this date is invalid.",
    tone: 'popCulture',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_popCulture_004',
    message: "It's like trying to fit a square date in a round hole. Invalid!",
    tone: 'popCulture',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_popCulture_005',
    message: "Houston, we have a time warp. Your date is invalid.",
    tone: 'popCulture',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },

  // Invalid - Millennial (5 messages)
  {
    id: 'date_invalid_millennial_001',
    message: "This date is giving 'not valid'. Check your deets, sis.",
    tone: 'millennial',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_millennial_002',
    message: "Vibes check: this date isn't hitting. It's invalid, fam.",
    tone: 'millennial',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_millennial_003',
    message: "Not gonna lie, this date is invalid. Plz correct.",
    tone: 'millennial',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_millennial_004',
    message: "Adulting fail: invalid date. Time to re-enter, sweetie.",
    tone: 'millennial',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_millennial_005',
    message: "This date data is a whole mood, but it's the 'invalid' mood. Double check!",
    tone: 'millennial',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },

  // Invalid - GenZ (5 messages)
  {
    id: 'date_invalid_genZ_001',
    message: "POV: Your date is wrong. Big L. Gotta fix it.",
    tone: 'genZ',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_genZ_002',
    message: "This date info is not bussin'. It's invalid.",
    tone: 'genZ',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_genZ_003',
    message: "Slay the form by entering a valid date. This one's cap.",
    tone: 'genZ',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_genZ_004',
    message: "It's giving 'invalid date'. Check your digits, bestie.",
    tone: 'genZ',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_genZ_005',
    message: "Fr fr, this date isn't valid. Try again, for real.",
    tone: 'genZ',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },

  // Invalid - Professional (5 messages)
  {
    id: 'date_invalid_professional_001',
    message: "The date provided is not valid. Please verify and re-enter.",
    tone: 'professional',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_professional_002',
    message: "An invalid date format has been detected. Kindly correct the input.",
    tone: 'professional',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_professional_003',
    message: "The date entered does not pass validation. Please ensure accuracy.",
    tone: 'professional',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_professional_004',
    message: "Invalid date information. Please check the date and try again.",
    tone: 'professional',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_professional_005',
    message: "The submitted date is not recognized as valid. Review your entry.",
    tone: 'professional',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },

  // Invalid - Friendly (5 messages)
  {
    id: 'date_invalid_friendly_001',
    message: "Oops! It looks like there's a typo in your date.",
    tone: 'friendly',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_friendly_002',
    message: "Hey! Your date doesn't seem to be valid. Could you check it?",
    tone: 'friendly',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_friendly_003',
    message: "No worries, but your date seems a little off. Can you try again?",
    tone: 'friendly',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_friendly_004',
    message: "To proceed, we need a valid date. Yours looks incorrect.",
    tone: 'friendly',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_friendly_005',
    message: "Just a heads-up, there's an issue with your date. Please re-enter it.",
    tone: 'friendly',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },

  // Invalid - Motivational (5 messages)
  {
    id: 'date_invalid_motivational_001',
    message: "Don't let an invalid date stop you! Double-check and conquer your task!",
    tone: 'motivational',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_motivational_002',
    message: "A minor setback, not a defeat! Correct your date and proceed!",
    tone: 'motivational',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_motivational_003',
    message: "Precision is power! Refine your date entry for a flawless submission.",
    tone: 'motivational',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_motivational_004',
    message: "Every obstacle is an opportunity! Correct the invalid date and achieve your goal!",
    tone: 'motivational',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_motivational_005',
    message: "Your success awaits! A valid date is the key to unlock it.",
    tone: 'motivational',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },

  // Invalid - Mysterious (5 messages)
  {
    id: 'date_invalid_mysterious_001',
    message: "The chronological sequence is veiled. This date holds no truth.",
    tone: 'mysterious',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_mysterious_002',
    message: "A temporal paradox detected. This date does not exist within the known fabric.",
    tone: 'mysterious',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_mysterious_003',
    message: "The whispers of time reject this entry. The date is a falsehood.",
    tone: 'mysterious',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_mysterious_004',
    message: "Its passage is unseen. The date cannot be reconciled with reality.",
    tone: 'mysterious',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_mysterious_005',
    message: "A forgotten moment. This date holds no place in the grand design.",
    tone: 'mysterious',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },

  // Invalid - Dramatic (5 messages)
  {
    id: 'date_invalid_dramatic_001',
    message: "A catastrophic temporal distortion! This date is utterly invalid!",
    tone: 'dramatic',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_dramatic_002',
    message: "The cosmic clock rebels! This date is a fabrication!",
    tone: 'dramatic',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_dramatic_003',
    message: "Behold, the error of chronology! Your date is a phantom!",
    tone: 'dramatic',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_dramatic_004',
    message: "The very flow of time is disrupted by this flawed input!",
    tone: 'dramatic',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_dramatic_005',
    message: "A scream of discord from the calendar! The date is not, cannot be!",
    tone: 'dramatic',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },

  // Invalid - Poetic (5 messages)
  {
    id: 'date_invalid_poetic_001',
    message: "A broken rhythm, where moments lose their sway. The chosen date, finds no harmonious day.",
    tone: 'poetic',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_poetic_002',
    message: "Like fragmented whispers, truth cannot abide. This date's own essence, cannot here reside.",
    tone: 'poetic',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_poetic_003',
    message: "The destined path, by error is undone. A valid date, for journeys to be spun.",
    tone: 'poetic',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_poetic_004',
    message: "A silent discord, where numbers go astray. Find harmony, for this unfolding day.",
    tone: 'poetic',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },
  {
    id: 'date_invalid_poetic_005',
    message: "The clock's soft ticking, finds no solace here. A flawed design, dispelling joy and fear.",
    tone: 'poetic',
    fieldType: 'date',
    errorType: 'invalid',
    category: 'Date'
  },

  // --- inPast Messages ---

  // inPast - Witty (5 messages)
  {
    id: 'date_inPast_witty_001',
    message: "That date is so last year! We need something more current.",
    tone: 'witty',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_witty_002',
    message: "Looks like your date is living in the good old days. We need a future one!",
    tone: 'witty',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_witty_003',
    message: "This date has already made its grand exit. Please choose one that hasn't!",
    tone: 'witty',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_witty_004',
    message: "Uh oh, your date tried to pull a time travel trick. It's in the past!",
    tone: 'witty',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_witty_005',
    message: "Your date is older than sliced bread. Please pick a future date!",
    tone: 'witty',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },

  // inPast - Dark (5 messages)
  {
    id: 'date_inPast_dark_001',
    message: "The moment has passed into shadow. This date holds no future.",
    tone: 'dark',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_dark_002',
    message: "A memory, not a prophecy. This date lies in the forgotten past.",
    tone: 'dark',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_dark_003',
    message: "Its time has concluded. The past cannot be the present.",
    tone: 'dark',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_dark_004',
    message: "The sands of the hourglass have fallen. This date is spent.",
    tone: 'dark',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_dark_005',
    message: "A chilling echo from what was. Only the future may proceed.",
    tone: 'dark',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },

  // inPast - Funny (5 messages)
  {
    id: 'date_inPast_funny_001',
    message: "Did your calendar get stuck in a time loop? This date is ancient history!",
    tone: 'funny',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_funny_002',
    message: "Your date is so retro, it's in the past! Pick a date that hasn't happened yet.",
    tone: 'funny',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_funny_003',
    message: "This date needs a history book, not a future event! Please update.",
    tone: 'funny',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_funny_004',
    message: "Our system thinks you're stuck in a time machine. Date's in the past!",
    tone: 'funny',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_funny_005',
    message: "Warning: Entering past dates may attract dinosaurs. Please choose a future date!",
    tone: 'funny',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },

  // inPast - Casual (5 messages)
  {
    id: 'date_inPast_casual_001',
    message: "The date you entered is in the past.",
    tone: 'casual',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_casual_002',
    message: "Please select a date that is today or in the future.",
    tone: 'casual',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_casual_003',
    message: "This date has already passed.",
    tone: 'casual',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_casual_004',
    message: "You need to choose a future date.",
    tone: 'casual',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_casual_005',
    message: "The date is in the past. Pick a new one.",
    tone: 'casual',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },

  // inPast - Sarcastic (5 messages)
  {
    id: 'date_inPast_sarcastic_001',
    message: "Remarkable! You've successfully chosen a date that has already happened. Try a future one.",
    tone: 'sarcastic',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_sarcastic_002',
    message: "I'm sure we can bend the laws of physics for your past date. Or you could just pick a new one.",
    tone: 'sarcastic',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_sarcastic_003',
    message: "Did you mean to submit this form in 2005? Your date is in the past.",
    tone: 'sarcastic',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_sarcastic_004',
    message: "Yes, because old dates are just as relevant as future ones. They're not.",
    tone: 'sarcastic',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_sarcastic_005',
    message: "This date has seen better days. Many, many better days ago. It's in the past.",
    tone: 'sarcastic',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },

  // inPast - Nerdy (5 messages)
  {
    id: 'date_inPast_nerdy_001',
    message: "Timestamp comparison error: Input date precedes current system date. Backward time travel not permitted.",
    tone: 'nerdy',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_nerdy_002',
    message: "Date validity check failed: Date is less than current_date. Future date required.",
    tone: 'nerdy',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_nerdy_003',
    message: "Temporal paradox detected: Event date is in historical domain. Requires future domain.",
    tone: 'nerdy',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_nerdy_004',
    message: "Date object property 'isFuture' evaluates to false. Update required.",
    tone: 'nerdy',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_nerdy_005',
    message: "Chronometer out of sync: Input date is in the past. Recalibrate to current or future.",
    tone: 'nerdy',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },

  // inPast - PopCulture (5 messages)
  {
    id: 'date_inPast_popCulture_001',
    message: "This date is from a long time ago in a galaxy far, far away. We need a current one!",
    tone: 'popCulture',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_popCulture_002',
    message: "You shall not pass... with a past date! Choose a future one!",
    tone: 'popCulture',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_popCulture_003',
    message: "It's a trap! This date is in the past. We need to go forward!",
    tone: 'popCulture',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_popCulture_004',
    message: "This date is like a vintage movie. Charming, but not for future use!",
    tone: 'popCulture',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_popCulture_005',
    message: "Your date is off the air, it's from the past! Tune into a future one.",
    tone: 'popCulture',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },

  // inPast - Millennial (5 messages)
  {
    id: 'date_inPast_millennial_001',
    message: "This date is giving 'old news'. It's in the past, fam.",
    tone: 'millennial',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_millennial_002',
    message: "Vibes check: your date is from a bygone era. Needs an update, sweetie.",
    tone: 'millennial',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_millennial_003',
    message: "Not gonna lie, this date is past due. Time for an adulting moment!",
    tone: 'millennial',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_millennial_004',
    message: "Your date is a whole mood, but it's the 'throwback' mood. Get a future one!",
    tone: 'millennial',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_millennial_005',
    message: "This date has aged out. It's in the past, no cap.",
    tone: 'millennial',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },

  // inPast - GenZ (5 messages)
  {
    id: 'date_inPast_genZ_001',
    message: "POV: Your date is in the past. Big L, gotta get a new one.",
    tone: 'genZ',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_genZ_002',
    message: "This date is giving 'vintage'. It's expired, bestie.",
    tone: 'genZ',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_genZ_003',
    message: "Slay the form by picking a future date. This one's from last season, periodt.",
    tone: 'genZ',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_genZ_004',
    message: "Cap, this date is wild, but it's in the past. For real for real, pick a future one.",
    tone: 'genZ',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_genZ_005',
    message: "This date is not bussin' because it's already happened. Time for an upgrade.",
    tone: 'genZ',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },

  // inPast - Professional (5 messages)
  {
    id: 'date_inPast_professional_001',
    message: "The selected date is in the past. Please choose a current or future date.",
    tone: 'professional',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_professional_002',
    message: "Kindly update your date selection to a non-past value.",
    tone: 'professional',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_professional_003',
    message: "The event date must be on or after today's date.",
    tone: 'professional',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_professional_004',
    message: "Please provide a date that has not yet occurred or is today's date.",
    tone: 'professional',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_professional_005',
    message: "The entered date precedes the current date and is thus invalid for this field.",
    tone: 'professional',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },

  // inPast - Friendly (5 messages)
  {
    id: 'date_inPast_friendly_001',
    message: "Oops! It looks like your date is in the past.",
    tone: 'friendly',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_friendly_002',
    message: "Hey! Your date is before today. Could you pick a new one?",
    tone: 'friendly',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_friendly_003',
    message: "No worries, but this date has already happened. Please choose a future one!",
    tone: 'friendly',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_friendly_004',
    message: "Just a friendly heads-up, your date isn't valid anymore as it's passed.",
    tone: 'friendly',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_friendly_005',
    message: "Almost ready! Just update your date as it appears to be from the past.",
    tone: 'friendly',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },

  // inPast - Motivational (5 messages)
  {
    id: 'date_inPast_motivational_001',
    message: "Leave the past behind! Choose a future date and seize your opportunity!",
    tone: 'motivational',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_motivational_002',
    message: "Embrace the future! A new date means fresh beginnings for your plans.",
    tone: 'motivational',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_motivational_003',
    message: "The path to success is forward! Choose a current or future date to keep moving!",
    tone: 'motivational',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_motivational_004',
    message: "Your potential is boundless! A quick date update is all that stands between you and your goal.",
    tone: 'motivational',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_motivational_005',
    message: "Seize the moment! Replace your past date and unlock endless possibilities.",
    tone: 'motivational',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },

  // inPast - Mysterious (5 messages)
  {
    id: 'date_inPast_mysterious_001',
    message: "The temporal sigil marks a time that has passed. Its power is diminished.",
    tone: 'mysterious',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_mysterious_002',
    message: "Its allotted span concluded. This date is but an echo in the annals of time.",
    tone: 'mysterious',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_mysterious_003',
    message: "The prophecy of its passing has been fulfilled. This date is no more.",
    tone: 'mysterious',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_mysterious_004',
    message: "A relic from a bygone era. This date offers no current passage.",
    tone: 'mysterious',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_mysterious_005',
    message: "The veil of time has fallen upon this date. It lies dormant in memory.",
    tone: 'mysterious',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },

  // inPast - Dramatic (5 messages)
  {
    id: 'date_inPast_dramatic_001',
    message: "A tragic reversal of destiny! This date dwells in the unforgiving past!",
    tone: 'dramatic',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_dramatic_002',
    message: "The relentless march of time consumes this date! It is no more!",
    tone: 'dramatic',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_dramatic_003',
    message: "Behold, the relic of a former validity! Your date is expired from the present!",
    tone: 'dramatic',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_dramatic_004',
    message: "The very flow of progress is severed by this ancient date!",
    tone: 'dramatic',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_dramatic_005',
    message: "A lament from the calendar! Your date is a ghost of moments past!",
    tone: 'dramatic',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },

  // inPast - Poetic (5 messages)
  {
    id: 'date_inPast_poetic_001',
    message: "Its season passed, its vibrant moment flown. This date's bright purpose, a memory alone.",
    tone: 'poetic',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_poetic_002',
    message: "Like fading starlight, grace has left its form. A new dawn beckons, beyond the temporal storm.",
    tone: 'poetic',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_poetic_003',
    message: "The hourglass emptied, its sands no longer fall. A future moment, answers destiny's call.",
    tone: 'poetic',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_poetic_004',
    message: "A silent autumn, where green leaves turn to brown. This date's brief purpose, has now settled down.",
    tone: 'poetic',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  },
  {
    id: 'date_inPast_poetic_005',
    message: "The song it sang, now softly fades away. A fresh new anthem, for a brighter, future day.",
    tone: 'poetic',
    fieldType: 'date',
    errorType: 'inPast',
    category: 'Date'
  }
];