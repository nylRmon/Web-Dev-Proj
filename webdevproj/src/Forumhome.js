import React from "react";
import "./ForumHome.css"; // Import your CSS file


const Forumhome = ({ user }) => (
  <div className="home-container">
    <section className="hero" id="home" style={{ backgroundImage: `url('./assets/images/hero-banner.jpg')` }}>
      <div className="container1">
        <div className="hero-content">
          <p className="hero-subtitle">We've got what you need, you've got what we want</p>
          <h2 className="h1 hero-title">TUP Marketplace</h2>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </section>
    <section className="service">
      <div className="container">
        <ul className="service-list">
          {[
            { icon: "./service-icon-1.svg", title: "Free Shipping", text: "On All Orders Over $599" },
            { icon: "./service-icon-2.svg", title: "Easy Returns", text: "30 Day Returns Policy" },
            { icon: "./service-icon-3.svg", title: "Secure Payment", text: "100% Secure Guarantee" },
            { icon: "./service-icon-4.svg", title: "Special Support", text: "24/7 Dedicated Support" },
          ].map((item, index) => (
            <li className="service-item" key={index}>
              <div className="service-item-icon">
                <img src={item.icon} alt="Service icon" />
              </div>
              <div className="service-content">
                <p className="service-item-title">{item.title}</p>
                <p className="service-item-text">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <section class="section product">
        <div class="container1">
          <h2 class="h2 section-title">Featured Products</h2>
          <ul class="product-list">

            <li>
              <div class="product-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src="./product-1.jpg" alt="Varsi Leather Bag" loading="lazy" width="800"
                      height="1034" class="w-100"/>
                  </a>

                  <div class="card-badge red"> -25%</div>

                  <div class="card-actions">

                    <button class="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button class="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

                      <p>Add to Cart</p>
                    </button>

                    <button class="card-action-btn" aria-label="Add to Whishlist">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                  </div>

                </figure>

                <div class="card-content">
                  <h3 class="h4 card-title">
                    <a href="#">School Bag</a>
                  </h3>

                  <div class="card-price">
                    <data value="600.00">600PHP</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src="./product-2.jpg" alt="Fit Twill Shirt for Woman" loading="lazy" width="800"
                      height="1034" class="w-100"/>
                  </a>

                  <div class="card-badge green"> New</div>

                  <div class="card-actions">

                    <button class="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button class="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

                      <p>Add to Cart</p>
                    </button>

                    <button class="card-action-btn" aria-label="Add to Whishlist">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                  </div>

                </figure>

                <div class="card-content">
                  <h3 class="h4 card-title">
                    <a href="#">Fit Twill Shirt for Woman</a>
                  </h3>

                  <div class="card-price">
                    <data value="300.00">300PHP</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src="./product-3.jpg" alt="Grand Atlantic Chukka Boots" loading="lazy"
                      width="800" height="1034" class="w-100"/>
                  </a>

                  <div class="card-actions">

                    <button class="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button class="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

                      <p>Add to Cart</p>
                    </button>

                    <button class="card-action-btn" aria-label="Add to Whishlist">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                  </div>

                </figure>

                <div class="card-content">
                  <h3 class="h4 card-title">
                    <a href="#">Grand Atlantic Chukka Boots</a>
                  </h3>

                  <div class="card-price">
                    <data value="1000PHP">1000PHP</data>
                  </div>
                </div>

              </div>
            </li>

          </ul>

          <button class="btn btn-outline">View All Products</button>

        </div>
      </section>
  </div>
);

export default Forumhome;
