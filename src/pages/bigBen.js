import React, {createRef} from 'react'
import css from '../styles/bigBen.module.css'
import Menu from '../components/header'

const bigBen = (props) => {
        let hour = createRef()
        let minute = createRef()
        function deg2rad(d) {
        return (2 * d / 360) * Math.PI; }
        let int = setTimeout(() => {
        let M = new Date().getMinutes() * 6 - 90;
        let H = new Date().getHours() * 30 - 90;
        minute.current.style.transform = 'rotate(' + M + 'deg)';
        hour.current.style.transform = 'rotate(' + H + 'deg)';
        }, 60);

    function vec2ang(x, y) {
        let angleInRadians = Math.atan2(y, x);
        let angleInDegrees = (angleInRadians / Math.PI) * 180.0;
        return angleInDegrees;
    }

    return (<div className={css.bigBen}>
        <Menu />
    <div className={css.plane}><div className={css.plane1}></div>
    <div className={css.plane6}>Historically accurate btw</div>
    <div className={css.plane2}></div><div className={css.plane5}></div><div className={css.plane4}></div>
    <div className={css.plane3}></div><div className={css.planetale}></div><div className={css.prope}>
    <div className={css.prope1}></div></div></div>
    <div className={css.justacloud}><div className={css.justacloud1}></div>
    <div className={css.justacloud2}></div></div>
    <div className={css.justacloud23}><div className={css.justacloud1}>
        </div><div className={css.justacloud2}></div></div>
    <div className={css.justacloud24}><div className={css.justacloud1}></div>
    <div className={css.justacloud2}></div></div>
    <div className={css.tower}>
        <div className={css.rof8}>
            <div className={css.toproof8}>
                <div className={css.ovad}></div>
                <div className={css.ovad1}></div>
                <div className={css.toproof88}>
                    <div className={css.monkaS}>
                        <div className={css.monkaS8}></div>
                    </div>
                    <div className={css.monkaS1}>
                        <div className={css.monkaS8}></div>
                    </div>
                    <div className={css.monkaS2}>
                        <div className={css.monkaS8}></div>
                    </div>
                    <div className={css.monkaS3}>
                        <div className={css.monkaS8}></div>
                    </div>
                    <div className={css.monkaS4}>
                        <div className={css.monkaS8}></div>
                    </div>
                    <div className={css.monkaS5}>
                        <div className={css.monkaS8}></div>
                    </div>
                </div>
            </div>
        </div>
        <div className={css.wndwwra8}>
            <div className={css.wndwwra88}>
                <div className={css.wndw8}></div>
                <div className={css.wndw8}></div>
                <div className={css.wndw8}></div>
                <div className={css.wndw8}></div>
                <div className={css.wndw8}></div>
            </div>
        </div>
        <div className={css.wndwwra}>
            <div className={css.wndw}></div>
            <div className={css.wndw}></div>
            <div className={css.wndw}></div>
            <div className={css.wndw}></div>
            <div className={css.wndw}></div>
            <div className={css.wndw}></div>
            <div className={css.wndw}></div>
        </div>
        <div className={css.roof8}>
            <div className={css.monkaSS}>
                <div className={css.monkaSS8}></div>
            </div>
            <div className={css.monkaSS1}>
                <div className={css.monkaSS8}></div>
            </div>
            <div className={css.monkaSS2}>
                <div className={css.monkaSS8}></div>
            </div>
            <div className={css.monkaSS3}>
                <div className={css.monkaSS8}></div>
            </div>
            <div className={css.monkaSS4}>
                <div className={css.monkaSS8}></div>
            </div>
            <div className={css.monkaSS5}>
                <div className={css.monkaSS8}></div>
            </div>
            <div className={css.monkaSS6}>
                <div className={css.monkaSS8}></div>
            </div>
        </div>
        <div className={css.squere88}>
        </div>
        <div className={css.squere8}>
        </div>
        <div className={css.clock8}>
            <div className={css.lete1}>I</div>
            <div className={css.lete2}>II</div>
            <div className={css.lete3}>III</div>
            <div className={css.lete4}>IV</div>
            <div className={css.lete5}>V</div>
            <div className={css.lete6}>VI</div>
            <div className={css.lete7}>VII</div>
            <div className={css.lete8}>VIII</div>
            <div className={css.lete9}>IX</div>
            <div className={css.lete10}>X</div>
            <div className={css.lete11}>XI</div>
            <div className={css.lete12}>XII</div>
            <div ref={hour} id={css.hour}>
                <div className={css.arrow8}></div>
            </div>
            <div ref={minute} id={css.minute}></div>
        </div>
        <div className={css.something1}></div>
        <div className={css.something12}></div>
        <div className={css.something13}></div>
        <div className={css.something14}></div>
        <div className={css.something15}></div>
        <div className={css.something16}></div>
        <div className={css.something17}></div>
        <div className={css.something18}></div>
        <div className={css.something19}></div>
        <div className={css.something110}></div>
    </div>
    <div className={css.building8}>
        <div className={css.colon}>
            <div className={css.wn66}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn67}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn68}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn69}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.colon1}>
                <div className={css.conus}>
                    <div className={css.pimpi}>
                        <div className={css.pimpi1}></div>
                    </div>
                </div>
            </div>
            <div className={css.colon2}></div>
            <div className={css.colon3}></div>
        </div>



        <div className={css.colon77}>
            <div className={css.wn66}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn67}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn68}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn69}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.colon1}>
                <div className={css.conus}>
                    <div className={css.pimpi}>
                        <div className={css.pimpi1}></div>
                    </div>
                </div>
            </div>
            <div className={css.colon2}></div>
            <div className={css.colon3}></div>
        </div>

         <div className={css.colon78}>
            <div className={css.wn66}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn67}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn68}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn69}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.colon1}>
                <div className={css.conus}>
                    <div className={css.pimpi}>
                        <div className={css.pimpi1}></div>
                    </div>
                </div>
            </div>
            <div className={css.colon2}></div>
            <div className={css.colon3}></div>
        </div>

         <div className={css.colon79}>
            <div className={css.wn66}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn67}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn68}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn69}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.colon1}>
                <div className={css.conus}>
                    <div className={css.pimpi}>
                        <div className={css.pimpi1}></div>
                    </div>
                </div>
            </div>
            <div className={css.colon2}></div>
            <div className={css.colon3}></div>
        </div>

 <div className={css.colon710}>
            <div className={css.wn66}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn67}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn68}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn69}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.colon1}>
                <div className={css.conus}>
                    <div className={css.pimpi}>
                        <div className={css.pimpi1}></div>
                    </div>
                </div>
            </div>
            <div className={css.colon2}></div>
            <div className={css.colon3}></div>
        </div>
 <div className={css.colon711}>
            <div className={css.wn66}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn67}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn68}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn69}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.colon1}>
                <div className={css.conus}>
                    <div className={css.pimpi}>
                        <div className={css.pimpi1}></div>
                    </div>
                </div>
            </div>
            <div className={css.colon2}></div>
            <div className={css.colon3}></div>
        </div>


 <div className={css.colon712}>
            <div className={css.wn66}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn67}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn68}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn69}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.colon1}>
                <div className={css.conus}>
                    <div className={css.pimpi}>
                        <div className={css.pimpi1}></div>
                    </div>
                </div>
            </div>
            <div className={css.colon2}></div>
            <div className={css.colon3}></div>
        </div>
 <div className={css.colon713}>
            <div className={css.wn66}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn67}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn68}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn69}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.colon1}>
                <div className={css.conus}>
                    <div className={css.pimpi}>
                        <div className={css.pimpi1}></div>
                    </div>
                </div>
            </div>
            <div className={css.colon2}></div>
            <div className={css.colon3}></div>
        </div>
 <div className={css.colon714}>
            <div className={css.wn66}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn67}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn68}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn69}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.colon1}>
                <div className={css.conus}>
                    <div className={css.pimpi}>
                        <div className={css.pimpi1}></div>
                    </div>
                </div>
            </div>
            <div className={css.colon2}></div>
            <div className={css.colon3}></div>
        </div>
 <div className={css.colon715}>
            <div className={css.wn66}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn67}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn68}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn69}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.colon1}>
                <div className={css.conus}>
                    <div className={css.pimpi}>
                        <div className={css.pimpi1}></div>
                    </div>
                </div>
            </div>
            <div className={css.colon2}></div>
            <div className={css.colon3}></div>
        </div>
        <div className={css.tower81}>
            <div className={css.wn}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn1}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn2}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn3}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn4}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn5}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn6}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.wn7}>
                <div className={css.toto}>
                    <div className={css.toto1}></div>
                </div>
            </div>
            <div className={css.roof81}>
                <div className={css.tow81}>
                    <div className={css.pimp}>
                        <div className={css.pimp1}></div>
                    </div>
                </div>
                <div className={css.tow82}>
                    <div className={css.pimp}>
                        <div className={css.pimp1}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>)
}
export default bigBen;
