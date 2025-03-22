import Banner from "./components/banner/Banner";
import RecentProjects from "./project/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <RecentProjects />
      <ContactPage />
    </div>
  );
}
