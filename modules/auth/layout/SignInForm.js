import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { PrimaryButton } from "../../../components/bricks";

export const SignInForm = () => {
  const router = useRouter();
  const { status, loading } = useSession();
  const [error, setError] = useState(false);

  if (status === "authenticated") {
    router.push("/");
  }

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { error } = await signIn("credentials", {
      redirect: false,
      username: "quoc.duy", // hard coded
      password: "quoc.duy", // hard coded
      apiKey: "0645026e-956e-46ab-a95b-13129a12c00f", // hard coded
      callbackUrl: "/",
    });

    if (error) {
      // show error in modals or notifications
      setError(error);
    }
  };

  return (
    status === "unauthenticated" && (
      <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" method="POST">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">
                  API key
                </label>
                <div className="mt-1">
                  <input
                    id="apiKey"
                    name="apiKey"
                    type="text"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <PrimaryButton onClick={handleSignIn}>Sign in</PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    )
  );
};
