export default function sitemap() {
  const baseUrl = "https://rodrost.com";

  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/portfolio`,
    },
    {
      url: `${baseUrl}/about`,
    },
    {
      url: `${baseUrl}/contact`,
    },
  ];
}
