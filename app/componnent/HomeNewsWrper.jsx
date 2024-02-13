import Container from "./Container";
import HomeNews from "./HomeNews";

export default function HomeNewsWrper() {
    return (
        <div className="pbg py-16 md:pt-0">
            <Container>
                <div>
                    <HomeNews />
                    <div className="pt-14 md:pt-0 text-center wCl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate aut unde dolorem laudantium eaque optio quibusdam deleniti beatae ut. Consectetur.
                    </div>
                </div>
            </Container>
        </div>
    )
}