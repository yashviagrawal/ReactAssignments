// api.ts
const API_URL = 'http://localhost:3001/login';

interface ApiResponse {
  message: string;
}

export const login = async (username: string, password: string): Promise<void> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data: ApiResponse = await response.json();

  if (data.message === 'Login successful') {
    // Successful login
    return;
  } else {
    throw new Error('Login failed');
  }
};
