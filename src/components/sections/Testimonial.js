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
    title: 'How to Use',
    paragraph: 'Here are some instructions with links'
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
                  <h4>Metamask</h4>
                  <p className="text-sm mb-0">
                     How to connect your Metamask to KCC
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <Button tag="a" color="primary" wideMobile href="https://contentking.medium.com/how-to-set-up-kucoin-on-metamast-full-tutorial-176ebe42708">
                    Metamask to KCC
                    </Button>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <h4>How Use Bridge</h4>
                  <p className="text-sm mb-0">
                    <b><a href='https://anyswap.exchange/bridge?inputCurrency=0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c&network=kcs'>Visit the Bridge section of anyswap</a></b>.<br />
                    Moving BNB from BSC to KCC-MAINNET is free!
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                <Button tag="a" color="primary" wideMobile href="https://anyswap.exchange/bridge?inputCurrency=0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c&network=kcs">
                Bridge
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