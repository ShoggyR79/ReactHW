import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import BaiTapDatXeHook from './Pages/BaiTapDatXeHook/BaiTapDatXeHook';
import Home from './Pages/Home/Home';
import UseEffectDemo from './Pages/Hook/UseEffectDemo/UseEffectDemo';
import UseStateDemo from './Pages/Hook/UseStateDemo/UseStateDemo';
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>

          <Route path="/home" exact component={Home} />
          <Route path="/login" exact render={(propsRoute) => {
            return (
              <div className="container">
                <h1>Login</h1>
                <Login {...propsRoute} />

              </div>
            )
          }} />

          <Route path="/about" exact component={About} />
          <Route path="/register" exact component={Register} />
          <Route path="/demousestate" exact component={UseStateDemo}/>
          <Route path="/demouseeffect" exact component={UseEffectDemo}/>
          <Route path="/chonxereacthook" exact component={BaiTapDatXeHook}/>


          <Route path="/" exact component={Home} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
