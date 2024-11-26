export async function fetchFromApi<T>(endpoint: string): Promise<T> {
  const response = await fetch(endpoint, { next: { revalidate: 60 }});

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }

  return response.json();
}
