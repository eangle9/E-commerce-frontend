import axiosInstance from "@/utils/axiosInstance";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { register } from "module";
import { Bounce, toast } from "react-toastify";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface UserInfo {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: string;
  emailVerified: Boolean;
  profilePicture: string;
}

interface LoginInfo {
  email: string;
  username: string;
  tokenPair: tokenPair;
}

interface tokenPair {
  access_token: string;
  refresh_token: string;
}

interface userState {
  userInfo: any;
  loginInfo: any;
  isLoading: boolean;
  error: string | null;
}

export const userRegister = createAsyncThunk<UserInfo, RegisterPayload>(
  "users/userRegistration",
  async ({ username, email, password, firstName, lastName, phoneNumber }) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axiosInstance.post(
        "/register",
        {
          username,
          email,
          password,
          firstName,
          lastName,
          phoneNumber,
        },
        config
      );
      console.log("response: ", response);
      toast.success(`${response.data.message}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      const userInfo: UserInfo = {
        id: response.data.data.user.user_id,
        username: response.data.data.user.username,
        email: response.data.data.user.email,
        firstName: response.data.data.user.firstName,
        lastName: response.data.data.user.lastName,
        phoneNumber: response.data.data.user.phoneNumber,
        role: response.data.data.user.role,
        emailVerified: response.data.data.user.emailVerified,
        profilePicture: response.data.data.user.profilePicture,
      };
      // localStorage.setItem("userInfo", JSON.stringify(loginInfo));
      return userInfo;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const fullErrorMessage = error.response.data.error;
        const errorMessage = fullErrorMessage.split(",")[0];
        const message = errorMessage.split(":")[1];
        toast.error(`${message}`, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });

        throw new Error(message);
      }
    }

    throw new Error("An unexpected error occured");
  }
);

export const userLogin = createAsyncThunk<LoginInfo, LoginPayload>(
  "users/userLogin",
  async ({ email, password }) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axiosInstance.post(
        "/login",
        {
          email,
          password,
        },
        config
      );
      console.log("response: ", response);
      toast.success(`${response.data.message}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      const loginInfo: LoginInfo = {
        email: response.data.data.email,
        username: response.data.data.username,
        tokenPair: {
          access_token: response.data.data.tokenPair.access_token,
          refresh_token: response.data.data.tokenPair.refresh_token,
        },
      };
      localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
      return loginInfo;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const fullErrorMessage = error.response.data.error;
        const errorMessage = fullErrorMessage.split(",")[0];
        const message = errorMessage.split(":")[1];
        toast.error(`${message}`, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });

        throw new Error(message);
      }
    }

    throw new Error("An unexpected error occured");
  }
);

const getInitialLoginInfo = () => {
  if (typeof window != "undefined") {
    const storedLoginInfo = localStorage.getItem("loginInfo") as string;
    return storedLoginInfo ? JSON.parse(storedLoginInfo) : null;
  }

  return null;
};

const initialState: userState = {
  userInfo: null,
  loginInfo: getInitialLoginInfo(),
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      userLogin.fulfilled,
      (state, action: PayloadAction<LoginInfo>) => {
        state.isLoading = false;
        state.loginInfo = action.payload;
        state.error = null;
      }
    );
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      // state.error = action.error.message;
      state.error = action.payload as string;
    });
    builder.addCase(userRegister.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      userRegister.fulfilled,
      (state, action: PayloadAction<UserInfo>) => {
        state.isLoading = false;
        state.userInfo = action.payload;
        state.error = null;
      }
    );
    builder.addCase(userRegister.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export default usersSlice.reducer;
