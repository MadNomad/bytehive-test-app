import React from "react";
import Head from "next/head";
import HomePageLayout from "@/layout/HomePageLayout";

const HomePage = () => {
  return (
    <HomePageLayout title='Overview'>
      <div className='content'>
        <div className='widgets'>
          <div className='widget'>
            <div className='widget__text'>
              <div className='widget__number'>95,500</div>
              <div className='widget__lable'>Total Booking</div>
            </div>
            <div className='widget__icon'></div>
          </div>
          <div className='widget'>
            <div className='widget__text'>
              <div className='widget__number'>352,500$</div>
              <div className='widget__lable'>Income</div>
            </div>
            <div className='widget__icon'></div>
          </div>
          <div className='widget'>
            <div className='widget__text'>
              <div className='widget__number'>20,388</div>
              <div className='widget__lable'>Canceled</div>
            </div>
            <div className='widget__icon'></div>
          </div>
        </div>
        <div className='booking__wrapper'>
          <div className='booking__statistic'>
            <div className='statistic__total-incomes'>Total Incomes</div>
            <div className='statistic__booked'>Booked</div>
            <div className='booking__charts'>
              <div className='booking__charts-item'>
                <div className='chart__radial'></div>
                <div className='chart__text'>
                  <div className='chart__number'>9,990</div>
                  <div className='chart__label'>Sold</div>
                </div>
              </div>
              <div className='booking__charts-item'>
                <div className='chart__radial'></div>
                <div className='chart__text'>
                  <div className='chart__number'>10,989</div>
                  <div className='chart__label'>Pending for payment</div>
                </div>
              </div>
            </div>
          </div>
          <div className='tours__statistic'>Tours Available</div>
        </div>
      </div>
    </HomePageLayout>
  );
};

export default HomePage;
