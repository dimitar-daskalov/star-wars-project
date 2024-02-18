export const ROUTES = {
  login: "/login",
  home: "/table",
};

export const VITE_STAR_WARS_API_URL = import.meta.env.VITE_STAR_WARS_API_URL;

export const INITIAL_STATE = {
  value: "",
  isValid: false,
  error: "",
  isTouched: false,
};

export const VALID_STATE = {
  isValid: true,
  error: "",
  isTouched: true,
};

export const VALIDATION_CONDITIONS = {
  password: {
    isInvalid: (value: string) => {
      return value.trim().length < 8;
    },
    errorMsg: "Password must be at least 8 characters.",
  },
  username: {
    isInvalid: (value: string) => {
      return value.trim().length > 50 || value.trim().length < 2;
    },
    errorMsg: "Username must be between 2 and 50 characters.",
  },
};
