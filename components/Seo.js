import Head from "next/head";
import { SITE_URL, SITE_DESCRIPTION } from "../data/seo";

// Title, description, canonical and social-preview tags in one place.
// `path` is the page path ("/blog/x"); `jsonLd` is an object or array of schema.org objects.
const Seo = ({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  type = "website",
  image = "/images/yinon.webp",
  jsonLd,
  children,
}) => {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="he_IL" />
      <meta property="og:site_name" content="ינון רחמים" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </Head>
  );
};

export default Seo;
