import './StepContainer.css';

const StepContainer = () => {
    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="imgwrapper"><img src="https://bankomaty.ottolandingpages.pl/images/Zasob_6.png" alt="" className="cardimg"/></div>
                <div className="title"><h1>WYPEŁNIJ FORMULARZ</h1></div>
                <div className="cardtext"><p>Zostaw kilka informacji o sobie, aby nasz konsultant mógł się z Tobą
                    skontaktować i przeprowadzić przez cały proces rekrutacji.</p></div>
            </div>
            <div className="card">
                <div className="imgwrapper"><img src="https://bankomaty.ottolandingpages.pl/images/Zasob_3.png" alt="" className="cardimg"/></div>
                <div className="title"><h1>POROZMAWIAJ Z KONSULTANTEM</h1></div>
                <div className="cardtext"><p>W OTTO stawiamy na ludzi, dlatego już na start przydzielimy Ci osobę
                    kontaktową, która zadba o Twoje zatrudnienie.</p></div>
            </div>
            <div className="card">
                <div className="imgwrapper"><img src="https://bankomaty.ottolandingpages.pl/images/Zasob_5.png" alt="" className="cardimg"/></div>
                <div className="title"><h1>DOPEŁNIJ FORMALNOŚCI</h1></div>
                <div className="cardtext"><p>Konsultant pomoże Ci w załatwieniu niezbędnych dokumentów, wyjaśni kwestie
                    prawne zatrudnienia i będzie Twoim wsparciem nawet wtedy, gdy zaczniesz już pracę!</p></div>
            </div>
            <div className="card">
                <div className="imgwrapper"><img src="https://bankomaty.ottolandingpages.pl/images/Zasob_4.png" alt="" className="cardimg"/></div>
                <div className="title"><h1>PRACUJ I ZARABIAJ</h1></div>
                <div className="cardtext"><p>Zdobądź zatrudnienie i zgarnij pierwszą wypłatę nawet po tygodniu pracy. A
                    z czasem... Buduj swoją karierę z OTTO.</p></div>
            </div>


            <div className="card2">
                <div className="bottitle"><h2>WYBIERZ OFERTĘ DLA SIEBIE</h2></div>

                <div className="cardtext"><p className="botcardtext">OTTO Work Force każdego dnia zatrudnia ludzi na
                    terenie całej Polski i nie tylko. Dołącz do grona zadowolonych pracownikow! Mamy dla Ciebie pracę w
                    branżach takich, jak: produkcja, logistyka, handel, usługi i e-commerce. Zostaw kontakt i dowiedz
                    się więcej o naszych ofertach!</p>
                </div>
            </div>
            <div className="card2">

            <img src="https://bankomaty.ottolandingpages.pl/images/Zasob_13.png" className="card1" alt=""/>
            </div>
            <div className="card2">

            <img src="https://bankomaty.ottolandingpages.pl/images/Zasob_14.png" className="card1" alt="" />
            </div>
            <div className="card2">

            <img src="https://bankomaty.ottolandingpages.pl/images/Zasob_15.png" className="card1" alt="" />
            </div>
        </div>

    )
}


export default StepContainer;
