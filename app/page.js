import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-8">Next.js tutorial</h1>
      <Link href="/client" className="btn btn-accent capitalize">
        get started
      </Link>
    </div>
  );
};

export default HomePage;
