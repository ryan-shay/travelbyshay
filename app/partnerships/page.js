import PartnershipDoc, { partnershipMetadata } from "./partnership-doc";
import { DEFAULT_PARTNER } from "./partners";

export const metadata = partnershipMetadata(DEFAULT_PARTNER);

export default function Partnerships() {
  return <PartnershipDoc partner={DEFAULT_PARTNER} />;
}
