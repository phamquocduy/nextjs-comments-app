import { getSession } from "next-auth/react";

import { MainLayout } from "../../components/layout";
import { AuthProvider } from "../../modules/auth";
import { ArticleList } from "../../modules/articles";

const List = ({ data }) => {
  return (
    <AuthProvider>
      <ArticleList listData={data.items} />
    </AuthProvider>
  );
};

List.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
  let session = await getSession(context);

  const res = await fetch(`${process.env.API_URL}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": session.apiKey,
    },
  });

  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default List;
