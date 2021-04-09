import styles from '../styles/components/AboutPage.module.css';
import InfoCard from './InfoCard';

function AboutPage() {
  return (
    <div className={styles.container}>
      <img src="imgs/unb_alunos.jpg" alt="campus unb" className={styles.unbImg} />
      <div className={styles.infoContent}>
        <div className={styles.headerInfo}>
          <header>Feito por quem é da Unb para a UnB!</header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
            Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
        </div>
        <div className={styles.cardsContainer}>
          <InfoCard
            title="Veja experiências de outros discentes."
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. "
          />
          <InfoCard
            title="Docentes, contribuam também!"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. "
          />
          <InfoCard
            title="Compartilhe sua opinião"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. "
          />
          <InfoCard
            title="Seja respeitoso"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. "
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
