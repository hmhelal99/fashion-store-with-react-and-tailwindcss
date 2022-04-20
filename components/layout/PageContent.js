import { Fragment } from "react";

const PageContent = ({children}) => {
    return (
        <Fragment>
            <main>
                {children}
            </main>
        </Fragment>
    )
}

export default PageContent;
