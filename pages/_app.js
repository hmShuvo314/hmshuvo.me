import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Typography />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
