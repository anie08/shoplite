import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>

                    {/*<Route path="about" element={<About />} />*/}
                    {/*<Route path="shop" element={<Shop />} />*/}
                    {/*<Route path="blog" element={<Blog />} />*/}
                    {/*<Route path="contact" element={<Contact />} />*/}
                    {/*<Route path="cart" element={<Cart />} />*/}
                    {/*<Route path="wishlist" element={<Wishlist />} />*/}
                    {/*<Route path="*" element={<NotFound />} />*/}

            </Routes>
        </BrowserRouter>
    );
};

export default App;