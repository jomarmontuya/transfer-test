import { Skeleton } from "@/components/ui/skeleton";

function SkeletonTable() {
  const rows = 5; // Number of skeleton rows

  const SkeletonRow = () => (
    <tr>
      <td className=" px-4 py-2">
        <Skeleton className="w-20 h-5" />
      </td>
      <td className=" px-4 py-2">
        <Skeleton className="w-20 h-5" />
      </td>
      <td className=" px-4 py-2">
        <Skeleton className="w-20 h-5" />
      </td>
      <td className=" px-4 py-2">
        <Skeleton className="w-20 h-5" />
      </td>
      {/* Add more columns as needed */}
    </tr>
  );

  return (
    <table className="w-full table-auto border ">
      <thead>
        <tr>
          <th className="border px-4 py-2">
            <Skeleton className="w-20 h-2" />
          </th>
          <th className="border px-4 py-2">
            <Skeleton className="w-20 h-2" />
          </th>
          <th className="border px-4 py-2">
            <Skeleton className="w-20 h-2" />
          </th>
          <th className="border px-4 py-2">
            <Skeleton className="w-20 h-2" />
          </th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rows }, (_, index) => (
          <SkeletonRow key={index} />
        ))}
      </tbody>
    </table>
  );
}

export default SkeletonTable;
