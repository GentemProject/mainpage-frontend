export interface Organization {
  organizationId: string;
  name: string;
  logo?: string;
  objective: string;
  communityworkwith: number[];
  description: string;
  howusedonations: string;
  location: string;
  sponsors?: string[];
  paymentslink?: string;
  accounts?: string;
  instructionstodeliverproducts?: string;
  website?: string;
  email: string;
  phones: string | string[];
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  createtAt: string;
}
