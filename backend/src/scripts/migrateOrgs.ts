import mongoose from 'mongoose';
import data from './oldOrganizationsData.json';
import newCausesData from './causesMigrated.json';
import oldCausesData from './oldCausesData.json';
import { OrganizationModel } from '../services/organizations';
import { connectDatabase } from '../middlewares';
async function main() {
  try {
    const organizations = data;
    console.log('initializing migration....');
    console.log('initializing database....');
    await connectDatabase();
    console.log('mapping....');
    const organizationsToInsert = organizations.data.map(organization => {
      const oldCausesNames = oldCausesData.data
        .filter(cause => (organization.primaryData.causeId as number[]).includes(cause.cat_id[0]))
        .map(cause => cause.cat_name);
      const newCauses = newCausesData
        .filter(cause => oldCausesNames.includes(cause.name))
        .map(cause => mongoose.Types.ObjectId(cause._id));
      return {
        name: organization.primaryData.name || '',
        slug: organization.slug || '',
        causesIds: newCauses,
        goal: organization.primaryData.objective || '',
        sponsors: organization.primaryData.sponsors || [],
        description: organization.primaryData.description || '',
        howItIsUsingDonations: organization.primaryData.howUseDonation || '',
        logoUrl: organization.primaryData.logo || 'https://gentem.org/logoDefault.png',
        city: organization.location?.city || '',
        country: organization.location?.country || '',
        coordenates: {
          x: organization.location?.coordenates?.x || -26.231718,
          y: organization.location?.coordenates?.y || -63.2485696,
        },
        contactEmail: organization.contact?.email || '',
        contactPhone: organization.contact?.phone || '',
        contactWebsite: organization.contact?.website || '',
        userId: '',
        adminName: organization.adminInfo?.adminName || '',
        adminEmail: organization.adminInfo?.adminEmail || '',
        facebookUrl: organization.socialMedia?.facebook || '',
        instagramUrl: organization.socialMedia?.instagram || '',
        linkedinUrl: organization.socialMedia?.linkedin || '',
        twitterUrl: organization.socialMedia?.twitter || '',
        whatsappPhone: organization.socialMedia?.whatsapp || '',
        donationLinks: [organization.donationData?.link || organization.paymentData?.link || ''],
        donationProducts:
          organization.donationData?.products || organization.paymentData?.products || '',
        donationBankAccountName:
          organization.donationData?.bankAccount || organization.paymentData?.bankAccount || '',
      };
    });
    console.log('Inserting in database ...');
    await OrganizationModel.create(organizationsToInsert);
    console.log('success!');
    process.exit(0);
  } catch (error) {
    console.error('Error ejecutando script:', error);
  }
  process.exit(0);
}
main();
