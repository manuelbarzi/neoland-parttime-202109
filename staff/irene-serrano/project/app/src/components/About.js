import { useNavigate } from "react-router-dom"


export default function () {
    const navigate = useNavigate()

    return <div className="About">
        <a onClick={() => navigate("/")}>back</a>
        <>
            <h3 className="About__title">About us</h3>

            <p className="About__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt dui ut ornare lectus sit amet est. Commodo odio aenean sed adipiscing diam donec. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Amet purus gravida quis blandit. Vel pharetra vel turpis nunc. Sed turpis tincidunt id aliquet risus feugiat. Dignissim enim sit amet venenatis urna cursus eget nunc. Massa tincidunt dui ut ornare lectus sit. Purus faucibus ornare suspendisse sed nisi lacus. Cursus turpis massa tincidunt dui ut ornare. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Sed vulputate odio ut enim. Tincidunt tortor aliquam nulla facilisi cras fermentum. Egestas diam in arcu cursus euismod quis viverra nibh cras. Aliquam eleifend mi in nulla posuere sollicitudin. Faucibus scelerisque eleifend donec pretium.
            </p>
            <p className="About__paragraph">
                Quam quisque id diam vel quam elementum pulvinar. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Magna sit amet purus gravida quis blandit turpis cursus. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Sed turpis tincidunt id aliquet risus feugiat in. Vitae congue eu consequat ac felis donec et. Morbi tempus iaculis urna id volutpat lacus laoreet non. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. At quis risus sed vulputate odio ut. Vitae suscipit tellus mauris a diam.
            </p>
        </>

    </div>

}