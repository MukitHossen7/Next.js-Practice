import { employee } from "@/DB/DBDatabase";

const { NextResponse } = require("next/server");

export const GET = (req, value) => {
  const empId = value.params.empId;
  console.log(empId);
  return NextResponse.json(employee, { status: 200 });
};

export const DELETE = (req, value) => {
  const deleteId = value.params.empId;
  if (deleteId) {
    return NextResponse.json({ message: "successful" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "not valid" }, { status: 404 });
  }
};

export const PUT = async (req, value) => {
  const payload = await req.json();
  console.log(payload);
  return NextResponse.json({ massage: "success" }, { status: 200 });
};
