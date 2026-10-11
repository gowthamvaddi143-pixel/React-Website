import { useState } from "react"
import "./emi-calculator.css"

export function EmiCalculator(){
    const [loanAmount,setLoanAmount] = useState(100000);
    const [years,setYears] = useState(1)
    const [rate,setRate] =useState(0)
    const [emi, setEmi] = useState(0)

    function CalculateEmi(){
        let P = parseInt(loanAmount)
        let R = parseFloat(rate)/12/100
        let N =parseInt(years)*12;
        let EMI = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) -1)
        setEmi(EMI)
    }

    function handleAmountChenge(e){
        setLoanAmount(e.target.value);
        CalculateEmi();

    }
    function handleYearChenge(e){
        setYears(e.target.value);
        CalculateEmi();
    }
    function handleRateChenge(e){
        setRate(e.target.value)
        CalculateEmi();
    }





    return(
        <div className="bg-secondary row p-4" style={{height:'100vh'}}>
            <div className=" card col-6 p-4 mt-5 ms-5 " style={{height:'500px '}}>
                <div>
                    <div className=" d-flex justify-content-between">
                        <div>
                            <label className="fw-bold fs-5">LOAN Amount</label>
                        </div>
                        <div>
                        <div className="position-relative">
                            <span style={{left:'10px'}} className=" position-absolute">&#8377;</span><input type="text" style={{paddingLeft:'20px'}} onChange={handleAmountChenge} value={loanAmount} />

                        </div>

                    </div>
                </div>
                <div className="mt-4">
                    <input type="range" min={100000}onChange={handleAmountChenge} value={loanAmount} max={1000000} step={10000} className="form-range" />
                    <span>&#8377;1,00,000</span>
                    <span className="float-end">&#8377;10,00,000</span>
                </div>
                </div>

                 <div className="mt-5">
                    <div className=" d-flex justify-content-between">
                        <div>
                            <label className="fw-bold fs-5">LOAN Tenure</label>
                        </div>
                        <div>
                            <input type="text" size={2}  onChange={handleYearChenge} value={years}/>

                        </div>

                    </div>
              
                <div className="mt-4">
                 
                       <input type="range" min={1} max={5} step={1}onChange={handleYearChenge}value={years} className="form-range" />
                
                    <span>1 Year</span>
                    <span className="float-end">5 Years</span>
                </div>
                  </div>

                 <div className="mt-5">
                    <div className=" d-flex justify-content-between">
                        <div>
                            <label className="fw-bold fs-5">Interest Rate</label>
                        </div>
                        <div >
                           <input type="text"size={4} onChange={handleRateChenge}  value={rate}  />

                        </div>

                    </div>
          
                <div className="mt-4">
                    <input type="range" min={10.45} max={18.45} step={0.01} className="form-range" onChange={handleRateChenge}  value={rate}/>
                    <span>10.45%</span>
                    <span className="float-end">18.45%</span>
                </div>



                </div>

            </div>

            <div className=" card col-5 ms-4 " style={{height:'400px',marginTop:'90px'}}>
                <div className="card-header">
                    <div className="text-center text-primary"> Your Monthly EMI will Be</div>

                </div>
                <div className="card-body text-center">
                    <div className="fs-1 fw-bold  text-danger" style={{marginTop:'100px'}}>{emi.toLocaleString("en-in",{style:'currency',currency:"INR",minimumFractionDigits:0,maximumFractionDigits:0}) }</div>

                </div>

            </div>
            
        </div>
    )
}