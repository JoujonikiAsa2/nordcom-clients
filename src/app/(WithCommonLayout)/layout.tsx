import Footer from "@/components/shared/Footer";
import Midnavbar from "@/components/shared/Midnavbar";
import Navbar from "@/components/shared/Navbar";
import Subscription from "@/components/shared/subscription";
import Topmenubar from "@/components/shared/Topmenubar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Topmenubar />
      <div className="flex flex-col mx-auto max-w-7xl">
        <Midnavbar />
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </div>
      <div>
        <Subscription />
        <Footer />
      </div>
    </div>
  );
};

export default CommonLayout;
