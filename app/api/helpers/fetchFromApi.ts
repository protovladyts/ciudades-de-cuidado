export async function fetchFromApi<T>(
  endpoint: string,
  revalidateTime: number = 60
): Promise<T> {
  const response = await fetch(endpoint, {
    next: { revalidate: revalidateTime },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }

  return response.json();
}
