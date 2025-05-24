import Midnavbar from "@/components/shared/Midnavbar";

const DLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex flex-col mx-auto max-w-7xl">
        <Midnavbar />
        <main className="min-h-screen">{children}</main>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default DLayout;