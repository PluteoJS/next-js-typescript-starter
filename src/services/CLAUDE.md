# Services Directory

## Structure

```
services/
├── api/
│   ├── client.ts        # Axios instance setup
│   ├── interceptors.ts  # Request/response interceptors
│   └── endpoints.ts     # API endpoint constants
├── authService.ts       # Auth-related API calls
├── userService.ts       # User-related API calls
└── index.ts             # Barrel exports
```

## Factory Function Pattern

Create service instances with configured client:

```ts
// authService.ts
import { apiClient } from "./api/client";
import { AUTH_ENDPOINTS } from "./api/endpoints";

interface iLoginPayload {
  email: string;
  password: string;
}

interface iLoginResponse {
  token: string;
  user: iUser;
}

export const authService = {
  login: async (payload: iLoginPayload): Promise<iLoginResponse> => {
    const response = await apiClient.post(AUTH_ENDPOINTS.LOGIN, payload);
    return response.data;
  },

  logout: async (): Promise<void> => {
    await apiClient.post(AUTH_ENDPOINTS.LOGOUT);
  },

  refreshToken: async (): Promise<string> => {
    const response = await apiClient.post(AUTH_ENDPOINTS.REFRESH);
    return response.data.token;
  },
};
```

## Endpoint Constants

```ts
// endpoints.ts
export const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  REFRESH: "/auth/refresh",
} as const;

export const USER_ENDPOINTS = {
  GET_PROFILE: "/users/profile",
  UPDATE_PROFILE: "/users/profile",
} as const;
```

## Axios Client Setup

```ts
// client.ts
import axios from "axios";
import { setupInterceptors } from "./interceptors";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

setupInterceptors(apiClient);
```

## Response Types

Always type API responses:

```ts
interface iApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

interface iPaginatedResponse<T> extends iApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
}
```

## Error Handling

Use async/await with try/catch in thunks, let interceptors handle common errors.
