import Base from "../Base"

const Home = () => {
  return (
    <Base>
      <section>
        {/* sessão hero */}
        <div style={{ height: "100px", backgroundColor: "lightgray" }}>
          sessão hero
        </div>
      </section>
      <section>
        {/* sessão about */}
        <div style={{ height: "100px", backgroundColor: "lightblue" }}>
          sessão about
        </div>
      </section>
      <section>
        {/* sessão mission (Missão, Visão e Valores) */}
        <div style={{ height: "100px", backgroundColor: "lightgreen" }}>
          sessão mission (Missão, Visão e Valores)
        </div>
      </section>
      <section>
        {/* sessão donations (Doações Mobilizadas) */}
        <div style={{ height: "100px", backgroundColor: "lightcoral" }}>
          sessão donations (Doações Mobilizadas)
        </div>
      </section>
      <section>
        {/* sessão newsletter */}
        <div
          style={{ height: "100px", backgroundColor: "lightgoldenrodyellow" }}>
          sessão newsletter
        </div>
      </section>
    </Base>
  )
}

export default Home
