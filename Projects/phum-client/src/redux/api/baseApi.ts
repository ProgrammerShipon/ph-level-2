import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 404) {
    toast.error((result.error.data as { message: string }).message);
  }
  if (result?.error?.status === 401) {
    //* Send Refresh
    console.log("Sending refresh token");

    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RootState } from "../store";
// import { logout, setUser } from "../features/auth/authSlice";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:5000/api/v1/",
//   credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState).auth.token;

//     if (token) {
//       headers.set("authorization", `${token}`);
//     }

//     return headers;
//   },
// });

// interface BaseQueryArgs {
//   url: string;
//   method?: string;
//   body?: any;
//   params?: Record<string, any>;
// }

// interface ExtraOptions {
//   [key: string]: any;
// }

// interface RefreshTokenResponse {
//   data: {
//     accessToken: string;
//   };
// }

// const baseQueryWithRefreshToken = async (
//   args: BaseQueryArgs,
//   api: any,
//   extraOptions: ExtraOptions
// ) => {
//   let result = await baseQuery(args, api, extraOptions);
//   const res = await fetch(`http://localhost:5000/api/v1/auth/refresh-token`, {
//     method: "POST",
//     credentials: "include",
//   });

//   const data: RefreshTokenResponse = await res.json();

//   console.log("data 28 => ", data);

//   if (result?.error?.status === 401) {
//     const user = (api.getState() as RootState).auth.user;

//     api.dispatch(
//       setUser({
//         user,
//         token: data.data.accessToken,
//       })
//     );

//     result = await baseQuery(args, api, extraOptions);
//   }

//   if (data?.data?.accessToken) {
//     const user = (api.getState() as RootState).auth.user;

//     api.dispatch(
//       setUser({
//         user,
//         token: data?.data?.accessToken,
//       })
//     );
//     result = await baseQuery(args, api, extraOptions);
//   } else {
//     api.dispatch(logout());
//   }

//   console.log("result => ", result);
//   return result;
// };

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: baseQueryWithRefreshToken,
//   endpoints: () => ({}),
// });
