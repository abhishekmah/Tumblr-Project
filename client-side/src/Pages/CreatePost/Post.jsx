import React from "react";
import styles from "./Post.module.css";
import { IoText } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { ImVideoCamera } from "react-icons/im";
import { HiLink } from "react-icons/hi";
import { IoChatboxEllipsesSharp } from "react-icons/io5";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextPost from "./TextPost";
import PhotoPost from "./PhotoPost";
import { motion } from "framer-motion";

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
  hidden: { y: -300, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({ Prop, Prop1 }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div onClick={handleOpen}>
        <Prop className={styles.hover} />
      </div>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: "100%",
            height: "100vh",
            backgroundColor: "transparent",
            overflow: "scroll",
          }}
        >
          <Prop1 handleClose={handleClose} />
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function Post({ handleClose }) {
  return (
    <div
      className={styles.main}
      onClick={() => {
        handleClose();
      }}
    >
      <motion.div
        className={styles.icons}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
        variants={item}
          style={{ backgroundColor: "white" }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ChildModal Prop={IoText} Prop1={TextPost} />
          {/* <IoText className={styles.hover} /> */}
          <br />
          <br />
          <p>Text</p>
        </motion.div>
        <motion.div
        variants={item}
          style={{ backgroundColor: "#f73c1b" }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ChildModal Prop={FaCameraRetro} Prop1={PhotoPost} />
          {/* <FaCameraRetro className={styles.hover} /> */}
          <br />
          <br />
          <p>Photo</p>
        </motion.div>
        <motion.div
        variants={item}
          style={{ backgroundColor: "#ff8800" }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ImQuotesLeft className={styles.hover} />
          <br />
          <br />
          <p>Quote</p>
        </motion.div>
        <motion.div
        variants={item}
          style={{ backgroundColor: "#51cc18" }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <HiLink className={styles.hover} />
          <br />
          <br />
          <p>Link</p>
        </motion.div>
        <motion.div
        variants={item}
          style={{ backgroundColor: "#29b9f2" }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <IoChatboxEllipsesSharp className={styles.hover} />
          <br />
          <br />
          <p>Chat</p>
        </motion.div>
        <motion.div
        variants={item}
          style={{ backgroundColor: "#2152d9" }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <FaHeadphonesAlt className={styles.hover} />
          <br />
          <br />
          <p>Audio</p>
        </motion.div>
        <motion.div
        variants={item}
          style={{ backgroundColor: "#f558c1" }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ImVideoCamera className={styles.hover} />
          <br />
          <br />
          <p>Video</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export { Post };
