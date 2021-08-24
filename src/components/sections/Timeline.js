import React from "react"
import { Chrono } from "react-chrono";

const Timeline = () => {
  const items = [{
    title: "2021",
    cardTitle: "Development & Trading Robots",
    cardSubtitle:"Background development and publication",
    cardDetailedText: "During this period, we continue to develop our website and do a lot of background work. In addition, the algorithms of the trading robots are made open source, which can be viewed and used by anyone.",
  },{
    title: "January 2022",
    cardTitle: "DEFI Wallet V2",
    cardSubtitle:"Here the release of the Wallet V2 will take place.",
    cardDetailedText: "In January 2021 the birth of our Wallet V2 will take place. In addition, we will start marketing to our social media community to make them aware of our product.",
  },{
    title: "June 2022",
    cardTitle: "Update the products",
    cardSubtitle:"Updates and more features are added.",
    cardDetailedText: "We will add staking pools and liquidity pools to the Wallet. Also, in the meantime, a lot of changes will be made to the wallet to make it more user-friendly.",
  },];

  return (
    <section className="container">
        <div className="features-split-inner  has-top-divider">
            <div className="py-1 md:py-1">
               {/* Section header */}
               <div className="max-w-3xl mx-auto text-center pb-1">
                    <h3 className="h2 mb-4">
                        Roadmap
                    </h3>
                    </div>
          
                        <Chrono items={items} scrollable={{scrollbar: false}} useReadMore={false} hideControls slideShow mode="VERTICAL_ALTERNATING" theme={{ 
                          primary: "#dca101",
                          secondary: "#000",
                          cardBgColor: "#25282C",
                          cardForeColor: "#9CA9B3",
                          titleColor: "#9CA9B3"
                        }}
                        />
                    
                </div>
        </div>
    </section>
  );
}

export default Timeline;