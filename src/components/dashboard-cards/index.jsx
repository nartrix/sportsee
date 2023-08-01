import DashboardCard from "../dashboard-card";

function DashboardCards({ nutritionData }) {
  // Retrieve the nutritional data types to pass them as props to the NutritionCard component
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
