import { ContactPageInterface } from '../model/contact-page.intergace';

export function facadeContactPageData(
  aboutPageEntry: any
): ContactPageInterface {
  return {
    title: aboutPageEntry.fields.title,
    message: aboutPageEntry.fields.message,
    nameLabel: aboutPageEntry.fields.nameLabel,
    namePlaceholder: aboutPageEntry.fields.namePlaceholder,
    emailLabel: aboutPageEntry.fields.emailLabel,
    emailPlaceholder: aboutPageEntry.fields.emailPlaceholder,
    messageLabel: aboutPageEntry.fields.messageLabel,
    messagePlaceholder: aboutPageEntry.fields.messagePlaceholder,
    actionLabel: aboutPageEntry.fields.actionLabel,
    emailTo: aboutPageEntry.fields.emailTo,
    emailFrom: aboutPageEntry.fields.emailFrom,
    secureToken: aboutPageEntry.fields.secureToken,
  };
}
