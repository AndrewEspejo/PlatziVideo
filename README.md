# Curso de React Router and Redux

## ¿Qué es React Router?

[React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) es una herramienta que nos permite configurar **rutas dinámicas**; para así decidir qué parte de nuestra aplicación se mostrara a los usuario.

### La utilidad de React Router

Nuestro trabajo desarrolladores Frontend es _guiar_ a los usuarios por medio de nuestras aplicaciones, para que gracias al contenido que creamos, podamos _transmitir_ esta información. **React Router nos ayuda a cumplir esta tarea.** Dándonos las herramientas necesarias para dividir nuestra aplicación, y navegar por ella.

### ¿Cómo instalarlo?

Para la instalación de React router nos dirigiremos a la terminal y ubicados en nuestro proyecto, ejecutaremos el siguiente comando

```text
npm install react-router-dom --save
```

## Crear nuestro archivo de rutas

Nos dirigimos a la carpeta source en nuestro directororio src y crearemos un archivo llamado y en esta crearemos una nueva carpeta **routes**, dentro de esta crearemos un archivo llamado `APP.js`   que se va a encargar de tener las rutas que vamos a trabajar. El contenido de App.js será el siguiente: 

```javascript
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "../containers/Home";

const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
    </BrowserRouter>
);

export default App;

```

Ahora, realizaremos un cambio en nuestro archivo **index.js** , dado que ahora **App.js** se ubica en una nueva carpeta.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";

//import HelloWorld from "./components/HelloWorld";

ReactDOM.render(<App />, document.getElementById("app"));

```

### Container:Login

Ya que tenemos la primer ruta con la cuál estamos trabajando con React Router **\(Home\)** , es necesario trabajar con múltiples rutas. Para esto vamos a trabajar con la ruta de Login. 

En la carpeta de nuestro de curso de **Frontend developer** de la Escuela de JS nos digiremos a la carpeta de inicio de sesión, de esta sacaremos el contenido que irá en nuestro container **Login.jsx**

```javascript
<section class="login">
    <section class="login__container">
        <h2>Inicia sesión</h2>
        <form class="login__container--form">
            <input class="input" type="text" placeholder="Correo" />
            <input
                class="input"
                type="password"
                placeholder="Contraseña"
            />
            <button class="button">Iniciar sesión</button>
            <div class="login__container--remember-me">
                <label>
                    <input
                        type="checkbox"
                        id="cbox1"
                        value="first_checkbox"
                    />Recuérdame
                </label>
                <a href="/">Olvidé mi contraseña</a>
            </div>
        </form>
        <section class="login__container--social-media">
            <div>
                <img src="../assets/google-icon.png" /> Inicia sesión
                con Google
            </div>
            <div>
                <img src="../assets/twitter-icon.png" /> Inicia sesión
                con Twitter
            </div>
        </section>
        <p class="login__container--register">
            No tienes ninguna cuenta <a href="">Regístrate</a>
        </p>
    </section>
</section>

```

Ahora, procedemos a importar los iconos e imágenes utilizados en este componente 

```javascript
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";
```

Ahora, necesitamos importar los estilos del componente:

```css
.login {
    background: rgb(2, 0, 36);
    background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(9, 9, 121, 1) 46%,
        rgba(0, 212, 255, 1) 100%
    );
    margin-top: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0px 30px;
    min-height: calc(
        100vh - 200px
    ); /* El ancho será igual al tamaño de todo el height menos 200px (100px del header + 100px del footer) */
}

.login__container {
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid white;
    border-radius: 40px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 700px;
    padding: 60px 68px 40px;
    width: 300px;
}

.login__container--form {
    display: flex;
    flex-direction: column;
}

.login__container--form label {
    font-size: 14px;
}

.login__container--remember-me {
    color: white;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.login__container--remember-me a {
    color: white;
    font-size: 14px;
    text-decoration: none;
}

.login__container--remember-me a:hover {
    text-decoration: underline;
}

.login__container--social-media > div {
    align-items: center;
    display: flex;
    font-size: 14px;
    margin-bottom: 10px;
}

.login__container--social-media > div > img {
    margin-right: 10px;
    width: 30px;
}

.login__container--register {
    font-size: 14px;
}

.login__container--register a {
    color: white;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
}

.login__container--register a:hover {
    text-decoration: underline;
}

```

Finalmente, debemos agregar su ruta a nuestro archivo **App.js** 

```css
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "../containers/Home";
import Login from "../containers/Login";

const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
    </BrowserRouter>
);

export default App;

```

Y como podemos observar, ya funciona la ruta hacia nuestro login:

![Login Platzi Video](.gitbook/assets/screenshot_2020-08-07-app%20%281%29.png)

### Container Register

En nuestro editor de código, nos dirigiremos a containers y crearemos un nuevo contenedor llamada **Register.jsx**, el contenido del mismo será el siguiente 

```jsx
import React from "react";
import "../assets/styles/components/Register.scss";

const Register = () => (
    <section className="register">
        <section className="register__container">
            <h2>Regístrate</h2>
            <form className="register__container--form">
                <input className="input" type="text" placeholder="Nombre" />
                <input className="input" type="text" placeholder="Correo" />
                <input
                    className="input"
                    type="password"
                    placeholder="Contraseña"
                />
                <button className="button">Registrarme</button>
            </form>
            <a href="">Iniciar sesión</a>
        </section>
    </section>
);

export default Register;

```

Ahora, procedemos a añadir los estilos para nuestro componente

```css
.register {
    background: rgb(2, 0, 36);
    background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(9, 9, 121, 1) 46%,
        rgba(0, 212, 255, 1) 100%
    );
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0px 30px;
    min-height: calc(
        100vh - 200px
    ); /* El ancho será igual al tamaño de todo el height menos 200px (100px del header + 100px del footer) */
}

.register__container {
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid white;
    border-radius: 40px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 600px;
    padding: 60px 68px 40px;
    width: 300px;
}

.register__container--form {
    display: flex;
    flex-direction: column;
}

.register__container a {
    color: white;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
}

.register__container a:hover {
    text-decoration: underline;
}

```

Finalmente, agregamos su ruta a nuestro **App.jsx** 

```javascript
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";

const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
    </BrowserRouter>
);

export default App;

```

Ahora vamos a utilizar un componente que va a manejar un switch, esta va a empujar la sección que necesitamos según el path que estamos llamando. Agregando un switch a nuestro App.js, quedaría de la siguiente forma:

```javascript
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
        </Switch>
    </BrowserRouter>
);

export default App;

```

