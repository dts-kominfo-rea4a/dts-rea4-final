function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return <div style={style}>
        
        <div style={{"fontSize": "96px"}}>
            Hello World!!
        </div>
        
        <div style={{"fontSize": "36px"}}>
            This is the landing page and here's some content.
            How much wood would a woodchuck chuck if a 
            woodchuck would chuck wood?
        </div>
        <br />
        <LandingPageButton />
    </div>
}
function LandingFrame() {
    const style = {
        "backgroundImage": `url("images/background.jpeg")`,
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}>
        <LandingFrameMessage />
    </div>
}