import './Main.css';

function Main() {
    return (
        <div className="container">
            <div className="image-container">
                <img src="https://media.istockphoto.com/id/1160742394/photo/vacations-in-countryside.jpg?s=612x612&w=is&k=20&c=uPWBuC1m8DC2_PGT8VnQi06_G_c5zk-lIcrnnO654EM=" alt="Family" className="body-img" />
            </div>

            <div className="section section1">
                <div className="title">
                    <p className="title-head">Think Health. Think Massage.</p>
                    <p className="title-info">We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment with us, please call us at 987-654-3210 today!</p>
                </div>
                <div className="buttons">
                    <button className="btn">LEARN MORE ABOUT US</button>
                    <button className="btn btn-contact">CONTACT US TODAY</button>
                </div>
            </div>

            <div className="section section2">
                <div className="subsection">
                    <p className="para">Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>
                    <p className="para">We are committed to your long-term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>
                    <p className="para">We welcome you to come explore all the benefits you’ll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.</p>
                </div>
            </div>

            <div className="border"></div>

            <div className="section section3">
                <div className="sec3-title">
                    <p className="section3-head">Family Wellness Massage Therapy</p>
                </div>
                <div className="sec3-details">
                    <p>9876 Main Street, Suite 123, Mainland, ML12345</p>
                    <p>Phone: 987.654.3210</p>
                </div>
            </div>
        </div>
    );
}

export default Main;
