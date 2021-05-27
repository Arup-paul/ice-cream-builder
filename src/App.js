import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Layout from "./Components/layout/layout";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
     <Layout>
         <Header />
         <Body />
         <Footer />
     </Layout>
  );
}

export default App;
