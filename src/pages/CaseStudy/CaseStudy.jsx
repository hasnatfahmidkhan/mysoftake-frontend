import RoadmapSection from "../RoadmapSection/RoadmapSection";
import CaseStudyBanner from "./CaseStudyBanner/CaseStudyBanner";
import ConclusionSection from "./ConclusionSection/ConclusionSection";
import DesignProcess from "./DesignProcess/DesignProcess";
import DesignTimeline from "./DesignTimeLine/DesignTimeLine";
import PainPoints from "./PainPoints/PainPoints";
import ProductOverview from "./ProductOverview/ProductOverview";
import QuantitativeResearch from "./QuantitativeResearch/QuantitativeResearch";

const CaseStudy = () => {
  return (
    <>
      <CaseStudyBanner />
      <ProductOverview />
      <DesignProcess />
      <DesignTimeline />
      <PainPoints />
      <QuantitativeResearch />
      <ConclusionSection />
    </>
  );
};

export default CaseStudy;
