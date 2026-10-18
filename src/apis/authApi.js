import httpClient from "./httpClient";

export async function signIn({ email, password }) {
  const { data } = await httpClient.post("/auth/signIn", { email, password });
  return data;
}

export async function signInWithGoogle({ code }) {
  const { data } = await httpClient.post("/auth/google", { code });
  return data;
}

export async function refreshTokens(refreshToken) {
  const { data } = await httpClient.post("/auth/refresh", { refreshToken });
  return data;
}

export async function signUp({ email, nickname, password, passwordConfirmation }) {
  const { data } = await httpClient.post("/auth/signUp", {
    email,
    nickname,
    password,
    passwordConfirmation,
  });
  return data;
}

export async function getMe() {
  const { data } = await httpClient.get("/users/me");
  return data;
}