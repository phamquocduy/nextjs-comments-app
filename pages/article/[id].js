import { getSession } from "next-auth/react";

import { MainLayout } from "../../components/layout";
import { AuthProvider } from "../../modules/auth";
import { ArticleDetail } from "../../modules/articles";

const Detail = ({ data }) => {
  return (
    <AuthProvider>
      <ArticleDetail articleData={data} />
    </AuthProvider>
  );
};

Detail.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
  let data = [];
  let session = await getSession(context);
  let { params } = context;

  if (!session) {
    return { props: { data } };
  }

  const res = await fetch(`${process.env.API_URL}/articles/${params.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": session?.apiKey,
    },
  });

  data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Detail;
