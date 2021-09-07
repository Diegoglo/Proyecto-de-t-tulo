import { IonApp, IonIcon, IonLabel, IonMenuToggle, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { Route, Redirect } from 'react-router-dom'
import Home from './pages/Home/Home';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/react';
import { appsOutline, arrowBackOutline, notificationsOutline, personOutline, settingsOutline} from 'ionicons/icons';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side="end" contentId="Menu">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>User</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem routerLink="/home" routerDirection="none" lines="full">
                <IonIcon color ="medium" slot="start" icon={personOutline}/>
                <IonLabel>Mi Perfil</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerDirection="none" lines="full">
                <IonIcon color ="medium" slot="start" icon={appsOutline}/>
                <IonLabel>Dashboard</IonLabel>
              </IonItem>
            <IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerDirection="none" lines="full">
                <IonIcon color ="medium" slot="start" icon={notificationsOutline}/>
                <IonLabel>Notificaciones</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerDirection="none" lines="full">
                <IonIcon color ="medium" slot="start" icon={settingsOutline}/>
                <IonLabel>Configuración</IonLabel>
              </IonItem>
            </IonMenuToggle>
            </IonMenuToggle>
              <IonItem routerDirection="none" lines="full">
                <IonIcon color ="medium" slot="start" icon={arrowBackOutline}/>
                <IonLabel>Cerrar Sesión</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="Menu">
        <Route path="/home" component={Home} exact/>
        <Redirect to ="/home"/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
