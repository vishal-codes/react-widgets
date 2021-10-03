import React, {useState, useEffect, useRef} from "react";
 
const Dropdown = ({options, selected, onSelectedChange, label, demo}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    // console.log(open);

    useEffect(() => {

        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
            // console.log("Body ", open);
        };

        document.body.addEventListener("click", onBodyClick,{
            capture:true
        });

        return () => {
            document.body.removeEventListener("click", onBodyClick, {
                capture: true,
              });
        }
    },[]);

    const renderedOptions = options.map((option)=>{
        if(option.value === selected.value){
            return null;
        }
        return(
            <div 
               key={option.value} 
               className="item"
               onClick={()=> {
                   onSelectedChange(option);
                //    console.log("Each item ",open);
               }}
            >
                {option.label}
            </div>
        );
    });

    return(
        <div className="ui form" ref={ref}>
            
            <div className="field">
                <h4 style={{marginTop: 20}}><label className="label">{label}</label></h4>
                <div
                  onClick={() =>{ 
                    // console.log("Before Dropdown ",open);
                    setOpen(!open);
                  }}
                  className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">
                        {selected.label}
                    </div>
                    <div 
                       className={`menu ${open ? 'visible transition' : ''}`}
                    >
                        {renderedOptions}
                    </div>
                </div>
            </div>
            <h2 
               style={{color: `${selected.value}`, marginTop: 20}}
            >
                {demo}
            </h2>
        </div>
    );
}

export default Dropdown;