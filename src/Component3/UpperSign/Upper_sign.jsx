import React from 'react'
import Sign from '../Sign/Sign'
import styles from "./uppersign.module.css"

export default function Upper_sign() {
    return (
        <div className={styles.upper}>
            <svg width="274" height="56" viewBox="0 0 400 81.897" class="N_jdv" fill="#ffffff"><path d="M17.241 1.571c0 6.328-6.682 15.885-13.371 19.123L0 22.568v13.639h10.177l.321 15.302c.528 25.205 4.083 29.417 25.493 30.206l10.561.39v-17.45h-5.643c-9.171 0-9.875-1.163-9.875-16.34V36.207H45.69V19.828H31.034V0h-6.896c-6.097 0-6.897.182-6.897 1.571m219.828 5.326v6.896h8.621v68.104h18.965v-2.156c0-2.617-.019-2.616 3.996-.248 5.368 3.167 17.807 3.327 23.979.307 10.27-5.025 13.836-12.594 13.836-29.369 0-21.321-7.683-30.677-25.1-30.566-5.257.034-8.013.638-13.478 2.956-1.394.591-1.509-.25-1.509-11.091V0h-29.31v6.897m71.552 0v6.896h8.62v54.31h-6.896v13.794h34.483V68.103h-7.759V0h-28.448v6.897M53.606 42.457c.348 25.726 1.055 28.895 7.717 34.597 7.88 6.745 25.797 6.506 33.194-.443l2.035-1.912v7.198h23.276V68.103h-6.035V19.828H86.207v14.655h7.759v11.292c0 15.732-2.335 19.742-11.493 19.742-7.195 0-7.473-.932-7.473-25.116V19.828H53.3l.306 22.629M125 27.155v7.328h8.621v33.62h-6.897v13.794h33.621V68.103h-6.897V56.869c0-15.754 1.962-19.662 10.272-20.46 7.808-.751 8.694 1.07 8.694 17.862v13.832h-6.897v13.794H200V68.103h-6.897V55.992c0-9.14.321-12.733 1.308-14.641 2.687-5.195 10.458-6.804 14.808-3.066l2.419 2.079.275 13.87.275 13.869h-7.016v13.794h33.621V68.103h-6.896V53.547c0-17.777-1.01-21.846-6.873-27.709-8.058-8.057-24.92-8.285-33.229-.448l-2.956 2.787-1.963-2.133c-7.299-7.936-23.087-8.407-33.49-.999l-2.524 1.797v-7.014H125v7.327m225 0v7.328h7.759v33.62h-6.897v13.794h33.621V68.103h-7.13l.412-10.678c.613-15.922 3.54-19.494 15.972-19.494H400V19.828h-6.062c-6.77 0-11.229 1.486-14.843 4.948l-2.371 2.271v-7.219H350v7.327m-68.546 10.059c6.507 5.119 6.487 23.55-.031 27.821-8.395 5.5-16.643-2.8-15.712-15.812.828-11.573 8.681-17.564 15.743-12.009"></path></svg>
            

            <h3 className={styles.txt}>Make stuff, look at stuff, talk about stuff, find your people.</h3>

            <Sign/>
        </div>
    )
}
