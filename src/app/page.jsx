import Dashboard from "./components/pages/Dashboard";
import NewChart from "./components/pages/NewChart";
import PrimaryText from "./components/pages/PrimaryText";
import PrimaryText2 from "./components/pages/PrimaryText-2";
import StoreMetrics from "./components/pages/StoreMetrics";
import TaskSummary from "./components/pages/TaskSummary";
const page = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "100px",
      }}
    >
      <StoreMetrics />
      <PrimaryText />
      <PrimaryText2 />
      <TaskSummary />
    </div>
  );
};

export default page;
