import { Helmet } from "react-helmet-async";
import { business } from "../config/business.js";

/**
 * Drop-in SEO tag manager for every page.
 *
 * <SEO
 *   title="Scrap Buying & Selling Services | Hope Traders"
 *   description="..."
 *   path="/services"
 * />
 */
export default function SEO({ title, description, path = "/", jsonLd, noindex = false }) {
  const canonical = `${business.siteUrl}${path === "/" ? "" : path}`;
  const ogImage = `${business.siteUrl}${business.socialImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={business.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
