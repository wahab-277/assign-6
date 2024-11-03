import Image from "next/image";
import Head from "../components/Header"
import Link from "next/link"
import Inter from "next/font/google"



export default function Home() {
  return (

    <div>
      <Head />

      <div className="banner">

        <div className="left">
          <h4>Pro.Beyond.</h4>
          <h6>IPhone 14 <span>Pro </span></h6>
          <p>Created to change everything for the better. For everyone</p>
          <button>Shop Now</button>
        </div>

        <div className="right">
          <Image src="/iphone.png" alt="iphonebanner" width={406} height={632}></Image>
        </div>

      </div>

      <div className="banner2">

        <div className="east">
          <div className="up">
            <div className="ps5">
              <Image src="/PS.png" alt="playStation" width={360} height={343}></Image>
            </div>
            <div className="playstation5">
              <h4 id="pps5">Playstation 5</h4>
              <p className="samepara1">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
            </div>
          </div>
          <div className="down">
            <div className="L">
              <div className="airpod">
                <Image src="/airpod.png" alt="headphones" width={104} height={272}></Image>
              </div>
              <div className="applepod">
                <h5 id="ap" >
                  Apple AirPods <br /><span id="Max">Max</span>
                </h5>
                <p className="samepara2">Computational audio. Listen, it's powerful</p>
              </div>
            </div>
            <div className="R">
              <div className="vision"> <Image src="/vision.png" alt="applevisionpro" width={136} height={190}></Image></div>
              <div className="applevision">
                <h5 id="av">
                  Apple <br /> Vision <span id="Pro">Pro</span>
                </h5>
                <p className="samepara3">An immersive way to experience entertainment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="west">
          <div className="applemac">
            <h2>
              Macbook <br /> <span id="Air">Air</span>
            </h2>
            <p className="samepara">
              The new 15‑inch MacBook Air makes room for more <br /> of what you love with a spacious Liquid Retina <br /> display
            </p>
            <button id="shop">
              Shop Now
            </button>
          </div>
          <div className="macbook">
            <Image src="/macbook.png" alt="mac14" id="laptop" width={300} height={802} ></Image>
          </div>
        </div>
      </div>
      {/* ======================================================================================================== */}

      <div className="banner3">
          <h4 id="head3">Browse By Category</h4>
      
      <div className="allitems">

          <div className="item">
          <p>Phones</p>

          </div>
          <div className="item">
          <p>Smart Watches</p>
          </div>
          <div className="item">
          <p>Cameras</p>
          </div>
          <div className="item">
          <p>Headphones</p>
          </div>
          <div className="item">
          <p>Computers</p>
          </div>
          <div className="item">
          <p>Gaming</p>
          </div>

     </div>


     </div>


    </div>
  
  )

};
