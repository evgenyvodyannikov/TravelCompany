import Head from 'next/head'

export default function Home(){
    return (
        
    <body>
        <header>
            <img src="../assets/image/newLogo.png" alt="smth"></img>
            <nav>
                <ul>
                    <li><a href="#">App</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Plan travel</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </header>
    
        <main>
            <div class="info">
                <img src="../assets/image/mountains.jpg" alt="123"></img>
                <div>Find your adventure</div>
            </div>
            <section class="offers_page">
                <div class="offers_list">
                    <div class="offer">
                      <img src="../assets/image/icons/mountain.png" alt="123"></img>
                        <h3>WHY US?</h3>
                        <p>We'he been creating roundtrips for 17 years and we're determined to provide you with the trip
                        </p>
                    </div>
                    <div class="offer">
                       <img src="../assets/image/icons/mountain.png" alt="123"></img>
                        <h3>PLAN YOUR TRAVEL?</h3>
                        <p>You're in charge! Create your own roundtrip with our extensive services in cars, hotels and
                            flights. </p>
                    </div>
                    <div class="offer">
                        <img src="../assets/image/icons/mountain.png" alt="123"></img> 
                        <h3>HOLIDAY TOURS?</h3>
                        <p>Book travel tours worldwide including adventure and cultural tours from leading providers such as
                            Intrepid, Trafalgar, Contiki</p>
                    </div>
                </div>
            </section>
    
            <section class="adventure_pg_01">
                <div class="adventure_text">
                    <h1>Where the adventure never ends</h1>
                    <h2>Create your perfect trip</h2>
                    <p>Explore the roads less travelled, where your passion for outdoor adventure can roam wild and your
                        appreciation for nature deepens. Stretching from the spectacular fjords and lush islands of Kenai
                        Fjords National Park to the herculean peak of Denali in Denali National Park, Alaska is a land of
                        epic proportions. </p>
                </div>
                <div class="adventure_counter">
                    <h1>01</h1>
                </div>
            </section>

        </main>
    
        <footer>
            2022 &copy; RedExinus
        </footer>
    
        <script src="./script.js"></script>
    </body>
    )
    
}