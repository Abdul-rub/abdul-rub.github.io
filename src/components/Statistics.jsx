import React from "react";
const Statistics = () => {

  return (
    <div 
      style={{ height: "auto" ,border:"1px solid red"}}
      name="statistics"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen experience mbottom ptop"
    >
        
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p
            style={{ textShadow:  "0 0 5px #040404, 0 0 15px #4a53cf, 0 0 20px #040404, 0 0 40px #040404, 0 0 60px #3bb6c4, 0 0 10px #4a53cf, 0 0 98px #040404" }}

            className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Statistics
          </p>
          <p className="py-6">These are some of statistics graphs to determine my contribution and knowledge in this digital world.</p>
        </div>
        <div>
          <img alt="Abdul's Activity Graph" src="https://activity-graph.herokuapp.com/graph?username=Abdul-rub&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true" />
        </div>

      </div>
    </div>
  );
};

export default Statistics;