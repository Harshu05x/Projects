import { useEffect, useState } from "react";
import useCurrencyInfo from "./Hooks/useCurrencyInfo"
import InputBox from "./components/InputBox";
import bgImg from './assets/bg-img.jpg'  

function App() {

    const [data,setData] = useState({
        formamount:0,
        toamount:0,
        fromcurrencyType:"usd",
        tocurrencyType:"inr"
    })


    const {currencyInfo,setCurrencyInfo} = useCurrencyInfo(data.fromcurrencyType);
    
    function convert(){
        let conversionRate = currencyInfo[`${data.tocurrencyType}`];
        let result = (data.formamount * conversionRate).toPrecision(5);
        
        setData( prev => {
            return {
                ...prev,
                toamount: result
            }
        })
    }

    function swap(){
        setData( prev => {
            return {
                formamount: prev.toamount,
                toamount: prev.formamount,
                fromcurrencyType: prev.tocurrencyType,
                tocurrencyType: prev.fromcurrencyType
            }
        })
    }
  return (
    <div className={`w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-y-4`}
    style={
        {
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center',
        }
    }>
        <div className=" text-4xl text-black font-semibold bg-white/60 w-4/12 text-center py-4 rounded-lg">
            Currency Converter
        </div>
        <div className=" w-5/12 flex flex-col justify-center items-center backdrop-blur-sm bg-white/30 p-4 rounded-lg border">
            <InputBox lable={'form'} data={data} setData={setData}/>
            <div className=" relative w-full h-0.5">
                <button className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-1
                 hover:bg-blue-700 transition-all duration-200"
                onClick={swap
                }
                >swap</button>
            </div>
            <InputBox lable={'to'} data={data} setData={setData}/>
            <div className=" flex w-full gap-x-2">
                <button onClick={convert}
                    className=" w-10/12 bg-blue-600 text-white px-4 py-3 rounded-lg text-lg mt-2
                    hover:bg-blue-700 transition-all duration-200">
                    Convert {data.fromcurrencyType.toUpperCase()} to {data.tocurrencyType.toUpperCase()}
                </button>

                <button onClick={() => setData({
                    formamount:0,
                    toamount:0,
                    fromcurrencyType:"usd",
                    tocurrencyType:"inr"
                })}
                    className=" w-10/12 bg-blue-600 text-white px-4 py-3 rounded-lg text-lg mt-2
                    hover:bg-blue-700 transition-all duration-200">
                    Reset
                </button>
            </div>
        </div>
    </div>
  )
}

export default App
