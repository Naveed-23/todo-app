export default function LoginLayout({ children }) {
  return (
      <main className="min-h-screen grid place-items-center bg-gray-900 px-4">
          <div className="bg-gray-800 w-full sm:w-[24rem] text-slate-100 space-y-8 p-8 sm:p-10 rounded-lg">
              {children}
          </div>
      </main>
  );
}

  