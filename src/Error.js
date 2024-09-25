import { useRouteError } from "react-router-dom";



const Error=()=>
    
{
    const defaulterror = useRouteError();
console.log(defaulterror);
    return(
        <div>
            <h1>stay in your boundary man!!!</h1>
            <h2>{defaulterror.status}:{defaulterror.statusText}</h2>
        </div>
    );
}
export default Error;