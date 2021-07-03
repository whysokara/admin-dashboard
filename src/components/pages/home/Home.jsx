import Chart from "../../chart/Chart";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../../dummyData";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        dataKey="Active User"
        grid
      />
    </div>
  );
}
