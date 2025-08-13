import "@/styles/globals.css";
import '@/styles/header.css';
import '@/styles/footer.css';
import '@/styles/contact-us.css';
import '@/styles/about.css';
import '@/styles/home.css';
import '@/styles/hero-section.css';
import '@/styles/home-services.css';
import '@/styles/home-whychooseus.css';
import '@/styles/home-industrylist.css';
import '@/styles/index.css';
import '@/styles/services.css';
import '@/styles/career.css';
import '@/styles/internship-support.css';
import Header from "./header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
