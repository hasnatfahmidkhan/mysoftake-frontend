import mobile1 from "../../../assets/mobile1.svg";
import mobile2 from "../../../assets/mobile2.svg";
import Container from "../../../component/Container/Container";
import SectionHeading from "../shared/SectionHeading";

// Reusable component for the list items with blue dashes
const ListItem = ({ text }) => (
  <li className="flex items-center text-base-content mb-2">
    <span className="text-blue-600 font-bold mr-2 text-xl">-</span>
    {text}
  </li>
);

const ProductOverview = () => {
  return (
    <Container>
      {/* --- TOP SECTION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Top Left: Content */}
        <div className="flex flex-col justify-center">
          <SectionHeading title="Product Overview" />
          <p className="text-base-content leading-relaxed mb-12 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
            lobortis maecenas mattis sed ullamcorper fermentum, porttitor
            adipiscing venenatis. Convallis turpis suscipit et congue quam
            gravida malesuada auctor. Egestas et dictum risus eu dolor
            sollicitudin. Mauris bibendum in ornare egestas et cras.
            <br />
            <br />
            Dapibus adipiscing nibh elit viverra diam. Erat enim, dui mauris
            feugiat velit ipsum aliquam. Enim mi, faucibus enim quis cursus eget
            pharetra bibendum ornare. Fames senectus neque pellentesque cursus
            purus vel sodales enim.
          </p>

          {/* Nested Grid for Responsibility and Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Responsibility Column */}
            <div>
              <SectionHeading title="Responsibility" />
              <ul className="mt-4">
                <ListItem text="Role 1" />
                <ListItem text="Role 2" />
                <ListItem text="Role 3" />
              </ul>
            </div>

            {/* Tools Column */}
            <div>
              <SectionHeading title="Tools" />
              <div className="flex gap-8 mt-4">
                <ul>
                  <ListItem text="Tool 1" />
                  <ListItem text="Tool 2" />
                  <ListItem text="Tool 3" />
                </ul>
                <ul>
                  <ListItem text="Tool 4" />
                  <ListItem text="Tool 5" />
                  <ListItem text="Tool 6" />
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Top Right: Mobile Image */}
        <div className="flex items-center justify-center lg:justify-end">
          <img src={mobile1} alt="" />
        </div>
      </div>

      {/* --- BOTTOM SECTION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Bottom Left: Mobile Image (Hands) */}
        <div className="flex items-center justify-center lg:justify-start order-2 lg:order-1">
          {/* Placeholder for Hands Image */}
          <img src={mobile2} alt="" />
        </div>

        {/* Bottom Right: Content */}
        <div className="flex flex-col justify-center order-1 lg:order-2">
          <div className="mb-12">
            <SectionHeading title="Problem Statement" />
            <p className="text-base-content leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              nec egestas ullamcorper venenatis risus habitasse nulla
              ullamcorper. Enim vivamus sed id ut vulputate nulla nulla amet
              ullamcorper. Consequat mattis ac vitae.
            </p>
          </div>

          <div>
            <SectionHeading title="Goals" />
            <p className="text-base-content leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              nec egestas ullamcorper venenatis risus habitasse nulla
              ullamcorper. Enim vivamus sed id ut vulputate nulla nulla amet
              ullamcorper. Consequat mattis ac vitae.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductOverview;
