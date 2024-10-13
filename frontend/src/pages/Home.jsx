import Hero from "../components/Hero";
import Category from "../components/Category";
import FeatureCard from "../components/FeatureCard";
import Features from "../components/Features";
import WCU from "../components/WCU";
import Team from "../components/Team";
import Promotion from "../components/Promotion";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div className="bg-violet-50">
      <Hero />
      <Category />
      <FeatureCard />
      <Features />
      <WCU />
      <Team />
      <Promotion />
      <CTA />
    </div>
  );
};

export default Home;
