import { toast } from 'react-toastify';

const BASE_URL = 'https://api-gateway.bitechco.link:5100';
const SERVICE = 'VBCC_CongThongTin';
const getOriginFromCookie = () => {
  if (typeof document !== 'undefined') {
    const matches = document.cookie.match(/(?:^|; )origin=([^;]*)/);
    return matches ? decodeURIComponent(matches[1]) : 'http://localhost:3000';
  }
  return 'http://localhost:3000';
};

const http = async <TData>(
  endpoint: string,
  options = {} as RequestInit,
): Promise<ApiResponse<TData>> => {
  const url = `${BASE_URL}/${SERVICE}/api/${endpoint}`;

  const origin = getOriginFromCookie();

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      Origin: origin,
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);
    const responseBody = await response.json();

    if (!response.ok) {
      // Handle HTTP errors with specific response format
      const errorResponse = responseBody as ApiResponse<TData>;
      throw new Error(errorResponse.Message || 'Failed to fetch');
    }

    return responseBody as ApiResponse<TData>;
  } catch (error) {
    if (error instanceof Error) {
      // Handle fetch or JSON parsing errors
      console.error('fetch error :>> ', error.message);
      toast.error(error.message);
      throw error;
    }

    throw new Error('An unknown error occurred');
  }
};

export default http;
