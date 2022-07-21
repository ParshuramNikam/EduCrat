import './Header.css';

const Header = () => {
    return (
        <>
            <div className='home_header'>
                <div className="right_side">
                    <h1>Learn with expert anytime anywhere</h1>
                    <p>
                        Our mision is to help people to find the best tutor online and learn with expert anytime, anywhere.
                    </p>
                    <button>Join EduCrat</button>
                </div>
                <div className="left_side">
                    <img src="/images/hero-thumb1.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Header