import "./Main.scss";
import { Form, Field } from "react-final-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDestinationsRequest,
  fetchHotelsRequest,
  fetchFormInfo,
} from "../slice";
import { useNavigate } from "react-router-dom";
const validate = (values) => {
  const errors = {};

  if (!values.destination) {
    errors.destination = "Choose the destination";
  } else if (values.destination === "Destination") {
    errors.destination = "Choose the destination";
  }

  if (!values.checkIn) {
    errors.checkIn = "Choose date of check in";
  }

  if (!values.checkOut) {
    errors.checkOut = "Choose date of check out";
  }

  if (values.checkIn && values.checkOut && values.checkIn > values.checkOut) {
    errors.checkOut = "Date of check out cant be earlier than date of check in";
  }

  if (!values.adults || values.adults < 1) {
    errors.adults = "Min one adult";
  }

  if (values.children && values.children < 0) {
    errors.children = "It could not be < 0";
  }

  return errors;
};
export default function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.destinations.destinations);
  const onSubmit = async (values) => {
    dispatch(fetchFormInfo(values));
    dispatch(fetchHotelsRequest());
    navigate("/hotels");
  };
  useEffect(() => {
    dispatch(fetchDestinationsRequest());
  }, [dispatch]);
  return (
    <div className="Main">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className="booking-form" onSubmit={handleSubmit}>
            <Field
              name="destination"
              component="select"
              className="input-field"
            >
              <option>Destination</option>
              {destinations && destinations.length > 0 ? (
                destinations.map((dest) => (
                  <option key={dest.id} value={dest.value}>
                    {dest.label}
                  </option>
                ))
              ) : (
                <option>Loading destinations...</option>
              )}
            </Field>
            <Field
              name="checkIn"
              component="input"
              type="date"
              className="input-field"
            />
            <Field
              name="checkOut"
              component="input"
              type="date"
              className="input-field"
            />
            <Field
              name="adults"
              component="input"
              type="number"
              className="input-field"
              min="1"
              placeholder="Adults"
            />
            <Field
              name="children"
              component="input"
              type="number"
              className="input-field"
              min="0"
              placeholder="Children"
            />
            <button type="submit" className="submit-button">
              SUBMIT
            </button>
          </form>
        )}
      />
      <div className="title">
        <div className="text-container">
          <h1 className="text-travel_with">Travel With</h1>
          <h1 className="text-book">Booking</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          molestiae laudantium neque facilis ipsa explicabo reprehenderit
          aperiam mollitia. Obcaecati nihil voluptatem eius aperiam neque,
          nesciunt non deserunt. Temporibus, magnam quas?
        </p>
      </div>
    </div>
  );
}
