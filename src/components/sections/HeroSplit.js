import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner ',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );


  return (
    <section
      {...props}
      className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
              <Image
                  src={require('./../../assets/images/TradingTigers-TIGS-.png').default}
                  alt="Features split"
                  width={528}
                  height={396} />
                <div className="max-w-3xl mx-auto text-center pb-1">
                  <p className="m-0 ">
                  Your chance to make it easier and more decentralized.
                  </p><br />
                  
                <ButtonGroup >
                  <Button className="box-shadow-grey" target="_blank" rel="noreferrer" tag="a" color="dark" wideMobile href="https://github.com/trading-tiger">
                    View Github
                    </Button>
                    <Button className="box-shadow-grey" target="_blank" rel="noreferrer" tag="a" color="disabled" wideMobile href="https://api.trading-tigers.com/docs">
                    Visit APi
                    </Button>
                    <Button  className="box-shadow-grey" target="_blank" rel="noreferrer" tag="a" color="primary" wideMobile href="https://swap.trading-tigers.com/">
                    Visit DApp
                    </Button>
                </ButtonGroup>
                
              </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Logo-Tiger.png').default}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;