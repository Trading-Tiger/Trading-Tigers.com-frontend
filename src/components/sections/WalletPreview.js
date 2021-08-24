import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import  { Carousel } from '3d-react-carousal';
import Image from '../elements/Image';
// import DateCountdown from 'react-date-countdown-timer';
import DateCount from '../layout/partials/DateCount';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}
const slides = [
  <Image  src={require('./../../assets/images/Wallet/Confirm.png').default}/>,
  <Image  src={require('./../../assets/images/Wallet/previewSend.png').default}/>,
  <Image  src={require('./../../assets/images/Wallet/WalletOverview.png').default}/>

]

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
    'features-tiles-inner section-inner pt-0 features-tiles section features-split-inner section-inner has-top-divider',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap illustration-section-03',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'DEFI Wallet V2',
    paragraph: 'This is a preview of the desing from the wallet'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          
            <div className="section-header center-content">
              <div class="container-xs">
                <h2 class="mt-0 mb-16"> Keep you and your crypto safe!</h2>
                <p class="m-0">When using the decentralized web, you no longer have to worry about the safety of your money.</p>
              </div>
            </div>

          <div className={splitClasses}>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  WALLET
                  </div>
                <h3 className="mt-0 mb-12">
                {sectionHeader.title}
                  </h3>
                <p className="m-0">
                {sectionHeader.paragraph}
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  'split-item-image-fill'
                )}
                >
                  <Carousel slides={slides} autoplay={false} interval={1000}/>

              </div>
            </div>

          </div>
            <div class="tiles-wrap">
              <div class="tiles-item reveal-from-right is-revealed" data-reveal-delay="200">
                <div class="tiles-item-inner ">
                  <div class="testimonial-item-content-02 card-gray">
                  <h4 class="text-color-primary">We never have access to your funds or private keys</h4>
                  <p class="testimonial-item-footer text-sm mb-0 has-top-divider">
                  TradingTigers Wallet is a self-custodial wallet.
                  Your private keys are encrypted on your device by your password and are never shared with anyone.
                    </p>
                  </div>
                </div>
              </div>
              <div class="tiles-item reveal-from-right is-revealed" data-reveal-delay="200">
                <div class="tiles-item-inner">
                  <div class="testimonial-item-content-02 card-gray">
                  <h4 class="text-color-primary">Your privacy is respected</h4>
                  <p class="testimonial-item-footer text-sm mb-0 has-top-divider">
                  TradingTigers Wallet does not store any personal information, your account addresses or asset balances.
                  No email address is required.
                    </p>
                  </div>
                </div>
              </div>
              <div class="tiles-item reveal-from-right is-revealed" data-reveal-delay="200">
                <div class="tiles-item-inner">
                  <div class="testimonial-item-content-02 card-gray">
                  <h4 class="text-color-primary">DeFi & DEX Ready</h4>
                  <p class="testimonial-item-footer text-sm mb-0 has-top-divider">
                  Use our built-in DEX to exchange tokens instantly and securely at the best prices, it is connected to Pancakeswap.
                  You also have the possibility to place limit orders in our wallet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <DateCount />

        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;