const ParallelLayout = ({
  children,
  member,
  task,
}: {
  children: React.ReactNode;
  member: React.ReactNode;
  task: React.ReactNode;
}) => {
  return (
    <div>
      {children}
      <div className="flex justify-between">
        {member}
        {task}
      </div>
    </div>
  );
};

export default ParallelLayout;
