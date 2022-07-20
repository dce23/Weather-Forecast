import "./forecast.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDate();
  const forecastDays = weekDays
    .slice(dayInWeek, weekDays.length)
    .concat(weekDays.slice(0, dayInWeek));

  //console.log(forecastDays);

  return (
    <>
      <label htmlFor="" className="title">
        Daily
      </label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, value) => (
          <AccordionItem key={value}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label htmlFor="" className="day">
                    {forecastDays[value]}
                  </label>
                  <label htmlFor="" className="description">
                    {item.weather[0].description}
                  </label>
                  <label htmlFor="" className="min-max">
                    {Math.round(item.main.temp_min)}°F /
                    {Math.round(item.main.temp_max)}°F
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label htmlFor="">Pressure</label>
                  <label htmlFor="">{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Humidity</label>
                  <label htmlFor="">{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Clouds</label>
                  <label htmlFor="">{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Wind speed:</label>
                  <label htmlFor="">{item.wind.speed} mph</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Sea level:</label>
                  <label htmlFor="">{item.main.sea_level} mi</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Feels like:</label>
                  <label htmlFor="">{item.main.feels_like}°F</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
