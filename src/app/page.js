import Counter from "@/components/Counter/Counter";
import Link from "next/link";


const HomePage = () => {
  // console.log('hello world');
  // throw new error();

  return (
    <div>
      <h1>Next js Home Page</h1>
      <Counter></Counter>
      <Link href="/about">
       <button className="btn-secondary btn">About</button>
      </Link>
      <Link href="/news">
       <button className="btn-secondary btn">News</button>
      </Link>
    </div>
  );
};

export default HomePage;