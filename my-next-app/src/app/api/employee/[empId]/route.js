import { employee } from "@/DB/DBDatabase";

const { NextResponse } = require("next/server");

export const GET = (req, value) => {
  const empId = value.params.empId;
  console.log(empId);
  return NextResponse.json(employee, { status: 200 });
};
