import Companies from "../Companies";
import Courses from "../Courses";
import CTASection from "../CTASection";
import Hero from "../Hero";
import Layout from "../Layout";
import Placement from "../Placement";
import StatsBar from "../StatsBar";
import Tools from "../Tools";
import Highlights from "../Highlights"
import Careers from "../Careers";
import Corroboration from "../Corroboration";
import Review from "../Review";
import AcademicLife from "../AcademicLife";


export default function Home() {
  return (
    <Layout>
      <Hero />
      <StatsBar />
      <Companies />
      <Courses />
      <Placement courseType="home" />
      <Tools />
      <Highlights courseType="home"/>
      <Careers/>
      <CTASection />
      <Corroboration/>
      <Review/>
      <AcademicLife/>
    </Layout>
  );
}
