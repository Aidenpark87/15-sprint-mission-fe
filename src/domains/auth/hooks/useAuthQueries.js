"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMe, signIn, signInWithGoogle, signUp } from "@/apis/authApi";
import { setTokens } from "@/utils/token";
import { useAuthToken } from "./useAuthToken";

export const queryKeys = {
  me: ["me"],
};

export function useMe(enabled = true) {
  const token = useAuthToken();
  return useQuery({
    queryKey: queryKeys.me,
    queryFn: getMe,
    enabled: enabled && Boolean(token),
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
}

export function useSignIn() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      setTokens(data);
      queryClient.invalidateQueries({ queryKey: queryKeys.me });
    },
  });
}

export function useSignUp() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      setTokens(data);
      queryClient.invalidateQueries({ queryKey: queryKeys.me });
    },
  });
}

export function useGoogleSignIn() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signInWithGoogle,
    onSuccess: (data) => {
      setTokens(data);
      queryClient.invalidateQueries({ queryKey: queryKeys.me });
    },
  });
}