import React, { useEffect, useState } from 'react'

const withErrorBoundary = (WrappedComponent, axios) => {

    const NewComponent = () => {

        const [hasError, sethasError] = useState(false)

        useEffect(() => {
            axios.interceptors.response.use(res => res, error => {
                error ? sethasError(true) : sethasError(false)
            })
            return () => {
                
            }
        }, [hasError]);

        return (
            <div>
                {hasError ? `Error in component` :  <WrappedComponent></WrappedComponent>}
               
            </div>
        )
    }
    return NewComponent;
}

export default withErrorBoundary;