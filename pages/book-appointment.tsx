import Meta from "../component/Meta";
import ServiceCard from "../component/ServiceCard";
import styles from "../styles/About.module.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Button from "../component/Button";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useEffect } from "react";

declare const window: any;

const BookAppointment = () => {
  useEffect(() => {}, []);
  return (
    <div className="wrapper">
      <Meta title="Book Appointment" />
      <div className={styles["home-bg-cover"]}>
        <div className="overlay"></div>
        <div className="container py-4" style={{ zIndex: 1 }}>
          <div className="row mb-3">
            <div className="col-md-12">
              <h1 className="title text-white text-center">Book Appointment</h1>
            </div>
          </div>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="emailAddress">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailAddress"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="serviceType">Type of Service</label>
                  <select className="form-control" id="serviceMode">
                    <option value="">Choose One</option>
                    <option value="Classic lash set">
                      Classic lash set - NGN 23,500{" "}
                    </option>
                    <option value="Hybrid Lash Set">
                      Hybrid Lash Set - NGN 25,000
                    </option>
                    <option value="Volume lash set">
                      Volume lash set - NGN 30,000
                    </option>
                    <option value="Natural lash set">
                      Natural lash set - NGN 28,000
                    </option>
                    <option value="Wispy Set">Wispy Set - NGN 32,000</option>
                    <option value="Mega Volume">
                      Mega Volume - NGN 30,000
                    </option>
                    <option value="Russian Volume">
                      Russian Volume - NGN 33,000
                    </option>
                    <option value="Double Layer Lash">
                      Double Layer Lash - NGN 35,000
                    </option>
                    <option value="Bottom Lash">Bottom Lash - NGN 6,000</option>
                    <option value="3D Lashes">3D Lashes - NGN 27,000</option>
                    <option value="Lash Removal">
                      Lash Removal - NGN 4,000
                    </option>
                    <option value="UK fluffy style volume">
                      UK fluffy style volume - NGN 37,000
                    </option>
                    <option value="UK flirty set volume">
                      UK flirty set volume - NGN 39,0000
                    </option>
                    <option value="UK baby doll lash style">
                      UK baby doll lash style - NGN 45,000
                    </option>
                    <option value="USA fluffy/flirty lash style">
                      USA fluffy/flirty lash style - NGN 43,000
                    </option>
                    <option value="USA luxury lash style">
                      USA luxury lash style - NGN 45,000
                    </option>
                    <option value="Eyebrow service microbladding">
                      Eyebrow service microbladding - NGN 70,000
                    </option>
                    <option value="Eyebrows threading">
                      Eyebrows threading - NGN 4,000
                    </option>
                    <option value="Micro Shading">
                      Micro Shading - NGN 80,000
                    </option>
                    <option value="Combobrow">Combobrow - NGN 90,000</option>
                    <option value="Eyebrows shaping">
                      Eyebrows shaping - NGN 20,000
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="serviceMode">Service Mode</label>
                  <select className="form-control" id="datetimepicker3">
                    <option value="">Choose One</option>
                    <option value="Home Service">Home Service</option>
                    <option value="Shop Visit">Shop Visit</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="datePick">Pick a Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="datePick"
                    placeholder="Pick Date"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="timeSelect">Select Time</label>

                  <select className="form-control" id="timeSelect">
                    <option value="">Select Time</option>
                    <option value="9 AM">9 AM</option>
                    <option value="10 AM">10 AM</option>
                    <option value="11 AM">11 AM</option>
                    <option value="12 PM">12 PM</option>
                    <option value="1 PM">1 PM</option>
                    <option value="2 PM">2 PM</option>
                    <option value="3 PM">3 PM</option>
                    <option value="4 PM">4 PM</option>
                    <option value="5 PM">5 PM</option>
                    <option value="6 PM">6 PM</option>
                    <option value="7 PM">7 PM</option>
                    <option value="8 PM">8 PM</option>
                    <option value="9 PM">9 PM</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row py-5">
              <div className="col-md-12">
                <Button text="Book Appointment" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
