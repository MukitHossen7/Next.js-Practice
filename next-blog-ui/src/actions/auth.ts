"use server";

import { FieldValues } from "react-hook-form";

export const createUser = async (userData: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/users/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  if (!res.ok) {
    console.error("User create failed", await res.text());
  }

  return await res.json();
};

export const createLogin = async (loginData: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (res.status !== 201) {
    console.error("Login failed", await res.text());
  }
  return await res.json();
};
