import "./Header.css";

const Header = ({eurRate,usdRate}) => {
  return (
    <header className="header">
      <h1 className="header_title">Currency Converter</h1>
      <ul className="header_block">
        <li>
          <dl className="header_block_item">
            <dt className="header_block_item-title">USD</dt>
            <dd className="header_block_item-text">{usdRate}</dd>
          </dl>
        </li>
        <li>
          <dl className="header_block_item">
            <dt className="header_block_item-title">EUR</dt>
            <dd className="header_block_item-text">{eurRate}</dd>
          </dl>
        </li>
      </ul>
    </header>
  );
};

export default Header;
