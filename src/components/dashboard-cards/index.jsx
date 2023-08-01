import DashboardCard from "../dashboard-card";

function DashboardCards({ nutritionData }) {
  const nutritionTypes = Object.keys(nutritionData);

  return (
    <>
      {nutritionTypes.map((type, index) => (
        <DashboardCard key={index} type={type} amount={nutritionData[type]} />
      ))}
    </>
  );
}

export default DashboardCards;
