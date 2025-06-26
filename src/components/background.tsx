import RomanticDetails from "./RomanticDetails";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-8 animate-in fade-in-50 duration-500 flex flex-col flex-grow">
      <RomanticDetails />
      {children}
    </div>
  );
}