"use client";
import createColumns, { Token } from "../../hook/createColumns";
import { DataTable } from "./data-table";

interface TokenProps {
  data: Token[];
}

export default function TokenTable({ data }: TokenProps) {
  const columns = createColumns(data);
  return <DataTable columns={columns} data={data} />;
}
