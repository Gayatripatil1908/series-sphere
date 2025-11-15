import axios from "axios";
import { SquarePlus,Trash } from "lucide-react";
import {useState,useEffect} from "react";
import toast,{Toaster} from "react-hot-toast";
import {useParams} from "react-router";
import { API_BASE_URL } from "../constants";


function EditSeries() {

    const { id } = useParams;

    const [SeriesDetail,setSeriesDetail] = useState({
        _id:"",
        title:"",
        description:"",
        image:[],
        singer:"",
        composer:"",
        language:"",
        year:null,
        raag:"",
       
    });

    const [newSeriesPoster , setNewSeriesPoster] = useState("");

    const updateSeries = async () => {
        const response = await axios.put(`${API_BASE_URL}/series/${id}`,SeriesDetail);
        toast.success(response.data.message);

        setTimeout(()=> {
            window.location.href = "/";
        }, 1500);
    };

    const loadSeriesDetails = async () => {
        const response = await axios.get(`${API_BASE_URL}/series/${id}`);
        setSeriesDetail(response.data.data);

        console.log(response.data.data);
    };

    useEffect(()=>{
        loadSeriesDetails();
    },[id]);
    return (
     <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md space-y-6">
  <h1 className="text-2xl font-bold text-gray-800 mb-4">Edit Series</h1>

 
  <input
    type="text"
    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Title"
    value={SongDetail.title}
    onChange={(e) => setSeriesDetail({ ...SeriesDetail, title: e.target.value })}
  />

  
  <textarea
    className="w-full border border-gray-300 rounded-md p-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Description"
    value={SeriesDetail.description}
    onChange={(e) =>
      setSeriesDetail({ ...SeriesDetail, description: e.target.value })
    }
  ></textarea>

 
  <div>
    <div className="flex flex-wrap gap-3 mb-3">
      {SeriesDetail.image.map((imgUrl, index) => (
        <div className="relative" key={index}>
          <img
            src={imgUrl}
            className="w-28 h-36 object-cover rounded-md border border-gray-200"
          />
          <Trash
            className="absolute right-2 bottom-2 bg-black/70 text-white p-1 rounded-md cursor-pointer hover:bg-red-600 transition"
            onClick={() => {
              const newImages = SeriesDetail.image.filter((img) => img !== imgUrl);
              setSeriesDetail({ ...SeriesDetail, image: newImages });
            }}
          />
        </div>
      ))}
    </div>

    <div className="flex items-center gap-3">
      <input
        type="text"
        className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Image URL"
        value={newSongPoster}
        onChange={(e) => setNewSeriesPoster(e.target.value)}
      />
      <SquarePlus
        className="text-black cursor-pointer hover:text-blue-800 transition"
        onClick={() => {
          if (!newSeriesPoster) return;
          setSeriesDetail({
            ...SeriesDetail,
            image: [...SeriesDetail.image, newSeriesPoster],
          });
          setNewSeriesPoster("");
        }}
      />
    </div>
  </div>

 
  <input
    type="text"
    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Singer"
    value={SeriesDetail.singer}
    onChange={(e) => setSeriesDetail({ ...SeriesDetail, singer: e.target.value })}
  />

  <input
    type="text"
    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Composer"
    value={SeriesDetail.composer}
    onChange={(e) => setSeriesDetail({ ...SeriesDetail, composer: e.target.value })}
  />

  <input
    type="text"
    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Language"
    value={SeriesDetail.language}
    onChange={(e) => setSeriesDetail({ ...SeriesDetail, language: e.target.value })}
  />

  <input
    type="text"
    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Year"
    value={SeriesDetail.year}
    onChange={(e) => setSeriesDetail({ ...SeriesDetail, year: e.target.value })}
  />

  <input
    type="text"
    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Raag"
    value={SeriesDetail.raag}
    onChange={(e) => setSeriesDetail({ ...SeriesDetail, raag: e.target.value })}
  />

  
  <button
    className="w-full bg-black text-white py-2 rounded-md font-semibold "
    onClick={updateSeries}
  >
    Edit Series
  </button>

            <Toaster />
          </div>
    );
}

export default EditSeries