export async function getCMSData(query: String) {
  const data = await fetch(`${process.env.HYGRAPH_CONTENT_API}`, {
    method: "POST",
    body: JSON.stringify({
      query: `${query}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 10 },
  }).then((res) => res.json());

  return data?.data;
}