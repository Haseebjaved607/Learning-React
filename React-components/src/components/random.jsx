function Random(){
    let number = Math.random()*100;
    return <h3 style={{"backgroundColor":"#4049"}}>Random number is :{Math.round(number)}</h3>

}

export default Random