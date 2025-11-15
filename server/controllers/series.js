import Series from "../models/Series.js";

const getSeries = async(req,res)=>{
    const series = await Series.find();

    res.status(201).json({success:true,
        data:series,
        message:"All Series fetched"
    })
};

 const postSeries = async(req,res) => {
    console.log(req.body);
    const {
         title,
        
        image,
        description,
        singer,
        composer,
        language,
        year,
        raag
    } = req.body;

    try{

    const newSeries = new Series({
         title,
        
        image,
        description,
        singer,
        composer,
        language,
        year,
        raag
    });

    const savedSeries = await newSeries.save();

    res.status(201).json({
        success:true,
        data:savedSeries,
        message:"Series added successfully"
    });
}
catch(error) {
    res.status(400).json({
        success:false,
        data:null,
        message:"Error adding series:"+error.message,
    });
};
    
}

const getSeriesById = async(req,res)=>{
    const {id} = req.params;
    try{
    const series = await Series.findById(id);

    if(song) {
        return res.json({
         success:true,
         data:song,
         message:"Series fetched successfully"
        });
    }
    else {
        return res.status(404).json({
            success:false,
            data:null,
            message:"Series not found"
        });
    }
} catch(error) {
    res.status(400).json({
        success:true,
        data:null,
        message:"invalid song id"
    })
}
};

const getSeriesSearch = async (req,res)=>{
    const { q } =req.query;

    const songs = await Series.find({
        title: {$regex: q, $options: "i"},
    });

    if (series.length === 0) {
        return res.status(404).json({
            success:false,
            data:[],
            message:"No Series found matching your search"
        });
    }
    else {
        return res.json({
            success:true,
            data:series,
            message:"series fetched successfully",
        })
    }
};
const putSeriesById = async(req,res)=>{
    const {id} = req.params;

      const {
          title,
          image,
        description,
        singer,
        composer,
        language,
        year,
        raag
    } = req.body;

     await Series.updateOne({_id:id},
        {
             title,
             image,
        description,
        singer,
        composer,
        language,
        year,
        raag
    }
);
const updatedSeries = await Series.findById(id);

return res.json({
    success:true,
    data:updatedSeries,
    message:"series updated successfully"
});
};
const putTitleById = async (req,res)=>{
    const {id} =req.params;

    const {title} = req.body;
    await Series.updateOne({_id:id},{title});

    const updatedSeries= await Series.findById(id);
    return res.json({
        success:true,
        data:updatedSeries,
        message:"series title updated successfully",
    })
};
const deleteSeriesById = async(req,res)=> {
    const {id} = req.params;
    await Series.deleteOne({_id:id});
    return res.json({
        success:true,
        data:null,
        message:"Series deleted successfully"
    })
}

export { getSeries,postSeries,getSeriesById,getSeriesSearch,putSeriesById,putTitleById,deleteSeriesById }