import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="max image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, i'm MAX</h1>
      <p>hello~~~</p>
    </section>
  );
}

export default Hero;
