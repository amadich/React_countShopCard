import Mapo from '../api/sh.json';
function section(props)  {
   
    const myc = () => {
        props.setNum(props.num + 1);
    }

    return(
        
            <section>
                
                {
                    Mapo.map((data) => {
                        
                        return(
                            <div className="bor1" key={data.nameP}>
                                <img src={data.img} alt={data.nameP} />
                                <h3>{data.nameP}</h3> <hr />
                                <label style={{width: "100px", display: "inline-block",textAlign: "center"}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </label> <br />
                                
                                <button onClick={myc}>ADD TO CARD</button>
                            </div>
                        )
                    })
                }
            </section>
        )
    
}

export default section;