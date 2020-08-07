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

### Crear nuestro archivo de rutas

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



