import "../assets/display.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Display({ data }) {
  return (
    <div className="imageWithDetails">
      <div>
        <img src={data.imageUrl} className="images"></img>
      </div>
      <div className="details">
          <div className="diaplay">
          <LocationOnIcon/>
          <span className="location">
        {data.location}
        </span><span>
          <a href={data.googleMapsUrl}>View on Google Map</a>
        </span>
          </div>
      
       
        
        <p className="title">{data.title}</p>
        <p>
          {data.startDate} - {data.endDate}
        </p>
        <p className="description">{data.description}</p>
      </div>
    </div>
  );
}