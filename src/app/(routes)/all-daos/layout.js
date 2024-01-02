import Sidebar from "@/components/Sidebar/Sidebar";

export default function DaoLayout({ children }) {
  return (
    <main>
      <div className="grid grid-cols-12">
        <div className="col-span-1 border border rounded-[1.2rem] mx-5 mb-3">
          <Sidebar />
        </div>
        <div className="col-span-11 p-6">{children}</div>
      </div>
    </main>
  );
}
