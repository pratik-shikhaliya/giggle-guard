# 🛡️ Giggle Guard

> 500+ hilarious validation messages that make your users smile instead of rage-quit when they mess up forms. Because who says error messages have to be boring?

## 🎯 Why Giggle Guard?

- **🚫 Users hate boring error messages** → Make them laugh instead
- **🎭 Generic validation is forgettable** → Stand out with personality
- **📋 Copy-paste ready messages** → No more "Field is required" monotony
- **📈 Boost user engagement** → Happy users = better retention
- **🌟 Open source humor** → Community-driven comedy gold

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
import { getMessage } from 'giggle-guard';

const message = getMessage({
  fieldType: 'email',
  errorType: 'required'
});
console.log(message); // "Even my spam folder has higher standards"
```

### Instance Usage

```ts
import { GiggleGuard } from 'giggle-guard';

const guard = new GiggleGuard({
  defaultTone: 'sarcastic',
  trackUsedMessages: true
});

const funnyMessage = guard.getMessage({
  fieldType: 'password',
  errorType: 'tooWeak',
  tone: 'funny'
});
```

### Multiple Messages

```ts
import { getMessages } from 'giggle-guard';

const messages = getMessages({
  fieldType: 'email',
  errorType: 'invalid'
}, 3);
```

## 🧠 Message Samples by Tone

### 🎭 Funny Tone

- ✅ `email` + ❌ `required` → 💬 "Even my spam folder has higher standards"
- ✅ `password` + ❌ `tooWeak` → 💬 "This password couldn't protect a cookie from a toddler"

### 🥲 Sarcastic Tone

- ✅ `address` + ❌ `required` → 💬 "We can't ship to the void of space"
- ✅ `creditCard` + ❌ `invalid` → 💬 "This card number is more fictional than unicorns"

### 😎 GenZ Tone

- ✅ `username` + ❌ `duplicate` → 💬 "This username is already taken, bestie"
- ✅ `email` + ❌ `invalid` → 💬 "Your email is giving fake profile energy"

### 👔 Professional Tone

- ✅ `date` + ❌ `invalid` → 💬 "Please enter a valid date format"
- ✅ `password` + ❌ `tooShort` → 💬 "Your password must meet the minimum length"

### 🤗 Wholesome Tone

- ✅ `phone` + ❌ `invalid` → 💬 "Let's try that phone number again, friend!"
- ✅ `message` + ❌ `tooShort` → 💬 "Your message could use a few more words, buddy!"

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

| Option              | Type    | Default | Description                        |
| ------------------- | ------- | ------- | ---------------------------------- |
| `defaultTone`       | string  | 'funny' | Humor style to use                 |
| `trackUsedMessages` | boolean | true    | Prevent repetition                 |
| `fallbackToGeneric` | boolean | true    | Use generic messages if none found |

## ⚛️ Framework Integration Examples

### React Hook Form

```tsx
import { useForm } from 'react-hook-form';
import { getMessage } from 'giggle-guard';

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const getErrorMessage = (fieldType: string, errorType: string) => {
    return getMessage({ fieldType, errorType, tone: 'millennial' });
  };

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <input {...register('email', { required: true })} type="email" />
      {errors.email && <p>{getErrorMessage('email', 'required')}</p>}
    </form>
  );
}
```

### Formik

```tsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { getMessage } from 'giggle-guard';

<Formik
  initialValues={{ email: '' }}
  validate={values => {
    const errors: any = {};
    if (!values.email) {
      errors.email = getMessage({ fieldType: 'email', errorType: 'required' });
    }
    return errors;
  }}
  onSubmit={() => {}}
>
  <Form>
    <Field name="email" type="email" />
    <ErrorMessage name="email" component="div" />
  </Form>
</Formik>
```

### Vue + Vuelidate

```vue
<script setup>
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { getMessage } from 'giggle-guard';

const form = ref({ email: '' });
const rules = { email: { required, email } };
const $v = useVuelidate(rules, form);

const getEmailError = () => {
  if (!$v.value.email.required) return getMessage({ fieldType: 'email', errorType: 'required' });
  if (!$v.value.email.email) return getMessage({ fieldType: 'email', errorType: 'invalid' });
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
import * as yup from 'yup';
import { getMessage } from 'giggle-guard';

const schema = yup.object({
  email: yup
    .string()
    .required(() => getMessage({ fieldType: 'email', errorType: 'required' }))
    .email(() => getMessage({ fieldType: 'email', errorType: 'invalid' }))
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

*Remember: Life’s too short for “This field is required”*