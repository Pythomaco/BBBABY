// router.js
import Vue from 'vue';
import Router from 'vue-router';
import home from 'WEB-BBBABY/PRIMER_VUE/home.html';
import quienes_somos from 'WEB-BBBABY/PRIMER_VUE/quienes_somos.html';
import boutique from 'WEB-BBBABY/PRIMER_VUE/boutique.html';
import visitanos from 'WEB-BBBABY/PRIMER_VUE/visitanos.html';
import navegacion from 'WEB-BBBABY/PRIMER_VUE/navegacion.html';
import footer from 'WEB-BBBABY/PRIMER_VUE/boutique.html';

const Routes = () => {
  return (
    <Router>
      <div dangerouslySetInnerHTML={{ __html: 'navegacion.html' }}/>
      <Switch>
        <Route exact path="/" redirect="/home" />
        <Route path="/home" component={home} />
        <Route path="/quienes_somos" component={quienes_somos} />
        <Route path="/boutique" component={boutique} />
        <Route path="/visitanos" component={visitanos} />
      </Switch>
      <div dangerouslySetInnerHTML={{ __html: 'footer.html' }} />
    </Router>
  );
};

export default Routes;

Vue.use(Router);

//export default new Router({
  //routes: [
//    {
 //     path: '/',
   //   redirect: '/home',
//    },
//    {
 //     path: '/home',
 //     component: home,
 //   },

 //   {
 //     path: '/quienes_somos',
 //     component: quienes_somos,
 //   },

 //   {
  //    path: '/boutique',
  //    component: boutique,
  //  },
   
  //  {
  //    path: '/nueva-pagina',
  //    component: NuevaPagina,
  //  },
    // Otras rutas del sitio
//  ],
//});