import { useSession } from "next-auth/react";

export const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();

  if (session) {
    return children;
  }

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <div>Not signed</div>;
};
