import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to={{ pathname: "https://t.me/TradingTigersNews" }} target="_blank" rel="noreferrer" >Telegram</Link>
        </li>
        <li>
          <Link to={{ pathname: "https://twitter.com/trading_tigers" }}  target="_blank" rel="noreferrer" >Twitter</Link>
        </li>
        <li>
          <Link to={{ pathname: "https://github.com/Trading-Tiger" }} target="_blank" rel="noreferrer" >Github</Link>
        </li>
        <li>
          <Link to={{ pathname: "https://docs.trading-tigers.com" }} target="_blank" rel="noreferrer" >Gitbook</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;