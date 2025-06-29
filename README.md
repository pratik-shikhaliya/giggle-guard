# 🛡️ Giggle Guard

> 3000+ hilarious validation messages that make your users smile instead of rage-quit when they mess up forms. Because who says error messages have to be boring?

## 🎯 Why Giggle Guard?

- **🚫 Users hate boring error messages** → Make them laugh instead of cry 😭
- **🎭 Generic validation is forgettable** → Stand out like a glitter bomb in a library
- **📋 Copy-paste ready messages** → Say goodbye to “Field is required.” Forever. 🔥
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

## 🧠 Message Samples by Tone

### 🎭 Funny Tone

- ✅ `email` + ❌ `required` → 💬 "Even my spam folder has higher standards."
- ✅ `password` + ❌ `tooShort` → 💬 "Shorter than my attention span."
- ✅ `name` + ❌ `required` → 💬 "C’mon, even mysterious strangers have names."

---

### 🥲 Sarcastic Tone

- ✅ `address` + ❌ `required` → 💬 "Oh sure, we’ll guess where you live."
- ✅ `url` + ❌ `invalid` → 💬 "Great. You broke the internet."
- ✅ `password` + ❌ `tooShort` → 💬 "That’s adorable. Now try a real password."

---

### 😎 GenZ Tone

- ✅ `name` + ❌ `duplicate` → 💬 "Taken already, bestie 💅"
- ✅ `email` + ❌ `invalid` → 💬 "This email is giving ‘fake account’ vibes."
- ✅ `phone` + ❌ `required` → 💬 "Phone please 📱 or you’re getting ghosted."

---

### 👔 Professional Tone

- ✅ `date` + ❌ `invalid` → 💬 "Please enter a valid date in DD/MM/YYYY format."
- ✅ `password` + ❌ `tooShort` → 💬 "Password must be at least 8 characters long."
- ✅ `name` + ❌ `required` → 💬 "This field is required to proceed."

---

### 💪 Motivational Tone

- ✅ `phone` + ❌ `invalid` → 💬 "You’re just one digit away from getting it right!"
- ✅ `name` + ❌ `required` → 💬 "You’ve got this — just add your name!"
- ✅ `email` + ❌ `tooShort` → 💬 "A few more characters and you’re golden."

---

### 🤓 Nerdy Tone

- ✅ `file` + ❌ `invalidType` → 💬 "Expected MIME type: application/awesome, got nonsense."
- ✅ `email` + ❌ `invalid` → 💬 "Regex failed to validate this sad string."
- ✅ `password` + ❌ `tooShort` → 💬 "Insufficient entropy. Try adding 3 dragons and a number."

## 🛠️ All Available Methods

```ts
const guard = new GiggleGuard();

// Core
getMessage(options)
getMessages(options, count)

// Lookup
getMessageById(id)
getMessagesByField(fieldType)
getMessagesByTone(tone)

// Utilities
resetUsedMessages()
getStats()
updateConfig({ ... })
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

| Option              | Type      | Default | Description                                                                |
| ------------------- | --------- | ------- | -------------------------------------------------------------------------- |
| `defaultTone`       | `Tone`    | `funny` | Sets the vibe for your messages. Want chaos? Set it to "random"!🎲         |
| `trackUsedMessages` | `boolean` | `true`  | Stops repeats like your friend who tells the same joke 5 times. 🤐         |
| `fallbackToGeneric` | `boolean` | `true`  | If nothing fits, it'll pull out a trusty backup message from the vault. 🗃️ |
| `strictValidation`  | `boolean` | `false` | Turn this on to yell at bad input like a grumpy librarian. 📚🚫            |

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

- **Yup** - Schema validation with giggles
- **Joi** - Object schema validation
- **Zod** - TypeScript-first schema validation
- **Ajv** - JSON schema validator

```ts
import * as yup from "yup";
import { getMessage } from "giggle-guard";

const schema = yup.object({
  email: yup
    .string()
    .required(() => getMessage({ fieldType: "email", errorType: "required" }))
    .email(() => getMessage({ fieldType: "email", errorType: "invalid" })),
});
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
A: Yes! Used in live apps, tested with 500+ messages.

## 🤝 Contributing

- Add messages under `/src/messages/[fieldType].ts`
- Write new tests under `/tests`
- Keep humor universal, light, and accessible
- Avoid slang that won’t age well

## 📝 License

MIT – Use it anywhere, laugh everywhere.

## ⭐ Star us on GitHub

If Giggle Guard made you (or your users) smile, give us a ⭐ and spread the laughs!

---

**Made with ❤️ by Pratik Shikhaliya — who’s tired of boring error messages.**

_Remember: Life’s too short for “This field is required”_
