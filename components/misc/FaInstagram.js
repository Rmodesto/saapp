import { FaTwitter } from "react-icons/fa";

function TwitterIcon() {
  function handleClick(e) {
    e.preventDefault();
    window.location = "https://twitter.com";
  }

  return (
    <a href="#" onClick={handleClick}>
      <FaTwitter />
    </a>
  );
}
