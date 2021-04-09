import styles from '../styles/components/InfoCard.module.css';

interface InfoCardProps {
    title: string;
    text: string;
}

function InfoCard(props: InfoCardProps) {
  const { title, text } = props;

  return (
    <div className={styles.container}>
      <img src="imgs/Icon.png" alt="livro e lápis" />
      <h2>{title}</h2>
      <p>
        {text}
      </p>
    </div>
  );
}

export default InfoCard;
