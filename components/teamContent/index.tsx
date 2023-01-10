import styles from "./teamContent.module.css";
import { motion as m } from "framer-motion";

export default function TeamContent({ props: data }: any) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.5, staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: "100%" },
    show: {
      y: "0%",
      transition: { duration: 0.2 },
    },
  };
  return (
    <>
      {data.map((val: any, i: any) => {
        let lastWords = val.teamDescription.slice(-27);
        return (
          <>
            <m.div
              className={styles.text_container}
              key={i}
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <m.h1
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
              >
                {val.teamTitle}
              </m.h1>
              <m.p
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
              >
                {val.teamDescription.replace(`${lastWords}`, "")}
                <span>{lastWords}</span>
              </m.p>
            </m.div>
            <m.div
              className={styles.card_container}
              variants={container}
              initial="hidden"
              animate="show"
            >
              {val.team.map((post: any, i: any) => {
                return (
                  <m.div
                    key={i}
                    variants={item}
                    whileHover={{
                      scale: 1.2,
                      translateY: "-40px",
                      transition: { duration: 0.1 },
                    }}
                    className={styles.card}
                    style={{
                      borderRadius: "1rem",
                      boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                    }}
                  >
                    <m.h1 layout="position">{post.name}</m.h1>
                    <m.img
                      layout="position"
                      src={post.image.url}
                      alt={post.image.name}
                    />
                    <m.div className={styles.text}>
                      <p>{post.role}</p>
                    </m.div>
                  </m.div>
                );
              })}
            </m.div>
          </>
        );
      })}
    </>
  );
}
