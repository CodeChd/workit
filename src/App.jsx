import './App.css'

function App() {

  return (
    <div className="App">

      <main className='nft-content'>

        <article className='nft-card'>

          <img src="/images/image-equilibrium.jpg" alt="nft-equilibrium" />

          <div className="nft-info">

            <p>Equilibrium #3429</p>
            <p>Our Equilibrium collection promotes balance and calm</p>

            <div className="nft-icons">
              <img className="icon-mod" src="/images/icon-clock.svg" alt="" /> <p>0.041 ETH</p>
              <img className="icon-mod" src="/images/icon-ethereum.svg" alt="" /> <p>3 days left</p>
            </div>

          </div>

          <div className="nft-profile">

            <img src="/images/image-avatar.png" alt="avatar" />
            <p>Creation of Jules Wyvern</p>
          </div>

        </article>

      </main>

    </div>
  )
}

export default App