import axios from "axios";
import {useEffect,useState} from "react"
import { useParams } from "react-router"
import { API_BASE_URL } from "../constants";
import {Link} from "react-router";


function SongDetails() {

    const { id } = useParams();
    const [SeriesDetail,setSeriesDetail] = useState({
        _id: "",
        title:"",
        description:"",
        image:[],
        singer:"",
        composer:"",
        language:"",
        year:null,
        raag:""
    });

    const loadSeriesDetails = async () => {
        const response = await axios.get(`${API_BASE_URL}/series/${id}`);
        setSeriesDetail(response.data.data);


        console.log(response.data.data);
    };

    useEffect(()=>{
        loadSeriesDetails();
    }, [id])
    return (<div>SeriesDetails : {id}
   <div className="min-h-screen px-4 py-8">
  <div className="max-w-4xl mx-auto bg-black text-white shadow-md rounded-lg p-6">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
      <img
        src={SeriesDetail.image}
        alt={SeriesDetail.title}
        className="w-64 h-80 object-cover rounded-md shadow-sm"
      />
      <div className="text-center md:text-left space-y-3">
        <h1 className="text-2xl font-bold text-white">{SeriesDetail.title}</h1>
        <h2 className="text-lg text-white">Year : {SeriesDetail.year}</h2>
          <h2 className="text-lg text-white">Composer : {SeriesDetail.composer}</h2>
            <h2 className="text-lg text-white">Raag : {SeriesDetail.raag}</h2>
        <p className="text-white ">Description: {SeriesDetail.description}</p>
        <Link to={`/series/edit/${SongDetail._id}`}  className="w-full bg-white text-black py-2 px-3 mt-2 rounded-md font-semibold">Edit</Link>
      </div>
    </div>
  </div>
</div>
        </div>
       );
    
}

export default SeriesDetails;