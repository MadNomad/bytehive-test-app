import React from "react";
import HomePageLayout from "@/layout/HomePageLayout";
import BookingWidget from "@/components/Widgets/BookingWidget";
import styled from "styled-components";
import RoomAvailable from "@/components/Widgets/RoomAvailable";

const HomePage = () => {
  const toursChartData = [
    { name: "Sold out", value: 120 },
    { name: "Available", value: 66 },
  ];

  return (
    <HomePageLayout title="Overview">
      <Wrapper>
        <Widgets>
          <BookingWidget title="Total Booking" value="95,500" variant="Total" />
          <BookingWidget title="Income" value="352,500$" variant="Sold" />
          <BookingWidget title="Canceled" value="20,388" variant="Canceled" />
        </Widgets>
        <BookingStatWrapper>
          <div className="booking__statistic">
            <div className="statistic__total-incomes">Total Incomes</div>
            <div className="statistic__booked">Booked</div>
            <div className="booking__charts">
              <div className="booking__charts-item">
                <div className="chart__radial"></div>
                <div className="chart__text">
                  <div className="chart__number">9,990</div>
                  <div className="chart__label">Sold</div>
                </div>
              </div>
              <div className="booking__charts-item">
                <div className="chart__radial"></div>
                <div className="chart__text">
                  <div className="chart__number">10,989</div>
                  <div className="chart__label">Pending for payment</div>
                </div>
              </div>
            </div>
          </div>
          <RoomAvailable title="Tours Available" chartData={toursChartData} />
        </BookingStatWrapper>
      </Wrapper>
    </HomePageLayout>
  );
};

const Wrapper = styled("div")({
  display: "flex",
  gap: "24px",
  flexDirection: "column",
  padding: "8px 40px 0",
});

const Widgets = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  gap: "24px",
});

const BookingStatWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export default HomePage;
