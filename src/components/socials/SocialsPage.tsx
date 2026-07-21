import Link from "next/link";

const SocialsPage = () => {
  return (
    <div className="font-cyber-main flex flex-col">
      <div className="flex gap-3">
        <span className="text-cyber-white text-2xl font-extrabold">
          cyber@ucr:~$
        </span>
        <span className="text-cyber-lightgreen text-2xl">
          ip link | grep cyber0
        </span>
      </div>

      <div className="text-cyber-white mb-8 text-4xl font-bold">
        Follow our socials!
      </div>

      <div className="font-cyber-main mb-8 text-3xl">
        <div className="flex flex-row">
          <div className="text-cyber-white mr-8"> 1: </div>
          <div>
            <span className="text-cyber-white"> discord: </span>
            <span className="text-cyber-lightgreen">
              Connect and chat with fellow hackers!<br></br>
              <Link
                href="https://discord.ucrcyber.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DFFFFF] underline"
              >
                https://discord.ucrcyber.org/
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className="font-cyber-main mb-8 text-3xl">
        <div className="flex flex-row">
          <div className="text-cyber-white mr-8"> 2: </div>
          <div>
            <span className="text-cyber-white"> linkedin: </span>
            <span className="text-cyber-lightgreen">
              Join our professional network and view our history of events and
              accomplishments.<br></br>
              <Link
                href="https://linkedin.com/company/cyberucr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DFFFFF] underline"
              >
                https://linkedin.com/company/cyberucr
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className="font-cyber-main text-3xl">
        <div className="flex flex-row">
          <div className="text-cyber-white mr-8"> 3: </div>
          <div>
            <span className="text-cyber-white"> instagram: </span>
            <span className="text-cyber-lightgreen">
              Meet the board, check out some member spotlights, and ask us
              questions.<br></br>
              <Link
                href="https://www.instagram.com/cyber_ucr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DFFFFF] underline"
              >
                https://www.instagram.com/cyber_ucr/
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialsPage;
