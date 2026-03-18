export const WHATSAPP_NUMBER_E164_NO_PLUS = "2347047006110";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Rentwise, I would like to book an apartment inspection.";

export function getWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER_E164_NO_PLUS}?text=${encodeURIComponent(message)}`;
}

