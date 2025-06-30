# 🛡️ Giggle Guard

> 3000+ hilarious validation messages that make your users smile instead of rage-quit when they mess up forms. Because who says error messages have to be boring?

## 🎯 Why Giggle Guard?

- **🚫 Users hate boring error messages** → Make them laugh instead of cry 😭
- **🎭 Generic validation is forgettable** → Stand out like a glitter bomb in a library
- **📋 Copy-paste ready messages** → Say goodbye to "Field is required." Forever. 🔥
- **📈 Boost user engagement** → Happy users fill forms. Sad users click away.
- **🌟 Open source humor** → Fueled by developer memes and community chuckles

## 📦 Installation

```bash
npm install giggle-guard
```

```bash
yarn add giggle-guard
```

```bash
pnpm add giggle-guard
```

## 🚀 Quick Start

### One-liner Usage

```ts
import { getMessage } from "giggle-guard";

const message = getMessage({
  fieldType: "email",
  errorType: "required",
});
console.log(message); // "Even my spam folder has higher standards"
```

### Instance Usage

```ts
import { GiggleGuard } from "giggle-guard";

const guard = new GiggleGuard({
  defaultTone: "sarcastic",
  trackUsedMessages: true,
});

const funnyMessage = guard.getMessage({
  fieldType: "password",
  errorType: "tooWeak",
  tone: "funny",
});
```

### Multiple Messages

```ts
import { getMessages } from "giggle-guard";

const messages = getMessages(
  {
    fieldType: "email",
    errorType: "invalid",
  },
  3
);
```

## 🎭 Available Tones

| Tone              | Vibe                    | Perfect For           | Sample Message                                                                    |
| ----------------- | ----------------------- | --------------------- | --------------------------------------------------------------------------------- |
| `casual` 😎       | Laid-back buddy         | Relaxed apps          | "Hey, looks like you forgot something here"                                       |
| `dark` 🖤         | Edgy humor              | Millennial apps       | "This field is as empty as my soul"                                               |
| `dramatic` 🎭     | Shakespeare meets forms | Creative platforms    | "BEHOLD! A field left barren and forgotten!"                                      |
| `friendly` 😊     | Your helpful neighbor   | Family apps           | "Oops! This little field needs some love"                                         |
| `funny` 😂        | Classic comedy          | Universal appeal      | "This field is lonelier than a pizza slice at a salad convention"                 |
| `genZ` 💅         | Internet culture        | Social media apps     | "This field said 'no cap' to being filled out bestie"                             |
| `millennial` 🥑   | Nostalgic references    | 25-40 demographic     | "This field is more empty than my bank account after avocado toast"               |
| `motivational` 💪 | Encouraging coach       | Fitness/productivity  | "You're almost there! Just fill this field and conquer the world!"                |
| `mysterious` 🔮   | Cryptic wisdom          | Gaming/fantasy        | "The ancient prophecy requires... your email address"                             |
| `nerdy` 🤓        | Tech humor              | Developer tools       | "ERROR 404: Field content not found. Have you tried turning it off and on again?" |
| `poetic` 🌹       | Artistic flair          | Creative platforms    | "Like a canvas awaits paint, this field awaits your touch"                        |
| `popCulture` 🎬   | Movie/TV references     | Entertainment apps    | "Use the force, Luke... to fill out this field"                                   |
| `professional` 👔 | Business appropriate    | Corporate apps        | "This field requires your attention to proceed successfully"                      |
| `sarcastic` 🙄    | Witty sass              | Apps with personality | "Oh wonderful, another empty field. Just what we needed."                         |
| `witty` 🧠        | Clever wordplay         | Smart audiences       | "This field is having an identity crisis - it doesn't know what it wants to be"   |

## 📋 Supported Field Types

