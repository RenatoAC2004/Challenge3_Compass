export interface FormData {
  firstName: string
  lastName: string
  email: string
  countryRegion: string
  streetAddress: string
  townCity: string
  province: string
  zipCode: string
  addOnAddress: string
  additionalInformation: string
}

export interface FormErrors {
  firstName: string
  lastName: string
  email: string
  countryRegion: string
  streetAddress: string
  townCity: string
  province: string
  zipCode: string
  addOnAddress: string
  additionalInformation: string
}

export const validateForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {
    firstName: "",
    lastName: "",
    email: "",
    countryRegion: "",
    streetAddress: "",
    townCity: "",
    province: "",
    zipCode: "",
    addOnAddress: "",
    additionalInformation: ""
  }

  if (!formData.firstName) {
    errors.firstName = "First Name is required"
  } else if (formData.firstName.length < 3) {
    errors.firstName = "First name must be at least 3 characters long"
  }

  if (!formData.lastName) {
    errors.lastName = "Last Name is required"
  } else if (formData.lastName.length < 3) {
    errors.lastName = "Last name must be at least 3 characters long"
  }

  if (!formData.zipCode) {
    errors.zipCode = "ZIP Code is required"
  } else if (formData.zipCode.length !== 8) {
    errors.zipCode = "ZIP Code must be 8 digits"
  }

  if (!formData.email) {
    errors.email = "Email is required"
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email address is invalid"
  }

  if (!formData.countryRegion) {
    errors.countryRegion = "Country / Region is required"
  }

  if (!formData.streetAddress) {
    errors.streetAddress = "Street Address is required"
  }

  if (!formData.townCity) {
    errors.townCity = "Town / City is required"
  }

  if (!formData.province) {
    errors.province = "Province is required"
  }

  if (!formData.addOnAddress) {
    errors.addOnAddress = "Add-on address is required"
  }

  if (!formData.additionalInformation) {
    errors.additionalInformation = "Additional Information is required"
  }

  return errors
}
