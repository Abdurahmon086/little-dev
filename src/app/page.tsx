import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Little dev | ♥",
};

const Home: NextPage = () => {
  return (
    <div className="flex-1">
      <section className="container mx-auto">Home pahe</section>
    </div>
  );
};

export default Home;
