const appVersion = "0.1.0";
const siteName = "biblicalcounsel.ing";
const defaultDescription =
  "Questions and answers on biblical counseling: the sufficient Word of God for the struggles of the soul, given freely.";
const branding = {
  siteName,
  tagline: "The sufficient Word for the struggling soul.",
  description: defaultDescription,
  logoPath: "/images/site-logo.svg",
  logoAlt: `${siteName} logo`,
} as const;
const defaultSiteUrl = "https://biblicalcounsel.ing";

export const siteSettings = {
  version: appVersion,
  branding,
  issueReportURL: "https://github.com/abereanone/biblicalcounsel.ing/issues/new",
  integrations: {
    googleAnalyticsId: "",
  },
  openGraph: {
    title: branding.siteName,
    description: branding.description,
    url: defaultSiteUrl,
    image: "/images/og-card.png",
    imageAlt: `${branding.siteName} logo`,
    type: "website",
    twitterCard: "summary_large_image",
  },
  showQuestionId: true,
  showAuthor: true,
  enablePagination: true,
  questionsPerPage: 30,
} as const;

export type SiteSettings = typeof siteSettings;
