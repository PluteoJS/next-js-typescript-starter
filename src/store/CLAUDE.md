# Store Directory (Redux Toolkit)

## Slice Structure

Each feature slice folder contains:

```
featureName/
├── Types.ts         # State and payload interfaces
├── Slice.ts         # createSlice with reducers
└── ThunkActions.ts  # Async thunk actions
```

## State Interface Naming

Prefix with `i`, suffix with `State`:

```ts
// Types.ts
interface iAuthState {
  user: iUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
```

## Typed Hooks

Use typed hooks from store setup:

```ts
import { useAppSelector, useAppDispatch } from "@/store/hooks";

const user = useAppSelector((state) => state.auth.user);
const dispatch = useAppDispatch();
```

## Slice Pattern

```ts
// Slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iAuthState } from "./Types";

const initialState: iAuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<iUser>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    // Handle async thunks here
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
```

## Thunk Actions

```ts
// ThunkActions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "@/services/api/authService";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: iLoginCredentials, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
```

## Normalized Data

For collections, use normalized shape:

```ts
interface iEntitiesState<T> {
  byId: Record<string, T>;
  allIds: string[];
}
```
