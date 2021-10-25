import { FC } from "react";

const HomePage: FC = () => {
  return (
    <section
      className="bg-white overflow-y-auto space-y-8"
      style={{ padding: "16px", height: "inherit" }}
    >
      <h1 className="snb-h1">Boilerplate</h1>

      <section>
        <h2 className="snb-h2">Blank Page</h2>
      </section>
    </section>
  );
};

export default HomePage;
