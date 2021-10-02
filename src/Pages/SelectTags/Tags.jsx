import React, { useState } from 'react';
import styles from './Tags.module.css';
import { motion } from 'framer-motion';

const color = [
    '#66a8cf',
    '#af8cc6',
    '#f1a24f',
    '#6ac296',
    '#af8cc6',
    '#66a8cf',
    '#af8cc6',
    '#f1a24f',
    '#6ac296',
    '#af8cc6',
    '#66a8cf',
    '#af8cc6',
    '#f1a24f',
    '#6ac296',
    '#af8cc6',
    '#66a8cf',
    '#af8cc6',
    '#f1a24f',
    '#6ac296',
    '#af8cc6',
];
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { y: -30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const Tags = () => {
    const [selectedTag, setSelectedTag] = useState(['', '', '', '', '']);

    const handleSelect = (e) => {
        if (selectedTag[4] != '') {
            setSelectedTag([...selectedTag, e]);
            return;
        }
        var arr = [...selectedTag];

        const res = selectedTag.map((el, i) => {
            if (el === '') {
                arr[i] = e;
                setSelectedTag([...arr]);
                e = '';
            }
        });
    };

    return (
        <div className={styles.main}>
            <div className={styles.navbar}>
                <div className={styles.left}>
                    {selectedTag.map((el, i) => {
                        return (
                            <div
                                style={{
                                    backgroundColor: `${
                                        el === '' ? 'none' : color[i]
                                    }`,
                                    border: `${
                                        el === ''
                                            ? 'dashed 0.5px rgb(158, 157, 157)'
                                            : 'none'
                                    }`,
                                }}
                            >
                                {el}
                            </div>
                        );
                    })}
                </div>
                <div className={styles.right}>
                    <div>Skip</div>
                    <div>Select</div>
                </div>
            </div>
            <hr />
            <motion.div
                className={styles.boxes}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={item} className={styles.left1}>
                    <div>
                        <h1>What're you into?</h1>
                        <p>
                            Tell us what you like and we'll get you the good
                            stuff.
                        </p>
                    </div>
                </motion.div>
                <div className={styles.right1}>
                    <motion.div
                        variants={item}
                        onClick={() => handleSelect('Actors')}
                    >
                        <img
                            src="https://media0.giphy.com/media/ilqOZZnaAoC1zmAKha/giphy.gif?cid=ecf05e47cdmhesjwusrz1gw77mjhmh3ggrutoemesl83pkou&rid=giphy.gif&ct=g"
                            alt=""
                        />
                        <p>Actors</p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        onClick={() => handleSelect('Beauty')}
                    >
                        <img
                            src="https://post.healthline.com/wp-content/uploads/2020/08/12239-BEAUTY_The_No_BS_Guide_to_Vitamin_C-thumbnail-732x549-1-732x549.jpg"
                            alt=""
                        />
                        <p>Beauty</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://suej1u323x-flywheel.netdna-ssl.com/wp-content/uploads/2020/03/Quote-1.jpg"
                            alt=""
                        />
                        <p>Quotes</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://media4.giphy.com/media/l2JhGk8rR9WFLEDQY/giphy.gif?cid=ecf05e47803gief53q0waac1ih7i00jt7nzmcubzxtbg5sm2&rid=giphy.gif&ct=g"
                            alt=""
                        />
                        <p>Music</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://media4.giphy.com/media/QCE3HQTLUzWt6q0R6b/giphy.gif?cid=ecf05e47kqypq7tgrftnp2rjg0353bnmhxe9nyxge9r7l6gn&rid=giphy.gif&ct=g"
                            alt=""
                        />
                        <p>Gaming</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://media4.giphy.com/media/N6OxVHWh414Zi/giphy.gif?cid=ecf05e47as2cphguqib22ltfyw7wfbgpizeml0b6cvms6oqn&rid=giphy.gif&ct=g"
                            alt=""
                        />
                        <p>Movies</p>
                    </motion.div>

                    <motion.div variants={item}>
                        <img
                            src="https://images-na.ssl-images-amazon.com/images/I/81KgXSGE8BL.png"
                            alt=""
                        />
                        <p>Anime</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://media2.giphy.com/media/xT9DPzhNGA8MKjxwFG/giphy.gif?cid=ecf05e473vfxnumwioghylcn68hndy5a9vuqg0qnlyltljw6&rid=giphy.gif&ct=g"
                            alt=""
                        />
                        <p>Funny</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://thebigmansworld.com/wp-content/uploads/2020/03/2-ingredient-pizza-dough-13.jpg"
                            alt=""
                        />
                        <p>Food</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://media1.giphy.com/media/3oKIPavRPgJYaNI97W/giphy.gif?cid=ecf05e47a5m4ndd38amigwutm2f7qidkw2zvu05kfs3bxpgz&rid=giphy.gif&ct=g"
                            alt=""
                        />
                        <p>Fitness</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://www.popsci.com/uploads/2019/01/07/PMOROYQ3XE2JKZZAT2BQ6RWHNY.jpg"
                            alt=""
                        />
                        <p>Web Series</p>
                    </motion.div>

                    <motion.div variants={item}>
                        <img
                            src="https://media0.giphy.com/media/xUNemVaUZFSgHxvQXK/giphy.gif?cid=ecf05e47zgyp3v4ywlw8qkfopdwnfes7gtnbov30vlp9uvdg&rid=giphy.gif&ct=g"
                            alt=""
                        />
                        <p>News</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://media1.giphy.com/media/cmOG2ZP7YeSPNgqVJX/giphy.gif?cid=ecf05e47zz4scrybnj1bxfiy3ml2i3sxqwunivhpivrc4hj0&rid=giphy.gif&ct=g"
                            alt=""
                        />
                        <p>Design</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://www.automobilemag.com/uploads/sites/11/2018/07/2019-New-and-Future-Cars-13.jpg?fit=around%7C480:270"
                            alt=""
                        />
                        <p>Autos</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://images-na.ssl-images-amazon.com/images/I/51QWNA439RL._SX312_BO1,204,203,200_.jpg"
                            alt=""
                        />
                        <p>Books</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://cdn.shopify.com/s/files/1/0735/9163/collections/PET_CARE_ESSENTIALS.png?v=1625538475"
                            alt=""
                        />
                        <p>Pets</p>
                    </motion.div>

                    <motion.div variants={item}>
                        <img
                            src="https://m.media-amazon.com/images/I/91AaEkiND8L._AC_SL1500_.jpg"
                            alt=""
                        />
                        <p>Handmade</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://media3.giphy.com/media/PFjus8wMwErfO/giphy.gif?cid=ecf05e4703byrcuxs0qxgpfvl97y81cjl9ygeuk3asqxjxlo&rid=giphy.gif&ct=g"
                            alt=""
                        />
                        <p>Science</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-07/28/full/1595904030-4016.jpg"
                            alt=""
                        />
                        <p>Nature</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg"
                            alt=""
                        />
                        <p>Education</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://cdn.writermag.com/2020/09/Writers-Block_web.jpg"
                            alt=""
                        />
                        <p>Writers</p>
                    </motion.div>

                    <motion.div variants={item}>
                        <img
                            src="https://dairydevelopment.kerala.gov.in/images/images/his.jpg"
                            alt=""
                        />
                        <p>History</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://assets.vogue.com/photos/5d86052101d1b4000957b4c5/2:3/w_480%2Cc_limit/00001-Bally-SS20-Menswear.jpg"
                            alt=""
                        />
                        <p>Menswear</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZn3o6FK9Y_rCli4ay8twSV6JJGO_P7_ouQA2ZcSQSvZNRqlCwy7OzdA8UW2fdWS-nh4k&usqp=CAU"
                            alt=""
                        />
                        <p>Culture</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://media.istockphoto.com/photos/space-shuttle-in-the-rays-of-sun-picture-id1131418344?k=20&m=1131418344&s=170667a&w=0&h=9VyAXrIdvgJi17UEB_gyjuTmKhFXZ1fjC5yeYrsrEw0="
                            alt=""
                        />
                        <p>Technology</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://www.marketing91.com/wp-content/uploads/2020/03/Managing-organisational-politics.jpg"
                            alt=""
                        />
                        <p>Politics</p>
                    </motion.div>

                    <motion.div variants={item}>
                        <img
                            src="https://media.nature.com/lw800/magazine-assets/d41586-021-00814-5/d41586-021-00814-5_19015374.jpg"
                            alt=""
                        />
                        <p>Sports</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://media4.giphy.com/media/li0a9ltRF07Sw/giphy.gif?cid=ecf05e47xwa3n6zyzk9luo6rxdt385xhb2an1xrmnutyj9he&rid=giphy.gif&ct=g"
                            alt=""
                        />
                        <p>Fashion</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg"
                            alt=""
                        />
                        <p>Developers</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://miro.medium.com/max/1021/0*O-mKgxVEBOmX06R7.jpg"
                            alt=""
                        />
                        <p>Illustration</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://images-na.ssl-images-amazon.com/images/I/71kkMXAcLCL.png"
                            alt=""
                        />
                        <p>Cute</p>
                    </motion.div>

                    <motion.div variants={item}>
                        <img
                            src="https://whizardapi.com/wp-content/uploads/2021/06/travel.gif"
                            alt=""
                        />
                        <p>Travel</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://i.pinimg.com/originals/ee/7f/86/ee7f8649af3509ea64da7d2e5417866e.jpg"
                            alt=""
                        />
                        <p>Architecture</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://i.pinimg.com/originals/fe/41/5f/fe415f65c3641c1a67b000aa7a4ddb36.jpg"
                            alt=""
                        />
                        <p>Art</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Fatherandchild.png/220px-Fatherandchild.png"
                            alt=""
                        />
                        <p>Parenting</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://media2.giphy.com/media/ZYK8aHHAn5nYBhSxvV/giphy.gif?cid=ecf05e470zbjjga9sn0znh8g3jvb6g50ownm76p5cjnp0dc6&rid=giphy.gif&ct=g"
                            alt=""
                        />
                        <p>Musicians</p>
                    </motion.div>

                    <motion.div variants={item}>
                        <img
                            src="https://i1.wp.com/www.homeandlifestyle.es/wp-content/uploads/2020/03/zocopackagehires-4759_900x.jpg?fit=900%2C900&ssl=1"
                            alt=""
                        />
                        <p>Lifestyles</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/5475f6eae4b0821160f6ac3e/1629110972324-TLY7ALKBV9UDRE5TOOZJ/Easy+Hacks+to+Increase+Student+Engagement+in+Class.jpg"
                            alt=""
                        />
                        <p>Student</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://media2.giphy.com/media/3oFzmqENRBkRTRfLcA/giphy.gif?cid=ecf05e47lwiw758mi5nfwy4pfpue395ytlrtlkbh6yhwayu4&rid=giphy.gif&ct=g"
                            alt=""
                        />
                        <p>Business</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://images-na.ssl-images-amazon.com/images/I/71xnsNoH5rL.jpg"
                            alt=""
                        />
                        <p>Comics</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://media3.giphy.com/media/14rEabvlsS4lOg/giphy.gif?cid=ecf05e47smjy4b5m3ebrqpws4fjylo0dnebgflkyss8fiepg&rid=giphy.gif&ct=g"
                            alt=""
                        />
                        <p>Celebrities</p>
                    </motion.div>

                    <motion.div variants={item}>
                        <img
                            src="https://content.jdmagicbox.com/comp/def_content/museums/7effij2pmq-museums-6-0yd38.jpg?clr="
                            alt=""
                        />
                        <p>Meuseums</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://media-exp1.licdn.com/dms/image/C4E0BAQEvUPj598NQQQ/company-logo_200_200/0/1539886138555?e=2159024400&v=beta&t=ejmC0FZ32xYnVf9XX0mwo_hKURX4_KhpUBO_5fTr0D0"
                            alt=""
                        />
                        <p>Nonprofits</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://media2.giphy.com/media/3o7WTx7X5YfBT4lq8M/giphy.gif?cid=ecf05e47bkyyh6euh3vnc5is0nx3swhodnhteo54fp3jbnfz&rid=giphy.gif&ct=g"
                            alt=""
                        />
                        <p>Television</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://assets.vogue.in/photos/5ce3edd24a30b34257129af7/master/pass/How-to-be-a-curator-featured.jpg"
                            alt=""
                        />
                        <p>Curators</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <img
                            src="https://media4.giphy.com/media/j5E9vHJSjBcDTXe4E4/giphy.gif?cid=ecf05e47jde2xchpbus53cmwlxkamotmo9a1dlhalb1ycnlz&rid=giphy.gif&ct=g"
                            alt=""
                        />
                        <p>Photography</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Tags;
