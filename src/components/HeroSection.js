import CustomImage from "./CustomImage"

export default function HeroSection(){
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_15.jpg",
        "/img/gallery/img_14.jpg",
        "/img/gallery/img_12.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Welcome to RecipeFusion!</h1>
                <p className="info">Explore a world of diverse cuisines with our free collection of mouthwatering recipes. From comforting classics to innovative creations, satisfy your cravings and elevate your cooking game. No subscriptions, no hidden fees – just pure gastronomic delight. Start your culinary adventure now!</p>
                <button className="btn"><a href="/recipes">Explore now</a></button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}