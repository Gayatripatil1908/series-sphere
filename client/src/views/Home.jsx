
import axios from "axios";
import {Search} from "lucide-react";
import {useEffect,useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import SongCard from "../components/SongCard";
import { API_BASE_URL } from "./../constants.js";
import {Link} from "react-router";




function Home() {

    const [songs,setSongs] = useState([]);
    const [search,setSearch] = useState("");
    const [error,setError] = useState("");

    const loadSeries = async () => {
        const response = await axios.get(`${API_BASE_URL}/series`);
        setSeries(response.data.data);
    };

    useEffect(()=> {
        loadSeries();
    }, []);

    const searchSeries = async () => {
        toast.loading("Searching...",{id: "Searching" });

        try{
        const response = await axios.get(`${API_BASE_URL}/series/search?q=${search}`);
        toast.dismiss();
        setSeries(response.data.data);
        setError("");
        } catch(error) {
            console.log(error);
            toast.dismiss();
            toast.error(error.response.data.message, {id:"error"});
            setSeries([]);
            setError(error.response.data.message);
        }
    };

    useEffect(()=>{searchSeries();
     },[search]);


    return (
        <div>
            <div className="border border-black rounded-full my-4 w-fit mx-auto px-4 py-2">
                <input 
                type="text"
                placeholder="search Series..."
                className="border-none w-[300px] focus:outline-none" 
                value={search} 
                onChange={(e)=> setSearch(e.target.value)}/>
                <Search className="inline-block" />
            </div>

            {error ? <div className="text-center text-3xl mt-4">{error}</div>:null}

        <div className="flex flex-wrap bg-black text-white m-5">
            {songs.map((seriesObj)=>{
            const {_id, title,image,singer,loadSongs} = seriesObj;

            return (
            <SeriesCard 
            _id={_id}
            key={_id}
            title={title}
            image={image}
            singer={singer}
            loadSongs={loadSongs}
            /> )
        
       } )}
       </div>
       <div>
          <Toaster position="top-right"/>
           </div> 
           <Link to="{/new}"  className="w-full bg-white text-black py-2 px-3 mt-2 rounded-md font-semibold">Add Series</Link>
      </div>
        
      
    
     )
    
};
export default Home
