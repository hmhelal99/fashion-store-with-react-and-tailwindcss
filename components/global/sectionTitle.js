import {Fragment} from "react";

const SectionTitle = ({title}) => {
    return (
        <Fragment>
            <div>
                <h1 
                className="
                text-center 
                text-4xl 
                relative
                before:absolute before:content-[''] before:bg-[url('/images/heading-shape.png')]
                before:bottom-[-30%] before:w-[174px] before:h-[5px] before:left-1/2 before:-translate-x-1/2
                font-semibold mb-8"
                >{title}</h1>
            </div>
        </Fragment>
    )
}

export default SectionTitle;
