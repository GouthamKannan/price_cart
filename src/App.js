import Card from "./card";

// Contents for free section
const freeData = {
  title: "Free",
  price: 0,
  available: [
    "Single User",
    "5GB Storage",
    "Unlimited Public Projects",
    "Community Access",
  ],
  notAvailable: [
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "Monthly Status Reports",
  ],
};

// Contents for plus section
const plusData = {
  title: "Plus",
  price: 9,
  available: [
    "5 Users",
    "50GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
  ],
  notAvailable: ["Monthly Status Reports"],
};

// contents for pro section
const proData = {
  title: "Pro",
  price: 49,
  available: [
    "Unlimited Users",
    "150GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Unlimited Free Subdomains",
    "Monthly Status Reports",
  ],
  notAvailable: [],
};

// Function to create price cart
function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Card values={freeData} />
          <Card values={plusData} />
          <Card values={proData} />
        </div>
      </div>
    </section>
  );
}

export default App;