| Field Type      | Description             | Common Use Cases      | Hilarious Error Example                                             |
| --------------- | ----------------------- | --------------------- | ------------------------------------------------------------------- |
| `address` 🏠    | Street addresses        | Shipping, billing     | "GPS can't find you if you don't tell us where you live!"           |
| `checkbox` ☑️   | Checkbox selections     | Terms, preferences    | "Even robots need to agree to terms and conditions"                 |
| `creditCard` 💳 | Credit card numbers     | Payments              | "Your credit card number looks faker than a $3 bill"                |
| `date` 📅       | Date inputs             | Birth dates, events   | "Time travel isn't invented yet, pick a real date"                  |
| `email` 📧      | Email addresses         | Registration, contact | "Even my spam folder has higher standards than this"                |
| `file` 📁       | File uploads            | Documents, images     | "Upload failed harder than my last relationship"                    |
| `general` 📝    | Generic form fields     | Miscellaneous         | "This field is more confused than a chameleon in a bag of Skittles" |
| `name` 👤       | Name inputs             | User identification   | "Anonymous is taken, try something else"                            |
| `password` 🔒   | Password fields         | Security              | "This password is weaker than gas station sushi"                    |
| `phone` 📱      | Phone numbers           | Contact info          | "Is this a phone number or a random number generator result?"       |
| `radio` 🔘      | Radio button selections | Single choice options | "Pick one! This isn't a buffet!"                                    |
| `select` 📋     | Dropdown selections     | Categories, options   | "Choose your fighter... I mean, option"                             |
| `time` ⏰       | Time inputs             | Scheduling            | "Time's not real, but this field still needs filling"               |
| `url` 🌐        | Website URLs            | Links, references     | "This URL is more broken than my New Year's resolutions"            |
| `zipcode` 📮    | Postal codes            | Location data         | "This ZIP code doesn't exist, unlike my crippling anxiety"          |

## ❌ Error Types

| Error Type       | When It Happens       | Field Examples        | Comedy Gold Example                                                  |
| ---------------- | --------------------- | --------------------- | -------------------------------------------------------------------- |
| `doesntMatch` ❌ | Values don't match    | Password confirmation | "These passwords match like pineapple matches pizza (controversial)" |
| `duplicate` 🔄   | Value already exists  | Username, email       | "Sorry, that username is taken by someone cooler than you"           |
| `expired` ⏰     | Value has expired     | Credit cards, tokens  | "This expired faster than milk in the sun"                           |
| `exists` 📁      | Item already exists   | Account creation      | "Plot twist: You already exist in our system!"                       |
| `format` 🎭      | Incorrect format      | Dates, numbers        | "Format error: Expected awesome, got whatever this is"               |
| `inFuture` 🚀    | Date is in future     | Birth dates           | "Unless you're a time traveler, pick a date that's already happened" |
| `inPast` 🦕      | Date is in past       | Event dates           | "That date is more ancient than dial-up internet"                    |
| `invalid` 🚫     | General invalid value | Any field             | "This value is as invalid as my life choices"                        |
| `invalidCVV` 💳  | Bad credit card CVV   | Payment forms         | "CVV stands for 'Can't Validate Visually' apparently"                |
| `invalidType` 📎 | Wrong file/data type  | File uploads          | "Expected a JPEG, got disappointment instead"                        |
| `notSelected` 👆 | No selection made     | Dropdowns, radios     | "Commitment issues? Pick something already!"                         |
| `outOfRange` 📊  | Value outside limits  | Age, quantity         | "That number is more out of range than my WiFi signal"               |
| `required` ⚠️    | Field is required     | Essential fields      | "This field isn't optional, unlike my social life"                   |
| `tooLarge` 📏    | File/value too big    | File uploads          | "That file is larger than my student debt"                           |
| `tooLong` 📝     | String too long       | Text inputs           | "Shorter than a CVS receipt, please"                                 |
| `tooShort` ✂️    | String too short      | Passwords, names      | "Shorter than my patience with slow WiFi"                            |
| `tooSmall` 🔍    | Value too small       | Numbers               | "Smaller than my motivation on Monday mornings"                      |
| `tooWeak` 💪     | Password not strong   | Password fields       | "This password is weaker than my willpower at a donut shop"          |

## 🎪 Hilarious Message Samples by Tone

### 😂 Funny Tone - _Classic Comedy Gold_

| Field + Error           | Message                                               | Why It's Hilarious                  |
| ----------------------- | ----------------------------------------------------- | ----------------------------------- |
| `email` + `required`    | "Even my spam folder has higher standards"            | Roasts the user AND email marketing |
| `password` + `tooShort` | "This password is shorter than a TikTok video"        | Relatable modern reference          |
| `name` + `required`     | "Anonymous is so last year, what's your actual name?" | Playful peer pressure               |
| `phone` + `invalid`     | "Is this a phone number or your WiFi password?"       | Confusion comedy                    |
| `file` + `tooLarge`     | "This file is bigger than my hopes and dreams"        | Self-deprecating humor              |

