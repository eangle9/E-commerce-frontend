import axiosInstance from "@/utils/axiosInstance";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

export interface LoginPayload {
  email: string;
  password: string;
}

interface userInfo {
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
  isLoading: boolean;
  error: string | null;
}

export const userLogin = createAsyncThunk<userInfo, LoginPayload>(
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
      const loginInfo: userInfo = {
        email: response.data.data.email,
        username: response.data.data.username,
        tokenPair: {
          access_token: response.data.data.tokenPair.access_token,
          refresh_token: response.data.data.tokenPair.refresh_token,
        },
      };
      localStorage.setItem("userInfo", JSON.stringify(loginInfo));
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

const getInitialUserInfo = () => {
  if (typeof window != "undefined") {
    const storedUserInfo = localStorage.getItem("userInfo") as string;
    return storedUserInfo ? JSON.parse(storedUserInfo) : null;
  }

  return null;
};

const initialState: userState = {
  userInfo: getInitialUserInfo(),
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
      (state, action: PayloadAction<userInfo>) => {
        state.isLoading = false;
        state.userInfo = action.payload;
        state.error = null;
      }
    );
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      // state.error = action.error.message;
      state.error = action.payload as string;
    });
  },
});

export default usersSlice.reducer;
