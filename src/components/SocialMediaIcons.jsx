const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7 ">
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" className="w-9"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" className="w-9"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/github.png" className="w-9"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" className="w-9"/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
