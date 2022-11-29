import s from "./Description.module.css";

const Description = () => {
  return (
    <div className={s.desc}>
      <div className={s.desc_logo}>
        <img src="https://st4.depositphotos.com/7178380/29257/v/1600/depositphotos_292570898-stock-illustration-colibri-bird-logo-vector-illustration.jpg"></img>
      </div>
      <div className={s.desc_data}>
        <div className={s.desc_name}>
            <p>Podobed Anton</p>
        </div>
        <div className={s.desc_info}>
            <p>Data of Birth: 21 september</p>
            <p>City: Mogilev</p>
            <p>Education: MUFT`19</p>
            <p>Web Site: Serious_Sam</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
