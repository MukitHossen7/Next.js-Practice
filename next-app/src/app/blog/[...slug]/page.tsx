/* eslint-disable @typescript-eslint/no-explicit-any */
const CatchAllSegments = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const allSlugs = await params;
  return (
    <div>
      {allSlugs.slug.map((sl, idx: any) => (
        <h1 key={idx} className="text-2xl">
          This is Catch All Segments {sl}
        </h1>
      ))}
    </div>
  );
};

export default CatchAllSegments;
