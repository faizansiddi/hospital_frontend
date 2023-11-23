import React from 'react'
import "../Home/Home.css"
import first from "../../ALLImages/first.png"
import second from "../../ALLImages/second.png"
import third from "../../ALLImages/third.png"
import four from "../../ALLImages/four.png"
import fifth from "../../ALLImages/fifth.png"
import sixth from "../../ALLImages/sixth.png"
import ambulance from "../../ALLImages/ambulance.png"
import eight from "../../ALLImages/eight.jpg"
import nine from "../../ALLImages/nine.png"
import tenth from "../../ALLImages/tenth.png"
import eveven from "../../ALLImages/eveven.jpg"
import twelve from "../../ALLImages/twelve.jpg"
import card from "../../ALLImages/card.png"
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="">

      <div className="">
        <div className="row">
          {/* <div class="image">
		<img class="image__img" src={first} alt="Bricks"/>
		<div class="image__overlay ">
			<div class="image__title">Bricks</div>
			
		</div>
	</div> */}
          <div className="col-lg-12 col-md-4 order-0">

            <div className="row">
              <div className="col-lg-2 col-md-12 col-6 mb-4">
                <div className="card">

                  <div class="image__overlay ">
                    <div class="image__title">Bricks sdsdssfs fs</div>

                  </div>
                  <Link href="/admin-deshboard"><img
                    src={first}
                    alt="chart success"
                    className="rounded" height="150" width="150" /></Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 col-6 mb-4">
                <div className="card">
                  <Link href="hospital.html"><img
                    src={second}
                    alt="chart success"
                    className="rounded" height="150" width="150" /></Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 col-6 mb-4">
                <div className="card">
                  <Link href="student-dashboard.html"><img
                    src={third}
                    alt="chart success"
                    className="rounded" height="150" width="150" /></Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 col-6 mb-4">
                <div className="card">
                  <Link href="account-dashboard.html"><img
                    src={four}
                    alt="chart success"
                    className="rounded" height="150" width="150" /></Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 col-6 mb-4">
                <div className="card">
                  <Link href="receptionist-dashboard.html"><img
                    src={fifth}
                    alt="chart success"
                    className="rounded" height="150" width="150" /></Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 col-6 mb-4">
                <div className="card">
                  <Link href="library-dashboard.html"><img
                    src={sixth}
                    alt="chart success"
                    className="rounded" height="150" width="150" /></Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 col-6 mb-4">
                <div className="card">
                  <Link to="/reception-dashboard"><img
                    src={ambulance}
                    alt="chart success"
                    className="rounded" height="150" width="150" /></Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 col-6 mb-4">
                <div className="card">
                <Link to="/reception-dashboard">
                <div class="image__overlay ">
                    <div class="image__title">Reception </div>

                  </div>
                  <img
                    src={eight}
                    alt="chart success"
                    className="rounded" height="150" width="150" /></Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 col-6 mb-4">
                <div className="card">
                <Link to="/billing-dashboard">
                <div class="image__overlay ">
                    <div class="image__title">Billing </div>

                  </div>
                  <img
                    src={nine}
                    alt="chart success"
                    className="rounded" height="150" width="150" /></Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 col-6 mb-4">
                <div className="card">
                <Link to="/doctor-dashboard">
                <div class="image__overlay ">
                    <div class="image__title">Doctor</div>

                  </div>
               <img
                    src={tenth}
                    alt="chart success"
                    className="rounded" height="150" width="150" /></Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 col-6 mb-4">
                <div className="card">
                  <Link href="canteen-dashboard.html"><img
                    src={eveven}
                    alt="chart success"
                    className="rounded" height="150" width="150" /></Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 col-6 mb-4">
                <div className="card">
                <div class="image__overlay ">
                    <div class="image__title">Bricks sdsdssfs fs</div>

                  </div>
                  <Link href="hr-dashboard.html"><img
                    src={twelve}
                    alt="chart success"
                    className="rounded" height="150" width="150" /></Link>
                </div>
              </div>

              <div className="col-lg-2 col-md-12 col-6 mb-6">
                <div className="card">

                  <Link href="hr-dashboard.html"><img
                    src={card}
                    alt="chart success"
                    className="rounded" height="150" width="150" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-backdrop fade"></div>
    </div>
  )
}

export default Home
