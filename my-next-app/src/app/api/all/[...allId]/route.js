import { NextResponse } from "next/server";

export const GET = (req, res) => {
  const id = res.params.allId;
  console.log(id);
  return NextResponse.json({ massage: "success" });
};