### 🙄 Sarcastic Tone - _Passive Aggressive Perfection_

| Field + Error            | Message                                                | Sass Level |
| ------------------------ | ------------------------------------------------------ | ---------- |
| `address` + `required`   | "Oh sure, we'll just mail it to 'somewhere on Earth'"  | 🔥🔥🔥     |
| `url` + `invalid`        | "Congratulations! You've broken the internet"          | 🔥🔥🔥🔥   |
| `password` + `tooWeak`   | "That's cute. My grandma's password is stronger"       | 🔥🔥🔥🔥🔥 |
| `date` + `inFuture`      | "Time travel much? Pick a date that actually happened" | 🔥🔥🔥     |
| `creditCard` + `invalid` | "This credit card number is faker than reality TV"     | 🔥🔥🔥🔥   |

### 💅 GenZ Tone - _Internet Culture Supreme_

| Field + Error           | Message                                                     | Meme Factor               |
| ----------------------- | ----------------------------------------------------------- | ------------------------- |
| `name` + `duplicate`    | "Sorry bestie, that username is already taken 💅"           | ✨Main Character Energy✨ |
| `email` + `invalid`     | "This email address is giving 'fake account' vibes fr fr"   | 📱 No Cap 📱              |
| `phone` + `required`    | "Drop that number bestie or you're getting ghosted 👻"      | 💯 Slaps Different 💯     |
| `password` + `tooShort` | "This password ain't it chief, make it longer periodt"      | 🚫🧢 Facts Only 🚫🧢      |
| `file` + `invalidType`  | "This file format is NOT giving what it's supposed to give" | 💀 I'm Deceased 💀        |

### 🖤 Dark Tone - _Existential Dread Meets Forms_

| Field + Error          | Message                                                                | Darkness Level |
| ---------------------- | ---------------------------------------------------------------------- | -------------- |
| `email` + `required`   | "This field is as empty as my soul on Monday mornings"                 | 🌚🌚🌚         |
| `password` + `tooWeak` | "This password offers less protection than my emotional walls"         | 🌚🌚🌚🌚       |
| `name` + `required`    | "Identity crisis? Join the club. But first, enter your name"           | 🌚🌚🌚🌚🌚     |
| `phone` + `invalid`    | "This number is more disconnected than my relationship with happiness" | 🌚🌚🌚🌚🌚🌚   |
| `date` + `required`    | "Time is a construct, but this field still needs a date"               | 🌚🌚🌚         |

### 🤓 Nerdy Tone - _404: Humor Not Found_

| Field + Error           | Message                                                                          | Geek Level |
| ----------------------- | -------------------------------------------------------------------------------- | ---------- |
| `email` + `invalid`     | "REGEX ERROR: This email string failed to compile in reality.exe"                | 🤖⚡       |
| `password` + `tooShort` | "Insufficient entropy detected. Recommend adding 2 dragons and a prime number"   | 🐉🔢       |
| `file` + `invalidType`  | "Expected MIME type: application/awesome. Received: disappointment/json"         | 📁💾       |
| `url` + `invalid`       | "HTTP 404: Valid URL Not Found. Have you tried turning the internet off and on?" | 🌐⚡       |
| `phone` + `format`      | "Phone number pattern matching failed. Are you calling from another dimension?"  | 📞🌌       |

### 🎭 Dramatic Tone - _Shakespeare Meets Silicon Valley_

| Field + Error          | Message                                                                                     | Drama Rating |
| ---------------------- | ------------------------------------------------------------------------------------------- | ------------ |
| `name` + `required`    | "HARK! What light through yonder field breaks? 'Tis your name, and you forgot to enter it!" | 🎭🎭🎭🎭🎭   |
| `email` + `invalid`    | "Alas! This email address has fallen into the abyss of invalidity!"                         | 🎭🎭🎭🎭     |
| `password` + `tooWeak` | "Behold! A password so weak, it could not protect a sandcastle from the tide!"              | 🎭🎭🎭🎭🎭   |
| `date` + `required`    | "Time stands still! The cosmic calendar awaits your input!"                                 | 🎭🎭🎭       |
| `file` + `tooLarge`    | "Lo! This file doth exceed the bounds of digital possibility!"                              | 🎭🎭🎭🎭     |

