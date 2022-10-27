import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Data = ({ data }) => {
  const today = new Date();
  const temp = (data.main.temp / 10).toFixed(1);
  const tempMin = (data.main.temp_min / 10).toFixed(1);
  const tempMax = (data.main.temp_max / 10).toFixed(1);
  const flsLike = (data.main.feels_like / 10).toFixed(1);
  const position = [data.coord.lat, data.coord.lon];

  return (
    <div className="py-10 h-full" key={data.id}>
      {data.weather.map((item) => (
        <div
          className="bg-slate-800 p-5 rounded grid lg:grid-cols-3"
          key={data.id}
        >
          <div className="w-full p-5 mt-0">
            <h4 className="text-white">
              {data.name}, {data.sys.country},{" "}
              {today.getFullYear() +
                "-" +
                (today.getMonth() + 1) +
                "-" +
                today.getDate()}
              .
            </h4>
            <h1 className="text-white font-bold text-7xl">{temp}°C</h1>
            <div className="mt-2 flex">
              <p className="text-slate-400 mr-5 font-semibold">
                Lat: {data.coord.lat}
              </p>
              <p className="text-slate-400 font-semibold">
                Lon: {data.coord.lon}
              </p>
            </div>
          </div>
          <div className="w-full p-5">
            <h4 className="text-white">Feels Like:</h4>
            <h1 className="text-white font-bold text-7xl">{flsLike}°C</h1>
            <p className="text-slate-400 mt-2 font-semibold">
              {item.description}
            </p>
          </div>
          <div className="w-full p-5">
            <h4 className="text-slate-400 font-semibold">
              Humidity: {data.main.humidity}%
            </h4>
            <h4 className="text-slate-400 font-semibold">
              Visibility: {data.visibility / 1000} km
            </h4>
            <h4 className="text-slate-400 font-semibold">
              Wind Speed: {data.wind.speed} m/s
            </h4>
            <h4 className="text-slate-400 font-semibold">
              Temp. Min: {tempMin}°C
            </h4>
            <h4 className="text-slate-400 font-semibold">
              Temp. Max: {tempMax}°C
            </h4>
          </div>
        </div>
      ))}
      <div className="mt-5 p-20 h-full w-full">
        <MapContainer center={position} zoom={10}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Data;
