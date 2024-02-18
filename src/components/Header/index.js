import styles from "./index.module.sass";
import { useContext, useEffect } from "react";
import { ContextToggle } from "../../Context";
import Typed from "typed.js";

export default function Header() {
  const { toggle } = useContext(ContextToggle);
  useEffect(() => {
    const typingEffect = new Typed(".multid", {
      strings: ["Tursunov", "Diyorbek", "Frontend developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
    });

    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: toggle ? "#212121" : "#fff",
        color: toggle ? "#fff" : "#212121",
        transition: "all 1s",
      }}
    >
      <div className={styles.header}>
        <div className={styles.header__left}>
          <div className={styles.header__leftGif}>
            <span>Hello</span>
            <img
              src="https://oybekdev.uz/static/media/Hello.d93720933c608f6178fb.gif"
              alt="gif"
            />
            ,
          </div>
          <h1>
            {"I'm"} <span className="multid"></span>
          </h1>
          <p>
            I enjoy working and managing teams, quickly acquiring knowledge and
            sharing it with others, solving complex problems, and writing new
            libraries.
          </p>
          <br />
          <p>
            I have 1 month of experience working in the UTS team, my goal is to
            gain experience and contribute to your company
          </p>
        </div>
        <div className={styles.header__right}>
          <div className="rounding-sec">
            <div className="big-circle">
              <a
                href="https://github.com/Tursunov-Diyorbek"
                target="_blank"
                className="icon-block"
              >
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIHDQ_CU0W38ktREqnPwdVlGCdA_e4xbaDK9NrjFOpD2AqdcajDV3c9_R3vp034nrC9eyvMThwY8ifNpmH3_8GMg_SzAsLKcWQeSskaVl8HjVtLWilhcBNwfep0yRxq-Z_klBXoYTVX0BaE39VwJ2a-drZup5i8owkdaZF0-KhCaodrtN2Rii9HPZrdlk/s1600/github.png"
                  alt="icon"
                />
              </a>

              <a
                href="https://www.instagram.com/my.lnterest/"
                target="_blank"
                className="icon-block"
              >
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoPvxJtYJq2-7BDn6LGcQ6QsT3Bo0vxkKu8WAOZnqsHIiTtGJqsHHHWlqqYN4iQFlVaqTaq7AFkWbY5Wrqxvk9Se1Wc_rjA7UKZoXHoxqSWXyaTg9aL9RC37H78NTnT4TwePdwqEYwVw8VxtjPoy6eG-f7RTJhX0JCa0lPmpfaz69hJ1ZHI9seBrUuvf4/s64/instagram.png"
                  alt="icon"
                />
              </a>

              <a
                href="https://t.me/Front_End_DeveIoper"
                target="_blank"
                className="icon-block"
              >
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-WWnXxgKNxwqarx8Vr_xpaCcwOQbv7bpFxWXy1o7DCq7jZNiT3CFdAo52AvJol-C-3InAzj6B4isdJVwVCAlUY9jxqgM43wDXrmfsqL4PGr-fsBG0YjcOzwAHFscoDXg3EGlhupxjKRwrMe7Y2bX9VzTc-RY95A03bV1avKnjwJZjh0HKbGZDEa73mPU/s1600/telegram.png"
                  alt="icon"
                />
              </a>

              <a
                href="https://www.youtube.com/channel/UC2MuOznCikXXV60cvu5nJsQ"
                target="_blank"
                className="icon-block"
              >
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiejpFbnjtnjhErKo-66_ATecAMmYtSrLzQYdIRMRAxLHtgMUZKnA6jGJQsTMnrniZmMhTZydWkR-l2cpZcGEBGlI4Ptl9ogR-NSPF2wNO5FQdMlL_xaGHQfPnSRIh0Lg4JX0PJLjg9p-tAL9Y8qFbbuGIW3YoolXiMja2qujyDjcFPYGzsPu-RyHle2Jc/s1600/youtube.png"
                  alt="icon"
                />
              </a>
            </div>
            <div className="images">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwX1hNs1uTxT4esqcM-g4cIPSSqGfCotsrSqPkI8aQMNoJMxECIOqHeVAPlGsSD6uEn7K5Fv_9m-vVdt4kaig7dInalmeBEnMUMbcFloJX3-y_lh6J8zz-PkIENB_1k8iAx5YEdP4FlBD0_U_JWbZC9TkP70Yd71hxULL5SbwvsZIen4_dtOOltgBpcGA/s1600/img_1.png"
                alt="photo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
