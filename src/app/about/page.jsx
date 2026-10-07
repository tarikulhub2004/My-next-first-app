import Image from "next/image";

export const metadata = {
  title: 'About',
  description: '...',
}


const AboutPage = () => {
    return (
        <div>
            About Page  
            <Image width="300" height="500" src="https://plus.unsplash.com/premium_photo-1779721134765-ce0739361f29" alt="img"></Image>
            <Image width="500" height="300" src="/images.jpg" alt="tiger image"></Image>          
        </div>
    );
};

export default AboutPage;