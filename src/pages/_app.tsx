import Layout from "@/component/layout/Layout";
import { AuthContextProvider } from "@/context/auth.context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const isLoginPage = pageProps.loginPage;
  if (isLoginPage) {
    return <Component {...pageProps} />;
  }
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}
