import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/main.css'

function Home() {
    const [showFullContent, setShowFullContent] = useState(false)
    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    }
    return(
        <div className="home container">
            <h1>Keeb Hoard</h1>
            <br></br>
                <p>
                    Welcome to the world of mechanical keyboards, where typing becomes an art form and every keystroke feels like a symphony. Gone are the days of mushy rubber dome keyboards that lack personality and precision. In this blog post, we will dive into the captivating realm of mechanical keyboards and explore why they have become the ultimate choice for keyboard enthusiasts and professionals alike.
                </p>
                {showFullContent ? (
                    <>
                    <p>
                        The Tactile Euphoria:
                        Imagine a keyboard that responds to your touch with a satisfying click and a subtle tactile bump. That's precisely what mechanical keyboards bring to the table. Each keypress is accompanied by a delightful feedback that not only enhances typing speed and accuracy but also makes the entire experience incredibly enjoyable. The tactile response is akin to a musician feeling the vibrations of their instrument, elevating the act of typing into an immersive sensory journey.
                    </p>
                    <p>
                        Customization for the Discerning Tastes:
                        One size does not fit all, and the realm of mechanical keyboards understands that well. These keyboards offer a variety of switch types, each with its unique characteristics. Whether you prefer a smooth linear switch, a tactile switch that provides a gentle bump, or a clicky switch that audibly confirms your every press, there's a switch type tailored to your preferences. This customization empowers you to find the perfect match for your typing style and elevate your productivity to new heights.
                    </p>
                    <p>
                        Enduring Excellence:
                        Durability is a hallmark of mechanical keyboards. While traditional rubber dome keyboards tend to wear out over time, their mechanical counterparts are built to withstand the test of time. With high-quality switches designed to endure millions of keystrokes, mechanical keyboards can accompany you on your typing journey for years to come. Whether you're a professional writer crafting novels or a passionate gamer conquering virtual worlds, your mechanical keyboard will remain a reliable companion throughout your adventures.
                    </p>
                    <p>
                        Craftsmanship and Aesthetic Appeal:
                        Mechanical keyboards aren't just functional marvels; they're also a sight to behold. Crafted with premium materials like aluminum or steel, these keyboards exude a sense of sophistication and durability. Their solid construction provides a satisfying weight and stability, ensuring they stay firmly in place during even the most intense typing sessions. Moreover, mechanical keyboards offer a canvas for personal expression, with customizable keycaps, vibrant colors, and artistic designs that let you make a statement that is uniquely yours.
                    </p>
                    <p>
                        Conclusion:
                        Embrace the world of mechanical keyboards and embark on a journey that transcends the ordinary. Experience the blissful symphony of tactile feedback, revel in the customizable options that cater to your every whim, and embrace the lasting durability of a companion built to withstand the test of time. Let your fingers dance across the keys, and witness the transformative power of a mechanical keyboard as it takes your typing experience to extraordinary heights. Elevate your craft, unleash your potential, and immerse yourself in the unparalleled joy of typing with a mechanical keyboard.
                    </p>
                <button onClick={toggleContent} className="info-btn minimize-btn">
                    see less...
                </button><br></br><br></br>
            </>
        ) : (
            <p>
                <button onClick={toggleContent} className="info-btn read-more-btn">
                    read more...
                </button><br></br><br></br>
            </p>
        )}
            <Link to='/register' className='btn btn-primary btn-lg'>Create Profile</Link>
        </div>
    )
}

export default Home