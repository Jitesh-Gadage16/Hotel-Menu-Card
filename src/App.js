// import useState fo rendering js in react view
import React, { useState } from "react";
import "./styles.css";

// Books database
var menuCard = {
  breakFast: [
    {
      name: "Vada Pav",
      image:
        "https://www.merisaheli.com/wp-content/uploads/2018/03/vada-pav.jpg"
    },
    {
      name: "Idlis",
      image:
        "https://external-preview.redd.it/WKlEnsHy6Y20B8f8C2HugTZyNt7svgFMeAIUE8VfdCc.jpg?width=960&crop=smart&auto=webp&s=05acf18886340c79f47121d01f2753068aba89bb"
    },
    {
      name: "Masala Dosa",
      image:
        "https://www.palatesdesire.com/wp-content/uploads/2019/09/Mysore_Masala_Dosa@Palates_Desire-e1593275925544.jpg"
    },

    {
      name: "Chai ",
      image:
        "https://pipingpotcurry.com/wp-content/uploads/2019/05/How-to-make-Masala-Chai-Piping-Pot-Curry-500x375.jpg"
    }
  ],
  dinner: [
    {
      name: "Maharashtrian dinner",
      image:
        "https://i.ndtvimg.com/i/2017-04/gujarati-thali_620x350_61493204208.jpg"
    },
    {
      name: "South Indian Lunch",
      image: "https://farm8.staticflickr.com/7778/17269216874_f4d1057324_z.jpg"
    },
    {
      name: "Punjabi dinner",
      image:
        "https://scontent.fbom5-1.fna.fbcdn.net/v/t1.0-9/32160689_1282794191851447_7459632541247471616_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=mjuQ9RTZ4N4AX8jLvkP&_nc_oc=AQmHycVIFE1tyQ0K2Lq8TnTKedg3GDqH3qpRONa53dN21sfaGGr87yCkuYC2BUiHC4A&_nc_ht=scontent.fbom5-1.fna&oh=e3e2008ccb647636f3caa2140f63a222&oe=6006F7EB"
    }
  ],
  icecreem: [
    {
      name: "Chocolate Icecreem",
      image:
        "https://images.herzindagi.info/image/2020/Jun/chocolate-parle-g-ice-cream.jpg"
    },
    {
      name: "Oreo Icecreem",
      image:
        "https://www.sweetestmenu.com/wp-content/uploads/2018/08/oreoicecream8.jpg"
    },
    {
      name: "Butterscotch Icecreem",
      image:
        "https://www.ruchiskitchen.com/wp-content/uploads/2020/06/butterscotch-icecream-recipe-7.jpg"
    }
  ]
};

// list of book genres
const genres = Object.keys(menuCard);

export default function App() {
  // declaring cariables
  const [menuGenre, setMenuGenre] = useState("");
  const [menuList, setMenuList] = useState([]);

  // onclick function
  function genreClickHandler(menuGenre) {
    setMenuGenre(menuGenre);
    setMenuList(menuCard[menuGenre]);
  }

  return (
    <div className="App">
      <h1>Hotel Menu Card</h1>
      <h2>Select what you wish to Have.</h2>

      {/* genre buttons */}
      <div></div>

     

      <div>
        <div className="output-box">
          {/* using map on list */}
          {genres.map((item) => {
            // returning dynamic items with arrow functions
            return (
              <span
                className="genre-button"
                style={{ cursor: "pointer" }}
                onClick={() => genreClickHandler(item)}
                key={item}
              >
                {item}
              </span>
            );
          })}
          {menuList.map((menuList_item, index) => {
            return (
              <div key={index} className="each-book">
                <div>
                  <img
                    className="book-image"
                    src={menuList_item.image}
                    alt="book"
                  />
                  <h2 className="book-name">{menuList_item.name}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
