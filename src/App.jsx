import './App.scss'

function App() {

  return (
    <main>
      <section className="card-section">
        <div className="container">
          <ul className="cards">

            <li className="card card__type-1">
             <p className="text">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio eaque id impedit nisi praesentium quaerat quibusdam unde, vitae voluptatum. Aliquam atque enim quod!
             </p>
            </li>

            <li className="card card__type-2">
              <h3 className="subtitle">
                Заголовок
              </h3>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio eaque id impedit nisi praesentium quaerat quibusdam unde, vitae voluptatum. Aliquam atque enim quod!
              </p>
            </li>

            <li className="card card__type-3 card__type-3_img1">
             <div className="card-3__wrap">
               <h3 className="subtitle">
                 <a href="#" className="card-link-3">Заголовок статьи</a>
               </h3>
               <p className="text">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio eaque id impedit nisi praesentium quaerat quibusdam unde, vitae voluptatum. Aliquam atque enim quod!
               </p>
             </div>
            </li>

            <li className="card card__type-4 card__type-4_icon1">
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio eaque id impedit nisi praesentium quaerat quibusdam unde, vitae voluptatum. Aliquam atque enim quod!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio eaque id impedit nisi praesentium quaerat quibusdam unde, vitae voluptatum. Aliquam atque enim quod!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio eaque id impedit nisi praesentium quaerat quibusdam unde, vitae voluptatum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio eaque id impedit nisi praesentium quaerat quibusdam unde, vitae voluptatum.
              </p>
            </li>

            <li className="card card__type-5">
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio eaque id impedit nisi praesentium quaerat quibusdam unde, vitae voluptatum. Aliquam atque enim quod!
              </p>
              <button>Кнопка</button>
            </li>

            <li className="card card__type-6">
              <article className="card-article">
                <img className="card__type-6-img" src="src/images/cats.webp" alt="cats"/>
                <div className="card__type-6-bottom">
                  <div className="card__type-6-bottom-text">
                    <div className="price-rating">
                      <span className="price">
                        1234 руб.
                      </span>
                      <div className="rating">
                        100 баллов
                      </div>
                    </div>
                    <h3 className="subtitle">Очки</h3>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>

                  </div>
                  <button>Купить</button>
                </div>
              </article>
            </li>

          </ul>
        </div>
      </section>
    </main>
  )
}

export default App
