import s from "../../styles/modules/pokePages/pokeStats.module.scss";

export default function PokeStats({details, colors}) {
  return (
    <>
      <h5 className={s.headline} style={{ color: colors[details.types[0]] }}>
        Base Stats
      </h5>
      <div>
        {details.statsName.map((name, index) => (
          <div className={s.box} key={name}>
            <b
              className={s.name}
              style={{ color: colors[details.types[0]] }}
            >
              {name}
            </b>
            <div className={s.info}>
              <div className={s.number}>{details.stats[index]}</div>
              <div
                className={s.bar}
                style={{
                  backgroundColor: `${colors[details.types[0]] + "20"}`,
                }}
              >
                <div
                  className={s.progress}
                  style={{
                    width: `${
                      details.stats[index] / 2 > 100
                        ? 100
                        : details.stats[index] / 2
                    }%`,
                    backgroundColor: colors[details.types[0]],
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
