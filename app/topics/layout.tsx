export default function TopicsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow">
      <main className="container mx-auto py-8 px-4">
        {children}
      </main>
    </div>
  );
}