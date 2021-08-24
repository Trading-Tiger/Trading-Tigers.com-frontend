import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Button from '../elements/Button';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section illustration-section-01 ',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Products',
    paragraph: 'Here you can find products that have already been or will be released.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <h4 className='text-color-primary'>DeFi Wallet V2</h4>
                    <p className="text-sm mb-0">
                      We are currently working on the V2 Wallet, which will be released soon, a user-friendly Binance smart chain wallet that allows them to easily exchange their tokens.
                      TIGS holders can use features like LimitOrders on Pancakeswap, for which we charge a fee that is paid in TIGS.
                    </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <Button tag="a" target="_blank" rel="noreferrer" color="primary" wideMobile href="https://docs.trading-tigers.com/wallet/informations">
                    More Infos
                    </Button>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <h4 className='text-color-primary'>Trading Robots</h4>
                    <p className="text-sm mb-0">
                    We have developed trading algorithms that you can use to trade e.g. on Binance features.
                    These algorithms are open source on Github and developed in python.
                    </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                <Button tag="a" target="_blank" rel="noreferrer" color="primary" wideMobile href="http://github.com/trading-Tiger">
                View GitHub
                </Button>
                </div>
              </div>
            </div> 

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <h4 className='text-color-primary'>Public API Interface</h4>
                    <p className="text-sm mb-0">
                    we provide an API interface with which you can query the real-time prices of various tokens in seconds. You are welcome to use it!
                    </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                <Button  target="_blank" rel="noreferrer" tag="a" color="primary" wideMobile href="https://api.trading-tigers.com/docs">
                View API
                </Button>
                </div>
              </div>
            </div> 

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;