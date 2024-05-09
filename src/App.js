import girlIc from "./girl.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg">
        <div className="container">
          <div className="pentagon-container">
            <div className="pentagon" id="p1">
              <div id="p1_c">
                <h1>85</h1>
                <br></br>
                <p className="pent_cont">Task : Work in Progress</p>
              </div>
            </div>
            <div className="pentagon" id="p2">
              <div id="p2_c">
                <h1>102</h1>
                <br></br>
                <p className="pent_cont">Task : Yet To Be Started</p>
              </div>
            </div>
            <div className="pentagon" id="p3">
              <div id="p3_c">
                <h1>203</h1>
                <br></br>
                <p className="pent_cont">Task : OverAll Pending</p>
              </div>
            </div>
            <div className="pentagon" id="p4">
              <div id="p4_c">
                <h1>44</h1>
                <br></br>
                <p className="pent_cont">Task : Pending For Assignment</p>
              </div>
            </div>
            <div className="pentagon" id="p5">
              <div id="p5_c">
                <h1>05</h1>
                <br></br>
                <p className="pent_cont">Task : Urgent / Important</p>
              </div>
            </div>
            <div className="pentagon" id="p6">
              <div id="p6_c">
                <h1>06</h1>
                <br></br>
                <p className="pent_cont">Task : Completed</p>
              </div>
            </div>
            <div className="pentagon" id="p7">
              <div id="p7_c">
                <h1>07</h1>
                <br></br>
                <p className="pent_cont">Task : Billings</p>
              </div>
            </div>
          </div>
          <svg className="flt_svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="flt_tag">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="flt_tag"
                />
                <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="line" id="l1"></div>
        <div className="line" id="l2"></div>
        <div className="line" id="l3"></div>
        <div className="line" id="l4"></div>
        <div className="line" id="l5"></div>
        <div className="line" id="l6"></div>
        <div className="line" id="l7"></div>
        <div className="graph"></div>
        <div className="circle"></div>
        <div className="girl_icon">
          <img src={girlIc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
