import type { NextPage } from "next";
import { Layout } from "src/layout";
import { useMediaQuery, useViewportSize } from "src/lib/mantine";

const Home: NextPage = () => {
  const { width } = useViewportSize();
  const largerThanXs = useMediaQuery("xs");
  const largerThanSm = useMediaQuery("sm");
  const largerThanMd = useMediaQuery("md");
  const largerThanLg = useMediaQuery("lg");
  const largerThanXl = useMediaQuery("xl");

  return (
    <Layout>
      <div className="p-20">
        <div className="bg-fuchsia-200 xs:bg-red-200 sm:bg-amber-200 md:bg-lime-200 lg:bg-emerald-200 xl:bg-cyan-200">
          <div>{`width: ${width}`}</div>
          <div>{`largerThanXs: ${largerThanXs}`}</div>
          <div>{`largerThanSm: ${largerThanSm}`}</div>
          <div>{`largerThanMd: ${largerThanMd}`}</div>
          <div>{`largerThanLg: ${largerThanLg}`}</div>
          <div>{`largerThanXl: ${largerThanXl}`}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
