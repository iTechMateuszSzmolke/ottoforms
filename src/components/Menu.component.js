import '../style/Menu.style.css'


const Menu = () => {
    return (
        <div className={'menu-container'}>

            <div className={'left-menu'}>
                <p style={{color:'red'}}>Logo</p>
            </div>

            <div className={'right-menu'}>
                <div className="lang-menu">
                    <div className="selected-lang">
                        PL
                    </div>
                    <ul>
                        <li>
                            <a href="#" className="pl">PL</a>
                        </li>
                        <li>
                            <a href="" className="ua">UA</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Menu;
