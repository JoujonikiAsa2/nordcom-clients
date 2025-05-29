import DynamicNavigation from "@/components/dynamicNavigation/dynamicNavigation";
import Footer from "@/components/shared/Footer";
import Midnavbar from "@/components/shared/Midnavbar";
import Navbar from "@/components/shared/Navbar";
import Subscription from "@/components/shared/subscription";
import Topmenubar from "@/components/shared/Topmenubar";
import { fetchCategories } from "@/lib/api/category";

const CommonLayout = async({ children }: { children: React.ReactNode }) => {
   const categories = await fetchCategories();

  return (
    <div>
      <Topmenubar />
      <div className="flex flex-col mx-auto max-w-7xl">
        <Midnavbar />
        <Navbar categories={categories} />
        <DynamicNavigation />
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
