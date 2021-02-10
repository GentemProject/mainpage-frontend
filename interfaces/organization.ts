export interface Organization {
  totalOrg: string
  page: number
  primaryData: {
    name: string
    communityId: [number]
    sponsors: [string]
    description: string
    logo: string
    objective: string
    howUseDonation: string
  }
  contact: {
    website: string
    email: string
    phones: string
    whatsapp: string
    instagram: string
    facebook: string
  }
  paymentData: {
    link: string
    bankAccount: string
    products: string
  }
  totalPages: number
  data: {
    length: number
  }
  _id: string
  name: string
  adminemail: string
  adminname: string
  communityworkwith: Array<number>
  createdAt: string
  slug: string
  objective: string
  website: string
  facebook: string
  instagram: string
  whatsapp: string
  location: {
    city: string
    country: string
    map: string
  }
  instructionstodeliverproducts: string
  accounts: string
  logo: string
  howusedonations: string
  email: string
  paymentslink: string
  phones: string
  sponsors: Array<string>
  description: string
  country: string
  city: string
  length: number
}
