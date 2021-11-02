import { useBreadcrumb } from "@sinbad/mf-react-component";
import { FC } from "react";
import { useRouteMatch } from "react-router-dom";
import { ProductListPage } from "./product-list";

const HomePage: FC = () => {
  const { BreadcrumbConfig } = useBreadcrumb("Dashboard");
  const { path } = useRouteMatch();

  return (
    <div className="h-full flex flex-col gap-y-16px">
      <BreadcrumbConfig
        items={[
          {
            link: path,
            label: "Dashboard",
          },
          {
            link: path,
            label: "Products",
          },
        ]}
      >
        <ProductListPage />
      </BreadcrumbConfig>
    </div>
  );
};

export default HomePage;
