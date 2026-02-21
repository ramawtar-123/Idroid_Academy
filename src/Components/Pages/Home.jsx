// import Companies from "../Companies";
// import Courses from "../Courses";
// import CTASection from "../CTASection";
import Hero from "../Hero";
import Layout from "../Layout";
// import Placement from "../Placement";
import StatsBar from "../StatsBar";
import Tools from "../Tools";
import Careers from "../Careers";
// import Corroboration from "../Corroboration";
import Review from "../Review";
import AcademicLife from "../AcademicLife";
import ProfessionalCourses from "../ProfessionalCourses";
import AboutHome from "../AboutHome";


export default function Home() {
  return (
    <Layout>
      <Hero />
      {/* <Highlights courseType="home"/> */}
      <StatsBar />
      {/* <Companies /> */}
      {/* <Courses /> */}
      {/* <Placement courseType="home" /> */}
      <AboutHome />
      <Tools />
      <ProfessionalCourses/>
      <Careers/>
      {/* <CTASection /> */}
      {/* <Corroboration/> */}
      <Review/>
      <AcademicLife/>
    </Layout>
  );
}
