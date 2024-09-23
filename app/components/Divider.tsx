export const Divider = ({className}:{className?:string}) => {
  return (
    <div className={`w-full mx-auto flex items-center justify-center ${className}`}>
      <div className="w-full rounded-md bg-gradient-to-r from-[#E551C7] via-[#D47C45] via-[#E5D548] to-[#83F42F] p-0.5">
      </div>
    </div>
  );
};
