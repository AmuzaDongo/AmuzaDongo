import "./portfolio.css"

export default function Portfolio() {
    return (
        <div className="portfolio">
            <img src="assets/p2.jpg" alt="" className="portfolioImg" />
           
            <div className="portfolioInfo">
                <span className="portfolioTitle">This is the Heading dear</span>
                <span className="portfolioDate">12 jan 2021</span>
                <p className="portfolioDesc"> Developer familiar with wide range of programming utilities and languages utilities and languages.</p>
            </div>
        </div>
    )
}