### 🥑 Millennial Tone - _Peak 2010s Nostalgia_

| Field + Error           | Message                                                                      | Millennial Factor |
| ----------------------- | ---------------------------------------------------------------------------- | ----------------- |
| `email` + `required`    | "This field is emptier than my bank account after buying avocado toast"      | 🥑💸              |
| `password` + `tooShort` | "This password is shorter than my attention span during Zoom meetings"       | 💻😴              |
| `name` + `duplicate`    | "That username is more taken than the good parking spots at Target"          | 🎯🚗              |
| `phone` + `invalid`     | "This phone number is more disconnected than my landline from 2005"          | 📞📟              |
| `date` + `inPast`       | "That date is older than my student loan debt (and that's saying something)" | 🎓💸              |

### 💪 Motivational Tone - _Tony Robbins Meets Tech Support_

| Field + Error          | Message                                                              | Motivation Level |
| ---------------------- | -------------------------------------------------------------------- | ---------------- |
| `email` + `required`   | "You're AMAZING! Now show that amazingness by filling this field!"   | 🚀⭐             |
| `password` + `tooWeak` | "You're stronger than this password! Channel that inner strength!"   | 💪🔥             |
| `name` + `required`    | "Your name has POWER! Share that power with this humble form field!" | ⚡👑             |
| `phone` + `invalid`    | "You're just ONE digit away from greatness! You've got this!"        | 📱✨             |
| `file` + `invalidType` | "Wrong format? No problem! Champions adapt and overcome!"            | 🏆💯             |

## 🛠️ All Available Methods

### Core Methods

```ts
import { getMessage, getMessages, GiggleGuard } from "giggle-guard";

// Get a single message
const message = getMessage({
  fieldType: "email",
  errorType: "required",
  tone: "funny", // optional
  excludeUsed: true, // optional
});

// Get multiple messages
const messages = getMessages(
  {
    fieldType: "password",
    errorType: "tooWeak",
  },
  3
);

// Using the class instance
const guard = new GiggleGuard();
```

### Instance Methods

```ts
const guard = new GiggleGuard();

// Core methods
guard.getMessage(options)
guard.getMessages(options, count)

// Lookup methods
guard.getMessageById(id)
guard.getMessagesByField(fieldType)
guard.getMessagesByTone(tone)

// Utility methods
guard.resetUsedMessages()
guard.getStats()
guard.updateConfig({ ... })
```

### Validation Helper

```ts
import { validateFieldErrorCombo } from "giggle-guard";

const { valid, allowedErrors } = validateFieldErrorCombo("email", "required");
console.log(valid); // true
console.log(allowedErrors); // ["required", "invalid", "tooShort", ...]
```

## ⚙️ Configuration Options

Giggle Guard comes with sensible defaults out of the box. Here's the configuration it uses internally unless you override it:

```ts
{
  defaultTone: "random",       // Use a random tone unless specified
  trackUsedMessages: true,     // Avoid repeating the same message
  fallbackToGeneric: true,     // Fallback to generic messages if none match
  strictValidation: false      // Log a warning instead of throwing an error
}
```

| Option              | Type      | Default  | Description                                                                |
| ------------------- | --------- | -------- | -------------------------------------------------------------------------- |
| `defaultTone`       | `Tone`    | `random` | Sets the vibe for your messages. Want chaos? Set it to "random"!🎲         |
| `trackUsedMessages` | `boolean` | `true`   | Stops repeats like your friend who tells the same joke 5 times. 🤐         |
| `fallbackToGeneric` | `boolean` | `true`   | If nothing fits, it'll pull out a trusty backup message from the vault. 🗃️ |
| `strictValidation`  | `boolean` | `false`  | Turn this on to yell at bad input like a grumpy librarian. 📚🚫            |

## ⚛️ Framework Integration Examples

### React Hook Form

```tsx
import { useForm } from "react-hook-form";
import { getMessage } from "giggle-guard";

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getErrorMessage = (fieldType: string, errorType: string) => {
    return getMessage({ fieldType, errorType, tone: "millennial" });
  };

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <input {...register("email", { required: true })} type="email" />
      {errors.email && <p>{getErrorMessage("email", "required")}</p>}
    </form>
  );
}
```

### Formik

```tsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getMessage } from "giggle-guard";

<Formik
  initialValues={{ email: "" }}
  validate={(values) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = getMessage({ fieldType: "email", errorType: "required" });
    }
    return errors;
  }}
  onSubmit={() => {}}
>
  <Form>
    <Field name="email" type="email" />
    <ErrorMessage name="email" component="div" />
  </Form>
</Formik>;
```

### Vue + Vuelidate

```vue
<script setup>
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { getMessage } from "giggle-guard";

const form = ref({ email: "" });
const rules = { email: { required, email } };
const $v = useVuelidate(rules, form);

const getEmailError = () => {
  if (!$v.value.email.required)
    return getMessage({ fieldType: "email", errorType: "required" });
  if (!$v.value.email.email)
    return getMessage({ fieldType: "email", errorType: "invalid" });
};
</script>
```

### Angular

```ts
import { FormBuilder, Validators } from '@angular/forms';
import { getMessage } from 'giggle-guard';

constructor(private fb: FormBuilder) {}

form = this.fb.group({
  email: ['', [Validators.required, Validators.email]]
});

getEmailError() {
  const control = this.form.get('email');
  if (control?.hasError('required')) return getMessage({ fieldType: 'email', errorType: 'required' });
  if (control?.hasError('email')) return getMessage({ fieldType: 'email', errorType: 'invalid' });
  return '';
}
```

## 🔌 Integrations & Plugins

### Validation Libraries

```ts
// Yup
import * as yup from "yup";
import { getMessage } from "giggle-guard";

const schema = yup.object({
  email: yup
    .string()
    .required(() => getMessage({ fieldType: "email", errorType: "required" }))
    .email(() => getMessage({ fieldType: "email", errorType: "invalid" })),
});

// Zod
import { z } from "zod";
import { getMessage } from "giggle-guard";

const schema = z.object({
  email: z
    .string({
      required_error: getMessage({ fieldType: "email", errorType: "required" }),
    })
    .email(getMessage({ fieldType: "email", errorType: "invalid" })),
});

// Joi
import Joi from "joi";
import { getMessage } from "giggle-guard";

const schema = Joi.object({
  email: Joi.string()
    .required()
    .messages({
      "any.required": getMessage({ fieldType: "email", errorType: "required" }),
      "string.email": getMessage({ fieldType: "email", errorType: "invalid" }),
    }),
});
```

## 📊 Statistics & Analytics

```ts
const guard = new GiggleGuard();
const stats = guard.getStats();

console.log(stats);
// {
//   total: 3000,
//   byFieldType: {
//     email: 150,
//     password: 200,
//     name: 100,
//     ...
//   },
//   byTone: {
//     funny: 400,
//     sarcastic: 350,
//     professional: 300,
//     ...
//   },
//   byErrorType: {
//     required: 500,
//     invalid: 400,
//     tooShort: 300,
//     ...
//   }
// }
```

## ❓ FAQ

**Q: Will these messages offend my users?**\
A: All messages are carefully curated to be playful, not offensive.

**Q: Can I use this in a professional/corporate environment?**\
A: Absolutely! Use the `professional` tone for safer but still friendly humor.

**Q: Can I contribute my own funny messages?**\
A: Yes! Fork the repo and submit a pull request.

**Q: Does this work with server-side validation?**\
A: Yes! Works with browser, Node.js, and even edge functions.

**Q: Will the same messages keep repeating?**\
A: Nope. `trackUsedMessages` prevents repetition unless you reset.

**Q: Can I get message usage stats?**\
A: Yup! Use `getStats()` for field/tone/error type analytics.

**Q: Can I change tones dynamically?**\
A: Yes! You can override the tone per message call.

**Q: Is it production-ready?**\
A: Yes! Used in live apps, tested with 3000+ messages.

## 🤝 Contributing

- Add messages under `/src/messages/[fieldType].ts`
- Write new tests under `/tests`
- Keep humor universal, light, and accessible
- Avoid slang that won't age well

## 📝 License

MIT – Use it anywhere, laugh everywhere.

## ⭐ Star us on GitHub

If Giggle Guard made you (or your users) smile, give us a ⭐ and spread the laughs!

---

**Made with ❤️ by [Pratik Shikhaliya](https://github.com/pratik-shikhaliya) — who's tired of boring error messages.**

_Remember: Life's too short for "This field is required"_
