import React from "react";
import HomePageLayout from "@/layout/HomePageLayout";
import BookingWidget from "@/components/Widgets/BookingWidget";
import styled from "styled-components";
import { TotalIcon } from "@/components/Icons/Widgets/TotalIcon";
import { SoldIcon } from "@/components/Icons/Widgets/SoldIcon";
import { CanceledIcon } from "@/components/Icons/Widgets/CanceledIcon";
import RoomAvailable from "@/components/Charts/RoomAvailable";
import BookingChartWidget from "@/components/Widgets/BookingChartWidget";
import BookedRoomWidget from "@/components/Widgets/BookedRoomWidget";
import TotalIncomeWidget from "@/components/Widgets/TotalIncomeWidget";

const toursChartData = [
  { name: "Available", value: 66 },
  { name: "Sold out", value: 120 },
];

const chartDataSold = {
  name: "Sold",
  value: "9,990",
  percent: 73.9,
  color: "#22C55E",
};

const chartDataPending = {
  name: "Pending for payment",
  value: "10,989",
  percent: 45.6,
  color: "#FFAB00",
};

const chartDataBooked = [
  {
    name: "Pending",
    value: "56,000",
    percent: 70,
    color: "#FFAB00",
  },
  {
    name: "Canceled",
    value: "50,456",
    percent: 44,
    color: "#FF5630",
  },
  {
    name: "SOLD",
    value: "155,670",
    percent: 44.15,
    color: "#22C55E",
  },
];

const chartDataTotalIncomes = {
  percent: 8.2,
  value: 9990,
  graphData: [
    {
      pv: 0,
    },
    {
      pv: 75,
    },
    {
      pv: 70,
    },
    {
      pv: 100,
    },
    {
      pv: 50,
    },
  ],
};

const HomePage = () => {
  return (
    <HomePageLayout title="Overview">
      <PageWrapper>
        <WidgetsWrapper>
          <BookingWidget title="Total Booking" value="95,500" variant="Total" icon={<TotalIcon />} />
          <BookingWidget title="Income" value="352,500$" variant="Sold" icon={<SoldIcon />} />
          <BookingWidget title="Canceled" value="20,388" variant="Canceled" icon={<CanceledIcon />} />
        </WidgetsWrapper>
        <BookingStatWrapper>
          <TotalIncomeWidget title="Total Incomes" data={chartDataTotalIncomes} />
          <BookedRoomWidget title="Booked" data={chartDataBooked} />
        </BookingStatWrapper>
        <BookingChartsWrapper>
          <BookingChartWidget data={chartDataSold} />
          <BookingChartWidget data={chartDataPending} />
        </BookingChartsWrapper>
        <RoomAvailable title="Tours Available" chartData={toursChartData} />
      </PageWrapper>
    </HomePageLayout>
  );
};

const PageWrapper = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "152px 268px 160px",
  gridColumnGap: "24px",
  gridRowGap: "24px",
  padding: "8px 40px 0",
});

const WidgetsWrapper = styled("div")({
  gridArea: "1 / 1 / 2 / 4",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
  height: "152px",
});

const BookingStatWrapper = styled("div")({
  gridArea: "2 / 1 / 3 / 3",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "24px",
});

const BookingChartsWrapper = styled("div")({
  gridArea: "3 / 1 / 4 / 3",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  borderRadius: "16px",
  boxShadow: "0px 0px 2px 0px rgba(145, 158, 171, 0.20), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
});

export default HomePage;
