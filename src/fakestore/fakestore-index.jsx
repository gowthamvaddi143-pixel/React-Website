import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreDetails } from "./fakestore-details";
import { FakestoreSearch } from "./fake-search";
import { FakestoreResult } from "./fakestore-results";
import { FakestoreLogin } from "./fakestore-login";
import { lazy,Suspense } from "react";

const FakestoreProducts = lazy(()=> import('./fakestore-products'))

export function FakestoreIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="bg-dark text-white text-center p-3">
                <h1 className="bi bi-bag-fill">FAKE_STORE</h1>
            </header>
            <section className="mt-4">
               <Suspense fallback={<div><span className="spinner-border text-success"></span> Loading...</div>}>
                      <Routes>
                    <Route path="/" element={<FakestoreHome/>}/>
                    <Route path="products/:category" element={<FakestoreProducts/>}>
                        <Route path="details/:id" element={<FakestoreDetails/>}/>
                       </Route>
                    <Route path="Search" element={<FakestoreSearch/>}/>
                    <Route path="results" element={<FakestoreResult/>}/>
                    <Route path="login" element={<FakestoreLogin/>}/>
                    <Route path="*" element={<code><h3>Not Found</h3></code>}/>
                </Routes>
               </Suspense>
            </section>
            </BrowserRouter>


        </div>
    )
}