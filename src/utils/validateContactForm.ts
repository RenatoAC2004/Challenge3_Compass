export interface ContactFormData {
  yourName: string
  email: string
  subject: string
  message: string
}

export interface FormErrors {
  yourName?: string
  email?: string
  subject?: string
  message?: string
}

export const validateContactForm = (formData: ContactFormData): FormErrors => {
  const errors: FormErrors = {}

  if (!formData.yourName) {
    errors.yourName = "Please enter your name"
  } else if (formData.yourName.length < 3) {
    errors.yourName = "Your name must be at least 3 characters long"
  }

  if (!formData.subject) {
    errors.subject = "Please enter a subject";
  }

  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email address is invalid";
  }

  if (!formData.message) {
    errors.message = "Please enter a message";
  } else if (formData.message.length < 10) {
    errors.message = "The message must be at least 10 characters long";
  }

  return errors
}
