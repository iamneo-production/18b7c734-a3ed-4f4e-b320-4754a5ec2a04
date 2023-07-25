import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Permits & compliance" />
      <div className="pb-10">
        <p>PERMITS AND COMPLIANCE FOR YOUR CHOOSEN PRODUCTS</p>
        <br></br>
        <br></br>
        <p> 1. Building Permits: Most significant home renovation projects, such as adding rooms, changing the structural layout, or making substantial alterations, will require a building permit. This permit ensures that the construction meets safety and building code requirements.
        <br></br>
 2. Zoning Permits: Zoning permits are essential for projects that affect the property's use, size, or placement. These permits ensure that the renovation complies with local zoning laws and does not violate any restrictions related to land use.
<br></br>
 3. Electrical Permits: When adding or modifying electrical systems, such as installing new wiring, circuits, or outlets, you'll need an electrical permit. Licensed electricians typically handle electrical work and obtain the necessary permits.
<br></br>
 4. Plumbing Permits: If your renovation involves changes to plumbing systems, such as adding or moving pipes and fixtures, you'll need a plumbing permit. Licensed plumbers usually handle plumbing work and permits.
<br></br>
 5. Mechanical Permits: Projects that involve heating, ventilation, and air conditioning (HVAC) systems often require mechanical permits to ensure compliance with safety and energy efficiency standards.
<br></br>
 6. Environmental Permits: In some cases, renovations that might impact the environment, such as tree removal or excavation, may require specific environmental permits.
<br></br>
 7. Historic or Conservation Permits: If your property is designated as historic or is located in a conservation district, you may need special permits and approvals before making any changes to the exterior or certain interior elements.
<br></br>
 8. Energy Efficiency Compliance: Some renovations must comply with energy efficiency standards, especially if they involve windows, doors, insulation, or the roof. Check for local regulations regarding energy-efficient upgrades.
<br></br>
 9. Safety Inspections: During and after the renovation, local authorities might conduct safety inspections to ensure that the work meets building codes and standards.
<br></br>
 10. Homeowner's Association (HOA) Approval: If your property is part of a homeowner's association, you may need to seek approval from the HOA before undertaking any renovations.</p>
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
