import styles from "../../styles/txen.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { txens: data },
  };
};

const Txens = ({ txens }) => {
  return (
    <div>
      <h1 className={styles.title}>All Txens</h1>
      {txens.map((txen) => (
        <Link href={"/txen/" + txen.id} key={txen.id}>
          <div className={styles.single}>
            <h2>{txen.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Txens;
