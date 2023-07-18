import { ProductDescription } from "@/components/ProductDescription";

interface PageProps {
  params?: { slug: string[] };
}
export default async function ProductPage({ params }: PageProps) {
  const slug = params?.slug || [];

  const [id] = slug;

  console.log("id", id);

  return <ProductDescription />;
}
