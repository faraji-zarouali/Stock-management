/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../assets/styles/app.scss';
import '../assets/styles/styles.css';

// start the Stimulus application
import './bootstrap';

const $ = require('jquery');

global.$ = global.jQuery = $;

const routes = require('../public/js/fos_js_routes.json');
import Routing from '../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js';
const routing = Routing.setRoutingData(routes);
global.Routing = Routing
// import 'datatables.net-dt/css/jquery.dataTables.css';
// import 'datatables.net-responsive-dt/css/responsive.dataTables.css'; // Add this line for responsive features
import toastr from 'toastr';

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
    }

global.toastr = toastr
// import 'toastr/build/toastr.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// @import '~bootstrap/dist/css/bootstrap.min';
import '@fortawesome/fontawesome-free/css/all.min.css';


import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';


