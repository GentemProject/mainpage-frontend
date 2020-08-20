export interface Organization {
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
  location: string
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
