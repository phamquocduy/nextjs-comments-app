import { MainLayout } from "../../components/layout";
import { AuthProvider } from "../../modules/auth";
import { NewArticle } from "../../modules/articles";

const CreateNew = () => {
  return (
    <AuthProvider>
      <NewArticle />
    </AuthProvider>
  );
};

CreateNew.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default CreateNew;
