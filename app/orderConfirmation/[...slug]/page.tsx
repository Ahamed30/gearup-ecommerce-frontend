import { OrderConfirmation } from "@/components/OrderConfirmation";

interface PageProps {
  params?: { slug: string[] };
}

export default async function OrderConfirmationPage({ params }: PageProps) {
  const slug = params?.slug || [];

  const [orderId] = slug;

  console.error("...", orderId);

  return <OrderConfirmation />;
}
