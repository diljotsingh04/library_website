import React from 'react';
// import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import hero_image from '../../images/hero_img.jpg'
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            {/* <Navbar /> */}
            {/* <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
                <SearchForm />
            </div> */}
            {/* tailwind start */}
            <div id='tailwindDesign' className="totalSection">
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                  <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={hero_image} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                      <h2 className="text-sm title-font text-gray-500 tracking-widest">LibraWeb</h2>
                      <h1 style={{fontWeight: 'bold', fontSize: '3rem', textAlign: 'center'}} className="text-gray-900 title-font font-medium mb-1">Welcome to LibraWeb</h1>
                      <p className="leading-relaxed">Welcome to a sanctuary of knowledge, where the pursuit of wisdom is nurtured, and the love for literature knows no boundaries. Words have the power to shape minds, touch hearts, and change the world. Join us in celebrating the profound impact of books and the joy they bring.</p>
                      <div className="flex">
                        <SearchForm />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            
            {/* tailwind ends */}
        </header>
     </div>
  )
}

export default Header