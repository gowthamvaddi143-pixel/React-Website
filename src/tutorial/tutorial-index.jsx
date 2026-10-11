import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import { HomeTutorial } from "./tutorial-home";
import { JavaTutorial } from "./Java-tutorial";
import { ReactTutorial } from "./React-tutorial";
import { AngularTutorial } from "./angular-tutorial";
import { EmiCalculator } from "../components/emi-calculator/emi-calculator";

export function TutorialIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="text-center p-3 border border-3">
                <h1>Tutorial Index</h1>
                <nav>
                    <span><Link to="/">HOME</Link></span>
                    <span className="mx-4"><Link to="java">JAVA</Link></span>
                    <span><Link to="angular">ANGULAR</Link></span>
                    <span className="mx-3"><Link to="react">REACT</Link></span>
                    <span><Link to="emi">EMI</Link></span>
                </nav>

            </header>
          <section>
             <Routes>
              <Route path="/" element={<HomeTutorial/>}/>
              <Route path="java" element={<JavaTutorial/>}/>
              <Route path="react/:topic/:subtopic" element={<ReactTutorial/>}/>
              <Route path="angular" element={<AngularTutorial/>}/>
              <Route path="emi" element={<EmiCalculator/>}/>
              <Route path="*" element={<code>not Found <p>REquest path  not found in application.</p></code>}/>
              </Routes>
          </section>
            </BrowserRouter>


        </div>
    )
}