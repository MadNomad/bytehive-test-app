import React from "react";
import Head from "next/head";
import HomePageLayout from "@/layout/HomePageLayout";
import BookingWidget from "@/components/Widgets/BookingWidget";
import styled from "styled-components";

const HomePage = () => {
  return (
    <HomePageLayout title="Overview">
      <Wrapper>
        <Widgets>
          <BookingWidget title="Total Booking" value="95,500" variant="Total" />
          <BookingWidget title="Income" value="352,500$" variant="Sold" />
          <BookingWidget title="Canceled" value="20,388" variant="Canceled" />
        </Widgets>
        <div className="booking__wrapper">
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
          <div className="tours__statistic">Tours Available</div>
        </div>
      </Wrapper>
    </HomePageLayout>
  );
};

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "8px 40px 0",
});

const Widgets = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  gap: "24px",
});

export default HomePage;
