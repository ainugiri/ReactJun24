function Car(){
    return(
        <>
            <h2>Car Component</h2>
            <Start />
        </>
    ) 
}

function Bike()
{
    return(
        <>
            <h2>Bike Component</h2>
            <Start />
        </>
    ) 
}

function Start(){
    return <h6>Start the vehicle</h6>
}

export {Car, Start, Bike} // Named Export