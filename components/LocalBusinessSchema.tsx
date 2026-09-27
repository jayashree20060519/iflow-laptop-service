export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    "@id": "https://iflowsystems.co.in/#business",
    name: "iFlow Systems",
    url: "https://iflowsystems.co.in",
    telephone: "+91 78240 00011",
    image: "https://iflowsystems.co.in/hero-bg.png",

    description:
      "iFlow Systems provides professional laptop repair and service in Chennai, including laptop repair, screen replacement, battery replacement, motherboard repair, software support and laptop upgrades.",

    areaServed: {
      "@type": "City",
      name: "Chennai",
    },

    department: [
      {
        "@type": "ComputerStore",
        name: "iFlow Systems OMR",
        url: "https://iflowsystems.co.in/omr",
        telephone: "+91 78240 00011",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3/828, Pillayar Kovil St, Mettukuppam, OMR, Thoraipakkam",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          postalCode: "600097",
          addressCountry: "IN",
        },
      },

      {
        "@type": "ComputerStore",
        name: "iFlow Systems ECR",
        url: "https://iflowsystems.co.in/ecr",
        telephone: "+91 78240 00011",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "No.106, New, 6th East Street, Vaithiyalingam Salai, East Coast Road, Ganesh Nagar, Neelankarai",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          postalCode: "600115",
          addressCountry: "IN",
        },
      },
    ],

    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}