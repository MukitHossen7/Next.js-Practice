import { employee } from "@/DB/DBDatabase";

const { NextResponse } = require("next/server");

export const GET = (req) => {
  return NextResponse.json(employee, { status: 200 });
};
