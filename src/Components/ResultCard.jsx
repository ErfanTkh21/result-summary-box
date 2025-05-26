import "./ResultCard.css";

const ResultCard = () => {
  return (
    <main className="card">
      <section className="result">
        <h2>Your Result</h2>
        <div className="score-circle">
          <p className="final-score">76</p>
          <p className="of">of 100</p>
        </div>
        <h3>Great</h3>
        <p className="description">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </section>
      <section className="summary">
        <h2>Summary</h2>
        <ul className="categories">
          <li className="item reaction">
            <span>
              <img src={`icons/icon-reaction.svg`} alt="Reaction Icon" />
              Reaction
            </span>
            <span className="scores">
              80 <span className="total">/ 100</span>
            </span>
          </li>
          <li className="item memory">
            <span>
              <img src={`icons/icon-memory.svg`} alt="Memory Icon" />
              Memory
            </span>
            <span className="scores">
              92 <span className="total">/ 100</span>
            </span>
          </li>
          <li className="item verbal">
            <span>
              <img src={`icons/icon-verbal.svg`} alt="Verbal Icon" />
              Verbal
            </span>
            <span className="scores">
              61 <span className="total">/ 100</span>
            </span>
          </li>
          <li className="item visual">
            <span>
              <img src={`icons/icon-visual.svg`} alt="Visual Icon" />
              Visual
            </span>
            <span className="scores">
              73 <span className="total">/ 100</span>
            </span>
          </li>
        </ul>
        <button className="continue">Continue</button>
      </section>
    </main>
  );
};

export default ResultCard;
