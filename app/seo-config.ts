export const siteUrl = 'https://project-4v4p7.vercel.app'

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Institute for Sustainable and Innovative Research Ghana',
  alternateName: 'ISIR Ghana',
  url: siteUrl,
  logo: `${siteUrl}/logo/isir-logo.PNG`,
  email: 'isirghana@gmail.com',
  telephone: '+233207436517',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Building #NL148 Blk A, North Lamashegu',
    addressLocality: 'Tamale',
    addressRegion: 'Northern Region',
    addressCountry: 'GH',
  },
  slogan: 'Sustainability Through Innovation',
  areaServed: ['Ghana', 'Northern Ghana', 'Tamale'],
  knowsAbout: [
    'STEAM education',
    'STEM education',
    'maternal health',
    'child health',
    'sustainable agriculture',
    'climate resilience',
    'renewable energy',
    'monitoring and evaluation',
    'community development',
  ],
}
