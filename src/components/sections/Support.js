import React from 'react';
import Image from '../elements/Image';

function Support() {
  return (
    <section className="container">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 features-split-inner section-inner has-top-divider">
        <div className="py-10 md:py-1 ">
           {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-1">
            <div className="mb-4">
            Trading-Tigers Projects works with following products</div>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-2 md:grid-cols-4">

            {/* Item */}
            <div className="flex items-center gray-text justify-center py-2 col-span-2 md:col-auto">
            <a target="_blank" rel="noreferrer" href='https://reactjs.org/' >
            <Image
                className="filter-gray"
                src={require('./../../assets/images/workwith/react.png').default}
                alt="Hero"
                width={300}
                height={100} />
                </a>
            </div>

            <div className="flex items-center gray-text justify-center py-2 col-span-2 md:col-auto">
            <a target="_blank" rel="noreferrer" href='https://www.python.org/' >
            <Image
                className="filter-gray"
                src={require('./../../assets/images/workwith/python.svg').default}
                alt="Hero"
                width={300}
                height={100} />
                </a>
            </div>
            {/* Item */}
            <div className="flex items-center gray-text justify-center py-2 col-span-2 md:col-auto">
            <a target="_blank" rel="noreferrer" href='https://www.binance.org/en/smartChain' >
            <Image
                className="filter-gray"
                src={require('./../../assets/images/workwith/binance-smart-chain-logo.png').default}
                alt="Hero"
                width={200}
                height={170} />
                </a>
            </div>

            {/* Item */}
            <div className="flex items-center gray-text justify-center py-2 col-span-2 md:col-auto">
            <a target="_blank" rel="noreferrer" href='https://fastapi.tiangolo.com/' >
              <Image
                className="filter-gray"
                src={require('./../../assets/images/workwith/fastapi.png').default}
                alt="Hero"
                width={400}
                height={100} />
                </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;