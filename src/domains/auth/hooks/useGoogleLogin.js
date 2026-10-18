"use client";

const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_SCOPE = "openid email profile";

function getRedirectUri() {
  return (
    process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI ??
    `${window.location.origin}/signin`
  );
}

export function startGoogleLogin() {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  if (!clientId) {
    alert("구글 로그인이 아직 설정되지 않았어요. 잠시 후 다시 시도해 주세요.");
    return;
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: getRedirectUri(),
    response_type: "code",
    scope: GOOGLE_SCOPE,
    access_type: "offline",
    prompt: "select_account",
  });

  window.location.assign(`${GOOGLE_AUTH_URL}?${params.toString()}`);
}

export function readGoogleCode() {
  if (typeof window === "undefined") return null;
  return new URLSearchParams(window.location.search).get("code");
}
