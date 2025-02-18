export const fetchApiNext = async <T = any>(
  url: string,
  options?: {
    queryParams?: Record<string, string | number | boolean>;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    body?: any;
    headers?: HeadersInit;
  },
) => {
  try {
    if (!url) throw new Error('URL is required');

    const query = options?.queryParams
      ? new URLSearchParams(
          Object.entries(options.queryParams).reduce(
            (acc, [key, value]) => ({
              ...acc,
              [key]: String(value),
            }),
            {},
          ),
        ).toString()
      : '';

    const fetchOptions: RequestInit = {
      method: options?.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...(options?.method !== 'GET' &&
        options?.body && {
          body: JSON.stringify(options.body),
        }),
    };

    const fullUrl = query ? `${url}?${query}` : url;

    const response = await fetch(fullUrl, fetchOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
