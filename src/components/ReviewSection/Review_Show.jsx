import { useContext , useEffect, useState } from "react";
import { query, getDocs, collection } from "firebase/firestore";
import getTimeAgo from "../firebase/time";
import { Star, Star_fill } from "../icons/Icon";
import ThemeContext from "../ColorTheme/themeContext";
import { db } from "../firebase/firebaseconfig";
import { a } from "framer-motion/client";

export default function Review_Show({updateReview,setAuthEmail}) {
    const {theme} = useContext(ThemeContext)
    const [review,setReview]=useState([])
    useEffect(()=>{
        async function GetData() {
            const q = query(collection(db, "Reviews"));
            const querySnapshot = await getDocs(q);
            const ReviewsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
            setAuthEmail(ReviewsData)
            
            ReviewsData.sort((a,b)=>b.FeedBack.length-a.FeedBack.length)
            ReviewsData.map((Review,index)=>{
                if(!Review.Date){
                    console.log(Review);
                }
                })
            
            setReview(ReviewsData)
        }
        GetData()
      },[updateReview])
      
    return (
        <div className="my-10 w-[95%] mx-auto ">
            <h1 className="text-3xl text-center md:text-5xl font-bold font-serif md:my-12 w-full my-2">What Our Pupils and Juniors Says</h1>
            <div className="flex overflow-x-auto gap-x-8  ">
                {review.map(({Name,Gmail,Rating,FeedBack,Image,Date,Person},id)=>{
                    let ratingArray=[]
                    for (let i = 1; i <= 5; i++) {
                        if(i<=Rating) ratingArray.push(true)
                        else ratingArray.push(false)
                    }
                return(
                    <div className={`${theme ? 'shadow-md shadow-blue-500 border-gray-500' : 'shadow-lg shadow-slate-600'} py-6 px-2 mr-3 rounded-xl my-2 ml-2`} key={id}>
                        <div className="grid px-3">
                        <div className="rating justify-self-end flex mb-4">
                                {ratingArray.map((item,id)=>{
                                    if(item==true) return <Star_fill key={id} color={"Orange"}/>
                                    else return <Star key={id}/>
                                })}
                            </div>
                            <div className="flex gap-x-4 items-center">
                            <img src={Image} alt="Image" className="w-10 h-10 rounded-[50%] object-cover" />
                            <div className="grid gap-0 content-start items-center">
                                <p className="text-base md:text-xl flex items-center gap-x-1 font-bold font-serif">{Name ==="Muthupandi" ?(<> <span>{Name}</span><img src='images/auth.png' className="w-4 h-4 "/></>):Name}</p>
                                <p className="text-sm md:text-base tracking-tighter pl-1font-semibold">{Person}</p>
                            </div>
                            </div>
                        </div>
                            <p className="w-56 h-56 md:w-80 px-4 my-2 text-justify tracking-tighter mb-2 py-2 overflow-y-auto hover:scrollbar-thin scrollbar-thumb-rounded scrollbar-none  scrollbar-thumb-gray-600 scrollbar-track-gray-200">{FeedBack}</p>
                        <p className="text-right font-bold pr-3 my-1">{getTimeAgo(Date)}</p>
                    </div>
)})}
            </div>
        </div>
    )
};

