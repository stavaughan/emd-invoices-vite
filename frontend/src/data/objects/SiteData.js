import {
  SiteDisclosures,
  SiteDocumentation,
  pageGroupsContent,
  dropDownLabels,
  socialMedia,
  userSettings,
  SiteModalIDs,
  siteMessages,
  pageLayouts,
  formsData,
  CreditsData,
  USStates
} from '.';

const SiteData = {
  messages: siteMessages,
  disclosures: SiteDisclosures,
  documentation: SiteDocumentation,
  modalIDs: SiteModalIDs,
  credits: CreditsData,
  footerLinks: [
    {
      _id: 'credits',
      path: 'credits',
      label: 'Credits'
    },
    {
      _id: 'terms',
      path: 'legal/terms-of-use',
      label: 'Terms of Use'
    },
    {
      _id: 'privacy',
      path: 'legal/privacy-policy',
      label: 'Privacy Policy'
    }
  ],
  pageGroupsContent,
  pageLayouts,
  dropDownLabels,
  forms: formsData,
  socialMedia,
  userSettings,
  USStates
};

export default SiteData;
