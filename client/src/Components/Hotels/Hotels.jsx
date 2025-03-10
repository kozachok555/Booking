import "./Hotels.scss";
import { useSelector } from "react-redux";
import reactImg from "../../assets/react.svg";
export default function Hotels() {
  const hotels = useSelector((state) => state.destinations.hotels);
  return (
    <div className="Hotels">
      HOTELS
      <div className="hotel-box">
        {hotels && hotels.length > 0 ? (
          hotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <img src={reactImg} alt="hotel" className="img"/>
              <div className="info-box">
                <h4 className="card-name">{hotel.name}</h4>
                <div className="card-desc">
                  <p>Address: {hotel.address}</p>
                  <p>City: {hotel.city}</p>
                  <p>Rating:{hotel.hotel_rating}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Nothing here :(</p>
        )}
      </div>
    </div>
  );
}
