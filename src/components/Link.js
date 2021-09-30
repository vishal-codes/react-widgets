import React from 'react';

const Link= ( {href, className, children} ) => {
    const onClickDo = (event) => {
        if(event.metaKey || event.ctrlKey){
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    return(
        <a 
           className={className}
           href={href}
           onClick={onClickDo}
        >
            {children}
        </a>
    );
}

export default Link;