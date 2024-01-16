import Link from "next/link";
import Image from "next/image";

const fetchSingleDrink = async (id) => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const data = await fetch(`${url}${id}`);
  if (!data.ok) {
    throw new Error("Failed to fetch single drink");
  }
  return data.json();
};

const SingleDrinkPage = async ({ params }) => {
  const singleDrink = await fetchSingleDrink(params.id);
  const title = singleDrink?.drinks[0]?.strDrink;
  const image = singleDrink?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <Image
        src={image}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        alt={title}
      />
      <h2 className="text-5xl font-medium">{title}</h2>
    </div>
  );
};

export default SingleDrinkPage;
