import { ValidationMessage } from '../types';

export const creditCardMessages: ValidationMessage[] = [
  // --- Required Messages ---

  // Required - Witty (5 messages)
  {
    id: 'creditCard_required_witty_001',
    message: "Don't be shy! We need your card details to make magic happen.",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_witty_002',
    message: "Our checkout gnomes are waiting for your card info. Please provide it!",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_witty_003',
    message: "This card slot is feeling empty. Fill it up to proceed!",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_witty_004',
    message: "Payment needs a partner. Your credit card details, please!",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_witty_005',
    message: "The bill's here! We just need your card's info to close the tab.",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },

  // Required - Dark (5 messages)
  {
    id: 'creditCard_required_dark_001',
    message: "The offering is incomplete. Provide your card, or face stagnation.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_dark_002',
    message: "The shadow of payment awaits. Your card details are demanded.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_dark_003',
    message: "A void in the transaction. Fill it with the card's essence.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_dark_004',
    message: "The path of commerce is barred. Only your card can open it.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_dark_005',
    message: "Without this tribute, the ritual of purchase cannot proceed.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },

  // Required - Funny (5 messages)
  {
    id: 'creditCard_required_funny_001',
    message: "My wallet just told me it's lonely. It needs your card details!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_funny_002',
    message: "Warning: Missing credit card info may lead to dancing hamsters. Just kidding! (Or am I?)",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_funny_003',
    message: "Don't be a spoilsport, enter your credit card info already!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_funny_004',
    message: "Our checkout system is doing the 'where's the card' dance. Please fill it in!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_funny_005',
    message: "This field is naked without your credit card info. Cover it up!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },

  // Required - Casual (5 messages)
  {
    id: 'creditCard_required_casual_001',
    message: "Just need your card details here to finish up.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_casual_002',
    message: "Please enter your credit card information to proceed.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_casual_003',
    message: "Don't forget to fill in your card details.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_casual_004',
    message: "Quick heads-up, we need your credit card info.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_casual_005',
    message: "Almost done! Just add your credit card details.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },

  // Required - Sarcastic (5 messages)
  {
    id: 'creditCard_required_sarcastic_001',
    message: "Oh, you thought we didn't need your payment details? How quaint.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_sarcastic_002',
    message: "Of course, we'll just send it to you for free. Please provide your credit card.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_sarcastic_003',
    message: "Did you miss the giant 'payment' section? Your card details are required.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_sarcastic_004',
    message: "Yes, this critical payment step is entirely optional. Just kidding, input your card.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_sarcastic_005',
    message: "I'm sure you planned to pay with good intentions, but we need a credit card.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },

  // Required - Nerdy (5 messages)
  {
    id: 'creditCard_required_nerdy_001',
    message: "Error 402: Payment Required. Credit card data missing.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_nerdy_002',
    message: "Critical parameter 'creditCardDetails' is null. Input required for transaction commit.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_nerdy_003',
    message: "Authentication failure: Payment method not detected. Please provide credit card.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_nerdy_004',
    message: "System cannot compute financial transfer without credit card credentials.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_nerdy_005',
    message: "Transaction initiation requires 'creditCard' object instantiation.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },

  // Required - PopCulture (5 messages)
  {
    id: 'creditCard_required_popCulture_001',
    message: "Show me the money! (By entering your credit card details).",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_popCulture_002',
    message: "It's dangerous to go alone! Take your credit card with you (and enter it).",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_popCulture_003',
    message: "You can't buy that for a dollar! We need a credit card.",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_popCulture_004',
    message: "Payment is coming! (Once you enter your credit card info).",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_popCulture_005',
    message: "The ultimate power is yours... with a valid credit card.",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },

  // Required - Millennial (5 messages)
  {
    id: 'creditCard_required_millennial_001',
    message: "This credit card field is giving 'empty vibes'. Needs your info, fam.",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_millennial_002',
    message: "Low-key, we need your card details to complete this purchase. No cap.",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_millennial_003',
    message: "Adulting moment: providing your credit card. It's required, sweetie!",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_millennial_004',
    message: "Vibes check: payment's pending. Gotta drop those credit card deets.",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_millennial_005',
    message: "Not to be extra, but this credit card field is literally empty. Fill it!",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },

  // Required - GenZ (5 messages)
  {
    id: 'creditCard_required_genZ_001',
    message: "POV: You forgot your credit card info. Big L, gotta enter it.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_genZ_002',
    message: "This credit card field is blank, it's giving 'no purchase'. Pls input.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_genZ_003',
    message: "Slay the checkout by adding your card details. It's required, periodt.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_genZ_004',
    message: "Cap, no card info here. We need it, for real for real.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_genZ_005',
    message: "This field is empty, and it's not aesthetic. Drop your credit card, bestie.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },

  // Required - Professional (5 messages)
  {
    id: 'creditCard_required_professional_001',
    message: "Credit card details are required to complete this transaction.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_professional_002',
    message: "Please enter your credit card information in the designated fields.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_professional_003',
    message: "Your payment cannot be processed without valid credit card details.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_professional_004',
    message: "Kindly provide your credit card information to proceed with the purchase.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_professional_005',
    message: "Completion of the credit card section is mandatory.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },

  // Required - Friendly (5 messages)
  {
    id: 'creditCard_required_friendly_001',
    message: "Looks like we just need your credit card info to finish up!",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_friendly_002',
    message: "Hey! Could you please add your credit card details here?",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_friendly_003',
    message: "Almost done! Just pop your credit card info in the boxes.",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_friendly_004',
    message: "To make sure your order goes through, we'll need your credit card here.",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_friendly_005',
    message: "Just a quick step! Please fill in your credit card details.",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },

  // Required - Motivational (5 messages)
  {
    id: 'creditCard_required_motivational_001',
    message: "Unlock your purchase! Just enter your credit card and claim your items!",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_motivational_002',
    message: "Empower your transaction! Providing your card data completes the journey.",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_motivational_003',
    message: "The finish line is near! Your credit card details are the final step to success.",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_motivational_004',
    message: "Seize the opportunity! Complete your order by entering your card details.",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_motivational_005',
    message: "Your potential awaits! Fulfill your purchase by providing card information.",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },

  // Required - Mysterious (5 messages)
  {
    id: 'creditCard_required_mysterious_001',
    message: "The path of exchange is sealed. The card's essence is required.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_mysterious_002',
    message: "A silent request from the void. Your card details hold the answer.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_mysterious_003',
    message: "The gateway to acquisition remains shut. Provide the arcane numbers.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_mysterious_004',
    message: "Whispers of commerce demand a tribute. The card must be presented.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_mysterious_005',
    message: "Only through this ritual of data entry can the transaction manifest.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },

  // Required - Dramatic (5 messages)
  {
    id: 'creditCard_required_dramatic_001',
    message: "A void of expenditure! The missing card details halt all fate!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_dramatic_002',
    message: "The scales of commerce demand balance! Your card is the key!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_dramatic_003',
    message: "Behold the chasm of payment! The credit card must be provided!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_dramatic_004',
    message: "The very essence of your purchase is denied without this vital input!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_dramatic_005',
    message: "A silent scream echoes from the empty card fields! Fill them!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },

  // Required - Poetic (5 messages)
  {
    id: 'creditCard_required_poetic_001',
    message: "The scroll of purchase, waits for script so fine. Imprint the numbers, let its magic shine.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_poetic_002',
    message: "A barren field, where coins refuse to gleam. Your card's true essence, for this waking dream.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_poetic_003',
    message: "The silent ledger, yearns for golden trace. Give forth the card, and find your destined place.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_poetic_004',
    message: "No current flows, no commerce takes its flight. Until your card, brings forth its gentle light.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_required_poetic_005',
    message: "A symphony of trade, begins with notes so grand. Your card's true song, across this digital land.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'required',
    category: 'Credit Card'
  },

  // --- Invalid Messages (for number format or general validation) ---

  // Invalid - Witty (5 messages)
  {
    id: 'creditCard_invalid_witty_001',
    message: "Uh oh, your card played a trick on us! That number doesn't look quite right.",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_witty_002',
    message: "It seems your credit card number is a bit of a mystery. Could you double-check it?",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_witty_003',
    message: "This card number isn't ringing any bells. Is it a typo?",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_witty_004',
    message: "Our card reader is giving us the 'I don't know her' look. Invalid card details!",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_witty_005',
    message: "Looks like your credit card went rogue! Please enter a valid one.",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },

  // Invalid - Dark (5 messages)
  {
    id: 'creditCard_invalid_dark_001',
    message: "The numbers are false. This card holds no power here.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_dark_002',
    message: "A deception detected. The card's essence is corrupted.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_dark_003',
    message: "The glyphs are malformed. This card cannot bind the transaction.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_dark_004',
    message: "Its true form is concealed, or it is but a phantom. Invalid card.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_dark_005',
    message: "A broken key. This card offers no passage.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },

  // Invalid - Funny (5 messages)
  {
    id: 'creditCard_invalid_funny_001',
    message: "Did you just make that card number up? It's not working!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_funny_002',
    message: "Our system says 'nope' to this card. Check for typos!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_funny_003',
    message: "This credit card is clearly a rebel. It refuses to be valid!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_funny_004',
    message: "Is this card number for a secret club? Because it's not working here!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_funny_005',
    message: "Warning: Entering invalid card numbers may result in a visit from the typo police!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },

  // Invalid - Casual (5 messages)
  {
    id: 'creditCard_invalid_casual_001',
    message: "The credit card number is invalid. Please check it.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_casual_002',
    message: "That's not a valid credit card. Try again.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_casual_003',
    message: "There's an issue with your credit card details.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_casual_004',
    message: "Please enter a valid credit card number.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_casual_005',
    message: "Your credit card information seems incorrect.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },

  // Invalid - Sarcastic (5 messages)
  {
    id: 'creditCard_invalid_sarcastic_001',
    message: "Congratulations, you've entered a credit card number that doesn't exist. Try a real one.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_sarcastic_002',
    message: "I'm sure that random string of numbers is a credit card. It's not.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_sarcastic_003',
    message: "Did you just mash your keyboard? That's not how credit card numbers work.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_sarcastic_004',
    message: "Excellent attempt at a fake credit card. Now, for the real one?",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_sarcastic_005',
    message: "This card is so invalid, it's almost impressive. Please enter a valid one.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },

  // Invalid - Nerdy (5 messages)
  {
    id: 'creditCard_invalid_nerdy_001',
    message: "Luhn algorithm check failed for credit card number. Invalid checksum.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_nerdy_002',
    message: "Regex pattern mismatch for credit card format. Input string invalid.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_nerdy_003',
    message: "Credit card tokenization error: Provided data does not conform to known schemes.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_nerdy_004',
    message: "PCI compliance failure: Invalid credit card number detected.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_nerdy_005',
    message: "Credit card object instantiation failed due to malformed data.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },

  // Invalid - PopCulture (5 messages)
  {
    id: 'creditCard_invalid_popCulture_001',
    message: "This credit card isn't the droid we're looking for. Invalid number!",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_popCulture_002',
    message: "You've got the wrong number, Neo. This credit card is invalid.",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_popCulture_003',
    message: "My Spidey-sense is tingling... because this credit card number is invalid.",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_popCulture_004',
    message: "It's like trying to fit a square peg in a round hole. This credit card is invalid.",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_popCulture_005',
    message: "Houston, we have a problem. Your credit card number is invalid.",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },

  // Invalid - Millennial (5 messages)
  {
    id: 'creditCard_invalid_millennial_001',
    message: "This credit card number is giving 'not valid'. Check your deets, sis.",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_millennial_002',
    message: "Vibes check: this credit card isn't hitting. It's invalid, fam.",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_millennial_003',
    message: "Not gonna lie, this credit card number is invalid. Plz correct.",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_millennial_004',
    message: "Adulting fail: invalid credit card number. Time to re-enter, sweetie.",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_millennial_005',
    message: "This credit card data is a whole mood, but it's the 'invalid' mood. Double check!",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },

  // Invalid - GenZ (5 messages)
  {
    id: 'creditCard_invalid_genZ_001',
    message: "POV: Your credit card number is invalid. Big L. Gotta fix it.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_genZ_002',
    message: "This credit card info is not bussin'. It's invalid.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_genZ_003',
    message: "Slay the payment by entering a valid card number. This one's cap.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_genZ_004',
    message: "It's giving 'invalid credit card'. Check your digits, bestie.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_genZ_005',
    message: "Fr fr, this credit card number isn't valid. Try again, for real.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },

  // Invalid - Professional (5 messages)
  {
    id: 'creditCard_invalid_professional_001',
    message: "The credit card number provided is not valid. Please verify and re-enter.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_professional_002',
    message: "An invalid credit card format has been detected. Kindly correct the input.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_professional_003',
    message: "The credit card details do not pass validation. Please ensure accuracy.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_professional_004',
    message: "Invalid credit card information. Please check the card number and try again.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_professional_005',
    message: "The submitted credit card is not recognized as valid. Review your entry.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },

  // Invalid - Friendly (5 messages)
  {
    id: 'creditCard_invalid_friendly_001',
    message: "Oops! It looks like there's a typo in your credit card number.",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_friendly_002',
    message: "Hey! Your credit card number doesn't seem to be valid. Could you check it?",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_friendly_003',
    message: "No worries, but your credit card details seem a little off. Can you try again?",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_friendly_004',
    message: "To process your payment, we need a valid credit card number. Yours looks incorrect.",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_friendly_005',
    message: "Just a heads-up, there's an issue with your credit card number. Please re-enter it.",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },

  // Invalid - Motivational (5 messages)
  {
    id: 'creditCard_invalid_motivational_001',
    message: "Don't let an invalid card stop you! Double-check and conquer your purchase!",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_motivational_002',
    message: "A minor setback, not a defeat! Correct your credit card info and proceed!",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_motivational_003',
    message: "Precision is power! Refine your credit card entry for a flawless transaction.",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_motivational_004',
    message: "Every obstacle is an opportunity! Correct the invalid card and achieve your goal!",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_motivational_005',
    message: "Your financial victory awaits! A valid credit card is the key to unlock it.",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },

  // Invalid - Mysterious (5 messages)
  {
    id: 'creditCard_invalid_mysterious_001',
    message: "The numbers whisper of falsehoods. This card holds no true identity.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_mysterious_002',
    message: "A sigil of deception. The card's true pattern eludes the gatekeeper.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_mysterious_003',
    message: "The oracle rejects this offering. The card's truth is yet to be revealed.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_mysterious_004',
    message: "Its form is corrupted. The card's power cannot be invoked.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_mysterious_005',
    message: "A false key has been presented. The true credit card remains unseen.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },

  // Invalid - Dramatic (5 messages)
  {
    id: 'creditCard_invalid_dramatic_001',
    message: "A catastrophic miscalculation! This card is utterly invalid!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_dramatic_002',
    message: "The digital abyss consumes this invalid card! No transaction shall pass!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_dramatic_003',
    message: "Behold, the error of numbers! Your credit card is a phantom!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_dramatic_004',
    message: "The very fabric of commerce rejects this flawed instrument! Invalid card!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_dramatic_005',
    message: "A scream of discord from the system! The credit card is not, cannot be!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },

  // Invalid - Poetic (5 messages)
  {
    id: 'creditCard_invalid_poetic_001',
    message: "A broken verse, where numbers lose their grace. The card's true song, finds no harmonious space.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_poetic_002',
    message: "Like fragmented whispers, truth cannot reside. This card's own essence, cannot here abide.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_poetic_003',
    message: "The destined path, by error is undone. A valid card, for journeys to be spun.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_poetic_004',
    message: "A silent discord, where digits go astray. Find harmony, for this financial day.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalid_poetic_005',
    message: "The merchant's ledger, cannot read this plea. A flawed design, for all the world to see.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'invalid',
    category: 'Credit Card'
  },

  // --- Expired Messages ---

  // Expired - Witty (5 messages)
  {
    id: 'creditCard_expired_witty_001',
    message: "Looks like your card's expiration date decided to take an early retirement!",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_witty_002',
    message: "Your card's membership seems to have expired. Time for a new one!",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_witty_003',
    message: "This card is past its prime. Please use a fresh one!",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_witty_004',
    message: "Uh oh, your card's expiration date is acting like it's 2024. Update needed!",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_witty_005',
    message: "Your credit card's shelf life has ended. Grab a new one for payment!",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },

  // Expired - Dark (5 messages)
  {
    id: 'creditCard_expired_dark_001',
    message: "The sands of time have run out for this card. Its power is diminished.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_dark_002',
    message: "Its life force has drained. This card is but a relic of the past.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_dark_003',
    message: "The prophecy of expiry has been fulfilled. This card is no more.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_dark_004',
    message: "A ghost in the machine. This card's time has passed.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_dark_005',
    message: "Consumed by the inevitable march of time. This card is spent.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },

  // Expired - Funny (5 messages)
  {
    id: 'creditCard_expired_funny_001',
    message: "Your card is older than the internet! Please use a more current one.",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_funny_002',
    message: "This card needs a retirement party. It's expired!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_funny_003',
    message: "Did your card forget to check its calendar? It's expired!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_funny_004',
    message: "Our system just asked if this card was from the dinosaurs. It's expired!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_funny_005',
    message: "Looks like your credit card went stale. Time for a fresh one!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },

  // Expired - Casual (5 messages)
  {
    id: 'creditCard_expired_casual_001',
    message: "Your credit card has expired. Please use a new one.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_casual_002',
    message: "The expiration date on your card is in the past.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_casual_003',
    message: "Please update your credit card as it appears to be expired.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_casual_004',
    message: "Your card is no longer valid for purchases.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_casual_005',
    message: "Looks like your credit card expired.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },

  // Expired - Sarcastic (5 messages)
  {
    id: 'creditCard_expired_sarcastic_001',
    message: "Remarkable! You've managed to use a card from the past. Please try a current one.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_sarcastic_002',
    message: "Did you check the calendar on your card? It seems to be a bit behind.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_sarcastic_003',
    message: "I'm sure your expired card will work. Just as sure as pigs fly.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_sarcastic_004',
    message: "Yes, because old bread is just as good as fresh. Your card is expired.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_sarcastic_005',
    message: "This card has seen better days. Many, many better days ago. It's expired.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },

  // Expired - Nerdy (5 messages)
  {
    id: 'creditCard_expired_nerdy_001',
    message: "Expiration date parameter falls before current system timestamp. Card invalid.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_nerdy_002',
    message: "Credit card lifecycle event: 'Expired' state detected. Transaction aborted.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_nerdy_003',
    message: "Timestamp comparison error: Card 'valid_until' is in past. Update required.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_nerdy_004',
    message: "Payment gateway response: Card status 'Expired'. Initiate new card input.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_nerdy_005',
    message: "Object 'creditCard' property 'expiryDate' out of valid range.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },

  // Expired - PopCulture (5 messages)
  {
    id: 'creditCard_expired_popCulture_001',
    message: "This card is like an old VHS tape. It's expired!",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_popCulture_002',
    message: "Your card is living in the past! It's expired.",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_popCulture_003',
    message: "This card has reached its final destination. It's expired!",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_popCulture_004',
    message: "It's not a bug, it's a feature... of an expired card! Get a new one.",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_popCulture_005',
    message: "Your card is off the air, it's expired! Tune into a new one.",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },

  // Expired - Millennial (5 messages)
  {
    id: 'creditCard_expired_millennial_001',
    message: "This card is giving 'old news'. It's expired, fam.",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_millennial_002',
    message: "Vibes check: your card's expiration date is in the past. Needs an update, sweetie.",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_millennial_003',
    message: "Not gonna lie, this card is expired. Time for an adulting moment!",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_millennial_004',
    message: "Your card is a whole mood, but it's the 'past due' mood. Get a new one!",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_millennial_005',
    message: "This credit card has aged out. It's expired, no cap.",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },

  // Expired - GenZ (5 messages)
  {
    id: 'creditCard_expired_genZ_001',
    message: "POV: Your card expired. Big L, gotta get a new one.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_genZ_002',
    message: "This card is giving 'old'. It's expired, bestie.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_genZ_003',
    message: "Slay the payment with a fresh card. This one's expired, periodt.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_genZ_004',
    message: "Cap, this card's expiration date is wild. It's expired, for real for real.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_genZ_005',
    message: "This card is not bussin' because it's expired. Time for an upgrade.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },

  // Expired - Professional (5 messages)
  {
    id: 'creditCard_expired_professional_001',
    message: "The credit card provided has passed its expiration date. Please use an active card.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_professional_002',
    message: "Your credit card is expired. Kindly update your payment information.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_professional_003',
    message: "Payment processing failed: Credit card expiration date invalid.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_professional_004',
    message: "The submitted card is no longer valid due to its expiration date.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_professional_005',
    message: "Please provide a credit card with a future expiration date.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },

  // Expired - Friendly (5 messages)
  {
    id: 'creditCard_expired_friendly_001',
    message: "Oops! It looks like your credit card has expired.",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_friendly_002',
    message: "Hey! Your card's expiration date is in the past. Could you use a new one?",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_friendly_003',
    message: "No worries, but this card is expired. Please grab your current card!",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_friendly_004',
    message: "Just a friendly heads-up, your credit card isn't valid anymore due to its date.",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_friendly_005',
    message: "Almost ready! Just update your credit card as it appears to be expired.",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },

  // Expired - Motivational (5 messages)
  {
    id: 'creditCard_expired_motivational_001',
    message: "Don't let an expired card deter you! Update and power through your purchase!",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_motivational_002',
    message: "Embrace renewal! A new card means fresh opportunities for seamless transactions.",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_motivational_003',
    message: "The path to success is clear: use a current card to keep moving forward!",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_motivational_004',
    message: "Your potential is limitless! A quick card update is all that stands between you and your goal.",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_motivational_005',
    message: "Seize the moment! Replace your expired card and unlock effortless payment.",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },

  // Expired - Mysterious (5 messages)
  {
    id: 'creditCard_expired_mysterious_001',
    message: "The temporal sigil has faded. This card's power has waned.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_mysterious_002',
    message: "Its allotted span has concluded. The card is now a whisper of the past.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_mysterious_003',
    message: "The prophecy of its end has come to pass. A new vessel is needed.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_mysterious_004',
    message: "A relic from a bygone era. This card offers no current passage.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_mysterious_005',
    message: "The veil of time has fallen upon this card. It lies dormant.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },

  // Expired - Dramatic (5 messages)
  {
    id: 'creditCard_expired_dramatic_001',
    message: "A tragic end to a once-mighty card! It has expired!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_dramatic_002',
    message: "The ravages of time have claimed this card! It is no more!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_dramatic_003',
    message: "Behold, the relic of a former validity! Your card is expired!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_dramatic_004',
    message: "The very flow of commerce is severed by this expired instrument!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_dramatic_005',
    message: "A lament from the payment gateway! Your card is a ghost of transactions past!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },

  // Expired - Poetic (5 messages)
  {
    id: 'creditCard_expired_poetic_001',
    message: "Its season passed, its vibrant youth now flown. The card's brief reign, a memory alone.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_poetic_002',
    message: "Like fading blossoms, grace has left its form. A new beginning, to weather every storm.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_poetic_003',
    message: "The hourglass emptied, its sands no longer fall. A new card beckons, to answer commerce's call.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_poetic_004',
    message: "A silent autumn, where green leaves turn to brown. This card's bright purpose, has now settled down.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_expired_poetic_005',
    message: "The song it sang, now softly fades away. A fresh new anthem, for a brighter payment day.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'expired',
    category: 'Credit Card'
  },

  // --- Invalid CVV Messages ---

  // Invalid CVV - Witty (5 messages)
  {
    id: 'creditCard_invalidCVV_witty_001',
    message: "Your CVV is playing hide-and-seek! Can you find the correct one?",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_witty_002',
    message: "Looks like your CVV has a secret identity. Please reveal the real one!",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_witty_003',
    message: "Our security system is giving your CVV the side-eye. Incorrect!",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_witty_004',
    message: "Is your CVV feeling shy? It needs to be the right number to work!",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_witty_005',
    message: "Your CVV tried to sneak past us, but we caught it! Please enter the correct one.",
    tone: 'witty',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },

  // Invalid CVV - Dark (5 messages)
  {
    id: 'creditCard_invalidCVV_dark_001',
    message: "The guardian code is corrupted. The CVV is false.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_dark_002',
    message: "A whispered deception. This CVV offers no protection.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_dark_003',
    message: "The seal remains unbroken. The CVV is not the true key.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_dark_004',
    message: "A void in the security sequence. The CVV is incorrect.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_dark_005',
    message: "The shadows reject this code. The CVV is without power.",
    tone: 'dark',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },

  // Invalid CVV - Funny (5 messages)
  {
    id: 'creditCard_invalidCVV_funny_001',
    message: "Did your CVV fall asleep at the wheel? It's wrong!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_funny_002',
    message: "Our system is very picky about CVVs. This one's not making the cut!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_funny_003',
    message: "You're playing a fun game of 'guess the CVV', but we need the right answer!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_funny_004',
    message: "The CVV is supposed to be three (or four) little numbers, not a mystery!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_funny_005',
    message: "Did the dog eat your CVV? Because it's not working!",
    tone: 'funny',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },

  // Invalid CVV - Casual (5 messages)
  {
    id: 'creditCard_invalidCVV_casual_001',
    message: "The CVV you entered is incorrect.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_casual_002',
    message: "Please check your CVV and try again.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_casual_003',
    message: "There's an issue with your card's security code.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_casual_004',
    message: "Your CVV is not valid.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_casual_005',
    message: "Oops, the CVV seems wrong.",
    tone: 'casual',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },

  // Invalid CVV - Sarcastic (5 messages)
  {
    id: 'creditCard_invalidCVV_sarcastic_001',
    message: "Ah, the CVV. That crucial three-digit code that is apparently optional. It's not.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_sarcastic_002',
    message: "I'm sure your made-up CVV will magically work. Spoiler: It won't.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_sarcastic_003',
    message: "Yes, because security is just a suggestion. Please input the correct CVV.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_sarcastic_004',
    message: "Did you pull that CVV out of a hat? It's incorrect.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_sarcastic_005',
    message: "This CVV is so wrong, it's almost right. Almost.",
    tone: 'sarcastic',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },

  // Invalid CVV - Nerdy (5 messages)
  {
    id: 'creditCard_invalidCVV_nerdy_001',
    message: "CVV verification failed. Security code mismatch detected.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_nerdy_002',
    message: "Authentication error 2.0: Card Verification Value is incorrect.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_nerdy_003',
    message: "Input validation error: CVV does not match expected secure code.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_nerdy_004',
    message: "Transaction payload corrupted: CVV data integrity compromised.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_nerdy_005',
    message: "Security token 'CVV' failed decryption/validation. Re-enter correct value.",
    tone: 'nerdy',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },

  // Invalid CVV - PopCulture (5 messages)
  {
    id: 'creditCard_invalidCVV_popCulture_001',
    message: "Your CVV is like a puzzle piece that doesn't fit. Try again!",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_popCulture_002',
    message: "This CVV isn't the chosen one. Please use the correct code!",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_popCulture_003',
    message: "Houston, we have an incorrect CVV. Please advise!",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_popCulture_004',
    message: "It's dangerous to go alone! And even more dangerous with an invalid CVV!",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_popCulture_005',
    message: "This CVV is not the code you're looking for. Try again.",
    tone: 'popCulture',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },

  // Invalid CVV - Millennial (5 messages)
  {
    id: 'creditCard_invalidCVV_millennial_001',
    message: "This CVV is giving 'incorrect'. Check your deets, sis.",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_millennial_002',
    message: "Vibes check: this CVV ain't it, fam. Needs to be corrected.",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_millennial_003',
    message: "Not gonna lie, your CVV is invalid. Plz correct it, sweetie.",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_millennial_004',
    message: "Adulting fail: wrong CVV. Time to re-enter, no cap.",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_millennial_005',
    message: "This CVV is a whole mood, but it's the 'wrong' mood. Double check!",
    tone: 'millennial',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },

  // Invalid CVV - GenZ (5 messages)
  {
    id: 'creditCard_invalidCVV_genZ_001',
    message: "POV: Your CVV is wrong. Big L. Gotta fix it.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_genZ_002',
    message: "This CVV is not bussin'. It's incorrect.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_genZ_003',
    message: "Slay the security by entering the right CVV. This one's cap.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_genZ_004',
    message: "It's giving 'incorrect security code'. Check your CVV, bestie.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_genZ_005',
    message: "Fr fr, this CVV isn't valid. Try again, for real.",
    tone: 'genZ',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },

  // Invalid CVV - Professional (5 messages)
  {
    id: 'creditCard_invalidCVV_professional_001',
    message: "The Card Verification Value (CVV) entered is incorrect. Please verify.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_professional_002',
    message: "Please ensure the CVV on your card matches the entered value.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_professional_003',
    message: "Security code validation failed. The CVV provided is not accurate.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_professional_004',
    message: "An incorrect CVV has been detected. Kindly re-enter the correct code.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_professional_005',
    message: "For security purposes, please provide the correct Card Verification Value.",
    tone: 'professional',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },

  // Invalid CVV - Friendly (5 messages)
  {
    id: 'creditCard_invalidCVV_friendly_001',
    message: "Oops! Your CVV seems to be incorrect. Can you double-check it?",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_friendly_002',
    message: "Hey! The security code (CVV) on your card doesn't match. Could you try again?",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_friendly_003',
    message: "No worries, but your CVV might be a typo. Please verify it on your card.",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_friendly_004',
    message: "To keep your transaction safe, please enter the correct CVV from your card.",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_friendly_005',
    message: "Just a quick check! Your CVV seems to be invalid. Please re-enter it.",
    tone: 'friendly',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },

  // Invalid CVV - Motivational (5 messages)
  {
    id: 'creditCard_invalidCVV_motivational_001',
    message: "Accuracy is power! Correct your CVV and secure your purchase!",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_motivational_002',
    message: "Don't let a small code stop you! Verify your CVV and move forward!",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_motivational_003',
    message: "Your financial security matters! Input the correct CVV and protect your transaction!",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_motivational_004',
    message: "One more step to success! A valid CVV completes your secure payment.",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_motivational_005',
    message: "Master the details! Your correct CVV is the final key to a seamless purchase.",
    tone: 'motivational',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },

  // Invalid CVV - Mysterious (5 messages)
  {
    id: 'creditCard_invalidCVV_mysterious_001',
    message: "The hidden code is incorrect. The gateway to payment remains closed.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_mysterious_002',
    message: "A false key for a secret lock. The CVV is not the true combination.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_mysterious_003',
    message: "Whispers of the unknown code. Its true sequence eludes your grasp.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_dark_004', // Using a dark ID, should be mysterious
    message: "The unseen guardian rejects this offering. The CVV holds no truth.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_mysterious_005',
    message: "A riddle of security. The incorrect CVV blocks the revelation of success.",
    tone: 'mysterious',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },

  // Invalid CVV - Dramatic (5 messages)
  {
    id: 'creditCard_invalidCVV_dramatic_001',
    message: "A catastrophic breach! The CVV is fatally flawed!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_dramatic_002',
    message: "The very shield of security crumbles! Your CVV is incorrect!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_dramatic_003',
    message: "Behold, the compromised code! Your CVV threatens the entire transaction!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_dramatic_004',
    message: "The digital gates scream in protest! The CVV is a false key!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_dramatic_005',
    message: "A cry of alarm from the system! The CVV is a deception!",
    tone: 'dramatic',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },

  // Invalid CVV - Poetic (5 messages)
  {
    id: 'creditCard_invalidCVV_poetic_001',
    message: "The secret numbers, hold a fractured plea. No true alignment, for the soul to see.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_poetic_002',
    message: "Like unstrung melodies, the code's astray. No sweet assurance, upon this fateful day.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_poetic_003',
    message: "The hidden guardian, seeks a kindred sign. This whispered cipher, is not truly thine.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_poetic_004',
    message: "A fragile link, where trust begins to fade. The CVV's echo, a wrong choice has made.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  },
  {
    id: 'creditCard_invalidCVV_poetic_005',
    message: "The silent promise, of security's embrace. Now broken, by this code in its wrong place.",
    tone: 'poetic',
    fieldType: 'creditCard',
    errorType: 'invalidCVV',
    category: 'Credit Card'
  }
];