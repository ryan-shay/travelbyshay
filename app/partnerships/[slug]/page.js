import { notFound } from "next/navigation";
import PartnershipDoc, { partnershipMetadata } from "../partnership-doc";
import { PARTNERS } from "../partners";

// One private page per partner, built from the entries in partners.js.
// Unknown slugs return a 404 rather than a generic page.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PARTNERS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const partner = PARTNERS[slug];
  return partner ? partnershipMetadata(partner) : {};
}

export default async function PartnerPage({ params }) {
  const { slug } = await params;
  const partner = PARTNERS[slug];
  if (!partner) notFound();
  return <PartnershipDoc partner={partner} />;
}
