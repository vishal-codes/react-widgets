import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="ui  pointing menu">
            <Link href="/" className="item">
                Accordion
            </Link>
            <Link href="/list" className="item">
                Search
            </Link>
            <Link href="/dropdown" className="item">
                Dropdown
            </Link>
            <Link href="/translate" className="item">
                Translator
            </Link>
            <Link href="/textutils" className="item">
                TextUtils
            </Link>
        </div>
    );
};

export default Header;
