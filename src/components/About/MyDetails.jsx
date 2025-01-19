import {motion} from 'framer-motion';
export default function MyDetails() {
  return (
    <>
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="self-start tracking-tighter mt-10 leading-relaxed md:text-[12px] lg:text-lg"
    >
      <p className="indent-6">
        <strong> Passion for Problem-Solving and Industry Experience:</strong>
        I’m a tech enthusiast who thrives on problem-solving and continuous learning. My journey as a technical professional is driven by a desire to build impactful, innovative solutions across various domains<strong>Networking</strong>, <strong>Python</strong>, and{" "}
        <strong>Embedded Systems</strong>, Networking-focused work, including advanced firewalls, Cisco wireless architectures, and CCNA projects on campus networking.
        <br />
        <br />
        Currently, as a <strong>Technical Trainee</strong> at{" "}
        <strong>NetworkZ Systems</strong>, I work on environment assessments,
        solar panel installations, and team leadership. This hands-on experience
        has enhanced my skills in project management and team collaboration,
        essential for success in the tech industry.
      </p>

      <p className="indent-6 hidden md:block">
        <strong> Aspirations for Growth and Innovation:</strong>
        I am passionate about leveraging machine learning, networking, and IoT to create innovative solutions for real-world challenges. My work spans projects like brain stroke prediction, neuron reconstruction, and crop yield prediction, aiming to make a tangible impact through technology and sustainability.
      </p>
    </motion.div>
    </>

  )
}
