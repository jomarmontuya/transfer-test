import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Price from "../app/components/priceWithAnimation";

interface Contract {
  address: string;
  blockchain: string;
  blockchainId: string;
  decimals: number;
}

export interface Token {
  name: string;
  logo: string;
  symbol: string;
  liquidity: number;
  market_cap: number;
  volume: number;
  price: number;
  price_change_1h: number;
  price_change_24h: number;
  price_change_7d: number;
  contracts: Contract[];
  id: number;
  rank: number;
}

function createColumns(data: Token[]) {
  const columns: ColumnDef<Token>[] = [];

  // If there is no data, return the empty columns
  if (!data || data.length === 0) {
    return columns;
  }

  const keys = Object.keys(data[0]);
  keys.forEach((key) => {
    // If the key is contracts, skip it
    if (key === "contracts") {
      return;
    }

    // If the key is logo, add a custom cell
    if (key === "logo") {
      columns.push({
        accessorKey: key,
        header: key,
        cell: ({ row }) => {
          return (
            <div className="w-20 h-20">
              <Image
                className="rounded-md w-10 h-10"
                alt=""
                src={row.getValue("logo")}
                width={40}
                height={40}
              />
            </div>
          );
        },
      });

      return;
    }

    // If the key is price, add a custom cell
    if (key === "price") {
      columns.push({
        accessorKey: key,
        header: key,
        cell: ({ row }) => {
          return <Price price={row.getValue("price")} />;
        },
      });
      return;
    }

    columns.push({
      accessorKey: key,
      header: key,
    });
  });

  return columns;
}

export default createColumns;
