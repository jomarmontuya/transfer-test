import TokenTable from "./components/TokenTable";

import { Suspense } from "react";
import SkeletonTable from "./components/SkeletonTable";
import getData from "@/api/getData";

export default async function Home() {
  const { data } = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <Suspense fallback={<SkeletonTable />}>
          <TokenTable data={data} />
        </Suspense>
      </div>
    </main>
  );
}
