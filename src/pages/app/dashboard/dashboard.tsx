import { Helmet } from "react-helmet-async";
import { MonthrevenueCard } from "./month-revenue-card";
import { MonthOrdersAmountCard } from "./month-orders-amount-card";
import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { MonthCanceledOrdersAmountCard } from "./month-canceled-orders-amount-card";
import { RevenueChart } from "./revenue-char";
import { PopularChart } from "./popular-products-char";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthrevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularChart />
        </div>
      </div>
    </>
  );
}
