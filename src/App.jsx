import './App.css'
import BareInput from './components/BareInput'
import BareButton from './components/BareButton'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Layout>
        <h1>Hello</h1>
        <BareInput
          type='text '
          className='input-control'
          value='Phan Minh Son'
          autoFocus
          onChange={() => { }}
        />
        <BareButton  />
      </Layout>
    </>
  )
}

export default App
