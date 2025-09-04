import '../assets/Photo.png'
import '../Styles/profile.css'

function Details() {
    return (
        <div className="accdetail">
            <h2>Account Settings</h2>

            <div className="profile-row">
                <div className="profile-image">
                    <img src={photo} alt="" />
                    <span className="camera-icon">📷</span>
                </div>

                <div className="profile-info">
                    <h3>Marry Doe</h3>
                    <p>marrydoe@gmail.com</p>
                </div>
            </div>

            <p className="description">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
        </div>
    )
}

export default Details;
