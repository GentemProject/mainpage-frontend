export interface OrganizationOld {
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

export interface queryI {
  loading: boolean
  networkStatus: number
}
export interface getOrganizationsHome extends queryI {
  data: {
    getOrganizations: OrganizationHome[]
  }
}

export interface OrganizationHome {
  __typename: string
  name: string
  slug: string
  logoUrl: string
}

export interface getOrganization extends queryI {
  data: {
    getOrganization: Organization
  }
}

export interface Organization {
  __typename: string
  id: string
  name: string
  description: string
  goal: string
  logoUrl: string
  howItIsUsingDonations: string
  contactEmail: string
  contactPhone: string
  contactWebsite: string
  whatsappPhone: string
  facebookUrl: string
  twitterUrl: string
  instagramUrl: string
  donationBankAccountName: string
  donationLinks: string[]
  city: string
  country: string
  coordenateX: string
  coordenateY: string
  causes: {
    name: string
  }[]
}

export interface getOrganizationsFilters extends queryI {
  data: {
    getOrganizations: organizationsProjects[]
  }
}

export interface organizationsProjects {
  id: string
  slug: string
  name: string
  logoUrl: string
  causes: {
    name: string
    id: string
  }[]
  country: string
  donationBankAccountName: string
  donationLinks: string[]
}
