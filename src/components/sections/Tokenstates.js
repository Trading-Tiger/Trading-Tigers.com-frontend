// import Image from '../elements/Image';
import { useState, useEffect } from 'react';
import Button from '../elements/Button';



const List = (props) => {
  const { data } = props;
  if (!data || data.length === 0) return <p>Error</p>;
    return (<div className="text-color-primary text-shadow-grey">{data.json} {data.subfix}</div>);
      }

function IsLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (<div className="text-color-primary text-shadow-grey">Loading</div>);
  };
}

const UsePrice = () => {
    const [advice, setAdvice] = useState({loading: false, json : null, subfix: "$" });
    const Loading = IsLoading(List)
    useEffect(() => {
      setAdvice({ loading: true})
        const url = "https://api.trading-tigers.com/PancakeSwap/tokenprice/0x34FaA80FEC0233e045eD4737cc152a71e490e2E3";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setAdvice({loading: false, json: parseFloat(json.USDprice).toFixed(3), subfix: "$"});
            } catch (error) {
                console.log("error", error);
            }
        };
  
        fetchData();
    }, [setAdvice]);
    return (<Loading isLoading={advice.loading} data={advice}/>)
  };

  const UseAPiStatus = () => {
    const [advice, setAdvice] = useState({loading: false, json : null, subfix: "" });
    const Loading = IsLoading(List)
  
    useEffect(() => {
      setAdvice({ loading: true})
        const url = "https://api.trading-tigers.com/status/";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setAdvice({loading: false, json: json.status, subfix: ""});
            } catch (error) {
                console.log("error", error);
            }
        };
  
        fetchData();
    }, [setAdvice]);
    return (<Loading isLoading={advice.loading} data={advice}/>)
  };

//const UseBurnedTokens = () => {
//    const [advice, setAdvice] = useState({loading: false, json : null, subfix: "TIGS" });
//    const Loading = IsLoading(List)
//
//    useEffect(() => {
//      setAdvice({ loading: true})
//        const url = "https://api.trading-tigers.com/CirculatingSupply/0x34FaA80FEC0233e045eD4737cc152a71e490e2E3";
//        const fetchData = async () => {
//            try {
//                const response = await fetch(url);
//                const json = await response.json();
//                setAdvice({loading: false, json: json.Burned_Tokens,subfix: "TIGS"});
//            } catch (error) {
//                console.log("error", error);
//            }
//        };
//  
//        fetchData();
//    }, []);
//  
//    return (<Loading isLoading={advice.loading} data={advice}/>)
//  };


const UseCirculatingSupply = () => {
    const [advice, setAdvice] = useState({loading: false, json : null, subfix: "TIGS" });
    const Loading = IsLoading(List)
    useEffect(() => {
      setAdvice({ loading: true})
        const url = "https://api.trading-tigers.com/CirculatingSupply/0x34FaA80FEC0233e045eD4737cc152a71e490e2E3";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setAdvice({loading: false, json: json.CirculatingSupply,subfix: "TIGS"});
            } catch (error) {
                console.log("error", error);
            }
        };
  
        fetchData();
    }, []);
  
    return (<Loading isLoading={advice.loading} data={advice}/>)
  };

const UseLiquidity = () => {
    const [advice, setAdvice] = useState({loading: false, json : null, subfix: "$" });
    const Loading = IsLoading(List)
    
    useEffect(() => {
      setAdvice({ loading: true})
        const url = "https://api.trading-tigers.com/PancakeSwap/BNBliquidity/0x34FaA80FEC0233e045eD4737cc152a71e490e2E3";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setAdvice({loading: false, json:parseFloat(json.LiquidityUSD).toFixed(0), subfix: "$"});
            } catch (error) {
                console.log("error", error);
            }
        };
  
        fetchData();
    }, []);
  
    return (<Loading isLoading={advice.loading} data={advice}/>)
  };


function Tokenstates() {
    return (
      <section className="container illustration-section-02">
  
        <div className="max-w-6xl mx-auto px-4 sm:px-6 features-split-inner section-inner has-top-divider">
          <div className="py-2 md:py-2 text-center">

              {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-1">
            <h3 className="h2 mb-4">
                <span className="text-color-primary">TIGS</span> Live Stats</h3>
                <p>Here are some live stats</p>
          </div>
            
            {/* Items */}
            <div className="max-w-sm md:max-w-4xl text-center mx-auto grid gap-2 grid-cols-4 md:grid-cols-4">
                
           {/* Item */}
              <div className="flex items-center justify-center py-4 col-span-4 md:col-auto">
                  <h4 className="gray-text card-gray">Api Status:<UseAPiStatus /></h4>
                
              </div>

            {/* Item */}
                <div className="flex items-center text-center justify-center py-4 col-span-4 md:col-auto">
                  
                  <h4 className="gray-text card-gray" >TIGS Price:<UsePrice /></h4>
                </div>

           {/* Item */}
              <div className="flex items-center text-center justify-center py-4 col-span-4 md:col-auto">

              <h4 className="gray-text card-gray">Max Supply:<UseCirculatingSupply /></h4>
              </div>
            
            {/* Item */}
              <div className="flex items-center text-center justify-center py-4 col-span-4 md:col-auto">
                  
              <h4 className="gray-text card-gray">Liquidity:<UseLiquidity /></h4>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center pb-1">
                <Button  className="box-shadow-grey" tag="a" color="primary" wideMobile href="https://poocoin.app/tokens/0x34faa80fec0233e045ed4737cc152a71e490e2e3">
                Visit Chart
                </Button>
            </div>
                
              
          </div>
        </div>
      </section>
    );
  }
  
  export default Tokenstates;