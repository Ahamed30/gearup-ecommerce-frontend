export type FetchMethods = "POST" | "GET" | "PUT" | "DELETE";

export async function handlefetchOperation(
  pathName: String,
  method: FetchMethods,
  body?: BodyInit
) {
  const data = await fetch(`${process.env.BACKEND_API}${pathName}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) =>
      console.error("Error while getting the data from backend", err)
    );

  return data;
}
